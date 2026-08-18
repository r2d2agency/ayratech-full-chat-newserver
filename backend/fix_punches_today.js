import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carrega o .env da raiz do backend se existir
dotenv.config({ path: path.join(__dirname, '.env') });

const { Pool } = pg;

// Se não houver DATABASE_URL no .env, tenta usar a variável de ambiente direta do sistema
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@desenvolvimento-r2d2_ayratech-bd-new:5432/postgres';

const pool = new Pool({
  connectionString: connectionString,
  ssl: connectionString.includes('sslmode=disable') ? false : { rejectUnauthorized: false }
});

async function run() {
  try {
    console.log("Tentando conectar ao banco para ajuste de batidas...");
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
    console.error("Erro durante o ajuste:", err.message);
    if (err.code === 'ENOTFOUND') {
      console.error("ERRO: O host do banco de dados não foi encontrado. Certifique-se de executar este script dentro do container do backend no Easypanel.");
    }
  } finally {
    await pool.end();
  }
}

run();
