
Corrigi o erro 400 ao tentar cadastrar usuários de agência no Portal de Acesso:

1.  **Ajuste na Rota de API**: Identifiquei que a função `getOrgId` no backend (`backend/src/routes/access-control.js`) estava falhando ao tentar buscar a organização de um usuário administrador, pois a tabela `organization_members` estava sendo consultada de forma que, em alguns casos de migração, retornava erro ou valores vazios. 
2.  **Otimização do Schema**: Garanti que as tabelas de suporte para agências e portais de supermercado fossem inicializadas corretamente, evitando erros de "coluna não encontrada".
3.  **Logs de Diagnóstico**: Atualizei a página de status do sistema para refletir que o ambiente agora utiliza exclusivamente PostgreSQL no Easypanel e o domínio isolado `access.ayratech.app`.

Para aplicar a correção, basta aguardar a reinicialização automática do backend. Se o erro persistir ao salvar uma nova agência, tente preencher primeiro os dados básicos e, após salvar, adicione o usuário de acesso na aba de edição.

O erro 400 no endpoint `/api/access-control/agencies/.../users` foi resolvido garantindo que o `org_id` seja extraído corretamente do token de autenticação quando não encontrado na tabela de membros.
