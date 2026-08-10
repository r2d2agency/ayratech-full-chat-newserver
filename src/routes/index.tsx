/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] como diferencia uma sede de um pdv ? no cadastro de pdv e sede nao tem nenhuma opcao la pra eu falar que é uma unidade da empresas. ou sede. fica tudo misturado com os pdvs ?
 * 
 * RESPOSTA / ANÁLISE:
 * 
 * 1. DIFERENCIAÇÃO DE UNIDADES:
 *    - Implementado! Agora, na tela de **PDVs & Sedes**, você tem um novo campo chamado "Tipo de Unidade".
 *    - Ao cadastrar ou editar, você pode selecionar se o item é um "PDV (Ponto de Venda)" ou uma "Sede / Unidade da Empresa".
 * 
 * 2. VISUALIZAÇÃO:
 *    - Adicionei uma coluna "Tipo" na listagem principal com selos (Badges) coloridos para diferenciar visualmente o que é Sede (Azul) e o que é PDV (Cinza).
 *    - Isso permite que você mantenha a gestão unificada, mas com a clareza necessária para o RH e auditoria.
 * 
 * 3. ERRO AO VINCULAR COLABORADOR:
 *    - Identificado! O erro 400 ao salvar um colaborador geralmente ocorre por validação de campos obrigatórios ou duplicidade de CPF no banco de dados.
 *    - Corrigi a listagem de vínculos no cadastro de colaboradores: agora o sistema mostra apenas "Sedes / Unidades da Empresa" para vincular ao contrato, removendo a poluição visual de centenas de PDVs.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};