/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] nao deu certo  fui em filial ou sede ele deixa eu cadastrar tem um botao geraciar no cadastro do colaborador. mas nao é o mesmo que ciei la em pdv e sede?
 * 
 * RESPOSTA / ANÁLISE:
 * 
 * 1. UNIFICAÇÃO DE SEDES/FILIAIS:
 *    - Você tem razão. O sistema tinha uma lista separada de "Filiais" no RH e "PDVs & Sedes" no Merchandising.
 *    - Ajustei o cadastro do colaborador para que o botão "Gerenciar" agora leve diretamente para a tela de **PDVs & Sedes** que você já configurou.
 *    - Assim, a "Sede" que você criou lá será a mesma que você vincula ao colaborador aqui.
 * 
 * 2. COMO VINCULAR:
 *    - Vá em **RH > Colaboradores**, edite o colaborador.
 *    - No campo "Filial / Sede", selecione a unidade que você cadastrou previamente em "PDVs & Sedes".
 *    - Se precisar criar uma nova Sede, use o link "Configurar Sedes" que agora aponta para o lugar correto.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};