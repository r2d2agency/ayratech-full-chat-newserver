# Plano: Sincronização de Jornada de Trabalho com Escala Selecionada

Implementar a atualização automática da jornada de trabalho (horários e dias da semana) quando um colaborador for vinculado a uma escala específica no módulo de RH.

## Alterações

### Frontend
- **Página de Colaboradores (`src/pages/RHColaboradores.tsx`)**:
    - Ao clicar em "Vincular" uma escala, buscar os detalhes da escala selecionada.
    - Atualizar o estado do formulário (`form.work_schedule`) com os horários de entrada, saída e almoço da escala.
    - Mapear o tipo da escala (ex: 5x2, 6x1) para os seletores de dias da semana na jornada.

### Backend
- **Rotas de RH (`backend/src/routes/rh.js`)**:
    - Criar um novo endpoint `GET /api/rh/employees/:id/sync-schedule-journey` ou estender o endpoint de atualização para aceitar um sinalizador de sincronização.
    - Implementar a lógica de cópia dos parâmetros da `rh_schedules` para o campo `work_schedule` da tabela `employees`.

## Detalhes Técnicos
- O campo `work_schedule` no banco de dados armazena um JSON com a estrutura `{ days: { seg: bool, ... }, entry: "HH:mm", exit: "HH:mm", lunch_start: "HH:mm", lunch_end: "HH:mm" }`.
- As escalas (`rh_schedules`) possuem campos `entry_time`, `exit_time`, `break_start`, `break_end` e `schedule_type`.
- A sincronização facilitará o fechamento de folha, garantindo que o "horário contratual" (Jornada) bata com o "horário operacional" (Escala).
