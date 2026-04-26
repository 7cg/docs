---
sidebar_position: 7
---

# Famílias de templates

O 7CG não trata todos os templates da mesma forma. Na prática, os templates estão agrupados em famílias, e essas famílias determinam onde o template aparece na interface.

Para os autores de templates, isto importa porque um template bem construído pode ainda assim parecer "em falta" se usar o nome de família errado.

## O que significa uma família

No 7CG, uma família de template é, na prática, o prefixo do ID do template.

Exemplos:

- `LOWERTHIRDS/MyNameplate`
- `CREDITS/EndRoll`
- `BIBLE/VerseBox`
- `HYMNS/WorshipLyrics`

O 7CG usa estes prefixos para decidir que templates apresentar em seletores especializados.

## Famílias usadas hoje pelo 7CG

### `LOWERTHIRDS`

Usado por:

- Módulo Oráculos
- Fluxos de edição de oráculos no rundown

Use esta família para:

- faixas de nome
- gráficos de título
- sobreposições de oráculo
- identificação de oradores e convidados

### `CREDITS`

Usado por:

- Módulo Ficha Técnica
- Itens de ficha técnica no rundown

Use esta família para:

- créditos finais
- agradecimentos
- listas de voluntários e equipa
- créditos de produção

### `BIBLE`

Usado por:

- Módulo Bíblia
- Seleção de templates relacionada com a Bíblia nos fluxos da Bíblia

Use esta família para:

- caixas de versículo
- sobreposições de Escrituras
- gráficos de leitura bíblica

### `HYMNS`

Usado por:

- Módulo Louvor
- Seleção de templates relacionada com letras

Use esta família para:

- letras de adoração
- sobreposições de hino
- apresentações de versículos agrupados

### `QRCODE`

Usado por:

- Fluxos de QR Code e itens de QR Code no rundown

Use esta família para:

- templates de apresentação de QR
- sobreposições com QR para abrir
- códigos de doação ou inscrição

## Porque a família importa

Se o prefixo está errado:

- o template pode não aparecer no módulo esperado
- os operadores podem não o encontrar no seletor correto
- pode ser forçado o fluxo errado ao utilizador

Exemplo:

- um template de oráculo chamado `MISC/MyNameplate` pode existir, mas não aparecerá onde os operadores esperam os seus oráculos

## Escolher a família certa

Uma regra simples funciona bem:

- Se o template tem um módulo dedicado, use a família desse módulo
- Se o template se destina a um tipo de bloco específico do rundown, use a família desse bloco
- Se o template é mesmo diverso, evite fingir que pertence a um fluxo especializado

Use a família especializada apenas quando o template é mesmo destinado a esse fluxo.

## E o "Outros Templates"?

O módulo **Outros Templates** é, de momento, um painel genérico leve.

Isto significa:

- é útil para gráficos utilitários extra
- não é o lar principal das famílias especializadas acima

Se está a construir um oráculo, ficha técnica, template de Bíblia ou template de letras a sério, coloque-o na família correspondente em vez de tratar Outros Templates como destino principal.

## Sugestões de nomenclatura

Um bom ID de template deve ser:

- com a família primeiro
- legível
- estável ao longo do tempo

Bons exemplos:

- `LOWERTHIRDS/SpeakerSimple`
- `LOWERTHIRDS/TwoLineBox`
- `CREDITS/ScrollingRoll`
- `BIBLE/VerseLowerThird`
- `HYMNS/CenteredLyrics`

Exemplos menos úteis:

- `LOWERTHIRDS/Template1`
- `MISC/Test`
- `NEW/Untitled`

## Fluxo recomendado para autores

Ao criar um novo template:

1. Decida que fluxo do 7CG deve ser dono do template.
2. Escolha o prefixo de família correspondente.
3. Adicione `title` e `description` claros no GDD.
4. Atualize os templates no 7CG.
5. Confirme que o template aparece no seletor pretendido.

## Páginas relacionadas

- [Desenvolvimento de templates](./)
- [Início rápido: campos de template](./quick-start)
- [Testes e depuração de templates](./testing-and-debugging)

## Passos seguintes

- [Testes e depuração de templates](./testing-and-debugging) para verificar descoberta e colocação no seletor
- [Início rápido: campos de template](./quick-start) para refinar os campos dentro do próprio template
