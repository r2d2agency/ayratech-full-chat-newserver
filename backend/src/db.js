import pg from 'pg';
import dotenv from 'dotenv';
import { logError, logInfo, logWarn } from './logger.js';

dotenv.config();

const { Pool } = pg;

const LEGACY_DATABASE_HOST = 'ayratech_ayrafull-bd';
const CURRENT_DATABASE_HOST = 'desenvolvimento-r2d2_ayratech-bd-new';

function normalizeDatabaseUrl(url) {
  if (!url) return url;

  // Handle both @host: and just host in connection string
  if (url.includes(`@${LEGACY_DATABASE_HOST}:`) || url.includes(`@${LEGACY_DATABASE_HOST}/`)) {
    logInfo('db.legacy_host_replaced', {
      legacy_host: LEGACY_DATABASE_HOST,
      current_host: CURRENT_DATABASE_HOST,
    });
    return url
      .replace(`@${LEGACY_DATABASE_HOST}:`, `@${CURRENT_DATABASE_HOST}:`)
      .replace(`@${LEGACY_DATABASE_HOST}/`, `@${CURRENT_DATABASE_HOST}/`);
  }

  return url;
}

// Parse DATABASE_URL manually to handle special characters in password
function parseConnectionString(url) {
  if (!url) return {};

  // Format: postgres://user:password@host:port/database?options
  const regex = /^postgres(?:ql)?:\/\/([^:]+):(.+)@([^:]+):(\d+)\/([^?]+)(?:\?(.*))?$/;
  const match = url.match(regex);

  if (match) {
    const config = {
      user: match[1],
      password: match[2],
      host: match[3],
      port: parseInt(match[4], 10),
      database: match[5],
    };

    // Parse query options like sslmode
    if (match[6]) {
      const params = new URLSearchParams(match[6]);
      if (params.get('sslmode') === 'disable') {
        config.ssl = false;
      } else if (params.get('sslmode')) {
        config.ssl = { rejectUnauthorized: false };
      }
    }

    return config;
  }

  // Fallback to connectionString if parsing fails
  return { connectionString: url };
}

function summarizeSql(sql) {
  return String(sql || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 500);
}

function paramTypes(params) {
  if (!Array.isArray(params)) return [];
  return params.map((v) => {
    if (v === null) return 'null';
    if (v === undefined) return 'undefined';
    if (v instanceof Date) return 'Date';
    if (Buffer.isBuffer(v)) return 'Buffer';
    if (Array.isArray(v)) return 'Array';
    return typeof v;
  });
}

const databaseUrl = normalizeDatabaseUrl(process.env.DATABASE_URL);

if (!databaseUrl) {
  throw new Error('DATABASE_URL is required');
}

const dbConfig = parseConnectionString(databaseUrl);

logInfo('db.config_loaded', {
  host: dbConfig.host || 'connection-string',
  port: dbConfig.port || 'default',
  database: dbConfig.database || 'from-connection-string',
});

export const pool = new Pool(dbConfig);

export async function query(text, params) {
  const startedAt = Date.now();
  try {
    const res = await pool.query(text, params);
    const durationMs = Date.now() - startedAt;

    if (durationMs > 800) {
      logInfo('db.query_slow', {
        duration_ms: durationMs,
        sql: summarizeSql(text),
      });
    }

    return res;
  } catch (error) {
    const durationMs = Date.now() - startedAt;
    // Códigos "benignos" de schema idempotente: objeto já existe / já foi criado.
    // Eles são esperados quando duas requisições rodam os ensure* em paralelo.
    const BENIGN_SCHEMA_CODES = new Set([
      '42P07', // duplicate_table / duplicate index
      '42P06', // duplicate_schema
      '42701', // duplicate_column
      '42710', // duplicate_object (constraint, tipo)
      '42P16', // invalid_table_definition (ex.: PK já existe)
      '23505', // unique_violation em seed idempotente
    ]);
    const meta = {
      duration_ms: durationMs,
      sql: summarizeSql(text),
      param_count: Array.isArray(params) ? params.length : 0,
      param_types: paramTypes(params),
      code: error?.code,
    };
    if (BENIGN_SCHEMA_CODES.has(error?.code)) {
      logWarn('db.schema_object_exists', meta);
    } else {
      logError('db.query_failed', error, meta);
    }
    throw error;
  }
}


