import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    const client = await pool.connect();
    await client.query("SET timezone = 'America/Sao_Paulo'");
    
    const p16 = await client.query("SELECT count(*) FROM time_punches WHERE punched_at::date = '2026-08-16'");
    const p17 = await client.query("SELECT count(*) FROM time_punches WHERE punched_at::date = '2026-08-17'");
    
    console.log(`Punches: 16/08=${p16.rows[0].count}, 17/08=${p17.rows[0].count}`);

    client.release();
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}
run();
