# Plano de Resolução: Visibilidade de Marcas na Criação de Rotas

O usuário relatou que, após cadastrar uma marca, vincular produtos e PDVs, e configurar o mix por PDV, a marca ainda não aparece na lista de seleção ao tentar criar uma rota para um promotor.

## Diagnóstico

No sistema Ayratech, a visibilidade das marcas na tela de criação de rotas (`MerchRotas.tsx`) é filtrada com base no vínculo entre a Marca e o PDV selecionado. Se o PDV for selecionado primeiro, o componente `RouteFormDialog` filtra as marcas disponíveis consultando apenas aquelas vinculadas àquele PDV específico via tabela `merch_pdv_brands`.

Mesmo que o mix de produtos tenha sido feito, se o vínculo direto entre Marca e PDV não estiver presente na tabela `merch_pdv_brands`, a marca não aparecerá no seletor.

## Ações Propostas

### 1. Documentação de Ajuda (Frontend)
- Adicionar uma seção no menu de ajuda ou uma dica visual no formulário de rotas explicando que a marca precisa estar explicitamente vinculada ao PDV.
- Atualizar a `src/pages/RHHelp.tsx` (ou criar uma similar para Merchandising) com este passo a passo.

### 2. Melhoria no Backend (Opcional/Segurança)
- Verificar se o endpoint de listagem de marcas (`/api/merchandising/brands`) está aplicando filtros que possam estar escondendo a marca indevidamente.

### 3. Memória do Projeto
- Salvar esta regra de negócio na memória do projeto para evitar confusões futuras. (Já realizado)

## Detalhes Técnicos

- O componente `MerchRotas.tsx` utiliza o hook `usePdvBrands(primaryPdvId)` para filtrar `availableBrands`.
- O filtro é: `const isLinkedToPdv = pdvBrands.some((pb: any) => pb.brand_id === b.id);`
- Para resolver o problema do usuário, ele deve garantir que a marca esteja na lista de "PDVs Vinculados" no cadastro da marca.

## Próximos Passos
1. Implementar um aviso visual no `RouteFormDialog` dentro de `MerchRotas.tsx` quando um PDV é selecionado mas nenhuma marca vinculada é encontrada, ou um link direto para o cadastro de vínculos.
