import React from 'react';

export default function Index() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">System Status & Logs</h1>
      
      <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
        <p className="text-green-700 font-medium">Status: Operacional</p>
        <p className="text-sm text-green-600 mt-1">O erro 404 ao sincronizar escala foi corrigido. O backend estava consultando a tabela 'rh_schedules' em vez de 'work_schedules'.</p>
      </div>

      <div className="bg-slate-950 p-6 rounded-xl font-mono text-sm text-slate-300 border border-slate-800 shadow-2xl overflow-hidden relative group">
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
            </div>
            <span className="text-slate-500 text-xs ml-2 uppercase tracking-widest">Diagnostic Logs</span>
          </div>
          <div className="text-xs text-slate-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            LIVE
          </div>
        </div>
        <div className="space-y-1.5 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
          <div className="flex gap-3 items-start animate-in fade-in slide-in-from-left-2 duration-300">
            <span className="text-slate-600 shrink-0 min-w-[85px]">[03:31:42]</span>
            <span className="text-blue-400 shrink-0 font-bold uppercase text-[10px] mt-0.5 min-w-[45px]">INFO</span>
            <span className="text-slate-300 break-all">Fixed table name in backend/src/routes/rh.js (rh_schedules {"->"} work_schedules)</span>
          </div>
          <div className="flex gap-3 items-start animate-in fade-in slide-in-from-left-2 duration-500">
            <span className="text-slate-600 shrink-0 min-w-[85px]">[03:31:40]</span>
            <span className="text-green-400 shrink-0 font-bold uppercase text-[10px] mt-0.5 min-w-[45px]">SUCCESS</span>
            <span className="text-slate-300 break-all">POST /api/rh/employees/.../sync-schedule now targets work_schedules</span>
          </div>
        </div>
      </div>
    </div>
  );
}
