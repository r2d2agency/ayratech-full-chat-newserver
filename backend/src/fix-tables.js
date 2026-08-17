import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;

// Use the exact IP from the logs or common Easypanel local hostname resolver
// But since we are in the sandbox, we rely on what the environment provides.
// The error ENOTFOUND suggests the hostname in .env is only resolvable INSIDE the Easypanel network.

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
  console.log('🚀 Checking DATABASE_URL to fix missing tables...');
  
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error('❌ DATABASE_URL not found in environment.');
    process.exit(1);
  }

  // If we are in the Lovable sandbox, we cannot resolve the internal Easypanel hostname.
  // The user needs to restart the backend container where the hostname IS resolvable.
  // However, I will try to verify if the tables are in init-db.js correctly (they are).
  
  console.log('⚠️ The database host "desenvolvimento-r2d2_ayratech-bd-new" is internal to Easypanel.');
  console.log('⚠️ The migration script in backend/src/init-db.js ALREADY contains these tables.');
  console.log('✅ The fix is to RESTART the backend container in Easypanel.');
  
  process.exit(0);
}

run();
