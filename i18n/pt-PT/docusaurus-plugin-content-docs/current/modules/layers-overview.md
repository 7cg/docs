---
sidebar_position: 9
---

# Módulo Camadas

O módulo **Camadas** é a vista só de leitura do 7CG sobre a ocupação atual de camadas do CasparCG.

Foi desenhado para operadores que precisam de perceber o que já está a tocar, onde está a tocar, e se uma ação planeada pode colidir com uma atribuição de camada existente.

Disponibiliza:

- Uma lista em direto de camadas ocupadas, agrupada por canal
- Etiquetas de tipo por camada, como media, template, cor ou áudio
- Etiquetagem da camada e da CG layer
- Nomes visíveis para o clipe, template ou cor atuais
- Um indicador de pausa quando a reprodução está em pausa

## Visão geral

O módulo Camadas permite-lhe:

- Ver que canais têm camadas ocupadas
- Inspecionar o número da camada e, quando relevante, o slot da CG layer
- Distinguir entre media, templates, preenchimentos de cor, áudio e ocupação desconhecida
- Detetar rapidamente produtores de media em pausa
- Resolver conflitos antes de lançar nova media ou gráficos

Este módulo é intencionalmente diagnóstico. Não lança, para nem edita conteúdo diretamente.

A mesma vista de camadas está também integrada na janela **Avançado** dos blocos do rundown, pelo que pode detetar potenciais conflitos sem sair do bloco que está a editar.

## Componentes da interface

### Grupos por canal

As camadas ocupadas são agrupadas por canal e ordenadas por ordem ascendente.

Mantém os fluxos multi-canal legíveis e ajuda os operadores a fazer um varrimento rápido do estado de saída ativo.

### Etiquetas das camadas

Cada linha mostra a camada atual no formato:

- `L10`
- `L20/1`

Quando uma CG layer é conhecida, o 7CG acrescenta-a após a camada principal para que a ocupação por templates seja entendida com mais precisão.

### Etiquetas de tipo

Cada camada ocupada recebe uma etiqueta de tipo com base no ocupante atual:

- `media`
- `template`
- `cor`
- `áudio`
- `desconhecido`

Ajuda a distinguir num relance a reprodução normal de clipe de gráficos por template, preenchimentos sólidos ou outras fontes de ocupação.

### Nome do ocupante

A área de texto principal mostra o nome do ocupante atual quando disponível:

- Caminho do clipe de media
- Nome do template
- Valor de preenchimento de cor

Se não houver nome disponível, o módulo mostra um espaço reservado em vez de fingir que a camada está identificada.

### Indicador de pausa

Quando um produtor de media monitorizado está em pausa, a linha mostra uma etiqueta **em pausa**.

Útil quando uma camada continua ocupada mas não está ativamente a rodar.

## Origens dos dados e comportamento

O módulo Camadas é alimentado a partir do armazenamento partilhado de ocupação de camadas no renderer.

Esse armazenamento é atualizado por duas fontes principais:

- **Transmissões de ocupação de camadas** emitidas após comandos CasparCG bem-sucedidos
- **Atualizações do leitor / OSC** para estado de produtor, como reprodução em pausa e media parada

### Ocupação por comando

Após comandos CasparCG bem-sucedidos, o 7CG transmite atualizações de ocupação às janelas do renderer para que a aplicação possa acompanhar o que está a tocar sem fazer polling contínuo ao CasparCG.

Particularmente útil para:

- Templates CG
- Preenchimentos de cor
- Clipes de media limpos com `EMPTY`

### Atualizações do leitor / OSC

As atualizações dos produtores de media também alimentam o armazenamento para que o 7CG possa:

- Marcar camadas de media como em pausa
- Limpar camadas quando a reprodução parou ou o produtor desapareceu

Em conjunto, estas fontes tornam o módulo Camadas mais útil do que um simples painel de estado só de media.

## Estado vazio

Quando nenhuma camada ocupada está atualmente registada, o módulo mostra:

- `Sem camadas ativas`

Significa que o armazenamento não tem entradas de ocupação ativas para apresentar.

## O que o módulo não faz

O módulo Camadas não é uma superfície de controlo. Não disponibiliza:

- Botões de reproduzir ou parar
- Reatribuição de camadas
- Edição de templates
- Criação de itens de rundown
- Resolução direta de conflitos

A sua função é tornar visível o estado atual para que os operadores possam tomar melhores decisões noutras partes da interface.

## Fluxo típico

### Resolução de problemas em direto

1. Abra o módulo Camadas
2. Verifique que canal e camada estão já ocupados
3. Confirme se o ocupante é media, template, cor, áudio ou desconhecido
4. Use essa informação antes de lançar outro item no mesmo destino

### Verificações de pausa / estado preso

1. Procure uma camada que ainda apareça ocupada
2. Verifique se a linha está marcada como **em pausa**
3. Use o módulo de reprodução ou gráficos relevante para limpar ou substituir o conteúdo, se necessário

## Boas práticas

- Mantenha o módulo Camadas visível durante ensaios e produções complexas em direto
- Use-o para confirmar reservas de camadas dedicadas a moscas, oráculos, Bíblia, letras e ficha técnica
- Trate-o como auxiliar de diagnóstico, não como fonte da verdade para todos os casos limite do CasparCG
- Combine-o com Multimédia, Info Canal e Rundown ao investigar por que algo continua no ar

## Páginas relacionadas

- [Visão geral dos módulos](./)
- [Módulo Multimédia](./media)
- [Módulo Info Canal](./channel-graphics)
- [Layouts](../configuration/layouts)
