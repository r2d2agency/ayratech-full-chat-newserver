/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] sim entao nao é todos que vao ter acesso a esse modulo. o rh por exemmplo nao tera. e preciso fazer com que as pessosa batam o ponto na sede. cda um em seu celular. ai preciso cadastrar a sede. mas isso temque esta em rh
 * 
 * RESPOSTA / ANÁLISE:
 * 
 * 1. MÓDULO DE PDVs NO RH:
 *    - O RH já possui o menu "PDVs" (atualmente `/rh/pdvs`), que é o local para cadastrar as Unidades.
 *    - Renomearei este menu de "PDVs" para "PDVs & Sedes" para ficar mais claro que a Sede também deve ser cadastrada ali.
 * 
 * 2. CADASTRO DA SEDE:
 *    - Para cadastrar a sede, o RH deve ir em: **RH > PDVs & Sedes**.
 *    - Cadastre a "Sede" como uma nova unidade, informando o endereço e garantindo que a Latitude/Longitude (GPS) estejam corretas para o Geofencing (cerca eletrônica).
 * 
 * 3. CONFIGURAÇÃO DE ACESSO:
 *    - No RH, você deve ir em "Acessos App" ou "Colaboradores" para habilitar o "Ponto Mobile" para cada pessoa individualmente.
 *    - O módulo de "Controle de Acesso" (Supermercados) permanecerá restrito à ADM e não será visto pelo RH.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
