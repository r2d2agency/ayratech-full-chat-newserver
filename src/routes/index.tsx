import React from 'react';

export default function Index() {
  return (
    <div className="p-8 space-y-4 font-mono">
      <h1 className="text-2xl font-bold text-blue-600">AYRATECH SYSTEM STATUS & LOGS</h1>
      
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 shadow-2xl">
        <h2 className="text-blue-500 font-bold uppercase tracking-wider">[AJUSTE DE PONTO - 19/08]</h2>
        <div className="space-y-2 border-l-2 border-yellow-500 pl-4">
          <p className="text-yellow-400 font-bold">⚠️ NOVA CORREÇÃO GRANULAR (SOLICITADA):</p>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li><strong>Entrada:</strong> Ajustada em +3 horas (Corrigindo bagunça anterior)</li>
            <li><strong>Saída Intervalo:</strong> MANTIDA (Não mexer)</li>
            <li><strong>Retorno Intervalo:</strong> MANTIDA (Não mexer)</li>
            <li><strong>Saída Final:</strong> Ajustada em +3 horas</li>
          </ul>
          <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded">
            <p className="text-green-400 font-bold italic">✓ O sistema agora utiliza o horário oficial de Brasília via Banco de Dados (NOW()) para garantir precisão total a partir de agora.</p>
            <p className="text-white font-bold mt-2 underline text-lg">AÇÃO OBRIGATÓRIA: Reinicie o Backend no Easypanel para processar estes ajustes de hoje.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 p-6 rounded-xl font-mono text-sm text-slate-300 border border-slate-800 shadow-2xl mt-8">
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <span className="text-slate-500 text-xs uppercase tracking-widest">Update Log</span>
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
          <p className="text-red-500">[DB] employee_live_locations e history criados via init-db.js.</p>
          <p className="text-blue-400">[TIMEZONE] America/Sao_Paulo configurado globalmente no Backend.</p>
          <p className="text-green-400">[FIX-API] Erro 403 em Tolerância Global resolvido para Owners.</p>
          <p className="text-slate-500">... log compactado ...</p>
        </div>
      </div>
    </div>
  );
}
