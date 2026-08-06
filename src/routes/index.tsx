/**
 * ##########################################
 * ### System Status & Logs
 * ### Thu, Aug 6, 2026
 * ##########################################
 * 
 * [ERROR] persistent "getaddrinfo ENOTFOUND ayratech_ayrafull-bd"
 * 
 * DIAGNOSIS:
 * Even after updating backend/.env, the backend process appears to be 
 * running with old environment variables cached in the OS or Docker container, 
 * or the process hasn't been successfully restarted on Easypanel.
 * 
 * ACTION TAKEN:
 * 1. Verified backend/.env contains the NEW host: desenvolvimento-r2d2_ayratech-bd-new.
 * 2. Confirmed there are no hardcoded references to 'ayratech_ayrafull-bd' in the codebase.
 * 3. The "Self-healing" logs confirm the error happens during automatic table migrations
 *    on server startup.
 * 
 * CRITICAL STEP:
 * You MUST manually restart the backend container/service in Easypanel to force it 
 * to load the new environment variables from the updated .env file.
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
