
import { pool } from '../db.js';

export async function up() {
  console.log('🚀 Running migration: Add brand_id to organization_members...');
  
  try {
    // 1. Add brand_id column to organization_members
    await pool.query(`
      ALTER TABLE organization_members 
      ADD COLUMN IF NOT EXISTS brand_id UUID REFERENCES merch_brands(id) ON DELETE SET NULL;
    `);
    
    // 2. Add index for performance
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_org_members_brand ON organization_members(brand_id);
    `);

    console.log('✅ Migration completed successfully');
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    throw error;
  }
}

// Check if this script is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  up().then(() => process.exit(0)).catch(() => process.exit(1));
}
