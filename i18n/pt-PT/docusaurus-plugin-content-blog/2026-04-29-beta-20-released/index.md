---
slug: beta-20-released
title: '7CG 2.0.0-beta.20 disponível'
authors: [jcalado]
tags: [release]
date: 2026-04-29
---

A **v2.0.0-beta.20** do 7CG está disponível a partir de hoje. Se já usa uma versão 2.x beta, o auto-update obtém-na automaticamente da próxima vez que abrir a aplicação.

Esta versão é sobre tornar o rundown mais fácil de ler de relance. Pode agora atribuir cor a blocos individuais, guardar uma palete das suas cores favoritas, e cada item passa a mostrar o ícone do seu tipo de bloco junto à etiqueta.

{/* truncate */}

## Novidades

- **Cor em qualquer bloco**: carregue com o botão direito num item do rundown para escolher a cor. Os temas claro e escuro têm valores próprios, por isso as cores ficam bem em qualquer modo.
- **Cores guardadas**: construa uma palete de cores com nome em **Preferências → Cores** e reutilize-as em qualquer sítio onde se escolhe uma cor.
- **Ícones de bloco no rundown**: cada item passa a mostrar o ícone do seu tipo de bloco junto à etiqueta, tornando muito mais fácil percorrer um rundown longo.
- **Ícone e etiqueta por item**: blocos de Media podem substituir o ícone e a etiqueta em entradas individuais, útil quando um item de uma lista precisa de se destacar.
- **Notas da versão alinhadas**: quando a aplicação atualiza, o ecrã "Novidades" passa a mostrar o changelog da versão que instalou de facto.
- **Módulo de Letras mais arrumado**: o ícone do título alinha agora com as linhas dos hinos e redimensiona suavemente com o módulo.

## Correções

- Os seletores de cor abertos a partir de um menu de contexto já não se fecham antes de poder usá-los.
- Alterar a cor predefinida de um tipo de bloco passa a atualizar todos os itens existentes que usam essa predefinição, não apenas os novos.
- Corrigido um crash ao abrir o diálogo de edição em blocos de Media.

## Como obter

Se já usa uma versão 2.x beta, o auto-update obtém a beta.20 da próxima vez que abrir a aplicação. Cada atualização é um instalador completo para a sua plataforma (Windows `.exe`, macOS `.dmg`, ou Linux `.AppImage` / `.deb` / `.snap`), por isso não há mais nada a fazer depois de chegar. É novo no 7CG? Descarregue uma primeira instalação em [7cg.io](https://7cg.io).

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

Obrigado por testar.
