/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] no cadastro do colaborador aparece a lista para eu selecionar mas mostra so um item que criei do bota gerenciar antigo.. agora clico em gerenciar ele abre pdv e sede mas nao deixa eu selecinar
 * 
 * RESPOSTA / ANÁLISE:
 * 
 * 1. SINCRONIZAÇÃO DE DADOS:
 *    - Corrigido! O campo de seleção de Filial no RH ainda estava buscando dados da tabela antiga, por isso só mostrava o item antigo.
 *    - Agora, o campo "Filial / Sede" busca os dados em tempo real da mesma lista de **PDVs & Sedes** que você gerencia.
 * 
 * 2. FLUXO DE TRABALHO:
 *    - Ao clicar em "Configurar Sedes", você abre a tela de gestão unificada.
 *    - Após cadastrar ou editar lá, volte ao cadastro do colaborador e a nova Sede aparecerá imediatamente na lista para seleção.
 *    - O vínculo agora é direto e unificado entre os módulos.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};