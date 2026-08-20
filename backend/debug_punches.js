import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function debugPunches() {
  try {
    const today = new Date().toISOString().split('T')[0];
    console.log(`Checking punches for date: ${today}`);
    
    const res = await pool.query(`
      SELECT tp.id, tp.employee_id, e.full_name, tp.punch_type, tp.punched_at, 
             tp.punched_at AT TIME ZONE 'UTC' AT TIME ZONE 'America/Sao_Paulo' as local_time,
             tp.manual_adjustment, tp.created_at
      FROM time_punches tp
      JOIN employees e ON e.id = tp.employee_id
      WHERE (tp.punched_at AT TIME ZONE 'America/Sao_Paulo')::date = $1
      ORDER BY tp.employee_id, tp.punched_at
    `, [today]);

    console.log('--- RAW PUNCHES ---');
    console.table(res.rows.map(r => ({
      ...r,
      punched_at: r.punched_at.toISOString(),
      local_time: r.local_time.toISOString(),
      created_at: r.created_at.toISOString()
    })));

    const records = await pool.query(`
      SELECT tr.*, e.full_name
      FROM time_records tr
      JOIN employees e ON e.id = tr.employee_id
      WHERE tr.record_date = $1
    `, [today]);

    console.log('--- TIME RECORDS (CONSOLIDATED) ---');
    console.table(records.rows);

  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

debugPunches();
