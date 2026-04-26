---
sidebar_position: 3
---

# Módulo Louvor

O módulo **Louvor** é o fluxo do 7CG para apresentação de canções e hinos em cultos, concertos e outras produções que precisam de letras no ecrã.

Combina:

- Um seletor de hinário
- Pesquisa de hinos
- Saída no ar movida por templates
- Apresentação versículo a versículo ou por grupos
- Controlos de navegação para o grupo de letras atual
- Integração direta com o estado do rundown e do Companion

## Visão geral

O módulo Louvor permite-lhe:

- Selecionar um hinário
- Pesquisar hinos por número ou título
- Carregar um template de letras
- Apresentar um versículo de cada vez ou agrupar vários
- Navegar para trás e para a frente na canção atual
- Parar a saída atual de letras
- Adicionar o hino configurado ao rundown

## Componentes da interface

### Seletor de template

O módulo pode mostrar uma lista pendente **Template** quando a seleção de templates está ativada nas definições de Louvor.

As entradas de template vêm da lista do CasparCG e são filtradas pela família de templates de letras. Quando disponível, o 7CG mostra o título e descrição traduzidos do template em vez de apenas o ID.

Se a seleção de templates estiver oculta, o módulo usa automaticamente o template predefinido.

### Seletor de hinário

A lista pendente **Hinário** seleciona o hinário ou coleção de canções que o módulo deve folhear.

O 7CG carrega primeiro os metadados do hinário e depois as canções a pedido. Se um hinário predefinido estiver configurado, é selecionado automaticamente.

### Pesquisa de hino

A combobox **Hino** suporta filtro livre por:

- Número do hino
- Título da canção

Permite saltar rapidamente para uma canção mesmo num hinário grande.

Enquanto os dados das canções carregam, o módulo mostra um estado de carregamento em vez de uma lista vazia.

### Pré-visualização das letras

Quando uma canção está selecionada, o módulo mostra:

- O grupo de letras **atual**
- O grupo de letras **seguinte**, quando existe

Útil em operação ao vivo porque o operador vê tanto o que está no ar como o que vai a seguir.

## Reprodução e navegação

O módulo Louvor usa um fluxo de template CG:

- **Lançar** faz o carregamento inicial do template e coloca o primeiro grupo no ar
- **Recuar** atualiza o template para o grupo anterior
- **Início** reinicia para o primeiro grupo
- **Avançar** atualiza o template para o grupo seguinte
- **Parar** retira as letras do ar

Após o lançamento, a navegação atualiza o template existente em vez de o recarregar do zero.

## Apresentação por grupos

O módulo Louvor não tem de mostrar apenas um versículo de cada vez.

A definição **Linhas por ecrã** controla quantos versículos são agrupados em cada passo no ar:

- `1` significa que cada versículo é mostrado separadamente
- Valores mais altos combinam vários versículos num único bloco

Quando vários versículos são agrupados, o 7CG junta-os com quebras de linha e trata o grupo como um único passo de navegação. A pré-visualização segue a mesma lógica.

## Definições

A janela de definições de Louvor inclui quatro opções importantes:

### Template predefinido

O template a usar por defeito quando o 7CG arranca.

### Hinário predefinido

O hinário a selecionar automaticamente quando possível.

### Seleção de template

Controla se a lista pendente de Template aparece na UI do módulo:

- **Mostrar** mantém o seletor visível
- **Ocultar** usa sempre o template predefinido

### Linhas por ecrã

Controla quantos versículos são agrupados em cada passo de letras no ar.

Útil para adaptar a:

- Ecrãs de projeção grandes
- Templates estilo oráculo
- Requisitos de legibilidade para o público
- Estilos visuais diferentes para emissão online versus apresentação na sala

Blocos de hino do rundown podem substituir este valor com uma definição **"linhas por ecrã" por bloco** na janela de edição, para que um hino concreto se divida de forma diferente do valor global.

## Edição em massa de versículos

Pode editar muitos versículos de um hino ao mesmo tempo em vez de abrir cada janela de versículo. Abra um hino para edição e use a janela de edição em massa para rever vários versículos de uma vez — útil para corrigir erros tipográficos, normalizar capitalização ou aplicar a mesma correção em todas as estrofes.

## Atalhos de teclado

Quando as letras estão no ar, o módulo escuta a navegação por teclado:

- `Seta direita` — Grupo seguinte
- `Seta esquerda` — Grupo anterior
- `Seta cima` — Voltar ao primeiro grupo
- `Escape` — Parar a saída

Particularmente úteis quando o operador precisa de seguir uma performance ao vivo rapidamente.

## Integração com o Companion

O módulo Louvor também participa no estado de hino consciente do Companion.

Quando as letras são lançadas diretamente, o 7CG acompanha:

- Índice do grupo de letras atual
- Total de grupos

Esse estado pode ser usado por fluxos do Companion e pela lógica de navegação de versículos para que superfícies externas se mantenham sincronizadas com a posição atual do hino.

## Adicionar ao rundown

A ação **Adicionar ao rundown** cria uma entrada de hino com:

- A canção selecionada
- O hinário selecionado
- Todos os IDs de estrofe da canção
- O template de letras selecionado

Permite-lhe preparar canções com antecedência e executá-las a partir do módulo Rundown em vez de só as disparar ad hoc.

## Fluxo típico

### Operação direta

1. Selecione o hinário
2. Pesquise o hino por número ou título
3. Confirme o template
4. Prima **Lançar**
5. Use **Recuar**, **Início** e **Avançar** durante a canção
6. Prima **Parar** quando terminar

### Fluxo de programa preparado

1. Selecione o hinário e o hino
2. Confirme o template e o agrupamento
3. Clique em **Adicionar ao rundown**
4. Repita para o resto do alinhamento
5. Execute as entradas de hino mais tarde a partir do módulo Rundown

## Boas práticas

- Use um hinário predefinido para que os voluntários comecem na coleção certa
- Oculte a seleção de template quando os operadores devem usar sempre o mesmo
- Teste diferentes valores de **Linhas por ecrã** com o template real e o tamanho do ecrã
- Mantenha um operador dedicado à navegação de letras durante música ao vivo se o tempo não for fixo
- Adicione canções ao rundown com antecedência para produções mais repetíveis

## Páginas relacionadas

- [Visão geral dos módulos](./)
- [Módulo Rundown](./rundown)
- [Integração com o Companion](../configuration/companion)
