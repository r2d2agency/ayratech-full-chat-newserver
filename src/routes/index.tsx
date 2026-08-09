/**
 * ##########################################
 * ### System Status & Logs
 * ### Sun, Aug 9, 2026
 * ##########################################
 * 
 * [ERROR] nem o app do promotor funciona.
 * 
 * DIAGNOSIS:
 * Ambos os apps (Admin e Promotor) dependem do mesmo backend (api2.ayratech.app).
 * Se o login no Admin retorna 500, o Promotor também falhará, pois o backend
 * não consegue validar as credenciais ou acessar o banco de dados.
 * 
 * CRITICAL ACTION:
 * Você deve resolver a conexão do backend primeiro no Easypanel:
 * 1. REINICIE o container do backend.
 * 2. Verifique se as variáveis de ambiente no Easypanel estão idênticas ao backend/.env:
 *    DATABASE_URL=postgres://postgres:zc5tgyxpplqek58e1unb@desenvolvimento-r2d2_ayratech-bd-new:5432/ayratech-bd-new?sslmode=disable
 *    JWT_SECRET=ayratech-secret-key-2024-3wy64p
 * 
 * Enquanto o backend retornar Erro 500, nenhum dos aplicativos funcionará.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
