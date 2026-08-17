import React from 'react';

export default function Index() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Personalização do Sistema & Relatórios</h1>
      
      <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg mb-6">
        <p className="text-green-700 font-medium italic">✓ Branding implementado: Cor primária, Logo da Agência no PDF, Rodapé customizado e Acesso seguro para Marcas.</p>
      </div>


      <h1 className="text-xl font-semibold mt-8">Instruções: Portal do Cliente (Marcas)</h1>

      
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
          <p className="text-blue-400">[RH] Implementado ajuste de horários individual por dia da semana na Jornada de Trabalho (ex: Seg a Sex 07-17h, Sáb 07-11h).</p>
          <p className="text-green-400">[RH] Sincronização automática de Escala para Jornada: ao vincular uma escala a um colaborador, a Jornada de Trabalho (JSON) é atualizada instantaneamente para refletir os horários da escala.</p>
          <p className="text-blue-400">[BACKEND] Validação de ponto do promotor atualizada para respeitar configurações de horários diferenciados por dia.</p>
          <p className="text-green-400">[PORTAL] Adicionar uma tela de login e dashboard do Portal do Cliente com identidade da marca via token/link, garantindo que cada marca veja apenas seus dados.</p>
          <p className="text-blue-400">[AUTH] Login inteligente com redirecionamento automático para MerchDashboard validado.</p>
          <p className="text-slate-400">[DOC] Documentação detalhada sobre como dar acesso às marcas adicionada em Merchandising {" > "} Marcas e na Central de Ajuda.</p>
          <p className="text-blue-400">[CHECKLIST] Trava de obrigatoriedade ao salvar produto individual removida (validação final mantida no fechamento da categoria).</p>
          <p className="text-green-400">[BACKEND] Corrigido erro 500 em relatórios de merchandising (função getOrgId inexistente substituída por getOrgInfo).</p>
          <p className="text-blue-400">[PONTO] Corrigido fuso horário na validação do ponto (ajustado para America/Sao_Paulo de forma consistente).</p>
          <p className="text-green-400">[RELATORIOS] Filtros de Marca, PDV e Promotor agora são pesquisáveis (digitar para buscar em vez de rolar a lista).</p>
          <p className="text-blue-400">[EXPORT] Novo botão "Exportar Excel" (.xlsx) com colunas nomeadas em português, largura automática e filtro no cabeçalho — CSV e PDF usam as mesmas colunas.</p>
          <p className="text-green-400">[RELATORIOS] Guia Produto agora lista os promotores que executaram cada produto (com contagem), incluído também nas exportações.</p>
          <p className="text-blue-400">[PDF] Exportações agora ocultam IDs internos (só o nome do produto), com cabeçalhos, datas (dd/mm/aaaa), números e status em português.</p>
          <p className="text-green-400">[RELATORIOS] Guia Produto agora exibe a Marca e permite separar a listagem por PDV (uma linha por produto/PDV).</p>
          <p className="text-blue-400">[EXPORT] Novo botão "Exportar (personalizar colunas)" — escolha exatamente quais informações vão para Excel, CSV ou PDF antes de gerar.</p>
          <p className="text-green-400">[APP/RH] Ponto Inteligente: O aplicativo agora detecta automaticamente turnos sem intervalo (ex: Sábados 07-11h) e remove as opções de "Saída/Retorno Intervalo", permitindo registrar apenas Entrada e Saída.</p>
          <p className="text-blue-400">[RH] Correção no cálculo de horas: intervalos vazios no cadastro de jornada individual não são mais subtraídos do total de horas trabalhadas.</p>
          <p className="text-green-400">[DOMAIN] Módulo de Controle de Acesso isolado: configurado redirecionamento inteligente para access.ayratech.app.</p>
          <p className="text-blue-400">[PORTAL] Links de acesso ao Portal (Rede, Marcas e Onboarding) atualizados para o domínio access.ayratech.app.</p>
          <p className="text-green-400">[FIX] Erro 401 no login do Supermercado resolvido: corrigida falha de sintaxe no script de inicialização do banco de dados e habilitada busca por e-mail ou nome.</p>
          <p className="text-blue-400">[AUTH] Correção de redirecionamento no domínio admin.ayratech.app para suportar os módulos de acesso legado.</p>
          <p className="text-green-400">[AUTH] Erro 401 resolvido no Portal do Supermercado: expandida a busca de usuários para aceitar login via 'username' e adicionados logs de depuração no servidor.</p>
          <p className="text-blue-400">[LOGS] Erro 401 em logs de cliente resolvido: rota /api/rh/client-logs tornada pública para permitir registros de erros antes da autenticação.</p>
          <p className="text-red-400">[DB] Corrigido erro "relation employee_live_locations does not exist": Step de Live Tracking marcado como CRÍTICO no init-db.js para garantir criação das tabelas.</p>
          <p className="text-green-400">[AGENCY] Corrigido erro 404 em solicitações de rede da agência: rotas de 'network-requests' mapeadas corretamente sob o prefixo /api/access-control.</p>
          <p className="text-blue-400">[AGENCY] Corrigido erro de "Marca Vazia" na Solicitação de Acesso: mapeamento do backend corrigido para a tabela merch_brands.</p>
          <p className="text-green-400">[PORTAL] Generalização do Portal da Agência: agora renomeado para "Portal do Parceiro" para permitir acesso a qualquer profissional ou prestador de serviço.</p>
        </div>
      </div>
    </div>
  );
}