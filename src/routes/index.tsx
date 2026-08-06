/**
 * ERRO RESOLVIDO:
 * O erro "getaddrinfo ENOTFOUND ayratech_ayrafull-bd" ocorria porque o backend tentava conectar
 * a um host inexistente. O DATABASE_URL foi atualizado para o novo host:
 * desenvolvimento-r2d2_ayratech-bd-new
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
