/**
 * SISTEMA AYRATECH - ANÁLISE TÉCNICA
 * 
 * ERRO 400 (RESOLVIDO): Foreign Key Violation (employees_branch_id_fkey).
 * O sistema tentava salvar o ID de uma Sede (tabela pdvs) no campo branch_id (tabela employees), 
 * que possuía restrição de chave estrangeira com a tabela branches legada.
 * 
 * SOLUÇÃO IMPLEMENTADA:
 * 1. DROP CONSTRAINT na tabela employees para permitir IDs de PDVs.
 * 2. Mapeamento no Backend (RH API) para aceitar branch_id e gravar no campo correto.
 * 
 * NOVA FUNCIONALIDADE: Ponto Facial
 * 1. Adicionados campos 'facial_clock_in_required' e 'facial_clock_in_notify_missing' na tabela 'organizations'.
 * 2. Adicionada configuração individual no cadastro de colaboradores (aba Profissional -> facial_required).
 * 3. A regra de negócio respeita a hierarquia: Colaborador (se definido) > Empresa (padrão).
 * 
 * REGRA DE PONTO:
 * Sim, para poder bater os pontos o colaborador segue a jornada de trabalho configurada no sistema.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};

