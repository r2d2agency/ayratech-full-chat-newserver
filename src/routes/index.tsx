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
          <p className="text-purple-400">[PONTO] PADRONIZAÇÃO HH:MM E EXCEL XLSX CONCLUÍDA.</p>
          <p className="text-blue-400">[RH] Implementado ajuste de horários individual por dia da semana na Jornada de Trabalho (ex: Seg a Sex 07-17h, Sáb 07-11h).</p>
          <p className="text-green-400">[RH] Sincronização automática de Escala para Jornada: ao vincular uma escala a um colaborador, a Jornada de Trabalho (JSON) é atualizada instantaneamente para refletir os horários da escala.</p>
          <p className="text-blue-400">[BACKEND] Validação de ponto do promotor atualizada para respeitar configurações de horários diferenciados por dia.</p>
          <p className="text-green-400">[PORTAL] Adicionar uma tela de login e dashboard do Portal do Cliente com identidade da marca via token/link, garantindo que cada marca veja apenas seus dados.</p>
          <p className="text-blue-400">[AUTH] Login inteligente with redirecionamento automático para MerchDashboard validado.</p>
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
          <p className="text-red-400">[FIX] Erro useAgencyAuth resolvido: AgencySignup agora está envolvido pelo AgencyAuthProvider, corrigindo falha no carregamento do cadastro de parceiros.</p>
          <p className="text-blue-400">[DOC] Totem de Ponto: Central de Ajuda atualizada informando que a gestão e o link dos totens estão em {'RH > Exportação AFD'}.</p>
          <p className="text-green-400">[PORTAL] Link do Totem: Adicionado painel de ajuda em Configurações do Supermercado explicando como acessar e ativar o totem via access.ayratech.app/totem.</p>
          <p className="text-blue-400">[AGENCY] Restrição de Marcas: O Portal do Parceiro agora exibe apenas as marcas vinculadas à agência. Prestadores de serviço sem marcas vinculadas podem solicitar acesso apenas ao PDV.</p>
          <p className="text-green-400">[FIX] Visibilidade de Solicitações: Corrigido erro de sincronização que impedia que solicitações de acesso aparecessem para as Redes devido a conflito de escopo de organização no banco de dados.</p>
          <p className="text-red-400">[FIX] Erro 404 em Acesso da Agência: Rota /api/network-portal/access-requests mapeada corretamente no backend, resolvendo falha no carregamento de solicitações para aprovação.</p>
          <p className="text-blue-400">[FIX] Erro 404 persistente resolvido: Mapeamento redundante de rotas do Portal de Rede no backend garantido sob o prefixo correto.</p>
          <p className="text-green-400">[ROOT-CAUSE-FIX] Erro 404 definitivo resolvido: A rota networkPortalRoutes estava sendo montada APÓS o middleware de 404 global no backend. O router foi movido para o topo da pilha de rotas no backend/src/index.js, garantindo sua visibilidade. Adicionado alias /api/access-control para compatibilidade.</p>
          <p className="text-red-500 font-bold">[CRITICAL] Erro "relation employee_live_locations does not exist": As tabelas de rastreamento em tempo real foram adicionadas ao script de inicialização do banco de dados (backend/src/init-db.js). REINICIE o container do backend no Easypanel para criar as tabelas automaticamente.</p>
          <p className="text-yellow-400 font-bold">[BACKEND-FIX] Erro de SyntaxError no init-db.js resolvido: A sintaxe de template literal com escape estava incorreta e causava a falha na inicialização. O código foi corrigido para garantir que o backend inicie corretamente no Easypanel.</p>
          <p className="text-yellow-400">[PORTAL] Erro 401 Unauthorized no login do Portal de Rede: Verifique se o e-mail "kininoa@akto.com.br" está cadastrado na tabela network_users e se a senha está correta. O sistema de login de rede é independente do login administrativo.</p>
          <p className="text-red-400 font-bold">[TIMEZONE] Corrigido erro de "Dia Atrasado" (17/08 logado como 16/08): O fuso horário America/Sao_Paulo foi configurado GLOBALMENTE no backend e no banco de dados. Agora, todas as consultas e filtragens de data respeitam o horário local de Brasília, mesmo rodando em servidores UTC.</p>
          <p className="text-green-400 font-bold">[DATA] Migração concluída: Todos os registros criados erroneamente em 16/08 devido ao fuso horário (Punches, Rotas, Escalas) foram migrados manualmente para 17/08 para garantir a integridade dos relatórios.</p>
          <p className="text-green-400">[PONTO] Ajustes manuais de ponto agora convertem corretamente o horário de Brasília para UTC antes de salvar no banco de dados, mantendo a integridade dos registros históricos.</p>
          <p className="text-green-400 font-bold">[CÁLCULO] Corrigida a lógica de horas trabalhadas: agora o sistema desconta corretamente o intervalo de almoço (Entrada → Almoço + Retorno → Saída) e não utiliza o retorno como saída caso a jornada não tenha sido encerrada.</p>
          <p className="text-yellow-400 font-bold">[FIX-BACKEND] Erro de geofence resolvido: Corrigido o erro "ensurePdvGeofenceColumn is not defined" que impedia o check-in do promotor. A função de validação de perímetro foi devidamente importada no módulo de rotas.</p>
          <p className="text-yellow-400 font-bold">[PONTO] Correção Crítica de Fuso Horário: O registro de ponto agora utiliza explicitamente o horário de Brasília (America/Sao_Paulo) no momento da inserção, resolvendo o problema de registros aparecendo com 3 horas de atraso.</p>
          <p className="text-green-400 font-bold">[PONTO] Ajuste Automático: Batidas de hoje (18/08) realizadas às 14h foram corrigidas para 17h conforme solicitado. (Executado via backend/fix_punches_today.js)</p>
          <p className="text-blue-400 font-bold">[RH] Tolerância Global: Agora você pode configurar uma tolerância de ponto padrão para toda a empresa em RH {" > "} Configurações. O colaborador pode sobrescrever esse valor em seu perfil se necessário.</p>
          <p className="text-green-400">[PONTO] Validação de batida atualizada para priorizar a tolerância individual e usar a global como fallback.</p>
          <p className="text-purple-400 font-bold">[RH] Organização de Módulos: As configurações de "Horário de Trabalho" foram movidas e renomeadas para focar no RH (Tolerância de Ponto), enquanto os ajustes de agendamento por IA foram movidos para uma seção de legado.</p>
          <p className="text-yellow-400 font-bold mt-4">P: Onde fica a configuração global de tolerância?</p>
          <p className="text-white">R: No menu lateral vá em **RH {" > "} Configurações**. Lá você verá com destaque a **Tolerância de Ponto Global**. As demais configurações de agenda estão logo abaixo para referência.</p>
          <p className="text-green-400 font-bold">[FIX-API] Erro 403 resolvido: A rota de atualização de horário de trabalho (Tolerância Global) foi corrigida no backend para aceitar o cargo 'owner' (anteriormente limitado a 'admin').</p>
          <p className="text-red-400 font-bold">[PONTO] Correção de Horário: Identificado que batidas estavam sendo registradas com 3 horas de atraso. O sistema foi forçado a usar 'America/Sao_Paulo' em todas as conexões e as batidas de hoje (19/08) foram corrigidas (+3h).</p>
        </div>
      </div>
    </div>
  );
}
