/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] to cum um promotor que ja bateru as fotos fez o checklist mas fica sincronizando 26 fotos e nao sai.. e nao deixa finalizar pq nao carrega as fotos. poderia verificar. lembrand que trocamos de servidor. tem algo que possa da errado. e tem cmo ela refazer o sincronismo la no app ?
 * 
 * RESPOSTA / ANÁLISE:
 * 
 * 1. CAUSA PROVÁVEL:
 *    - Com a troca de servidor, se o endereço de backend (`VITE_API_URL`) no App do promotor ainda estiver apontando para o servidor antigo ou se houver bloqueio de CORS no novo servidor, as fotos ficam presas na fila do IndexedDB (`AyraOfflineDB`).
 *    - O App usa um sistema de fila offline que tenta reenviar automaticamente, mas se o erro for persistente (ex: 404 ou 500 no endpoint de upload), ele marca como 'failed' e tenta novamente a cada 30 segundos.
 * 
 * 2. COMO REFAZER O SINCRONISMO:
 *    - O promotor pode tocar no indicador de sincronismo (o selo amarelo que diz "Sincronizando...") para forçar uma nova tentativa imediata.
 *    - Se as fotos estiverem "travadas" mesmo com internet, recomendo:
 *      a) Fechar e abrir o App totalmente.
 *      b) Verificar se a URL do servidor nas configurações do App (se acessível) está como `https://api2.ayratech.app/`.
 *      c) Em casos extremos, limpar o cache do navegador no celular (isso pode apagar fotos não sincronizadas, então use como último recurso).
 * 
 * 3. AÇÕES NO SERVIDOR:
 *    - Verifiquei o `backend/src/routes/uploads.js`. O servidor está configurado para salvar em `/app/uploads`. Certifique-se de que a pasta tem permissão de escrita no novo servidor.
 *    - Adicionei um cabeçalho de CORS mais permissivo no `backend/src/index.js` para garantir que o App (`promotor.ayratech.app`) consiga enviar arquivos sem bloqueios.
 * 
 * 4. BOTÃO DE EMERGÊNCIA:
 *    - Implementei um botão "Tentar Sincronizar Agora" no painel de diagnóstico do promotor para facilitar o reprocessamento da fila.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};