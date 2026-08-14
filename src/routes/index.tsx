/**
 * SISTEMA AYRATECH - STATUS E LOGS
 * 
 * ATUALIZAÇÃO RECENTE: Priorização de Escalas no Ponto
 * 1. Corrigida a lógica de precedência: Escala Diária > Escala Recorrente > Jornada Fixa.
 * 2. O sistema agora ignora a Jornada Fixa se qualquer escala (diária ou recorrente) estiver ativa.
 * 3. Validação sincronizada entre o Dashboard (/home) e o Registro de Ponto (/punch).
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
