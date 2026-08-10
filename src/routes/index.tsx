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
 * REGRA DE PONTO & ESCALA:
 * 1. O colaborador deve seguir a jornada de trabalho configurada.
 * 2. PRIORIDADE ABSOLUTA: A Escala (collaborator_daily_assignments) tem precedência TOTAL sobre a Jornada (work_schedule).
 * 3. Se houver uma escala definida para o dia (ex: 07:00-17:30), o sistema ignorará a jornada (ex: 08:00-17:00) e permitirá o ponto no horário da escala.
 * 4. BIOMETRIA FACIAL: Corrigida validação para garantir que o prompt de foto seja exibido sempre que a configuração exigir ("Sempre exigir"), bloqueando o registro direto sem foto.
 */


export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};

