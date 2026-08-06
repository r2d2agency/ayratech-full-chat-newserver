/**
 * ERRO RESOLVIDO:
 * O erro 500 no /api/auth/login era causado pela falta da variável de ambiente JWT_SECRET no backend.
 * A variável foi gerada e adicionada ao arquivo backend/.env.
 * O DATABASE_URL também está configurado para o novo host: desenvolvimento-r2d2_ayratech-bd-new
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
