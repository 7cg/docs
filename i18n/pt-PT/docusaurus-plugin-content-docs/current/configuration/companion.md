---
sidebar_position: 7
---

# Integração com o Companion

Configure o servidor Companion integrado para integração com **Bitfocus Companion** e superfícies de controlo compatíveis.

![Separador Companion com porta WebSocket, botão Emparelhar e lista de dispositivos emparelhados](../assets/preferences/companion.png)

Versões recentes do 7CG usam **emparelhamento por PIN com sessões por dispositivo** em vez de um único token partilhado. Isto torna mais fácil revogar um dispositivo sem afetar todos os outros controladores.

## Estado do servidor

Indicador visual do estado atual do servidor Companion:

- **Em execução** (Verde) — O servidor WebSocket está ativo e a aceitar ligações
- **Parado** (Cinzento) — O servidor não está em execução

Quando em execução, mostra: "À escuta na porta [número da porta]"

## Definições

**Ativar servidor**
- **Predefinição:** Desativado
- **Descrição:** Inicia/para o servidor WebSocket para ligações Companion

**Porta WebSocket**
- **Predefinição:** `8099`
- **Intervalo:** 1-65535
- **Descrição:** A porta a que o Companion se ligará

## Fluxo de emparelhamento

1. Ative o servidor Companion no 7CG
2. Clique em **Emparelhar novo dispositivo**
3. O 7CG mostra um **PIN de 6 dígitos**
4. Introduza esse PIN no plug-in Companion ao emparelhar o dispositivo
5. Após um handshake bem-sucedido, o 7CG cria uma sessão persistente para esse dispositivo
6. Opcionalmente, renomeie o dispositivo emparelhado no 7CG para o identificar mais facilmente

As janelas de emparelhamento expiram automaticamente após cerca de dois minutos e são invalidadas após demasiadas tentativas incorretas de PIN.

![Janela de emparelhamento por PIN a mostrar um código de 6 dígitos](../assets/companion/pin-pairing.png)

## Dispositivos emparelhados

A tabela **Dispositivos emparelhados** mostra:

- Alcunha do dispositivo
- Quando foi adicionado
- Quando foi visto pela última vez
- Ações de revogação por dispositivo

Pode também revogar todos os dispositivos de uma só vez e forçar todos os controladores a emparelhar novamente.

## Descoberta

Quando o servidor Companion está em execução, o 7CG anuncia-se na rede local através de **mDNS**. Os plug-ins Companion compatíveis podem descobrir instâncias do 7CG automaticamente, sem ter de introduzir o endereço IP manualmente.

Se a descoberta não funcionar no seu ambiente, pode ligar-se introduzindo o nome de máquina e a porta diretamente.

## Ações disponíveis

Uma vez ligado, o Companion pode acionar ações do 7CG, tais como:

- Executar blocos do rundown
- Parar blocos do rundown
- Navegar pelas entradas do rundown
- Executar ou parar um **item específico do rundown por ID** usando uma lista pendente de itens
- Controlar a reprodução de media
- Mostrar ou ocultar oráculos, ficha técnica, QR codes, cores sólidas e outros tipos de bloco
- Avançar trechos da Bíblia e versículos de hinos
- Iniciar e parar blocos de gravador

:::info
A integração com o Companion permite que superfícies de controlo (Stream Deck, X-Keys, etc.) controlem o 7CG durante produções em direto.
:::

## Estado de transmissão exposto ao Companion

O 7CG transmite agora um conjunto mais amplo de estado em direto para que os módulos do Companion possam reagir ao que está no ar:

- Posição atual e seguinte do rundown
- Lista completa de itens do rundown para listas pendentes de ações
- Estado da mosca e do ID em Info Canal
- Estado do gravador
- Clipes de media ativos
- Visibilidade de oráculos, ticker e ficha técnica
- Progressão de Bíblia e hinos

É isto que permite feedbacks mais ricos, variáveis e listas de ações pré-preenchidas no Companion.

## Configuração típica

1. Abra **Definições → Companion**
2. Ative o servidor e confirme a porta
3. Empareje cada dispositivo individualmente
4. Dê a cada dispositivo um nome correspondente à superfície física ou ao operador
5. No Companion, atribua botões a:
   - ações de "item selecionado" do rundown para controlo simples
   - ações de "item específico" quando o botão deve disparar sempre uma entrada concreta
6. Teste o comportamento de reconexão antes de ir ao ar

## Resolução de problemas

### Companion não liga

1. Verifique se o servidor Companion está ativado no 7CG
2. Confirme que a porta WebSocket (predefinição 8099) não está bloqueada na firewall
3. Se estiver a ligar manualmente, garanta que o Companion está configurado com o nome/IP e porta corretos
4. Se estiver a usar emparelhamento por PIN, confirme que o PIN não expirou
5. Inicie uma nova janela de emparelhamento se a atual expirou ou foi invalidada
6. Revogue e empareje novamente o dispositivo afetado se a sessão guardada já não for válida
7. Tente desativar e reativar o servidor Companion
8. Verifique conflitos de porta com outras aplicações

### Descoberta não funciona

1. Confirme que o servidor Companion está em execução
2. Garanta que ambas as máquinas estão na mesma rede local
3. Verifique se o tráfego mDNS ou multicast está filtrado na sua rede
4. Recorra à introdução manual de nome de máquina e porta se necessário
