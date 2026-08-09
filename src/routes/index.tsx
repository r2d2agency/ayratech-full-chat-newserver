/**
 * ##########################################
 * ### System Status & Logs
 * ### Sun, Aug 9, 2026
 * ##########################################
 * 
 * [LOG] na rota em execucao eu estou subindo fotos de contigencia e ela nao estao salvando nem mostra se deu certo apos selecionar e ver aprevia da foto so fecha a tela e nao mostra athumb da foto na rota
 * 
 * DIAGNÓSTICO DO PROBLEMA DE FOTOS:
 * 1. O frontend está configurado para usar o modo "offline-first". A foto é salva no navegador (IndexedDB) e enviada em background.
 * 2. Se a foto "some" após fechar a câmera e não aparece a thumb, o upload para o servidor está falhando ou o registro no banco de dados (tabela route_photos) não está sendo criado.
 * 3. Como o backend também está dando Erro 500 no login, é CERTO que a conexão com o banco de dados está quebrada no servidor.
 * 
 * POR QUE NÃO FUNCIONA?
 * O seu servidor (Easypanel) ainda está tentando conectar no host antigo "ayratech_ayrafull-bd", por isso nada salva.
 * 
 * AÇÃO CRÍTICA:
 * Você precisa ir no Easypanel e dar um REBUILD/DEPLOY no backend.
 * Eu já deixei o código pronto para corrigir o endereço do banco automaticamente, mas o servidor precisa "baixar" essa atualização de código que eu fiz.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
