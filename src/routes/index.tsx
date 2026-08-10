/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] PUT https://api2.ayratech.app/api/rh/employees/f60bfd3a-fe97-49e3-b125-95b70bb1fbe7 400 (Bad Request)
 * Mensagem: "nao tem cpf ou email duplicado. ja conferi"
 * 
 * ANÁLISE TÉCNICA (Erro 400 Persistente):
 * 
 * 1. DIAGNÓSTICO:
 *    - Se o CPF e E-mail não estão duplicados, o erro 400 (Bad Request) vindo do banco de dados pode ser:
 *      a) Violação de NOT NULL em algum campo obrigatório (ex: organization_id perdendo o vínculo).
 *      b) Erro de Tipo de Dado (ex: tentando salvar um objeto onde deveria ser uma string/JSON).
 *      c) Constraint de Foreign Key (ex: department_id ou branch_id que não existem mais).
 * 
 * 2. AÇÕES REALIZADAS:
 *    - Melhorei o log do Backend (`backend/src/routes/rh.js`) para imprimir o erro COMPLETO no console do servidor.
 *    - Agora o sistema retornará o nome da constraint (`constraint`) e o código do erro do Postgres (`code`).
 * 
 * 3. PRÓXIMO PASSO:
 *    - Por favor, tente salvar novamente e veja se a mensagem de erro que aparece na tela mudou ou trouxe mais detalhes (como o nome de um campo específico).
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
