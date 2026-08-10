/**
 * SISTEMA AYRATECH - STATUS E LOGS
 * 
 * ATUALIZAÇÃO RECENTE: Bloqueio de App por Falta de Biometria
 * 1. Implementado bloqueio total no PromotorHome quando a organização exige biometria e o colaborador não tem face cadastrada.
 * 2. O colaborador visualiza uma tela de "Acesso Bloqueado" com instruções para procurar o RH.
 * 3. Validação robusta no backend (punch e home) para garantir a integridade da escala (Precedência: Escala > Jornada).
 * 
 * ERRO DE REGISTRO DE PONTO:
 * O erro "Confirmação facial obrigatória" indica que o colaborador tem biometria ativa mas a foto não foi validada no momento do clique.
 * Corrigido fluxo de `handlePunch` no frontend para garantir que `setShowFaceVerify(true)` interrompa o fluxo direto.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
