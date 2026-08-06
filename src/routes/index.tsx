/**
 * ERRO RESOLVIDO:
 * O erro "getaddrinfo ENOTFOUND ayratech_ayrafull-bd" indicava que o backend ainda tentava
 * usar o host antigo. Forcei a atualização do backend/.env para o novo host:
 * desenvolvimento-r2d2_ayratech-bd-new
 * 
 * Também garanti que a JWT_SECRET e PORT estejam configuradas corretamente.
 *
 * backend https://api2.ayratech.app/
 *
 * frontend 
 * https://admin.ayratech.app
 * https://promotor.ayratech.app
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
