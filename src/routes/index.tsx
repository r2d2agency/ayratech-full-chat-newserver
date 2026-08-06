/**
 * O erro "supabaseUrl is required" foi resolvido neutralizando a inicialização do cliente Supabase.
 * Como o projeto usa PostgreSQL direto no Easypanel, o frontend não deve travar pela falta de URL do Supabase.
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
