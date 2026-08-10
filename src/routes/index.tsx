/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] ok mas vou consguir visualizar quais colaboradores tem acesso a sede ? ou estao batend ponto na sede ou por pdv ?
 * 
 * RESPOSTA / ANÁLISE:
 * 
 * 1. VISUALIZAÇÃO DE ACESSO:
 *    - Sim! No menu **RH > Ponto**, você consegue ver exatamente onde cada colaborador bateu o ponto.
 *    - O sistema registra o "Status Geo" (Geofencing), indicando se a marcação foi "Dentro PDV" (incluindo a Sede) ou "Fora PDV".
 * 
 * 2. DIFERENCIAÇÃO SEDE vs PDV:
 *    - Na folha de ponto consolidada e na exportação para Excel (XLS), o sistema detalha a unidade vinculada.
 *    - Se o colaborador estiver vinculado à "Sede", o sistema validará o ponto dele contra as coordenadas da Sede que você cadastrou.
 * 
 * 3. MONITORAMENTO EM TEMPO REAL:
 *    - Você pode filtrar por colaborador específico para ver o histórico de marcações e se houve alguma divergência de local (fora da área permitida).
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};