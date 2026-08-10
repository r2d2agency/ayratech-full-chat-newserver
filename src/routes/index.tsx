/**
 * SISTEMA AYRATECH - STATUS E LOGS
 * 
 * ATUALIZAÇÃO RECENTE: Bloqueio de App por Falta de Biometria
 * 1. Implementado bloqueio total no PromotorHome quando a organização exige biometria e o colaborador não tem face cadastrada.
 * 2. O colaborador visualiza uma tela de "Acesso Bloqueado" com instruções para procurar o RH.
 * 3. Validação robusta no backend (punch e home) para garantir a integridade da escala (Precedência: Escala > Jornada).
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
