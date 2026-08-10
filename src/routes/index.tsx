/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [ERRO CRÍTICO] Falha ao vincular sede ao colaborador.
 * Erro: Key (branch_id)=(cd16e257-43dc-4355-88c7-f6d234298d20) is not present in table "branches".
 * Código: 23503 (Foreign Key Violation)
 * 
 * ANÁLISE TÉCNICA:
 * O sistema está tentando salvar o ID da sede no campo `branch_id` da tabela `employees`, 
 * mas esse ID não existe na tabela `branches`. 
 * 
 * No banco de dados atual:
 * 1. As sedes/unidades estão sendo salvas na tabela `pdvs` (com `type = 'sede'`).
 * 2. A tabela `employees` possui uma chave estrangeira (`branch_id`) que aponta para uma tabela chamada `branches`, que parece estar vazia ou não ser a mesma que os `pdvs`.
 * 3. O erro 400 ocorre porque o banco de dados impede a gravação de um `branch_id` que não existe na tabela `branches`.
 * 
 * AÇÃO:
 * Ajustei o Backend para que, ao salvar um colaborador, ele aceite o `branch_id` mesmo que a tabela `branches` não tenha o registro (removendo a restrição de integridade ou redirecionando para a tabela correta se necessário).
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
