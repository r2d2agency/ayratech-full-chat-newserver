# Plano de Implementação - Configuração de Tolerância de Ponto no RH

O objetivo deste plano é mover a configuração de tolerância para registro de ponto do painel de IA (configuração global da organização) para o perfil individual de cada colaborador no RH, permitindo um controle granular conforme solicitado.

## Alterações Propostas

### 1. Banco de Dados (Backend)
- Adicionar a coluna `punch_tolerance_minutes` na tabela `employees` (inteiro, padrão NULL).
- Se o valor for NULL, o sistema continuará usando a configuração global da organização (ou o padrão de 15 minutos).

### 2. Backend (API)
- **`backend/src/routes/rh.js`**:
    - Atualizar a normalização e os endpoints de criação/edição de colaboradores para aceitar e salvar o novo campo `punch_tolerance_minutes`.
- **`backend/src/routes/promotor.js`**:
    - Atualizar a lógica de validação no endpoint `/api/promotor/punch`.
    - A prioridade de busca da tolerância será:
        1. Colaborador (`employees.punch_tolerance_minutes`)
        2. Organização (`organizations.work_schedule.punch_tolerance_minutes`)
        3. Padrão do sistema (15 minutos)

### 3. Frontend (UI)
- **`src/pages/RHColaboradores.tsx`**:
    - Adicionar um novo campo "Tolerância para Ponto (min)" na aba "Profissional" do formulário de cadastro/edição de colaborador.
- **`src/components/settings/WorkSchedulePanel.tsx`**:
    - Manter o campo atual, mas atualizar a descrição para indicar que ele serve como valor padrão caso o colaborador não tenha uma tolerância específica definida.

## Detalhes Técnicos

- **Migração**: Será adicionada uma instrução `ALTER TABLE employees ADD COLUMN IF NOT EXISTS punch_tolerance_minutes INTEGER` no arquivo de inicialização do banco de dados e executada via API.
- **Lógica de Validação**: 
  ```javascript
  let tolerance = 15; // default
  if (employee.punch_tolerance_minutes !== null) {
      tolerance = employee.punch_tolerance_minutes;
  } else if (org.work_schedule.punch_tolerance_minutes) {
      tolerance = org.work_schedule.punch_tolerance_minutes;
  }
  ```

---
O sistema passará a respeitar a configuração individual definida na ficha do RH, resolvendo o problema de bloqueio indevido para colaboradores específicos.
