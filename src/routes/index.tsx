/**
 * ##########################################
 * ### System Status & Logs
 * ### Mon, Aug 10, 2026
 * ##########################################
 * 
 * [LOG] pode or esse procedimento no manual documentacao do rh de como habilitar o ponto. local e como escolher o usuario que vai ter acesso, como criar a sede
 * 
 * DOCUMENTAÇÃO RH - CONFIGURAÇÃO DE PONTO E SEDE:
 * 
 * 1. CRIAR A SEDE:
 *    - No painel administrativo, acesse Gestão de Unidades/Locais.
 *    - Cadastre a Unidade com as coordenadas GPS da sede para validação de cerca eletrônica (Geofencing).
 * 
 * 2. HABILITAR PONTO LOCAL/FACIAL:
 *    - No cadastro do Colaborador, ative a opção "Permitir Ponto Mobile" ou "Reconhecimento Facial".
 *    - Vincule o colaborador à unidade "Sede" criada anteriormente.
 * 
 * 3. ESCOLHER USUÁRIO COM ACESSO:
 *    - Em Gestão de Permissões/Perfis, atribua ao usuário o perfil que permite acesso ao módulo de Ponto.
 *    - Certifique-se de que o dispositivo do colaborador tenha permissão de Câmera e GPS ativa no navegador.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
