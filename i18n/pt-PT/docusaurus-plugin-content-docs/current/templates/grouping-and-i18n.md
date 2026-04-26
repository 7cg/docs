---
sidebar_position: 5
---

# Agrupamento e i18n

Esta página explica duas funcionalidades importantes que tornam os editores de template mais fáceis para os utilizadores:

- **Agrupar** campos em separadores
- **Internacionalizar** títulos, etiquetas e descrições

São especialmente úteis quando um template tem mais do que um punhado de campos.

## Por que agrupar campos

Sem agrupamento, todos os campos aparecem numa lista longa.

Está bem para um template muito pequeno, mas torna-se difícil de usar quando um template inclui:

- campos de conteúdo
- definições de aparência
- definições de animação
- seletores de ficheiro
- listas repetidas

O agrupamento permite-lhe dividir tudo isso em secções claras para que os utilizadores encontrem rapidamente o que precisam.

## Como funciona o agrupamento

O agrupamento usa duas partes:

1. uma lista de grupos ao nível da raiz
2. uma atribuição de grupo por campo

### Grupos da raiz

Defina grupos na raiz com `gddOptions.groups`:

```json
"gddOptions": {
  "groups": [
    { "id": "content", "label": { "en": "Content" } },
    { "id": "appearance", "label": { "en": "Appearance" } },
    { "id": "timing", "label": { "en": "Timing" } }
  ]
}
```

Cada grupo precisa de:

- um `id`
- um `label`

### Atribuição por campo

Atribua um campo a um grupo com `gddOptions.group`:

```json
"headline": {
  "type": "string",
  "label": "Headline",
  "gddOptions": {
    "group": "content"
  }
}
```

O valor de grupo do campo tem de corresponder a um dos IDs de grupo na raiz.

## O que os utilizadores veem no 7CG

Quando o agrupamento está bem configurado:

- os campos agrupados aparecem em separadores
- cada separador mostra apenas os campos atribuídos a esse grupo
- os campos sem grupo aparecem num separador **Outros** de fallback

Os separadores só aparecem quando o 7CG encontra campos efetivamente agrupados. Se houver grupos definidos mas nenhum campo os usar, o editor recorre a uma lista plana normal.

## Bons padrões de agrupamento

### Padrão: Conteúdo + Aparência

O melhor padrão de uso geral para muitos gráficos.

- `content` para texto, nomes, títulos e corpo
- `appearance` para cores, logos, fundos e escolhas de estilo

### Padrão: Conteúdo + Estilo + Tempo

Útil para templates animados mais avançados.

- `content` para a mensagem em si
- `style` para cores e layout
- `timing` para durações, atrasos e velocidades de animação

### Padrão: Principal + Avançado

Útil quando a maioria dos operadores só precisa de alguns campos.

- `main` para os controlos comuns
- `advanced` para opções alteradas com menos frequência

## Exemplo de agrupamento

```json
{
  "$schema": "https://superflytv.github.io/GraphicsDataDefinition/gdd-meta-schema/v1/schema.json",
  "title": "Grouped Lower Third",
  "type": "object",
  "gddOptions": {
    "groups": [
      { "id": "content", "label": { "en": "Content" } },
      { "id": "appearance", "label": { "en": "Appearance" } }
    ]
  },
  "properties": {
    "line1": {
      "type": "string",
      "label": "Line 1",
      "gddOptions": { "group": "content" }
    },
    "line2": {
      "type": "string",
      "label": "Line 2",
      "gddOptions": { "group": "content" }
    },
    "textColor": {
      "type": "string",
      "label": "Text Color",
      "gddType": "color-rrggbb",
      "gddOptions": { "group": "appearance" }
    },
    "backgroundColor": {
      "type": "string",
      "label": "Background Color",
      "gddType": "color-rrggbb",
      "gddOptions": { "group": "appearance" }
    }
  }
}
```

## Por que i18n importa

O 7CG pode mostrar texto traduzido no editor em vez de obrigar todos os utilizadores a ler o idioma predefinido.

Melhora:

- títulos no seletor de templates
- etiquetas dos campos
- texto de ajuda dos campos

É especialmente útil em ambientes partilhados onde os operadores usam idiomas diferentes na UI.

## O que pode ser traduzido

O 7CG suporta valores traduzidos para:

- `title` do template
- `label` do campo
- `description` do campo

## i18n ao nível do campo

Use `gddOptions.i18n` dentro da definição do campo:

```json
"speakerName": {
  "type": "string",
  "label": "Speaker Name",
  "description": "Name shown on screen",
  "gddOptions": {
    "i18n": {
      "label": {
        "en": "Speaker Name",
        "pt": "Nome do Orador",
        "es": "Nombre del Ponente"
      },
      "description": {
        "en": "Name shown on screen",
        "pt": "Nome mostrado no ecrã",
        "es": "Nombre mostrado en pantalla"
      }
    }
  }
}
```

## i18n ao nível do template

Também pode traduzir o título do template:

```json
{
  "title": "Speaker Graphic",
  "gddOptions": {
    "i18n": {
      "title": {
        "en": "Speaker Graphic",
        "pt": "Gráfico do Orador",
        "es": "Gráfico del Ponente"
      }
    }
  }
}
```

Afeta a forma como o template aparece nos seletores e listas pendentes do 7CG.

## Comportamento de fallback

O 7CG resolve o texto traduzido nesta ordem:

1. idioma atual da UI
2. inglês
3. valor predefinido do campo no esquema

Significa que:

- não precisa de traduzir todos os idiomas de imediato
- o inglês é um fallback partilhado útil
- o template continua a funcionar mesmo com traduções incompletas

## `label` vs `description`

Mantenha os papéis separados:

- `label` é o nome visível do campo
- `description` é texto de ajuda

Bom padrão:

```json
"speed": {
  "type": "number",
  "label": "Scroll Speed",
  "description": "Higher values make the credits move faster"
}
```

Dá ao utilizador um título curto mais contexto útil.

## Boas práticas

- Agrupe apenas quando melhorar genuinamente a navegação
- Mantenha as etiquetas dos grupos curtas e óbvias
- Coloque os campos editados com mais frequência no primeiro separador
- Use `label` para nomes concisos e `description` para orientação
- Adicione pelo menos valores de fallback em inglês mesmo que o seu idioma principal seja outro
- Mantenha consistência da redação traduzida entre templates relacionados

## Erros comuns

### IDs de grupo não correspondem

Se um campo referenciar um ID de grupo que não existe na raiz, esse campo não se comportará como esperado.

### Excesso de agrupamento em templates pequenos

Se um template tem poucos campos, os separadores podem fazê-lo parecer mais complexo em vez de mais simples.

### Colocar instruções longas no `label`

Etiquetas longas dificultam o varrimento do editor. Use `description` para explicações extra.

### Falta de fallback em inglês

Mesmo que o seu público-alvo principal não seja inglês, este é um fallback útil em ambientes mistos.

## Checklist prática de testes

Ao testar agrupamento e i18n no 7CG, confirme que:

- os separadores esperados aparecem
- os campos estão nos separadores corretos
- os campos sem grupo aparecem em **Outros** quando o agrupamento está ativo
- os títulos dos templates são apresentados no idioma esperado
- as etiquetas dos campos são apresentadas no idioma esperado
- o texto de ajuda faz fallback corretamente quando uma tradução falta

## Páginas relacionadas

- [Desenvolvimento de templates](./)
- [Início rápido: campos de template](./quick-start)
- [Referência de campos](./field-reference)
- [Arrays e objetos](./arrays-and-objects)
- [Testes e depuração de templates](./testing-and-debugging)

## Passos seguintes

- [Testes e depuração de templates](./testing-and-debugging) para verificar separadores agrupados e etiquetas traduzidas na prática
- [Famílias de templates](./template-families) para colocar templates terminados no fluxo certo do 7CG
