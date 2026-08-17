# Plano: Padronização de Horas e Exportação XLSX (HH:MM)

Corrigir a exibição de horas trabalhadas de decimal (`8.9h`) para o padrão `HH:MM` (ex: `08:52`), centralizando a lógica de cálculo em minutos inteiros e garantindo a exportação correta para Excel.

## Alterações no Backend

### `backend/src/routes/rh.js`
- Adicionar função auxiliar `formatMinutesToHHMM(minutes)` para gerar strings `HH:MM`.
- Ajustar a rota `/consolidated-timesheet`:
  - Calcular `raw_minutes` em vez de `raw_hours`.
  - Retornar `total_minutes` e `formatted_hours` (`HH:MM`).
  - Garantir que registros incompletos somem apenas segmentos válidos.

## Alterações no Frontend

### `src/pages/RHPonto.tsx`
- Atualizar a exibição na tabela "Consolidado": remover o sufixo "h" e usar o formato `HH:MM`.
- Atualizar a aba "Manual": garantir que a coluna total use `HH:MM`.
- **Refatorar Exportação XLSX**:
  - Incluir colunas: Matrícula, CPF, PIS.
  - Formatar horários de batida como `hh:mm`.
  - Formatar "Horas Trabalhadas" com o padrão `[h]:mm` para compatibilidade com totais mensais no Excel.
  - Garantir que os valores sejam exportados como tipos de tempo do Excel onde possível, ou strings formatadas corretamente para soma.

## Testes de Validação
- **Caso 1**: 07:29/12:56 + 14:08/17:33 = `08:52`.
- **Caso 2**: 08:00/11:05 + 12:06/16:31 = `07:30`.
- **Caso 3**: 07:51/13:26 + 15:44/sem saída = `05:35`.
- **Caso 4**: Exportar 168h35m para Excel e verificar formato `168:35`.
