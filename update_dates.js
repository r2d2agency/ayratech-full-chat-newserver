import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function run() {
  try {
    const client = await pool.connect();
    // Use America/Sao_Paulo for consistency in the script execution session
    await client.query("SET timezone = 'America/Sao_Paulo'");
    
    console.log("Starting data update from 2026-08-16 to 2026-08-17...");

    // 1. Update merch_routes (visit_date is a DATE column)
    const routesResult = await client.query(
      "UPDATE merch_routes SET visit_date = '2026-08-17' WHERE visit_date = '2026-08-16'"
    );
    console.log(`Updated ${routesResult.rowCount} rows in merch_routes.`);

    // 2. Update time_punches (punched_at is TIMESTAMPTZ)
    // We add 1 day to any punch that occurred on the 16th (in Brazil time)
    const punchesResult = await client.query(
      "UPDATE time_punches SET punched_at = punched_at + interval '1 day' WHERE punched_at::date = '2026-08-16'"
    );
    console.log(`Updated ${punchesResult.rowCount} rows in time_punches.`);

    // 3. Update collaborator_daily_assignments (assignment_date is DATE)
    const assignmentsResult = await client.query(
      "UPDATE collaborator_daily_assignments SET assignment_date = '2026-08-17' WHERE assignment_date = '2026-08-16'"
    );
    console.log(`Updated ${assignmentsResult.rowCount} rows in collaborator_daily_assignments.`);

    // 4. Update overtime_requests (request_date is DATE)
    const overtimeResult = await client.query(
      "UPDATE overtime_requests SET request_date = '2026-08-17' WHERE request_date = '2026-08-16'"
    );
    console.log(`Updated ${overtimeResult.rowCount} rows in overtime_requests.`);

    client.release();
  } catch (err) {
    console.error("Error during update:", err);
  } finally {
    await pool.end();
  }
}

run();
