import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly load .env from the backend root
dotenv.config({ path: path.join(__dirname, '../.env') });

const { Pool } = pg;

// We use the same normalization logic as db.js to ensure we connect to the correct internal host
function normalizeDatabaseUrl(url) {
  if (!url) return url;
  const LEGACY_DATABASE_HOST = 'ayratech_ayrafull-bd';
  const CURRENT_DATABASE_HOST = 'desenvolvimento-r2d2_ayratech-bd-new';
  
  // Replace legacy host with current internal host if present
  if (url.includes(`@${LEGACY_DATABASE_HOST}:`) || url.includes(`@${LEGACY_DATABASE_HOST}/`)) {
    return url
      .replace(`@${LEGACY_DATABASE_HOST}:`, `@${CURRENT_DATABASE_HOST}:`)
      .replace(`@${LEGACY_DATABASE_HOST}/`, `@${CURRENT_DATABASE_HOST}/`);
  }
  return url;
}

function parseConnectionString(url) {
  if (!url) return {};
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
    if (match[6]) {
      const params = new URLSearchParams(match[6]);
      if (params.get('sslmode') === 'disable') config.ssl = false;
      else if (params.get('sslmode')) config.ssl = { rejectUnauthorized: false };
    }
    return config;
  }
  return { connectionString: url };
}

// Fallback to localhost if internal host is not reachable (sandbox behavior)
async function tryConnect() {
  const originalUrl = process.env.DATABASE_URL;
  const internalUrl = normalizeDatabaseUrl(originalUrl);
  
  console.log('Attempting to connect to internal host...');
  let pool = new Pool(parseConnectionString(internalUrl));
  
  try {
    const client = await pool.connect();
    client.release();
    console.log('Connected to internal host successfully.');
    return pool;
  } catch (err) {
    console.log('Internal host unreachable, falling back to localhost/direct...');
    await pool.end();
    
    // If the internal host fails, try the original URL (it might have an IP or external domain)
    pool = new Pool(parseConnectionString(originalUrl));
    try {
      const client = await pool.connect();
      client.release();
      console.log('Connected to fallback host successfully.');
      return pool;
    } catch (err2) {
      console.error('All connection attempts failed.');
      throw err2;
    }
  }
}

async function fixTimezoneIssues() {
  console.log('--- Starting Timezone & Punch Audit ---');
  let pool;
  try {
    pool = await tryConnect();
    
    // 1. Check current DB time
    const nowResult = await pool.query("SELECT NOW() as now, current_setting('timezone') as tz");
    console.log('Database NOW:', nowResult.rows[0].now);
    console.log('Database Timezone Setting:', nowResult.rows[0].tz);

    // 2. Identify punches from today that are shifted
    // Today is 19/08/2026.
    const todayStr = '2026-08-19';

    console.log(`Auditing punches for date: ${todayStr}`);

    const punches = await pool.query(
      `SELECT id, employee_id, punched_at, created_at 
       FROM time_punches 
       WHERE punched_at::date = $1`,
      [todayStr]
    );

    console.log(`Found ${punches.rows.length} punches for today.`);

    if (punches.rows.length > 0) {
      const updateResult = await pool.query(
        `UPDATE time_punches 
         SET punched_at = punched_at + interval '3 hours'
         WHERE punched_at::date = $1`,
        [todayStr]
      );
      console.log(`Successfully updated ${updateResult.rowCount} punches (shifted +3h).`);
    }
    
  } catch (err) {
    console.error('Error during audit:', err);
  } finally {
    if (pool) await pool.end();
  }
}

fixTimezoneIssues();
