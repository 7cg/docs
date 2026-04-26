---
sidebar_position: 4
---

# Módulo Bíblia

O módulo **Bíblia** é o fluxo do 7CG para apresentação de Escrituras em cultos, estudos e produções que precisam de passagens bíblicas no ecrã.

Combina:

- Escolha de versão da Bíblia com filtro por idioma
- Um seletor de passagem guiado para livros, capítulos e versículos
- Saída no ar movida por templates
- Divisão automática de passagens longas em trechos
- Navegação direta por trechos e versículos
- Integração com o estado do rundown e do Companion

## Visão geral

O módulo Bíblia permite-lhe:

- Selecionar a tradução da Bíblia a usar
- Escolher um livro, capítulo e versículo ou intervalo
- Escolher um template da Bíblia quando a seleção de templates estiver ativada
- Personalizar propriedades de template suportadas
- Controlar como passagens longas são divididas com **Máx. caracteres**
- Pré-visualizar ou reproduzir a passagem atual
- Navegar para trás e para a frente entre trechos ou versículos
- Parar a saída atual da Bíblia
- Adicionar a passagem configurada ao rundown

## Componentes da interface

### Seletor de template

O módulo pode mostrar uma lista pendente **Template** quando a seleção de templates está ativada nas definições da Bíblia.

Quando o seletor está visível, os operadores podem substituir o template predefinido para a sessão atual. Quando está oculto, o módulo usa sempre o template predefinido.

As entradas de template vêm da lista de templates do CasparCG e são filtradas pela família de templates da Bíblia.

### Personalização de template

Se o template selecionado expuser propriedades GDD configuráveis, o módulo mostra um botão **Personalizar Template**.

Permite aos operadores substituir campos do template antes de ir ao ar. Esses valores personalizados acompanham a reprodução e podem também ser guardados num item do rundown.

Os **blocos do rundown** de Bíblia também expõem propriedades de template **por bloco** através da sua janela de edição, para que uma única passagem do programa possa usar definições diferentes (por exemplo, fundo ou layout diferentes) sem alterar as predefinições do módulo.

### Seletor de versão da Bíblia

A combobox **Versão** mostra as traduções disponíveis filtradas pelos idiomas ativos nas definições da Bíblia.

O 7CG tenta começar com a tradução predefinida quando esta corresponde ao filtro de idioma ativo. Caso contrário, recorre a outra tradução disponível dentro dos idiomas permitidos.

### Seletor de passagem

O campo **Passagem** abre um seletor guiado para:

- Escolha do livro
- Escolha do capítulo
- Escolha do versículo inicial
- Escolha opcional do versículo final para um intervalo

O passo do livro suporta pesquisa insensível a acentos, o que facilita encontrar livros rapidamente em conjuntos bíblicos localizados.

O seletor também permite limpar a seleção atual diretamente na UI principal do módulo.

### Máx. caracteres

O campo **Máx. caracteres** controla quanta texto da passagem é colocado em cada trecho no ar.

Importa quando:

- Um template tem espaço de texto limitado
- Quer trechos mais curtos e legíveis para projeção
- Está a preparar exportações e quer um ritmo mais limpo em passagens longas

Quando o template selecionado define um limite de tamanho de texto nos seus metadados GDD, o 7CG usa esse valor como ponto de partida.

## Reprodução e navegação

O módulo Bíblia usa um fluxo de template CG:

- **Reproduzir** faz o carregamento inicial do template quando necessário e envia o trecho atual para o ar
- **Anterior** vai para o trecho anterior, ou para o versículo anterior quando já está no primeiro trecho
- **Seguinte** vai para o trecho seguinte, ou para o versículo seguinte quando já está no último trecho
- **Parar** limpa o CG da Bíblia do seu canal, camada e CG layer configurados

Após o carregamento inicial, a navegação atualiza o template ativo em vez de o recarregar.

### Apresentação em trechos

Quando a passagem selecionada é mais longa do que o limite de caracteres configurado, o 7CG:

- Junta o versículo ou intervalo selecionado num único bloco de texto
- Divide-o em trechos legíveis
- Acompanha o índice do trecho atual em separado da posição do versículo

Significa que **Anterior** e **Seguinte** são primeiro conscientes do trecho e depois conscientes do versículo nas fronteiras.

O painel de pré-visualização mostra:

- A referência da passagem selecionada
- O texto do trecho atual
- Um contador de trechos como `1/3` quando há vários trechos
- Sinais de fronteira quando outro versículo está disponível antes ou depois do trecho atual

## Pré-visualização e encaminhamento avançado

O botão de olho mais à esquerda ativa o modo **Pré-visualização**.

Com a pré-visualização ativada, a Bíblia é enviada para o canal de pré-visualização `2` em vez do canal normal. Útil para verificar a passagem e o template antes de ir ao ar.

A janela **Avançado** permite substituir o encaminhamento e o tempo:

- Canal
- Camada
- CG layer
- Atraso
- Duração

Estas opções aplicam-se à reprodução direta a partir do módulo e ficam guardadas no estado atual do comando.

## Definições

A janela de definições da Bíblia inclui as predefinições principais do módulo:

### Template predefinido

Define o template que o módulo deve usar automaticamente quando a seleção de templates está oculta, ou como escolha inicial quando a seleção está visível.

### Tradução predefinida

Define a tradução que o 7CG deve preferir quando está disponível dentro do filtro de idioma ativo.

### Filtrar por idioma

Limita as versões visíveis a um ou mais grupos de idiomas ativos.

Mantém o seletor de versão focado e é especialmente útil em ambientes multilingues.

### Seleção de template

Controla se os operadores veem a lista pendente de Template no módulo principal:

- **Mostrar** permite substituições por sessão
- **Ocultar** reforça o template predefinido configurado

## Integração com o Companion

O módulo Bíblia publica estado consciente da navegação para fluxos do Companion.

Quando uma passagem é lançada a partir do módulo, o 7CG acompanha e transmite:

- Índice do trecho atual
- Total de trechos
- Número do versículo atual
- Total de versículos no capítulo
- Referência da passagem atual

Ajuda os botões e feedbacks do Companion a manterem-se alinhados com o estado das Escrituras no ar.

## Adicionar ao rundown

A ação **Adicionar ao rundown** cria uma entrada Bíblia que contém:

- A referência da passagem como etiqueta
- O texto completo da passagem como notas
- Informação de livro e capítulo
- O intervalo de versículos selecionado
- O valor atual de **Máx. caracteres**
- O ID da Bíblia selecionada
- O ID do template resolvido
- Quaisquer dados de template personalizados

É o fluxo certo quando quer ter os mesmos gráficos das Escrituras preparados antes do tempo, em vez de escolhidos ad hoc durante o culto.

## Fluxo típico

### Operação direta

1. Selecione a versão da Bíblia
2. Abra o seletor de passagem e escolha o livro, capítulo e versículo ou intervalo
3. Confirme o template
4. Ajuste **Máx. caracteres** se a passagem precisar de trechos mais curtos
5. Use **Pré-visualização** se quiser testar no canal `2`
6. Prima **Reproduzir**
7. Use **Anterior** e **Seguinte** durante a leitura
8. Prima **Parar** quando terminar

### Fluxo de programa preparado

1. Selecione a tradução e a passagem
2. Confirme o template e as propriedades personalizadas
3. Ajuste **Máx. caracteres** para o estilo de apresentação pretendido
4. Clique em **Adicionar ao rundown**
5. Repita para outras leituras
6. Execute as entradas Bíblia mais tarde a partir do módulo Rundown

## Boas práticas

- Use o filtro de idioma para que os operadores só vejam traduções relevantes
- Oculte a seleção de template quando todas as passagens devem usar um único template aprovado
- Teste passagens longas com o template real para que **Máx. caracteres** corresponda à área de texto disponível
- Use o modo Pré-visualização antes de ir ao ar quando os operadores precisam de verificar divisão e estilo
- Adicione leituras recorrentes ao rundown com antecedência para cultos mais repetíveis

## Páginas relacionadas

- [Visão geral dos módulos](./)
- [Módulo Rundown](./rundown)
- [Integração com o Companion](../configuration/companion)
