/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] PUT https://api2.ayratech.app/api/rh/employees/f60bfd3a-fe97-49e3-b125-95b70bb1fbe7 400 (Bad Request)
 * index-CUvuTv0q.js:1477 [api] request failed {url: '...', status: 400, body: { error: "duplicate key value violates unique constraint \"employees_cpf_key\"", details: "Key (cpf)=(...) already exists." }}
 * 
 * RESPOSTA / ANÁLISE:
 * 
 * 1. CAUSA DO ERRO 400 (PUT):
 *    - O erro 400 ao atualizar (PUT) geralmente indica que você está tentando alterar o CPF ou E-mail para um valor que já pertence a OUTRO colaborador no banco de dados.
 *    - No PostgreSQL, isso dispara uma violação de "unique constraint".
 * 
 * 2. CORREÇÃO NO BACKEND:
 *    - Melhorei a resposta do erro no backend (`backend/src/routes/rh.js`) para incluir o campo `details`.
 *    - Agora, quando ocorrer um erro de banco (como CPF duplicado), a API retornará exatamente qual campo está em conflito, facilitando a identificação pelo RH.
 * 
 * 3. ORIENTAÇÃO:
 *    - Verifique se o CPF que você está tentando salvar já não está cadastrado em outro perfil (mesmo que inativo).
 *    - Se estiver tentando apenas trocar a unidade/sede, certifique-se de que os campos de identificação (CPF/RG) não foram alterados acidentalmente para valores já existentes.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
