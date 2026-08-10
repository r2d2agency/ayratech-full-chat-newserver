/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] nao achei onde vinvculo o colaborador a sede, e isso precisa estar no ajuda do rh. e o pontode acesso os colaboradores cda um ve o seu a nao ser que tenha permissao para ver o modulo rh.
 * 
 * RESPOSTA / ANÁLISE:
 * 
 * 1. VÍNCULO COLABORADOR -> SEDE:
 *    - No cadastro do colaborador (**RH > Colaboradores**), ao editar um registro, utilize o campo "Unidade" ou "Filial" para selecionar a Sede cadastrada.
 *    - Isso é fundamental para que o Geofencing saiba onde validar o ponto desse usuário.
 * 
 * 2. VISUALIZAÇÃO DE PONTO:
 *    - Por padrão, colaboradores comuns só acessam seus próprios registros através do app/ponto.
 *    - O acesso ao monitor geral de ponto ou gestão de outros usuários é restrito a perfis com permissão administrativa no módulo RH.
 * 
 * 3. CENTRAL DE AJUDA:
 *    - Atualizei o módulo **RH > Ajuda & Manuais** com estas instruções detalhadas sobre o vínculo de unidades e regras de visibilidade.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
