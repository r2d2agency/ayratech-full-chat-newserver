/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] preciso que a alguns colaboradores batam o ponto via facial no celular mas na undiade sede da empresa nao em um pdv. com opodemo fazer ?
 * 
 * ANÁLISE PARA PONTO FACIAL (SEDE):
 * 1. O sistema já possui componentes de captura de câmera (CameraCapture.tsx) e reconhecimento facial.
 * 2. Para permitir o ponto na sede (sem ser PDV), precisamos garantir que a geolocalização da sede esteja cadastrada ou desativar a trava de GPS para esses colaboradores específicos.
 * 3. Podemos criar um tipo de "Ponto Externo/Sede" que não exija um PDV vinculado, apenas a validação facial.
 * 
 * AÇÃO SUGERIDA:
 * 1. Verificar no backend se a tabela de colaboradores permite marcar a "Sede" como local autorizado.
 * 2. Ajustar a lógica de 'check-in' no app para reconhecer quando o colaborador está batendo ponto via facial em modo "Sede".
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
