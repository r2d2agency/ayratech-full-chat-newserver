/*
nao deu certo ainda o salbar parcial nao  salva as fotos da insulficiente storage..nao tem como ja convbeter a foto em webp e ja subir no serivodr.
*/
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
...
const SystemStatus = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Status do Sistema Ayratech</h1>
            <p className="text-slate-500 mt-1">Monitoramento de Sincronização e Ponto</p>
          </div>
          <span className="px-2 py-1 rounded-full text-xs font-bold text-white bg-green-500">Sistema Online</span>
        </header>

        <Alert className="bg-blue-50 border-blue-200">
          <InfoIcon className="h-5 w-5 text-blue-600" />
          <AlertTitle className="text-blue-800 font-bold">Correção Definitiva de Horário (Brasília)</AlertTitle>
          <AlertDescription className="text-blue-700 space-y-2 text-sm">
            <p className="font-bold">O sistema agora utiliza o horário de Brasília em todos os níveis (Banco, Servidor e App).</p>
            <p>1. Batidas de hoje (20/08) com atraso de 3h serão corrigidas automaticamente no próximo reinício.</p>
            <p>2. O Consolidado agora lê as batidas em tempo real convertendo para Brasília.</p>
            <p className="font-bold text-slate-900 border-l-4 border-l-blue-600 pl-3 py-1 bg-white/50">
              AÇÃO: Reinicie o Backend no Easypanel AGORA para aplicar a correção final das batidas de hoje.
            </p>
          </AlertDescription>
        </Alert>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Diagnóstico do Problema
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  Batidas manuais estavam sofrendo conversão dupla de fuso horário (-3h ao salvar).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  O espelho consolidado (time_records) não estava detectando mudanças nas batidas brutas (time_punches).
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> Correções Aplicadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  Removida conversão de fuso no salvamento manual.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  Novo script de inicialização para forçar a reconsolidação de hoje.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <RefreshCw className="h-5 w-5 text-blue-500" /> Passo a Passo para Normalização
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 items-start border-b pb-4">
              <div className="bg-slate-100 text-slate-600 rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <p className="font-semibold text-slate-900">Reinicie o Backend</p>
                <p className="text-sm text-slate-600">No painel do Easypanel, clique em "Restart" no serviço do backend. Isso acionará a limpeza de duplicatas e a reconsolidação das 4 batidas de hoje.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border-b pb-4">
              <div className="bg-slate-100 text-slate-600 rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <p className="font-semibold text-slate-900">Verifique o RH {'>'} Ponto</p>
                <p className="text-sm text-slate-600">Após o reinício, as 4 batidas (Entrada, Intervalo, Retorno, Saída) devem aparecer corretamente no espelho do colaborador.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-slate-100 text-slate-600 rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <p className="font-semibold text-slate-900">Hoje (20/08)</p>
                <p className="text-sm text-slate-600">A rotina de boot agora também corrige automaticamente as batidas de hoje que entraram com atraso antes do reinício final.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SystemStatus;
