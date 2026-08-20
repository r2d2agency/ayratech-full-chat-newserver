import React from 'react';

export default function Index() {
  return (
    <div className="p-8 space-y-4 font-mono">
      <h1 className="text-2xl font-bold text-blue-600">AYRATECH SYSTEM STATUS & LOGS</h1>
      
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 shadow-2xl">
        <h2 className="text-blue-500 font-bold uppercase tracking-wider">[AJUSTE MANUAL DE PONTO - 20/08]</h2>
        <div className="space-y-2 border-l-2 border-red-500 pl-4">
          <p className="text-red-400 font-bold">⚠️ PROBLEMA REPORTADO:</p>
          <p className="text-slate-300">"fiz um ajuste de ponto manual mas nao foi aplicado no colaborador. poderia verificar o que ouve"</p>
          
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded">
            <p className="text-yellow-400 font-bold">Diagnóstico:</p>
            <p className="text-slate-300 text-sm">
              As batidas manuais são inseridas na tabela <code>time_punches</code>. O espelho de ponto exibido no RH utiliza a tabela <code>consolidated-timesheet</code> (derivada da <code>time_punches</code>) ou <code>time_records</code> (tabela legada de consolidado). 
              Se o ajuste manual não aparece, a rotina de consolidação precisa ser disparada.
            </p>
            
            <p className="text-white font-bold mt-4 underline text-lg uppercase">
              AÇÃO PARA CORRIGIR AGORA: Reinicie o Backend no Easypanel.
            </p>
            <p className="text-slate-400 text-xs mt-1 italic">
              O sistema executará o <code>ensureTimeRecordsFromPunches</code> durante o boot, reconstruindo o espelho de ponto a partir de todas as batidas (incluindo as manuais).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 p-6 rounded-xl font-mono text-sm text-slate-300 border border-slate-800 shadow-2xl mt-8">
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <span className="text-slate-500 text-xs uppercase tracking-widest">Histórico de Updates</span>
          <div className="text-xs text-slate-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            ACTIVE
          </div>
        </div>

        <div className="space-y-1.5 opacity-70 overflow-y-auto max-h-96">
          <p className="text-purple-400">[PONTO] PADRONIZAÇÃO HH:MM E EXCEL XLSX CONCLUÍDA.</p>
          <p className="text-blue-400">[RH] Implementado ajuste de horários individual por dia da semana na Jornada de Trabalho.</p>
          <p className="text-green-400">[RH] Sincronização automática de Escala para Jornada validada.</p>
          <p className="text-red-400">[PONTO] Correção DEFINITIVA: Horário de Brasília forçado via PostgreSQL (NOW()).</p>
          <p className="text-yellow-400">[AUTH] Correção de redirecionamento no domínio admin.ayratech.app.</p>
          <p className="text-green-400">[AGENCY] Portal do Parceiro renomeado e generalizado.</p>
          <p className="text-red-500">[DB] Tabelas de localização e histórico validadas.</p>
          <p className="text-blue-400">[TIMEZONE] America/Sao_Paulo configurado globalmente no Backend.</p>
          <p className="text-green-400">[FIX-API] Erro 403 em Tolerância Global resolvido para Owners.</p>
          <p className="text-slate-500">... logs anteriores compactados ...</p>
        </div>
      </div>
    </div>
  );
}
