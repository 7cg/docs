---
sidebar_position: 6
---

# Módulo Ficha Técnica

O módulo **Ficha Técnica** é o fluxo do 7CG para gráficos de créditos movidos por templates, como rolos finais, agradecimentos, listas de equipa e reconhecimento de voluntários.

Combina:

- Um seletor de template de ficha técnica
- Um editor de campos dinâmico baseado no template selecionado
- Encaminhamento avançado e opções de tempo
- Comportamento opcional de paragem automática por duração
- Controlos diretos de lançamento e paragem
- Integração com o rundown para créditos preparados

## Visão geral

O módulo Ficha Técnica permite-lhe:

- Selecionar um template de ficha técnica da lista do CasparCG
- Preencher os campos de texto exigidos pelo template
- Encaminhar o gráfico para um canal, camada e CG layer específicos
- Adicionar atraso e duração
- Parar automaticamente o gráfico após uma duração
- Lançar o gráfico de créditos diretamente do módulo
- Adicionar o gráfico configurado ao rundown

## Componentes da interface

### Seletor de template

O módulo começa com um seletor **Template** filtrado pela família `CREDITS`.

Quando disponível, o 7CG mostra etiquetas e descrições amigáveis em vez de apenas o ID do template. Escolher um template carrega também os campos usados pelo editor.

### Editor de campos dinâmico

Por baixo do seletor, o 7CG renderiza os campos editáveis expostos pelo template de ficha técnica selecionado.

Os campos exatos dependem do desenho escolhido. Pode ver:

- Campos de texto simples
- Campos multi-linha
- Várias secções agrupadas

Torna o módulo flexível para agradecimentos curtos, listas completas de créditos e layouts mais detalhados de equipa ou voluntários.

### Definições avançadas

A janela **Avançado** permite controlar como a ficha técnica é enviada ao CasparCG:

- Canal
- Camada
- CG layer
- Atraso
- Duração

Estes valores aplicam-se aos lançamentos diretos e a qualquer item de créditos adicionado ao rundown.

### Paragem automática

O interruptor **Paragem automática** só fica ativo quando há uma duração positiva.

Quando a duração está configurada e **Paragem automática** está ligada, o 7CG limpa os créditos automaticamente após o intervalo. Se não houver duração, espera-se que o operador pare manualmente.

## Controlos de reprodução

O módulo é construído em torno de três ações principais:

- **Lançar** coloca o gráfico atual de créditos no ar
- **Parar** retira o gráfico atual do ar
- **Adicionar ao rundown** guarda o gráfico configurado para execução posterior

A UI atual mostra também botões **Pré-visualização** e **Atualizar**. Para a maioria dos operadores, o fluxo do dia-a-dia é ainda Template, Campos, Lançar, Parar e Adicionar ao Rundown.

## Integração com o rundown

A ação **Adicionar ao rundown** cria um item de ficha técnica que pode disparar mais tarde a partir do módulo Rundown.

Útil quando:

- Os créditos têm de aparecer num ponto específico do programa
- Quer reprodução repetível em vez de lançamento ad hoc
- Vários operadores precisam de trabalhar a partir do mesmo alinhamento

## Integração com o Companion

A ficha técnica pode também participar em fluxos conscientes do Companion, ajudando superfícies de controlo externas a refletir se o gráfico está atualmente ativo.

## Fluxo típico

### Operação direta

1. Selecione o template de ficha técnica
2. Preencha os nomes, funções ou outros campos necessários
3. Abra **Avançado** se precisar de encaminhamento ou tempo não predefinidos
4. Defina uma duração e ative **Paragem automática** se os créditos devem limpar-se automaticamente
5. Clique em **Lançar**
6. Clique em **Parar** quando terminar, se o item não tiver paragem automática

### Fluxo de programa preparado

1. Selecione o template de ficha técnica
2. Introduza a equipa de produção, voluntários ou agradecimentos
3. Configure encaminhamento e tempo
4. Clique em **Adicionar ao rundown**
5. Execute o item mais tarde a partir do módulo Rundown

## Boas práticas

- Padronize os templates de ficha técnica para que os operadores vejam layouts de campos previsíveis
- Use a paragem automática por duração apenas quando o gráfico tem um tempo de execução conhecido
- Adicione itens de créditos planeados ao rundown com antecedência em vez de os construir sob pressão
- Mantenha nomes de templates descritivos para que as entradas continuem fáceis de identificar

## Páginas relacionadas

- [Visão geral dos módulos](./)
- [Módulo Rundown](./rundown)
- [Layouts](../configuration/layouts)
