/**
 * ##########################################
 * ### System Status & Logs
 * ### Sun, Aug 9, 2026
 * ##########################################
 * 
 * [LOG] na rota em execucao eu estou subindo fotos de contigencia e ela nao estao salvando nem mostra se deu certo apos selecionar e ver aprevia da foto so fecha a tela e nao mostra athumb da foto na rota
 * 
 * [LOG] nao conecta no banco de dados. vc ja verificaou a coenxao tem como fazer um teste
 * 
 * [BROWSER ERROR] beforeinstallpromptevent.preventDefault() called.
 * [API ERROR 500] POST https://api2.ayratech.app/api/auth/login
 * 
 * DIAGNOSIS:
 * 1. O erro 500 no login indica falha crítica de backend/banco.
 * 2. O problema nas fotos de contingência sugere falha no upload ou persistência (tabela de fotos ausente ou erro no /uploads).
 * 
 * AÇÃO NECESSÁRIA:
 * Você PRECISA fazer o REBUILD do backend no Easypanel. Sem isso, as correções de banco de dados que fiz no código não entrarão em vigor.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
