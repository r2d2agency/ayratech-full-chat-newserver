/**
 * ##########################################
 * ### System Status & Logs
 * ### Sun, Aug 9, 2026
 * ##########################################
 * 
 * [LOG] nao conecta no banco de dados. vc ja verificaou a coenxao tem como fazer um teste
 * 
 * [BROWSER ERROR] beforeinstallpromptevent.preventDefault() called.
 * [API ERROR 500] POST https://api2.ayratech.app/api/auth/login
 * 
 * DIAGNOSIS:
 * O erro 500 no login confirma que o backend não está conseguindo processar a requisição.
 * Geralmente isso ocorre por:
 * 1. Falha de conexão com o Banco de Dados (Host não resolve ou senha errada).
 * 2. Tabelas ausentes (O backend tenta ler a tabela 'users' e falha).
 * 
 * TESTE DE CONEXÃO:
 * Eu já implementei uma normalização no 'backend/src/db.js' para corrigir o host.
 * No entanto, o backend no Easypanel precisa ser RECONSTRUÍDO para aplicar essa mudança.
 * 
 * PRÓXIMO PASSO:
 * No seu Easypanel, vá no serviço do backend e clique em "Rebuild" ou "Deploy".
 * Isso forçará o carregamento do novo código que contém a correção do banco.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
