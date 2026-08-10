/**
 * SISTEMA AYRATECH - ANÁLISE TÉCNICA
 * 
 * ERRO 400 (RESOLVIDO): Foreign Key Violation (employees_branch_id_fkey).
 * O sistema tentava salvar o ID de uma Sede (tabela pdvs) no campo branch_id (tabela employees).
 * 
 * NOVA FUNCIONALIDADE: Ponto Facial & Bio-Bloqueio
 * 1. Adicionados campos 'facial_clock_in_required' e 'facial_clock_in_notify_missing' na tabela 'organizations'.
 * 2. Adicionada configuração individual no cadastro de colaboradores (aba Profissional -> facial_required).
 * 3. REFORÇO DE SEGURANÇA: O bloqueio facial agora é aplicado em cascata no APP:
 *    - Ponto eletrônico (Entrada/Saída).
 *    - Check-in e Checkout de Rota (Visita PDV).
 *    - Registro de Ponto Extra / Início de Categoria.
 * 
 * REGRA DE PONTO:
 * 1. Sim, para poder bater os pontos o colaborador segue a jornada de trabalho configurada no sistema.
 * 2. PRIORIDADE: A Escala (collaborator_daily_assignments) agora tem precedência sobre a Jornada (work_schedule).
 * 3. Se não houver escala definida para o dia, o sistema utiliza a jornada padrão do colaborador.
 */


export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};

