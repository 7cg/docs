---
sidebar_position: 2
---

# Módulo Oráculos

O módulo **Oráculos** é o fluxo movido por templates do 7CG para nomes, títulos e outras sobreposições CG que precisam de campos de texto editáveis e disparo rápido em direto.

Combina:

- Um seletor de template de oráculos
- Um editor de campos dinâmico gerado a partir dos metadados do template
- Encaminhamento avançado e opções de tempo
- Comportamento opcional de paragem automática por tempo
- Controlos diretos de lançamento e paragem
- Integração com o rundown para gráficos preparados

## Visão geral

O módulo Oráculos permite-lhe:

- Selecionar um template de oráculos da lista do CasparCG
- Preencher os campos expostos pelo template
- Trabalhar com campos agrupados quando o template os define
- Encaminhar o gráfico para um canal, camada e CG layer específicos
- Adicionar atraso e duração
- Parar automaticamente o gráfico após uma duração
- Lançar o gráfico diretamente do módulo
- Adicionar o gráfico configurado ao rundown

## Componentes da interface

### Seletor de template

O módulo começa com um seletor **Template** filtrado pela família `LOWERTHIRDS`.

Quando os metadados estão disponíveis, o 7CG mostra etiquetas e descrições traduzidas em vez de apenas o ID. Selecionar um template carrega também o esquema de campos que alimenta o editor abaixo.

### Editor de campos dinâmico

Por baixo do seletor, o 7CG renderiza os campos editáveis expostos pelo template selecionado.

O editor é movido pelos metadados GDD do template, pelo que os controlos disponíveis dependem do desenho do template. Na prática, os operadores podem trabalhar com:

- Campos de texto simples
- Campos de texto multi-linha
- Dados estruturados ou aninhados
- Campos agrupados apresentados como separadores quando o template define grupos

Valores multi-linha são transformados corretamente para a reprodução no CasparCG, pelo que as quebras de linha introduzidas no editor são preservadas nos dados de saída.

### Definições avançadas

A janela **Avançado** permite controlar como o oráculo é enviado para o CasparCG:

- Canal
- Camada
- CG layer
- Atraso
- Duração

Estas definições aplicam-se aos lançamentos diretos do módulo e à entrada do rundown criada a partir da configuração atual.

### Paragem automática

O interruptor **Paragem automática** está ligado à duração configurada.

Quando uma duração positiva está definida e **Paragem automática** está ativada, o 7CG adiciona uma ação `cg/stop` temporizada após o gráfico ter estado no ar pelo intervalo configurado. Se não houver duração, o interruptor está desativado e espera-se que o operador pare o gráfico manualmente.

## Controlos de reprodução

O módulo Oráculos usa um fluxo de comando CG do CasparCG:

- **Lançar** envia um `cg/play` com o template selecionado e os dados atuais
- **Parar** envia um `cg/stop` para o mesmo canal, camada e CG layer
- **Adicionar ao rundown** guarda o oráculo configurado como item executável do rundown

Os lançamentos diretos usam exatamente os valores introduzidos no editor, com o encaminhamento e tempo configurados aplicados.

## Integração com o rundown

A ação **Adicionar ao rundown** cria uma entrada `lowerthird` dedicada.

Essa entrada guarda:

- O comando do template de oráculos selecionado
- Os dados editados dos campos
- Encaminhamento de canal, camada e CG layer
- Valores de atraso e duração
- Comportamento de paragem automática quando há duração

Quando exibidos no rundown, os blocos de oráculo **nomeiam-se automaticamente** com base no primeiro campo (com uma segunda linha quando faz sentido), para que os operadores reconheçam gráficos de orador num relance, sem ter de renomear o item manualmente. As cores dos blocos foram também afinadas para melhor contraste com o fundo do rundown.

Os blocos de oráculo do rundown suportam o fluxo operacional normal:

- Editar
- Executar
- Parar
- Duplicar
- Agrupar
- Exportar vídeo

## Integração com o Companion

Quando um bloco de oráculo é executado ou parado a partir do módulo Rundown, o 7CG publica o estado de oráculo para o Companion.

Esse estado inclui:

- Se um oráculo está atualmente ativo
- A etiqueta atual do oráculo, quando disponível

Facilita a construção de botões e feedbacks no Companion que reflitam se um título está no ar.

## Fluxo típico

### Operação direta

1. Selecione o template
2. Preencha o nome, título ou outros campos necessários
3. Abra **Avançado** se precisar de encaminhamento ou tempo não predefinidos
4. Defina uma duração e ative **Paragem automática** se o gráfico deve limpar-se sozinho
5. Clique em **Lançar**
6. Clique em **Parar** quando terminar, se o gráfico não tiver paragem automática

### Fluxo de programa preparado

1. Selecione o template
2. Introduza os dados do orador ou segmento
3. Configure encaminhamento e tempo
4. Clique em **Adicionar ao rundown**
5. Repita para os restantes convidados, oradores ou segmentos
6. Execute os gráficos mais tarde a partir do módulo Rundown

## Boas práticas

- Padronize os seus templates de oráculo para que os operadores vejam layouts de campos consistentes
- Use grupos de campos no desenho do template quando um gráfico tem muitas propriedades editáveis
- Reserve a paragem automática por duração para gráficos que devem limpar-se previsivelmente sem temporização manual
- Adicione gráficos recorrentes de oradores ao rundown antes do programa em vez de os reconstruir em direto
- Mantenha as etiquetas dos templates descritivas para que as entradas do rundown sejam fáceis de identificar

## Páginas relacionadas

- [Visão geral dos módulos](./)
- [Módulo Rundown](./rundown)
- [Layouts](../configuration/layouts)
