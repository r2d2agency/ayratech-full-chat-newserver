import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure .env is loaded from the parent directory of /src (backend root)
dotenv.config({ path: path.join(__dirname, '../.env') });

const { Pool } = pg;

const CURRENT_DATABASE_HOST = 'desenvolvimento-r2d2_ayratech-bd-new';

function normalizeDatabaseUrl(url) {
  if (!url) return url;
  const LEGACY_DATABASE_HOST = 'ayratech_ayrafull-bd';
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

const dbUrl = normalizeDatabaseUrl(process.env.DATABASE_URL);
const pool = new Pool(parseConnectionString(dbUrl));

async function fixTimezoneIssues() {
  console.log('--- Starting Timezone & Punch Audit ---');
  try {
    // 1. Check current DB time
    const nowResult = await pool.query("SELECT NOW() as now, current_setting('timezone') as tz");
    console.log('Database NOW:', nowResult.rows[0].now);
    console.log('Database Timezone Setting:', nowResult.rows[0].tz);

    // 2. Identify punches from today that might be shifted
    const today = new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }).split(',')[0];
    const [month, day, year] = today.split('/');
    const dateStr = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

    console.log(`Auditing punches for date: ${dateStr}`);

    const punches = await pool.query(
      `SELECT id, employee_id, punched_at, created_at 
       FROM time_punches 
       WHERE punched_at::date = $1`,
      [dateStr]
    );

    console.log(`Found ${punches.rows.length} punches for today.`);

    if (punches.rows.length > 0) {
      const updateResult = await pool.query(
        `UPDATE time_punches 
         SET punched_at = punched_at + interval '3 hours'
         WHERE punched_at::date = $1`,
        [dateStr]
      );
      console.log(`Successfully updated ${updateResult.rowCount} punches (shifted +3h).`);
    }
    
  } catch (err) {
    console.error('Error during audit:', err);
  } finally {
    await pool.end();
  }
}

fixTimezoneIssues();
