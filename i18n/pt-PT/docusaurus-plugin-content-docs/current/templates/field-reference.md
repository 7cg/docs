---
sidebar_position: 3
---

# Referência de campos

Esta página é uma referência rápida para os tipos de campo e opções que o 7CG renderiza atualmente no seu editor de templates.

Use-a quando já entender o básico e só quiser confirmar:

- que `type` ou `gddType` usar
- o que o editor vai mostrar
- que propriedades extras são úteis para esse campo

Para uma introdução em formato de tutorial, veja [Início rápido: campos de template](./quick-start).

## Referência do esquema raiz

### Propriedades obrigatórias da raiz

| Propriedade | Tipo | Notas |
|----------|------|-------|
| `$schema` | `string` | Use o URL do meta-esquema GDD |
| `title` | `string` | Nome do template apresentado no 7CG |
| `type` | `string` | Use `"object"` na raiz |
| `properties` | `object` | Campos editáveis de topo |

### Propriedades opcionais comuns na raiz

| Propriedade | Tipo | Notas |
|----------|------|-------|
| `description` | `string` | Descrição apresentada nos seletores |
| `authorName` | `string` | Autor do template |
| `authorEmail` | `string` | Contacto do autor |
| `gddOptions.groups` | `array` | Define grupos de separadores |
| `gddOptions.i18n.title` | `object` | Título do template traduzido |

## Propriedades comuns dos campos

| Propriedade | Tipo | O que faz |
|----------|------|---------------|
| `type` | `string` ou `array` | Tipo de dados base |
| `label` | `string` | Etiqueta principal visível |
| `description` | `string` | Texto de ajuda/tooltip |
| `default` | qualquer | Valor inicial ou placeholder, conforme o campo |
| `gddType` | `string` | Controlo de editor especializado |
| `minLength` | `number` | Tamanho mínimo para strings |
| `maxLength` | `number` | Tamanho máximo para strings |
| `minimum` | `number` | Valor numérico mínimo |
| `maximum` | `number` | Valor numérico máximo |
| `multipleOf` | `number` | Tamanho do passo para números/inteiros |
| `enum` | `array` | Valores permitidos para select/dropdown |
| `minItems` | `number` | Mínimo de itens em arrays |
| `maxItems` | `number` | Máximo de itens em arrays |
| `uniqueItems` | `boolean` | Marca itens do array como únicos |
| `gddOptions.group` | `string` | Coloca o campo num grupo nomeado |
| `gddOptions.labels` | `object` | Etiquetas amigáveis para opções `enum` |
| `gddOptions.i18n` | `object` | `label` e `description` traduzidos |
| `gddOptions.extensions` | `array` | Extensões permitidas em seletores de ficheiro |

## Tipos base suportados

### `string`

**Renderizado como:** entrada de texto de uma linha por defeito

Útil com:

- `label`
- `description`
- `default`
- `minLength`
- `maxLength`
- `gddType`

### `number`

**Renderizado como:** entrada numérica com suporte a decimais

Útil com:

- `default`
- `minimum`
- `maximum`
- `multipleOf`
- `gddType: "percentage"`

### `integer`

**Renderizado como:** entrada numérica com passos inteiros

Útil com:

- `default`
- `minimum`
- `maximum`
- `multipleOf`
- `gddType: "duration-ms"`

### `boolean`

**Renderizado como:** interruptor

Útil com:

- `default`

### `object`

**Renderizado como:** editor de campos aninhados

Propriedade companheira obrigatória:

- `properties`

### `array`

**Renderizado como:** editor de lista repetível

Propriedade companheira obrigatória:

- `items`

Útil com:

- `minItems`
- `maxItems`
- `uniqueItems`

## Valores `gddType` suportados

### `single-line`

**Use com:** `type: "string"`

**Renderizado como:** entrada explícita de uma linha

### `multi-line`

**Use com:** `type: "string"`

**Renderizado como:** textarea

Melhor para:

- letras
- texto de créditos
- notas
- parágrafos

### `color-rrggbb`

**Use com:** `type: "string"`

**Renderizado como:** seletor de cor mais entrada hex

Formato esperado:

- `#RRGGBB`

### `color-rrggbbaa`

**Use com:** `type: "string"`

**Renderizado como:** entrada hex para cor com alfa

Formato esperado:

- `#RRGGBBAA`

### `select`

**Use com:** `type: "string"`, `type: "number"` ou `type: "integer"`

**Renderizado como:** lista pendente

Propriedade obrigatória:

- `enum`

Opcional:

- `gddOptions.labels`

### `percentage`

**Use com:** campos numéricos

**Renderizado como:** entrada numérica com sufixo `%`

### `duration-ms`

**Use com:** campos numéricos

**Renderizado como:** entrada numérica com sufixo `ms`

### `file-path`

**Use com:** `type: "string"`

**Renderizado como:** campo de texto com botão **Procurar**

Opcional:

- `gddOptions.extensions`

### `file-path/image-path`

**Use com:** `type: "string"`

**Renderizado como:** seletor focado em imagens com botão **Procurar**

Opcional:

- `gddOptions.extensions`

## Referência de agrupamento

Para criar separadores no editor:

- defina grupos na raiz com `gddOptions.groups`
- atribua campos a grupos com `gddOptions.group`

Exemplo na raiz:

```json
"gddOptions": {
  "groups": [
    { "id": "content", "label": { "en": "Content" } },
    { "id": "appearance", "label": { "en": "Appearance" } }
  ]
}
```

Exemplo no campo:

```json
"headline": {
  "type": "string",
  "label": "Headline",
  "gddOptions": {
    "group": "content"
  }
}
```

Comportamento:

- os campos agrupados aparecem em separadores
- os campos sem grupo aparecem num separador **Outros** quando o agrupamento está ativo
- os separadores só aparecem quando existem efetivamente campos agrupados

## Referência de i18n

O 7CG suporta valores traduzidos para:

- `title` do template
- `label` do campo
- `description` do campo

Exemplo:

```json
"gddOptions": {
  "i18n": {
    "label": {
      "en": "Speaker Name",
      "pt": "Nome do Orador",
      "es": "Nombre del Ponente"
    }
  }
}
```

Ordem de fallback:

1. idioma atual da UI
2. inglês
3. valor predefinido do campo

## Referência de arrays e objetos

### Exemplo de objeto

```json
"nameBlock": {
  "type": "object",
  "label": "Name Block",
  "properties": {
    "line1": {
      "type": "string",
      "label": "Line 1"
    },
    "line2": {
      "type": "string",
      "label": "Line 2"
    }
  }
}
```

### Exemplo de array de strings

```json
"bulletPoints": {
  "type": "array",
  "label": "Bullet Points",
  "items": {
    "type": "string",
    "gddType": "single-line"
  },
  "minItems": 1,
  "maxItems": 5
}
```

### Exemplo de array de objetos

```json
"team": {
  "type": "array",
  "label": "Team",
  "items": {
    "type": "object",
    "title": "Member",
    "properties": {
      "name": {
        "type": "string",
        "label": "Name"
      },
      "role": {
        "type": "string",
        "label": "Role"
      }
    }
  }
}
```

Comportamento:

- itens primitivos podem ser editados inline
- itens complexos abrem na sua própria janela
- os objetos renderizam campos filho aninhados

## Notas práticas

- Use `label` sempre que possível; dá ao utilizador um editor mais limpo.
- Use `description` para texto de ajuda, não como única etiqueta visível se possível.
- Inclua `#` nas cores predefinidas.
- Use famílias dedicadas como `LOWERTHIRDS`, `CREDITS`, `BIBLE` e `HYMNS` para que os utilizadores encontrem os templates no módulo certo.
- Trate esta página como acompanhante de consulta ao início rápido, não como substituto dos testes no 7CG.

## Páginas relacionadas

- [Desenvolvimento de templates](./)
- [Início rápido: campos de template](./quick-start)
- [Testes e depuração de templates](./testing-and-debugging)
- [Famílias de templates](./template-families)

## Passos seguintes

- [Arrays e objetos](./arrays-and-objects) para estruturas baseadas em listas e dados aninhados
- [Agrupamento e i18n](./grouping-and-i18n) para organizar campos em separadores e traduzir etiquetas
