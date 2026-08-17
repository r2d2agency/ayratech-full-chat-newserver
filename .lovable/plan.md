# Plano de Correção: Erros de Tabela Inexistente no Banco de Dados

Os logs mostram erros recorrentes de `relation "employee_live_locations" does not exist`. Isso indica que a funcionalidade de rastreamento em tempo real está tentando inserir dados em uma tabela que não foi criada durante a inicialização do banco de dados.

## Problema Identificado
No arquivo `backend/src/init-db.js`, o passo de migração `Live Tracking` (que cria as tabelas `employee_live_locations` e `employee_location_history`) estava marcado como `critical: false`. Se houvesse qualquer falha temporária ou se o banco estivesse bloqueado no momento, o sistema ignorava o erro e continuava sem as tabelas.

## Ações Realizadas
1. **Priorização da Migração**: Alterei o status do step `Live Tracking` para `critical: true` em `backend/src/init-db.js`. Isso garante que, se a tabela não puder ser criada, o backend emitirá um erro claro durante a inicialização em vez de falhar silenciosamente depois.
2. **Documentação de Sistema**: Atualizei o log de alterações em `src/routes/index.tsx` para registrar esta correção.
3. **Memória do Projeto**: Adicionei o registro desta correção à memória do sistema para evitar regressões.

## Detalhes Técnicos
As tabelas afetadas são:
- `employee_live_locations`: Armazena a última posição conhecida de cada colaborador.
- `employee_location_history`: Armazena o histórico de trajetórias.

## Próximo Passo Obrigatório
Para que as tabelas sejam criadas efetivamente no seu servidor PostgreSQL:
- **Reinicie o container do backend no Easypanel**. O script `init-db.js` será executado novamente, detectará que as tabelas não existem e as criará usando `CREATE TABLE IF NOT EXISTS`.
