---
slug: beta-19-released
title: '7CG 2.0.0-beta.19 disponível'
authors: [jcalado]
tags: [release]
date: 2026-04-27
---

A **v2.0.0-beta.19** do 7CG está disponível a partir de hoje. Se já usa uma versão 2.x beta, o auto-update obtém-na automaticamente da próxima vez que abrir a aplicação.

![7CG com um rundown preenchido a mostrar blocos de Bíblia, hino, lower-third e comando](/img/blog/beta-19-released/rundown-populated.png)

Esta é a versão que junta todo o trabalho de 2026: espaço de trabalho modular, reformulação do Companion, exportação de vídeo do rundown, pré-visualização de passagens bíblicas e um conjunto considerável de polimento. É também o primeiro lançamento a sair pela nova pipeline de release automatizada, por isso as próximas versões devem chegar mais depressa.

{/* truncate */}

## O que traz

As funcionalidades principais foram documentadas em [Novidades no 7CG: edição de 2026](/blog/whats-new-2026), por isso este artigo é deliberadamente curto. Os destaques:

- **Espaço de trabalho personalizável**: arrastar, redimensionar, ocultar e guardar predefinições de esquema em **View → Customize Layout**
- **Companion 2.0**: emparelhamento por PIN, descoberta automática por mDNS, ações Execute/Stop por item, ações de cor sólida parametrizadas
- **Exportação de vídeo do rundown**: exportar um rundown completo como ficheiro de vídeo, com botão Stop para cancelar a meio
- **Anular / Refazer no rundown**: Ctrl+Z e Ctrl+Shift+Z (Cmd no Mac)
- **Pré-visualização de passagens bíblicas**: ver o texto dos versículos enquanto escolhe a passagem
- **Vista de ocupação de layers**: detetar conflitos de layer no CasparCG antes de irem para o ar
- **Notificações internas com toasts** corretamente localizadas (Inglês, Português, Espanhol)

## Como obter

Se já usa uma versão 2.x beta, o auto-update obtém a beta.19 da próxima vez que abrir a aplicação. Cada atualização é um instalador completo para a sua plataforma (Windows `.exe`, macOS `.dmg`, ou Linux `.AppImage` / `.deb` / `.snap`), por isso não há mais nada a fazer depois de chegar. É novo no 7CG? Descarregue uma primeira instalação em [7cg.io](https://7cg.io).

## Limitações conhecidas

Esta ainda é uma **beta**. Notas a ter em conta:

- Os builds para macOS **não estão notarizados** nesta versão. Tem de carregar com o botão direito na aplicação e escolher **Abrir** da primeira vez para contornar o Gatekeeper.
- Os builds para Windows **ainda não estão assinados**, por isso o SmartScreen avisa no primeiro arranque. Carregue em **Mais informações** e depois em **Executar mesmo assim**.

## Reportar problemas

Se algo correr mal, escreva no [grupo de WhatsApp do 7CG](https://chat.whatsapp.com/CxrKMAV5zfP2eSSvHi1tA1) com o seu sistema operativo, a versão indicada em **Help → About**, e os passos para reproduzir o problema. O log do renderer está em:

- **Windows**: `%APPDATA%\7cg\logs\`
- **macOS**: `~/Library/Logs/7cg/`
- **Linux**: `~/.config/7cg/logs/`

Anexar o ficheiro de log mais recente acelera o diagnóstico.

Obrigado por testar. Esta versão demorou a chegar, e a próxima vai ser muito mais curta.
