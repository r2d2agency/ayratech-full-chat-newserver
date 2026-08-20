import React from 'react';

export default function Index() {
  return (
    <div className="p-8 space-y-4 font-mono">
      <h1 className="text-2xl font-bold text-blue-600">AYRATECH SYSTEM STATUS & LOGS</h1>
      
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 shadow-2xl">
        <h2 className="text-blue-500 font-bold uppercase tracking-wider">[CORREÇÃO FINAL TIMEZONE & AJUSTE MANUAL - 20/08]</h2>
        <div className="space-y-2 border-l-2 border-green-500 pl-4">
          <p className="text-green-400 font-bold">✅ AÇÕES REALIZADAS:</p>
          <ul className="text-slate-300 text-sm list-disc list-inside space-y-2">
            <li><strong>Ajuste Manual:</strong> Removida a conversão de fuso horário na gravação de ajustes manuais. O sistema agora salva exatamente a hora que você digita sem subtrair nada.</li>
            <li><strong>Reparação Granular:</strong> Script de boot atualizado para corrigir as batidas de 19/08 (Entrada e Saída +3h) e reconstruir o espelho do colaborador.</li>
            <li><strong>Consolidação:</strong> O boot agora força a sincronização total das batidas com o espelho, resolvendo o erro de registros duplicados no visual.</li>
          </ul>
          
          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded">
            <p className="text-blue-400 font-bold">⚠️ PRÓXIMO PASSO OBRIGATÓRIO:</p>
            <p className="text-slate-200">
              Para que essas mudanças entrem em vigor e o espelho seja limpo/corrigido, você <strong>PRECISA REINICIAR O BACKEND NO EASYPANEL</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 shadow-2xl">
        <h2 className="text-blue-500 font-bold uppercase tracking-wider">[CONFIGURAÇÃO ATUAL]</h2>
        <div className="space-y-2 text-sm">
          <p className="text-slate-400">Timezone DB: <span className="text-green-400">America/Sao_Paulo</span></p>
          <p className="text-slate-400">Backend: <span className="text-blue-400">https://api2.ayratech.app/</span></p>
          <p className="text-slate-400">Admin: <span className="text-purple-400">admin.ayratech.app</span></p>
        </div>
      </div>
    </div>
  );
}
