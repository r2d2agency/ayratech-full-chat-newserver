import { pool } from './db.js';

const step48LiveTracking = `
-- LIVE TRACKING TABLES
CREATE TABLE IF NOT EXISTS employee_live_locations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    latitude NUMERIC(10,7) NOT NULL,
    longitude NUMERIC(10,7) NOT NULL,
    accuracy_meters NUMERIC(10,2),
    battery_level NUMERIC(5,2),
    is_moving BOOLEAN DEFAULT false,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(employee_id)
);

CREATE TABLE IF NOT EXISTS employee_location_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    latitude NUMERIC(10,7) NOT NULL,
    longitude NUMERIC(10,7) NOT NULL,
    accuracy_meters NUMERIC(10,2),
    battery_level NUMERIC(5,2),
    is_moving BOOLEAN DEFAULT false,
    recorded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_emp_loc_hist_emp_date ON employee_location_history(employee_id, recorded_at DESC);
`;

async function run() {
  console.log('🚀 Fixing missing Live Tracking tables...');
  try {
    await pool.query(step48LiveTracking);
    console.log('✅ Tables employee_live_locations and employee_location_history ensured.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Failed to create tables:', err);
    process.exit(1);
  }
}

run();
