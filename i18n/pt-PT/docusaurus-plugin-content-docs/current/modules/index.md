---
sidebar_position: 1
---

# Visão geral dos módulos

O 7CG é construído à volta de um espaço de trabalho modular. Cada módulo é especializado numa parte específica do fluxo de produção, e o sistema de layouts permite-lhe organizar esses módulos de acordo com a função do operador.

## Módulos do espaço de trabalho principal

### Módulo Multimédia
**Reprodução de vídeo, áudio e imagem**

O módulo Multimédia é o seu centro de controlo para reproduzir ficheiros de vídeo, faixas de áudio e imagens a partir do servidor CasparCG. Inclui navegação hierárquica, pré-visualização em miniatura, transições, busca temporal, repetição e monitorização em tempo real da reprodução ativa.

**Casos de uso:**
- Reprodução de pacotes de vídeo
- Loops de fundo
- Faixas de áudio
- Apresentação de imagens estáticas
- Motion graphics

[Saber mais sobre o módulo Multimédia →](./media)

### Módulo Oráculos
**Gráficos de nome e título**

Apresenta oráculos profissionais com nomes, títulos e texto personalizado. Suporta templates, transições e conteúdo multilingue.

**Casos de uso:**
- Identificação de oradores
- Apresentação de convidados
- Sujeitos de entrevistas
- Discussões em painel
- Segmentos noticiosos

[Saber mais sobre o módulo Oráculos →](./lower-thirds)

### Módulo Bíblia
**Apresentação de Escrituras**

Pesquise, navegue e apresente versículos bíblicos com suporte para várias traduções. Integra-se com templates do CasparCG para apresentar Escrituras no ar.

**Casos de uso:**
- Leituras das Escrituras em cultos
- Referências durante o sermão
- Sessões de estudo bíblico
- Apresentações para memorização

[Saber mais sobre o módulo Bíblia →](./bible)

### Módulo Louvor
**Apresentação de canções e hinos**

Apresente letras de canções e hinos em layouts versículo a versículo ou por grupos. Base de dados de hinário integrada com pesquisa e navegação.

**Casos de uso:**
- Cânticos congregacionais
- Letras de cânticos de adoração
- Apresentação de hinos
- Atuações musicais especiais

[Saber mais sobre o módulo Louvor →](./lyrics)

### Módulo Info Canal
**Controlo de sobreposições de mosca e ID**

Configure e monitorize as sobreposições sempre disponíveis de mosca e ID para um canal.

**Casos de uso:**
- Mosca permanente em direto
- ID de estação
- Sobreposições de imagem do programa

[Saber mais sobre o módulo Info Canal →](./channel-graphics)

### Módulo Ficha Técnica
**Créditos de produção e agradecimentos**

Prepare e lance gráficos do tipo créditos para agradecimentos, listas de equipa e rolos finais.

**Casos de uso:**
- Créditos da equipa de produção
- Segmentos de bastidores
- Reconhecimento de equipa
- Apresentações de equipa

[Saber mais sobre o módulo Ficha Técnica →](./credits)

### Módulo Ticker
**Texto rolante**

Crie mensagens de texto rolante, avisos e barras informativas.

**Casos de uso:**
- Notícias de última hora
- Avisos
- Informação de evento
- Alertas de emergência
- Apresentação contínua de informação

[Saber mais sobre o módulo Ticker →](./ticker)

### Módulo Outros Templates

Disponibiliza acesso a gráficos adicionais movidos por templates fora do fluxo principal de oráculos.

[Saber mais sobre o módulo Outros Templates →](./other-templates)

### Módulo Camadas

Mostra as camadas ativas e a ocupação atual no ar, útil para resolver conflitos ou perceber o que o CasparCG está a reproduzir.

[Saber mais sobre o módulo Camadas →](./layers-overview)

### Módulo Rundown
**Planeamento, execução e exportação**

O módulo Rundown é o centro operacional do 7CG. Permite-lhe:

- Organizar o conteúdo do programa em itens executáveis
- Disparar o item selecionado ou um item específico a partir do Companion
- Acompanhar a posição atual e seguinte
- Exportar itens compatíveis para vídeo

[Saber mais sobre o módulo Rundown →](./rundown)

## Módulos do canvas vs. tipos de bloco

Nem todas as funcionalidades visíveis ao utilizador são módulos autónomos de topo no canvas.

Por exemplo:

- **QR Code** e **Ficha Técnica** são tipos de bloco executáveis importantes
- **Bíblia** e **Louvor** são simultaneamente módulos do canvas e tipos de bloco do rundown
- **Rundown** é onde muitas ações orientadas a blocos são criadas, editadas e executadas

## Arquitetura dos módulos

### Funcionalidades comuns

Todos os módulos do 7CG partilham funcionalidades arquiteturais comuns:

**Secções expansíveis**
- Os módulos podem ser recolhidos/expandidos para poupar espaço no ecrã
- Trabalhar em vários módulos em simultâneo

**Conscientes do layout**
- Os módulos podem ser movidos entre colunas
- Os módulos podem ser ocultados ou restaurados
- Layouts inteiros podem ser guardados como predefinições

**Atualizações em tempo real**
- As alterações refletem-se de imediato na saída do CasparCG
- O estado operacional pode também ser transmitido ao Companion para feedback e controlo

**Integração com templates**
- Funciona com templates CasparCG compatíveis com GDD
- Suporta designs gráficos personalizados

## Integração no fluxo de trabalho

### Utilização típica de um módulo

1. **Preparar conteúdo** — Use a interface do módulo para configurar o conteúdo
2. **Pré-visualizar** — Verifique a saída antes de ir ao ar (quando suportado)
3. **Adicionar ao rundown** — Guarde o conteúdo configurado como bloco do rundown
4. **Executar** — Dispare a partir do rundown durante a produção em direto

### Fluxo Módulo + Rundown

```
Módulo Multimédia
  ↓ Selecionar e configurar
Bloco de Comando no Rundown
  ↓ Executar
Saída CasparCG
  ↓ Apresentar
Transmissão/Stream
```

### Execução direta vs. via rundown

**Execução direta (a partir do módulo):**
- Conteúdo rápido e ad-hoc
- Testes e pré-visualizações
- Situações de emergência
- Operações simples

**Execução via rundown:**
- Sequências planeadas
- Operações repetíveis
- Programas complexos com vários passos
- Coordenação em equipa

:::tip Boa prática
Use os módulos para preparar e testar conteúdo e adicione-o depois ao rundown para a execução do programa. Garante consistência e repetibilidade.
:::

## Atalhos de teclado

Muitos módulos suportam atalhos de teclado para maior eficiência:

- **Espaço** — Reproduzir/Executar item selecionado
- **Enter** — Adicionar ao rundown ou confirmar
- **Escape** — Fechar diálogos
- **Ctrl+F** — Pesquisar/filtrar (quando aplicável)

:::note
Os atalhos específicos variam por módulo. Consulte a documentação de cada módulo para mais detalhes.
:::

## Visibilidade dos módulos

Controle que módulos aparecem na sua interface:

**Configuração → Interface → Módulos**

Ative ou desative módulos específicos consoante as suas necessidades de produção. Mantém a interface limpa e focada.

:::tip
Desative módulos não utilizados para simplificar a interface aos operadores que só precisam de funcionalidades específicas.
:::

## Personalização

### Personalização de templates

Os módulos gráficos e muitos tipos de bloco do rundown trabalham com templates CasparCG. Personalize-os para corresponderem à sua identidade:

- Cores e tipos de letra
- Logótipos e identidade visual
- Tempo das animações
- Layout e posicionamento

Consulte o **Guia de Desenvolvimento de Templates** para criar templates personalizados.

### Personalização do layout

Use [Layouts](../configuration/layouts) para:

- Reorganizar módulos em colunas
- Ocultar módulos temporariamente
- Guardar predefinições nomeadas para diferentes operadores ou produções

### Personalização de cores dos blocos

Personalize cores dos blocos do rundown por tipo:

**Configuração → Cores dos blocos**

Defina cores de tema claro e escuro para cada tipo de bloco para organizar visualmente o seu rundown.

## Considerações de desempenho

### Uso de recursos por módulo

**Módulos leves:**
- Bíblia (consultas à base de dados)
- Louvor (consultas à base de dados)
- Vista de Camadas

**Módulos com mais carga:**
- Multimédia (geração de miniaturas, listas grandes de ficheiros)
- Gravador (codificação em tempo real)
- Exportação de vídeo a partir do rundown

### Sugestões de otimização

1. **Limite módulos abertos** — Recolha módulos não utilizados
2. **Pesquise eficientemente** — Use termos específicos
3. **Pré-configure definições** — Reduza cliques com bons valores predefinidos
4. **Organize o conteúdo** — Use pastas e convenções de nomenclatura

:::note
O desenvolvimento de módulos requer conhecimento de TypeScript/React e da arquitetura de plug-ins do 7CG. Veja o **Guia do Programador** para detalhes.
:::

## Obter ajuda

Para ajuda específica por módulo:

1. Consulte as páginas de documentação de cada módulo
2. Reveja tutoriais em vídeo (se disponíveis)
3. Consulte a secção de resolução de problemas
4. Peça apoio à comunidade

---

## Passos seguintes

- Explore a documentação individual de cada módulo
- Configure os módulos preferidos
- Construa o seu primeiro rundown com vários módulos
- Personalize templates e cores

Pronto para mergulhar mais fundo? Comece pelo [Módulo Multimédia](./media) para dominar a reprodução profissional de media.
