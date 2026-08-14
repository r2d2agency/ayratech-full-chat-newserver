import React from 'react';

export default function Index() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">System Status & Logs</h1>
      
      <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
        <p className="text-blue-700 font-medium">Arquitetura Merchandising: Clientes da Organização (Marcas)</p>
        <p className="text-sm text-blue-600 mt-1">
          No sistema Ayratech Merchan, as **Marcas** são os clientes da sua organização (ex: Nestlé, Coca-Cola). 
          Cada marca visualiza apenas os PDVs, produtos e promotores vinculados a ela.
        </p>
        <ul className="text-xs text-blue-600 mt-2 list-disc ml-4 space-y-1">
          <li><strong>Dashboard da Marca:</strong> Quando um usuário está vinculado a uma marca, o dashboard filtra automaticamente os dados para exibir apenas as execuções, fotos e roteiros dessa marca específica.</li>
          <li><strong>Gestão de Clientes:</strong> Gerencie seus clientes em <i>Merchandising {' > '} Marcas</i>. Vincule as marcas aos PDVs para que os promotores saibam o que executar em cada loja.</li>
          <li><strong>Acesso Externo:</strong> Para dar acesso ao seu cliente, crie um usuário em <i>Administração {' > '} Organizações</i>. No formulário de criação/edição do membro, selecione a marca no campo <strong>Vincular a Marca (Portal do Cliente)</strong>.</li>
        </ul>
      </div>

      <div className="bg-slate-950 p-6 rounded-xl font-mono text-sm text-slate-300 border border-slate-800 shadow-2xl overflow-hidden relative group">
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
            </div>
            <span className="text-slate-500 text-xs ml-2 uppercase tracking-widest">Merchan Architecture</span>
          </div>
          <div className="text-xs text-slate-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            GUIDE
          </div>
        </div>
        <div className="space-y-1.5 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
          <div className="flex gap-3 items-start animate-in fade-in slide-in-from-left-2 duration-300">
            <span className="text-slate-600 shrink-0 min-w-[85px]">[SYSTEM]</span>
            <span className="text-blue-400 shrink-0 font-bold uppercase text-[10px] mt-0.5 min-w-[45px]">FILTER</span>
            <span className="text-slate-300 break-all">Portal do Cliente: Implementado isolamento total e controle de visibilidade por marca. MerchDashboard e Sidebar agora respeitam travas de acesso.</span>
          </div>
          <div className="flex gap-3 items-start animate-in fade-in slide-in-from-left-2 duration-500">
            <span className="text-slate-600 shrink-0 min-w-[85px]">[READY]</span>
            <span className="text-green-400 shrink-0 font-bold uppercase text-[10px] mt-0.5 min-w-[45px]">SUCCESS</span>
            <span className="text-slate-300 break-all">MerchMarcas atualizado com painel de permissões. Segurança brand_id forçada no backend.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
