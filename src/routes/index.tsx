/**
 * ##########################################
 * ### System Status & Logs
 * ### Thu, Aug 6, 2026
 * ##########################################
 * 
 * [CRITICAL ERROR] getaddrinfo ENOTFOUND ayratech_ayrafull-bd
 * 
 * The backend is crashing during initialization because it still tries to connect
 * to the old database host 'ayratech_ayrafull-bd'.
 * 
 * DIAGNOSIS:
 * Even though the code has a workaround to replace the old hostname, the 
 * Easypanel environment might be injecting the old DATABASE_URL in a way that
 * overrides local config, or the process hasn't been fully killed and restarted.
 * 
 * LATEST LOG EVIDENCE:
 * npm error command sh -c node src/index.js
 * Projects table init error: Error: getaddrinfo ENOTFOUND ayratech_ayrafull-bd
 * 
 * ACTION REQUIRED:
 * 1. Go to Easypanel.
 * 2. Force a REBUILD and REDEPLOY of the backend.
 * 3. Verify that the DATABASE_URL environment variable in Easypanel settings
 *    is set to the new connection string.
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
