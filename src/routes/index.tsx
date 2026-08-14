import React from 'react';

export default function Index() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Instruções: Portal do Cliente (Marcas)</h1>
      
      <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
        <p className="text-blue-700 font-medium">Como Gerenciar Acessos das Marcas</p>
        <p className="text-sm text-blue-600 mt-2">
          Para que uma marca tenha seu próprio login e acesso restrito ao dashboard:
        </p>
        <ol className="text-xs text-blue-600 mt-2 list-decimal ml-4 space-y-2">
          <li>
            <strong>Crie/Edite a Marca:</strong> Vá em <i>Merchandising {" > "} Marcas</i>. Na edição da marca, use as checkboxes no final do formulário para definir o que ela pode ver (Fotos, Rotas, Estoque, etc).
          </li>
          <li>
            <strong>Crie o Usuário:</strong> Vá em <i>Administração {" > "} Organizações</i>. Clique em <strong>Novo Usuário</strong> ou edite um existente.
          </li>
          <li>
            <strong>Vincule a Marca:</strong> No campo <strong>Marca Vinculada (Cliente)</strong>, selecione a marca desejada.
          </li>
        </ol>
        <p className="text-xs text-blue-600 mt-3 italic">
          O sistema identifica o vínculo automaticamente no login e redireciona para o Portal do Cliente, escondendo o restante do menu.
        </p>
      </div>

      <div className="bg-slate-950 p-6 rounded-xl font-mono text-sm text-slate-300 border border-slate-800 shadow-2xl">
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <span className="text-slate-500 text-xs uppercase tracking-widest">Update Log</span>
          <div className="text-xs text-slate-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            ACTIVE
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="text-blue-400">[PORTAL] Adicionar uma tela de login e dashboard do Portal do Cliente com identidade da marca via token/link, garantindo que cada marca veja apenas seus dados.</p>
          <p className="text-green-400">[AUTH] Login inteligente com redirecionamento automático para MerchDashboard validado.</p>
          <p className="text-slate-400">[DOC] Documentação detalhada sobre como dar acesso às marcas adicionada em Merchandising {" > "} Marcas e na Central de Ajuda.</p>
          <p className="text-blue-400">[CHECKLIST] Trava de obrigatoriedade ao salvar produto individual removida (validação final mantida no fechamento da categoria).</p>
          <p className="text-green-400">[BACKEND] Corrigido erro 500 em relatórios de merchandising (função getOrgId inexistente substituída por getOrgInfo).</p>

        </div>
      </div>
    </div>
  );
}