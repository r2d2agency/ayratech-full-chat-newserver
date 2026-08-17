import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function run() {
  try {
    const client = await pool.connect();
    // SET timezone to Sao Paulo so that '2026-08-16'::date resolves correctly to the target day
    await client.query("SET timezone = 'America/Sao_Paulo'");
    
    console.log("Starting data update from 2026-08-16 to 2026-08-17...");

    // 1. Update merch_routes (visit_date is DATE)
    const routesResult = await client.query(
      "UPDATE merch_routes SET visit_date = '2026-08-17' WHERE visit_date = '2026-08-16'"
    );
    console.log(`Updated ${routesResult.rowCount} rows in merch_routes.`);

    // 2. Update time_punches (punched_at is TIMESTAMPTZ)
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
    
    // 5. Update pdv_visits (visit_date is DATE, checkin_at/checkout_at are TIMESTAMPTZ)
    const pdvVisitsDate = await client.query(
      "UPDATE pdv_visits SET visit_date = '2026-08-17' WHERE visit_date = '2026-08-16'"
    );
    console.log(`Updated ${pdvVisitsDate.rowCount} rows in pdv_visits (date).`);
    
    const pdvVisitsTime = await client.query(
      "UPDATE pdv_visits SET checkin_at = checkin_at + interval '1 day', checkout_at = checkout_at + interval '1 day' WHERE visit_date = '2026-08-17'"
    );
    console.log(`Updated timestamps in pdv_visits.`);

    client.release();
  } catch (err) {
    console.error("Error during update:", err);
  } finally {
    await pool.end();
  }
}

run();
