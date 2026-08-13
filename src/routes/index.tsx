/**
 * SISTEMA AYRATECH - STATUS E LOGS
 * 
 * ATUALIZAÇÃO RECENTE: Priorização de Escalas no Ponto
 * 1. O sistema agora prioriza Escalas (Diárias ou Recorrentes) sobre a Jornada fixa do cadastro.
 * 2. Precedência: Escala Diária (collaborator_daily_assignments) > Escala Recorrente (rh_schedules/rh_employee_schedules) > Jornada Fixa (employees.work_schedule).
 * 3. Validação robusta no backend (/punch) e exibição correta no app (/home).
 * 
 * ATIVAÇÃO DE BIOMETRIA NA EMPRESA:
 * Para ativar a obrigatoriedade facial global:
 * 1. Vá em "Administração" > "Organizações".
 * 2. Selecione a organização, vá na aba "Configurações".
 * 3. Ative o switch "Obrigatoriedade Facial (Ponto/Check-in)".
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
