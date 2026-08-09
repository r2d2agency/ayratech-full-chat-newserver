/**
 * ##########################################
 * ### System Status & Logs
 * ### Sun, Aug 9, 2026
 * ##########################################
 * 
 * [ERROR] 500 POST /api/auth/login
 * 
 * The login endpoint is returning a 500 error.
 * 
 * DIAGNOSIS:
 * 1. The backend is configured with DATABASE_URL in backend/.env.
 * 2. Dependencies (pg, etc.) have been installed.
 * 3. The 500 error typically indicates a database connection failure or a missing table.
 * 
 * CRITICAL ACTION:
 * You MUST go to Easypanel and:
 * 1. RESTART the backend container.
 * 2. Ensure that the 'Environment Variables' section in Easypanel for the backend
 *    includes:
 *    DATABASE_URL=postgres://postgres:zc5tgyxpplqek58e1unb@desenvolvimento-r2d2_ayratech-bd-new:5432/ayratech-bd-new?sslmode=disable
 *    JWT_SECRET=ayratech-secret-key-2024-3wy64p
 * 
 * If the error persists after a restart, the issue is likely a missing table in the 
 * database (e.g., 'users').
 * 
 * backend: https://api2.ayratech.app/
 * frontend: https://admin.ayratech.app
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
