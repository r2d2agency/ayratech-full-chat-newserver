/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] nao achei no paine aonde fica gestao de unidades e locais. ?
 * 
 * RESPOSTA / ANÁLISE:
 * 
 * 1. GESTÃO DE UNIDADES E LOCAIS:
 *    - A gestão de Unidades (Sedes/PDVs) e Locais (Redes/Agências) está centralizada no módulo de "Controle de Acesso".
 *    - No menu lateral, acesse: ADM > Controle de Acesso.
 *    - Dentro desta página, existem abas para: "Redes", "Unidades", "Agências" e "Funções".
 * 
 * 2. CONFIGURAÇÃO DA SEDE (PARA PONTO FACIAL):
 *    - Para cadastrar a Sede da empresa, vá em "Unidades" e adicione um novo registro com as coordenadas GPS corretas.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
