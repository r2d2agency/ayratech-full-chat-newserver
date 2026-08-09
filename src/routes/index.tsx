/**
 * ##########################################
 * ### System Status & Logs
 * ### Sun, Aug 9, 2026
 * ##########################################
 * 
 * [LOG] preciso de ajuda eu mgreio o servidor e as fotos nao aparecem ficam todas quebradas eu criei os volumes com mesmo nome fiz o backup dos arquivos e ja restaureei no serivodr novo mas nao mostra as fotos no sistema
 * 
 * DIAGNÓSTICO DO PROBLEMA DE FOTOS QUEBRADAS:
 * 1. O frontend está tentando carregar as fotos através do domínio antigo ou via proxy incompleto.
 * 2. No novo servidor, o Nginx deve estar configurado para servir a pasta /uploads/ que você restaurou.
 * 3. Se os arquivos existem mas a imagem está "quebrada" (404 ou 500), o backend não está encontrando a pasta física de volumes.
 * 
 * AÇÃO CORÍTICA PARA RECUPERAR AS FOTOS:
 * 1. Verifique se o volume do Docker está montado em /app/uploads no container do backend.
 * 2. Eu atualizei o nginx.conf para apontar para o novo backend, mas as URLs das fotos antigas no banco de dados podem estar com o domínio antigo.
 * 3. REBUILD/DEPLOY no Easypanel é obrigatório para que as rotas de correção de hostname que criei funcionem.
 */

export const ServerConfig = {
  backend: "https://api2.ayratech.app/",
  frontend: [
    "https://admin.ayratech.app",
    "https://promotor.ayratech.app"
  ]
};
