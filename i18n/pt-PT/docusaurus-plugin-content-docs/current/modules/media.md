---
sidebar_position: 1
---

# Módulo Multimédia

O módulo Multimédia é a solução completa do 7CG para reprodução de vídeo, áudio e imagem. Oferece gestão de media de nível profissional com suporte para transições, busca temporal, repetição e monitorização em tempo real da reprodução ativa.

## Visão geral

O módulo Multimédia permite-lhe:

- **Navegar e pesquisar** ficheiros de media a partir do servidor CasparCG
- **Pré-visualizar, preparar (cue) e carregar** media em camadas de fundo
- **Reproduzir, pausar e procurar** em vídeo e áudio
- **Configurar transições** (fade in/out) para uma reprodução suave
- **Monitorizar produtores ativos** com acompanhamento de progresso em tempo real
- **Adicionar media a rundowns** com todas as configurações definidas

## Componentes da interface

### Painel de Produtores Ativos

No topo do módulo encontra uma vista em direto de toda a media a tocar em todos os canais e camadas.

**Funcionalidades:**
- Barras de progresso em tempo real
- Hora atual e tempo restante
- Indicadores de canal e camada
- Etiquetas de loop
- Ícones de pausa/reprodução
- Botões de paragem rápida por produtor ativo

**Estado vazio:** Quando não há media a tocar, mostra "Sem media ativa".

### Navegador de media

A secção principal mostra a sua biblioteca de media numa estrutura em árvore:

**Vista em árvore:**
- Organizada pela estrutura de pastas
- Diretórios expansíveis/recolhíveis
- Pré-visualização em miniatura para vídeos e imagens
- Ícones por tipo de ficheiro (vídeo, imagem, áudio)
- Destaque verde para o item atualmente selecionado

**Carregamento preguiçoso:** As miniaturas só carregam quando os itens ficam visíveis no viewport, para melhor desempenho.

### Pesquisa e filtro

**Caixa de pesquisa:**
- Pesquisa em tempo real à medida que escreve
- Procura nomes de ficheiro em todas as pastas
- Insensível a maiúsculas/minúsculas

**Menu de filtros:**
- **Vídeo** — MP4, WebM, Matroska
- **Áudio** — Formatos de áudio
- **Imagem** — PNG, PSD e outros formatos
- Vários filtros podem estar ativos em simultâneo

:::tip
Use Ctrl+F (Cmd+F no Mac) para focar rapidamente a caixa de pesquisa e encontrar media pelo nome.
:::

## Controlos de reprodução

### Controlos de carregamento (barra superior)

**Pré-visualização** (atualmente desativado)
- Pré-visualizar media antes do carregamento

**CUE** — ícone de próximo frame
- Carrega media para o primeiro plano (em pausa, pronto a tocar)
- Aparece como "cued" no estado do leitor
- Prima Reproduzir para começar instantaneamente

**CUE BG** — ícone de upload
- Carrega media para a camada de fundo
- Pré-carrega o conteúdo sem o mostrar
- Útil para transições suaves

:::info Cue vs. CUE BG
- **CUE**: Carrega media em pausa, pronta para reprodução imediata
- **CUE BG**: Pré-carrega media em fundo para transições suaves
:::

### Controlos de reprodução (barra do meio)

**Reproduzir** — ícone de play preenchido
- Inicia a reprodução da media selecionada
- Aplica as transições configuradas
- Aplica automaticamente o volume guardado

**Pausa/Retomar** — ícone de pausa/play
- Alterna entre pausa e retomar
- O ícone muda conforme o estado

**Recuar (-5s)** — ícone de rewind
- Recua 5 segundos

**Parar** — ícone de stop
- Para a reprodução atual
- Aplica a transição de saída se configurada

**Avançar (+10s)** — ícone de fast forward
- Avança 10 segundos

**Adicionar ao Rundown** — ícone de lista
- Adiciona a media selecionada ao rundown com todas as definições atuais
- Inclui transições, atrasos, loop e opções avançadas
- O campo de notas mostra os parâmetros configurados

:::tip Fluxo rápido
1. Selecione media do navegador
2. Configure transições e definições
3. Clique em "Adicionar ao Rundown" para guardar a configuração
4. Execute a partir do rundown durante a produção em direto
:::

## Definições e configuração

### Botão de Transições

Abre a janela de Transições para configurar efeitos de fade in e fade out.

**Transição de entrada (Fade in):**
- Aplicada quando a media começa a tocar
- Efeito de entrada suave

**Transição de saída (Fade out):**
- Aplicada quando a media para
- Agendada imediatamente após o comando de play
- Cria fade-outs profissionais

**Tipos de transição disponíveis:**
- Mix (crossfade)
- Wipe
- Slide
- Push
- E outras suportadas pelo CasparCG

**Parâmetros de transição:**
- Duração (em frames)
- Direção (para wipes e slides)
- Funções de easing

:::tip Boa prática
Configure transições de entrada e saída para emissões com aspeto profissional. Uma transição mix de 20 frames (0,8s a 25fps) funciona bem para a maioria do conteúdo.
:::

### Definições avançadas

Clique no botão **Avançado** para aceder à configuração detalhada de reprodução:

**Canal e camada:**
- **Canal** — Canal de saída do CasparCG (predefinição: 1)
- **Camada** — Camada de vídeo dentro do canal (predefinição: 1)
- Camadas com número mais alto aparecem por cima

**Tempo:**
- **Atraso (ms)** — Atraso antes de a reprodução começar (milissegundos)
- **Duração (ms)** — Paragem automática após a duração indicada
- Útil para sequências temporizadas

**Controlo de vídeo:**
- **Frame inicial** — Começar a reprodução num frame específico
- **In Frame** — Ponto de entrada (frame de início do clipe)
- **Comprimento (frames)** — Reproduzir apenas o número de frames indicado
- **Filtro** — Aplicar filtros FFmpeg (correção de cor, efeitos)

**Opções de reprodução:**
- **Loop** — Repetir continuamente até parar

:::warning Funcionalidades avançadas
O controlo ao frame (In Frame, Comprimento) requer entender a taxa de frames da sua media. Verifique as propriedades do vídeo no sistema INFO do CasparCG.
:::

### Definições do leitor (ícone de engrenagem)

Aceda a definições globais do leitor de media:

**Controlo de volume:**
- Cursor de volume principal (0,0 a 1,0)
- Aplica-se ao mixer do CasparCG
- Preferência guardada, aplicada a toda a reprodução
- O ajuste em tempo real afeta a media a tocar

:::note
A definição de volume é global e mantém-se entre arranques. Defina aqui o seu nível de áudio de transmissão preferido.
:::

## Exemplos de fluxo

### Reprodução simples de vídeo

1. Selecione um vídeo no navegador
2. Clique em **Reproduzir**
3. A media reproduz no canal/camada predefinidos

### Fade in/out suave

1. Selecione media
2. Clique no botão **Transições**
3. Configure:
   - Transição de entrada: Mix, 20 frames
   - Transição de saída: Mix, 30 frames
4. Clique em **Reproduzir**
5. A media entra em fade
6. Clique em **Parar** — a media sai em fade

### Cue preparado para programa em direto

1. Selecione media
2. Clique em **CUE**
3. A media fica carregada e em pausa
4. No momento certo, clique em **Reproduzir**
5. A media começa instantaneamente (sem tempo de carregamento)

### Vídeo de fundo em loop

1. Selecione um vídeo de loop (por exemplo, fundo em movimento)
2. Clique em **Avançado**
3. Ative a caixa **Loop**
4. Clique em **Reproduzir**
5. O vídeo repete continuamente até ser parado

### Reprodução com atraso

1. Selecione media
2. Clique em **Avançado**
3. Defina **Atraso**: 5000 (5 segundos)
4. Clique em **Reproduzir**
5. O comando é enviado imediatamente, a reprodução começa após 5s

### Adicionar ao Rundown com configuração

1. Selecione media
2. Configure transições, loop, tempo, etc.
3. Clique em **Adicionar ao Rundown**
4. A entrada aparece no rundown com todas as definições
5. Execute durante o programa disparando a entrada

### Procura durante a reprodução

1. A media tem de estar a tocar
2. Use os botões **Recuar (-5s)** ou **Avançar (+10s)**
3. A reprodução salta para trás ou para a frente
4. Útil para repetir segmentos ou saltar à frente

## Monitorização de Produtores Ativos

O painel de Produtores Ativos mostra informação em tempo real para toda a media a tocar:

**Informação apresentada:**
- **Nome do clipe** — Caminho completo do ficheiro
- **Canal-Camada** — Encaminhamento de saída (ex.: "1-1")
- **Etiqueta de loop** — Indica media em loop
- **Ícone Play/Pausa** — Estado atual de reprodução
- **Barra de progresso** — Progresso visual
- **Tempo atual** — Tempo decorrido (MM:SS)
- **Tempo restante** — Tempo até ao fim (-MM:SS)

**Ações:**
- **Botão Parar** — Para imediatamente um produtor específico
- Para a reprodução nesse canal/camada
- Remove o produtor da lista de ativos

**Casos de uso:**
- Monitorizar várias medias a tocar em simultâneo
- Parar rapidamente uma camada sem afetar as outras
- Confirmação visual do que está no ar

:::tip Produção multi-camada
Use Produtores Ativos para gerir programas complexos com vários vídeos, gráficos e áudio em diferentes camadas e canais.
:::

## Integração com o CasparCG

### Comandos enviados

O módulo Multimédia envia os seguintes comandos AMCP do CasparCG:

**LOADBG CLIP**
- Pré-carrega media em fundo

**LOAD CLIP**
- Carrega media (cued, sem reproduzir)

**PLAY [canal]-[camada] [clipe]**
- Inicia a reprodução com transição opcional

**PAUSE [canal]-[camada]**
- Pausa a media atual

**RESUME [canal]-[camada]**
- Retoma a media em pausa

**STOP [canal]-[camada]**
- Para a reprodução

**CALL [canal]-[camada] SEEK [frames]**
- Procura para um frame específico (relativo)

**MIXER [canal]-[camada] VOLUME [valor]**
- Ajusta o volume de áudio (0,0 a 1,0)

### Suporte de transições

As transições aplicam-se com parâmetros de transição do CasparCG:

```
PLAY 1-1 video.mp4 MIX 20 EASEINSINE
```

- **MIX** — Tipo de transição
- **20** — Duração em frames
- **EASEINSINE** — Função de easing

### Controlo de volume

O volume é aplicado antes da reprodução:

```
MIXER 1-1 VOLUME 0.8
PLAY 1-1 audio.mp3
```

:::info
A definição de volume é guardada nas preferências e aplicada automaticamente a toda a reprodução futura.
:::

## Suporte de formatos

O 7CG suporta todos os formatos que o CasparCG consegue processar:

**Vídeo:**
- MP4 (H.264)
- MOV (ProRes, Animation)
- AVI
- WebM
- Matroska (MKV)
- DV
- HAP

**Imagem:**
- PNG (suporta transparência)
- JPEG
- TGA
- PSD (com camadas)
- BMP

**Áudio:**
- WAV
- MP3
- AAC
- FLAC

:::tip Sugestão de desempenho
Para melhor desempenho:
- **Vídeo**: HAP ou DNxHD em contentores MOV
- **Imagens**: PNG com transparência
- **Áudio**: WAV não comprimido na taxa de amostragem do canal
:::

## Atalhos de teclado

Quando o módulo Multimédia está ativo:

- **Espaço** — Reproduzir/Pausar a media selecionada
- **Enter** — Reproduzir a media selecionada
- **Ctrl+Espaço** — Parar a reprodução
- **Seta esquerda** — Recuar 5 segundos
- **Seta direita** — Avançar 10 segundos
- **Ctrl+F** — Focar a caixa de pesquisa

:::note
Os atalhos podem variar consoante o sistema operativo e a configuração.
:::

## Resolução de problemas

### Media não aparece no navegador

1. Confirme que o servidor CasparCG está em execução e ligado
2. Verifique a definição `media-path` no `casparcg.config`
3. Certifique-se de que os ficheiros de media estão na pasta de media do CasparCG
4. Atualize ou reinicie o 7CG para recarregar a lista

### Reprodução não inicia

1. Verifique o estado de ligação (Configuração → Ligação)
2. Confirme que os números de canal e camada são válidos
3. Garanta que o formato é compatível com o CasparCG
4. Consulte os registos do servidor CasparCG

### Sem miniaturas

1. As miniaturas geram-se a pedido ao deslocar
2. Desloque-se até ao item para acionar o carregamento
3. O serviço de miniaturas do CasparCG tem de estar em execução
4. Verifique se os ficheiros não estão corrompidos

### Volume não muda

1. Verifique a definição de volume guardada
2. Confirme que canal/camada estão corretos
3. Garanta que o mixer do CasparCG responde
4. Teste com `MIXER 1-1 VOLUME 0.5` no CLI do CasparCG

### Transições não funcionam

1. Verifique se a versão do CasparCG suporta transições
2. Reveja os parâmetros (duração, tipo)
3. Garanta que a taxa de frames é detetada corretamente
4. Algumas versões antigas do CasparCG têm suporte limitado

### Produtores Ativos não atualizam

1. Verifique a ligação OSC (Configuração → Ligação → Porta OSC)
2. Confirme que o CasparCG envia feedback OSC
3. Reinicie o 7CG para reinicializar o ouvinte OSC

## Boas práticas

### Fluxo de produção

1. **Antes do programa:**
   - Carregue toda a media para o rundown com transições
   - Teste cada entrada antes de ir ao ar
   - Defina o volume global para o nível de transmissão adequado

2. **Durante o programa:**
   - Use o rundown para o controlo principal
   - Use o módulo Multimédia para conteúdo ad hoc
   - Acompanhe o painel de Produtores Ativos

3. **Reprodução de emergência:**
   - Mantenha o módulo Multimédia visível para acesso rápido
   - Use CUE para media de início instantâneo
   - Conheça as localizações de gráficos de emergência

### Otimização de desempenho

- **Use codecs adequados**: HAP para canal alfa, DNxHD para qualidade
- **Organize pastas**: Agrupe conteúdo relacionado para navegação mais rápida
- **Pré-cue de media chave**: Carregue clipes importantes em CUE antes de serem necessários
- **Monitorize Produtores Ativos**: Não corra loops desnecessários

### Estratégia de canais e camadas

**Layout típico:**
- **Camadas 0-9**: Media de fundo e vídeos
- **Camadas 10-19**: Oráculos e gráficos estáticos
- **Camadas 20-29**: Gráficos de ecrã inteiro
- **Camadas 30+**: Mensagens de emergência e sobreposições

**Vários canais:**
- **Canal 1**: Saída de programa principal
- **Canal 2**: Saída de pré-visualização/monitor
- **Canal 3**: Multiviewer ou retorno

:::tip
Documente a sua estratégia de canais/camadas e partilhe-a com a equipa para uma operação consistente.
:::

## Integração com Rundowns

A media adicionada ao rundown torna-se um **Bloco de Comando** com as seguintes propriedades:

**Configuração guardada:**
- Caminho do ficheiro
- Canal e camada
- Definições de transição de entrada/saída
- Loop, atraso, duração
- Parâmetros avançados (in frame, comprimento, filtro)

**Execução:**
- Dispara instantaneamente quando a entrada é executada
- Todas as definições aplicadas automaticamente
- Pode ser agrupada com outros comandos
- Suporta atalhos de teclado e disparos pelo Companion

**Vantagens:**
- Sequências repetíveis
- Tempo consistente
- Transições pré-configuradas
- Colaboração em equipa (ficheiros de rundown partilhados)

---

## Resumo

O módulo Multimédia é a base da reprodução de conteúdo do 7CG. Domine-o para:

- Gerir bibliotecas de media grandes de forma eficiente
- Criar transições suaves e profissionais
- Monitorizar várias reproduções em simultâneo
- Construir sequências de rundown fiáveis e repetíveis
- Executar produções em direto sem falhas

Para uso avançado, combine o módulo Multimédia com Oráculos, Bíblia e Louvor para criar fluxos completos de gráficos para transmissão.
