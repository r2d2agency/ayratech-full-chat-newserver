/**
 * ##########################################
 * ### System Status & Logs
 * ### Thu, Aug 6, 2026
 * ##########################################
 * 
 * [ERROR] API 500 detected on /api/auth/login, /api/auth/plans, /api/auth/register.
 * 
 * DIAGNOSIS:
 * The backend is returning 500 because it cannot resolve the database host 
 * 'desenvolvimento-r2d2_ayratech-bd-new' from the sandbox environment.
 * 
 * ACTION TAKEN:
 * 1. Verified and updated backend/.env with the correct DATABASE_URL and JWT_SECRET.
 * 2. Installed backend dependencies (bun install).
 * 3. Note: The connection issue persists in the sandbox due to DNS restrictions 
 *    on internal Easypanel hosts, but the code is now properly configured 
 *    for deployment on your server.
 * 
 * RECOMMENDATION:
 * Rebuild and restart the Docker container on Easypanel. The configuration 
 * now points to the correct database host and includes the required JWT_SECRET.
 * 
 * backend: https://api2.ayratech.app/
 * frontend: https://admin.ayratech.app, https://promotor.ayratech.app
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
