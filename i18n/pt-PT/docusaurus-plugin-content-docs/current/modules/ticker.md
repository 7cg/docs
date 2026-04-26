---
sidebar_position: 7
---

# Módulo Ticker

O módulo **Ticker** é o painel de preparação do 7CG para sobreposições de texto rolante, como avisos, alertas e barras de informação.

Na implementação atual do `7cg-ng`, fornece:

- Um seletor de template de ticker
- Uma área de introdução de texto para o conteúdo
- Botões Reproduzir e Parar
- Um módulo de espaço de trabalho que pode ser mostrado, ocultado e colocado em layouts

## Visão geral

O módulo Ticker pretende apoiar:

- Avisos rolantes
- Barras de informação
- Mensagens de emergência ou de serviço
- Seleção reutilizável de templates de ticker

Atualmente o módulo é ainda uma UI leve de espaço reservado, em vez de um fluxo automatizado totalmente integrado. Os controlos visíveis estão presentes, mas não estão ainda ligados aos fluxos profundos de execução e rundown usados por módulos mais maduros como Multimédia, Bíblia, Louvor ou Oráculos.

## Componentes da interface

### Seletor de template

O módulo inclui uma lista pendente **Template** com as opções atualmente expostas:

- `Main`
- `ADRA`

Reflete a implementação atual. É um seletor simples, não um navegador dinâmico de templates a partir da lista completa do CasparCG.

### Editor de texto

O campo **Texto** é uma área multi-linha onde o operador pode preparar o conteúdo do ticker.

É a entrada principal do módulo hoje e representa o texto que seria enviado ao fluxo do ticker quando a ligação à execução estiver completa.

### Botões de reprodução

O módulo inclui dois botões de operador:

- **Parar**
- **Reproduzir**

Estabelecem a forma esperada do fluxo de controlo em direto, mas a implementação atual ainda não os liga a um pipeline documentado de comandos CasparCG como acontece nos módulos mais maduros.

## Estado atual da implementação

O módulo Ticker deve ser documentado como **presente mas incompleto**.

O que existe hoje:

- Um módulo autónomo no espaço de trabalho
- Suporte de visibilidade e layout na interface
- UI de seleção de template
- UI de introdução de texto
- Controlos Reproduzir e Parar no chrome do módulo
- Definições de tipo de evento de ticker para o Companion

O que não está atualmente implementado no fluxo visível do módulo:

- Execução documentada de comandos de reprodução do ticker
- Atualizações confirmadas de estado no ar a partir do módulo
- Comportamento de adicionar ao rundown
- Controlos avançados de encaminhamento
- Edição de campos guiada pelos metadados do template

Esta distinção é importante para que os operadores percebam que o módulo está disponível na interface, mas ainda não é completo em funcionalidades.

## Visibilidade e layouts

Tal como os outros módulos da Fase 3, o Ticker pode ser:

- Ativado ou desativado nas preferências de interface
- Colocado em layouts guardados
- Apresentado ao lado de Info Canal, Ficha Técnica e outros módulos de operador

Útil para reservar um espaço no workspace mesmo enquanto o fluxo de execução continua a evoluir.

## Estado no Companion

Os tipos de estado partilhados do Companion já definem uma forma de estado de ticker com:

- `ativo`
- `texto`

Existe também um canal de transmissão `state:ticker` registado.

Contudo, a implementação atual não fornece ainda o fluxo completo de execução em direto que alimentaria continuamente esse estado a partir das ações do operador. Por agora, deve ser tratado como base para integração futura e não como contrato totalmente documentado.

## Fluxo típico

### Uso prático atual

1. Abra o módulo Ticker no espaço de trabalho
2. Escolha a variante disponível
3. Prepare o texto da mensagem
4. Trate o módulo como uma superfície de preparação/controlo enquanto a integração do ticker evolui

### Direção futura

A UI atual sugere um fluxo futuro em que os operadores irão:

1. Escolher o estilo de ticker
2. Introduzir o texto da mensagem
3. Iniciar o ticker no ar
4. Parar ou substituir conforme necessário durante o programa

Essa direção é visível no desenho, mas ainda não deve ser documentada como comportamento totalmente implementado.

## Boas práticas

- Mantenha clara nos documentos a indicação de que o Ticker é uma implementação parcial
- Evite descrevê-lo como um módulo completo do rundown até a execução de comandos estar ligada
- Use layouts para manter o módulo disponível para equipas que preparam fluxos futuros de ticker
- Trate as opções de template visíveis como escolhas atuais da UI, não como um sistema completo de gestão de templates

## Páginas relacionadas

- [Visão geral dos módulos](./)
- [Layouts](../configuration/layouts)
- [Interface](../configuration/interface)
