---
slug: whats-new-2026
title: "Novidades no 7CG: edição de 2026"
authors: [jcalado]
tags: [release, features]
date: 2026-04-19
---

:::info[Lançado]
As funcionalidades descritas aqui já estão na versão **v2.0.0-beta.19** do 7CG, disponível agora através do auto-update. Veja o [anúncio do lançamento](/blog/beta-19-released) para mais detalhes.
:::

Desde o início de 2026 chegaram muitas novidades ao 7CG. Este artigo resume os destaques: um esquema de área de trabalho totalmente personalizável, exportação de vídeo do rundown, uma integração com o Companion refeita, e um conjunto considerável de melhorias de polimento e fiabilidade.

![Vista geral do novo espaço de trabalho do 7CG, com vários módulos visíveis ao mesmo tempo](/img/blog/whats-new-2026/overview-layout.png)

{/* truncate */}

## Esquema personalizável

A maior mudança desta versão é um sistema de esquema da área de trabalho completamente novo. A janela principal está agora dividida em colunas redimensionáveis, e cada módulo (Rundown, Lyrics, Bible, Control, Media, Lower Thirds) pode ser arrastado para qualquer posição.

Para entrar no modo de edição, abra **View → Customize Layout**. A partir daí pode:

- **Arrastar módulos** pela pega na barra de título para os reordenar ou mover entre colunas
- **Adicionar e remover colunas** com um único clique
- **Distribuir de forma uniforme** para ajustar todas as colunas à mesma largura
- **Ocultar módulos** de que não precisa. Ficam estacionados numa barra lateral na extremidade e podem ser repostos em qualquer altura
- **Guardar predefinições com nome** em **View → Layouts** para alternar entre uma vista para um único operador e uma configuração de vários ecrãs em segundos

A largura das colunas, a ordem dos módulos e o estado de recolha persistem entre reinícios.

![7CG em modo de edição do esquema, com módulos arrastáveis, colunas editáveis e a barra de módulos ocultos](/img/blog/whats-new-2026/customize-layout-mode.png)

![Predefinições de esquema guardadas no 7CG, incluindo um esquema Media & Rundown pronto a reutilizar](/img/blog/whats-new-2026/layout-presets.png)

## Exportação de vídeo do rundown

Agora pode exportar um rundown completo como ficheiro de vídeo diretamente a partir do 7CG. O exportador percorre cada bloco, envia-o para o CasparCG, captura a saída e monta o resultado num único ficheiro. Os blocos de Bíblia e hinos percorrem automaticamente todos os seus excertos para que nada fique cortado.

Um botão **Stop** permite cancelar uma exportação em curso a meio do processo, e todas as mensagens de progresso da exportação passam agora a ser apresentadas como notificações internas da aplicação.

![Exportação de vídeo do rundown em curso, com estado da gravação e botão Stop](/img/blog/whats-new-2026/rundown-video-export.png)

## Reformulação da integração com o Companion

A integração com o Bitfocus Companion recebeu uma grande atualização:

- **Anúncio por mDNS**: o servidor WebSocket anuncia-se agora na rede local para que o plugin do Companion consiga descobrir o 7CG sem introdução manual do IP.
- **Emparelhamento por PIN**: em vez de um token de autenticação partilhado no ficheiro de configuração, cada dispositivo Companion passa agora a emparelhar-se com um PIN. As sessões são acompanhadas por dispositivo, por isso revogar um dispositivo não afeta os restantes.
- **Execute / Stop por ID**: duas novas ações, `rundown:execute-id` e `rundown:stop-id`, permitem apontar a um item específico do rundown através do seu ID. A interface do Companion mostra uma lista pendente preenchida com o rundown em direto, para que escolha sempre a partir do que está realmente carregado.
- **Superfície de estado mais ampla**: o estado transmitido ao Companion inclui agora mais dados sobre o rundown e a reprodução, mantendo os rótulos dos botões e o feedback sincronizados em tempo real.
- **Ações de cor sólida**: ações parametrizadas permitem ao Companion mudar a cor sólida em emissão sem precisar de uma ação separada por cor.

## Gestão de layers

Todos os módulos (Media, Bible, Lyrics, Lower Thirds, Credits, QR Code) passam agora a ter uma layer CasparCG predefinida explícita. A caixa de diálogo **Advanced** de cada bloco mostra que layer será usada, e um novo painel de **ocupação de layers** na secção Control dá uma vista em tempo real do que está a ser reproduzido em cada layer, para que seja possível detetar conflitos antes de irem para o ar.

## Melhorias em Bible e Lyrics

- **Pré-visualização de versículos**: ao escolher uma passagem bíblica na caixa de diálogo do bloco, o texto do versículo aparece agora inline para confirmar que a referência está correta antes de a inserir.
- **Edição em massa de versículos**: agora é possível editar vários versículos de uma vez no editor de Lyrics, em vez de abrir cada um separadamente.
- **Linhas por exibição**: um novo ajuste nos módulos Hymn e Lyrics controla quantas linhas são mostradas no ecrã de cada vez.

## Polimento da interface

- Cada cabeçalho de módulo tem agora um **ícone colorido** correspondente ao tipo de conteúdo, tornando mais rápida a orientação num esquema denso.
- Uma **faixa superior** ao longo do topo da janela anima-se para indicar o estado da ligação ao CasparCG: verde quando está ligado, âmbar quando está a tentar voltar a ligar.
- As notificações da aplicação são agora encaminhadas através de **toasts do Fluent UI** em vez de notificações do sistema, pelo que aparecem dentro da janela e desaparecem automaticamente.
- As definições de transição e as caixas de diálogo Advanced foram refinadas: botões só com ícone onde os rótulos eram redundantes e melhor localização em português e inglês.

---

Tudo isto já chegou na **v2.0.0-beta.19**, disponível agora através do auto-update na aplicação. Se precisa de uma instalação nova, descarregue em [7cg.io](https://7cg.io).
