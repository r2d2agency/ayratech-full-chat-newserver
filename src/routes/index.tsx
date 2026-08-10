/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] quero todos os preocedimentos de ajuda num item do menu por exemplo tudo do rh tem que esta na lista do rh em
 * 
 * ATUALIZAÇÃO DO SISTEMA:
 * 
 * 1. NOVA PÁGINA DE AJUDA RH:
 *    - Criada a página `src/pages/RHHelp.tsx` contendo os manuais de configuração de Sede, Ponto Facial e Acessos.
 * 
 * 2. MENU LATERAL (SIDEBAR):
 *    - Adicionado o item "Ajuda & Manuais" dentro da seção "RH".
 * 
 * 3. ROTEAMENTO:
 *    - Rota `/rh/ajuda` configurada e protegida no `src/App.tsx`.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
