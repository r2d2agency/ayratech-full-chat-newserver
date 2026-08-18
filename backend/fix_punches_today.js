import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes('sslmode=disable') ? false : { rejectUnauthorized: false }
});

async function run() {
  try {
    const client = await pool.connect();
    await client.query("SET timezone = 'America/Sao_Paulo'");
    
    console.log("Iniciando ajuste de batidas de 14h para 17h (Hoje: 18/08/2026)...");

    const query = `
      UPDATE time_punches 
      SET punched_at = punched_at + interval '3 hours'
      WHERE punched_at::date = '2026-08-18'
        AND EXTRACT(HOUR FROM punched_at AT TIME ZONE 'America/Sao_Paulo') = 14
      RETURNING id, employee_id, punched_at AT TIME ZONE 'America/Sao_Paulo' as new_time;
    `;

    const res = await client.query(query);
    console.log(`Sucesso: ${res.rowCount} batidas atualizadas.`);
    res.rows.forEach(row => {
      console.log(`ID: ${row.id}, Colaborador: ${row.employee_id}, Novo Horário: ${row.new_time}`);
    });

    client.release();
  } catch (err) {
    console.error("Erro durante o ajuste:", err);
  } finally {
    await pool.end();
  }
}

run();
