/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] entao entra com oum pdv? pq nao era pra ser assim. e o sistema de controle de acesso ´outro sistema dentro desse é o sistema para controlar acesso aos supermercados. com gestao propria.
 * 
 * RESPOSTA / ANÁLISE:
 * 
 * 1. ENTENDIMENTO DO SISTEMA DE ACESSO:
 *    - Compreendido. O "Controle de Acesso" não é apenas permissão de usuário, mas o sistema de controle de entrada/acesso físico aos Supermercados.
 *    - Ele opera como um módulo de gestão própria dentro da plataforma Ayratech para os PDVs.
 * 
 * 2. LOCALIZAÇÃO DO MÓDULO:
 *    - Este módulo está localizado em: **Controle Acesso > Painel Acesso**.
 *    - Nele, você faz a gestão de Redes, PDVs (Unidades), Agências e as regras de entrada dos promotores.
 * 
 * 3. ESPECIFICAÇÃO DE PDV:
 *    - No sistema, "Unidade" é o termo técnico para o local físico (Supermercado/PDV).
 *    - Para a gestão própria dos supermercados, você deve configurar as Redes e vincular as Unidades a elas no Painel de Acesso.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
