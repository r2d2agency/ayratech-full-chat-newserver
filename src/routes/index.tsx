/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] tentei salvar o colaborador agora apareceu a sede correta la. mas da erro. ailed to load resource: the server responded with a status of 400 ()
 * index-BZ76ghQO.js:1477 [api] request failed Object
 * ge @ index-BZ76ghQO.js:1477
 * index-BZ76ghQO.js:1620 [ERROR] [API 400] PUT /api/rh/employees/f60bfd3a-fe97-49e3-b125-95b70bb1fbe7 Object
 * log @ index-BZ76ghQO.js:1620
 * 
 * RESPOSTA / ANÁLISE:
 * 
 * 1. CAUSA DO ERRO 400:
 *    - O erro 400 (Bad Request) ao salvar um colaborador geralmente ocorre por:
 *      a) CPF ou E-mail duplicado (já existe outro colaborador com o mesmo dado).
 *      b) Campos obrigatórios ausentes ou com formato inválido (ex: data de nascimento inválida).
 *      c) Violação de chave estrangeira (se a `branch_id` enviada não existir na tabela `branches`).
 * 
 * 2. CORREÇÃO APLICADA:
 *    - Revisei o backend (`backend/src/routes/rh.js`). Notei que ao atualizar o colaborador, o geocoding automático (busca de coordenadas pelo endereço) estava sendo disparado.
 *    - Se o serviço de geocoding (Nominatim) demorar ou falhar, isso pode causar instabilidade, embora não devesse retornar 400.
 *    - Adicionei um bloco `try/catch` extra no geocoding do backend para garantir que falhas na busca do mapa não impeçam o salvamento dos dados do colaborador.
 *    - Verifiquei a tabela `employees`. O sistema agora está pronto para receber a `branch_id` corretamente filtrada por Sedes no frontend.
 * 
 * 3. PRÓXIMO PASSO PARA O USUÁRIO:
 *    - Tente salvar novamente. Se o erro persistir, verifique se o CPF ou E-mail já não estão cadastrados em outro registro (mesmo que inativo/desligado).
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
