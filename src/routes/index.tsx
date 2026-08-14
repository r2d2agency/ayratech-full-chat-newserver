/**
 * SISTEMA AYRATECH - STATUS E LOGS
 * 
 * ATUALIZAÇÃO RECENTE: Registro de Ponto Offline & Biometria
 * 1. O sistema de ponto foi otimizado para funcionar offline, carregando a função de validação antecipadamente.
 * 2. Corrigido endpoint de sincronização offline do ponto no PromotorHome.
 * 3. Mantida validação de 15 minutos de tolerância.
 * 4. Sincronizada lógica de bloqueio de botão no app com a validação do backend.
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
