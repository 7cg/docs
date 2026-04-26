---
sidebar_position: 2
---

# Início rápido: campos de template

Este guia mostra como definir campos de template no seu HTML para que sejam renderizados corretamente no 7CG.

O foco aqui é prático:

- O que colocar no bloco GDD
- Que tipos de campo o 7CG efetivamente renderiza
- Como etiquetas, separadores, predefinições e seletores se comportam no editor

## O bloco de script GDD

Todos os templates precisam de um esquema GDD (Graphics Data Definition) embutido no ficheiro HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script name="graphics-data-definition" type="application/json+gdd">
      {
        "$schema": "https://superflytv.github.io/GraphicsDataDefinition/gdd-meta-schema/v1/schema.json",
        "title": "My Template",
        "description": "A simple template example",
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "label": "Main Text",
            "description": "Text shown on screen",
            "gddType": "single-line"
          }
        }
      }
    </script>
    <script type="module" src="./index.jsx"></script>
  </body>
</html>
```

### Propriedades obrigatórias da raiz

| Propriedade | Descrição |
|----------|-------------|
| `$schema` | Use o URL do meta-esquema GDD acima |
| `title` | Nome do template apresentado no 7CG |
| `type` | Use `"object"` para a raiz do template |
| `properties` | Objeto com os campos editáveis |

### Propriedades opcionais comuns na raiz

| Propriedade | Descrição |
|----------|-------------|
| `description` | Descrição do template apresentada no 7CG |
| `authorName` | Autor do template |
| `authorEmail` | E-mail de contacto do autor |
| `gddOptions` | Opções avançadas como grupos e i18n |

## Etiquetas, ajuda e predefinições

Para templates voltados ao operador, as propriedades de campo mais importantes são:

| Propriedade | O que o utilizador vê |
|----------|----------------|
| `label` | Etiqueta principal do campo no editor |
| `description` | Texto de ajuda no tooltip de informação |
| `default` | Valor inicial ou sugestão, dependendo do tipo |
| `maxLength` | Limite de entrada e dica para campos de texto |

Exemplo:

```json
"speakerName": {
  "type": "string",
  "label": "Speaker Name",
  "description": "Name shown on the first line",
  "default": "Jane Smith",
  "maxLength": 50,
  "gddType": "single-line"
}
```

### `label` vs `description`

Use:

- `label` para o título visível do campo
- `description` para o texto de ajuda

Se o `label` faltar, o 7CG recorre a `description` e depois à chave do campo.

## Tipos básicos de campo

### String

```json
"title": {
  "type": "string",
  "label": "Title"
}
```

**Renderizado como:** Entrada de texto de uma linha

Opções úteis:

- `minLength`
- `maxLength`
- `default`

### Number

```json
"speed": {
  "type": "number",
  "label": "Speed",
  "default": 100,
  "minimum": 1,
  "maximum": 500
}
```

**Renderizado como:** Entrada numérica que aceita decimais

Opções úteis:

- `minimum`
- `maximum`
- `multipleOf`
- `default`

### Integer

```json
"count": {
  "type": "integer",
  "label": "Item Count",
  "default": 3
}
```

**Renderizado como:** Entrada numérica com passo `1`

### Boolean

```json
"showLogo": {
  "type": "boolean",
  "label": "Show Logo",
  "default": true
}
```

**Renderizado como:** Interruptor

## Campos especializados com `gddType`

Use `gddType` quando quiser um controlo de editor mais específico.

### Texto de uma linha

```json
"headline": {
  "type": "string",
  "label": "Headline",
  "gddType": "single-line",
  "maxLength": 80
}
```

**Renderizado como:** Entrada explícita de uma linha

### Texto multi-linha

```json
"body": {
  "type": "string",
  "label": "Body Text",
  "gddType": "multi-line",
  "default": "Line 1\nLine 2\nLine 3"
}
```

**Renderizado como:** Textarea

Boa escolha para:

- Letras
- Texto de créditos
- Notas
- Conteúdo em parágrafo

### Seletor de cor (`#RRGGBB`)

```json
"backgroundColor": {
  "type": "string",
  "label": "Background Color",
  "gddType": "color-rrggbb",
  "default": "#000000"
}
```

**Renderizado como:** Seletor visual de cor mais entrada hex

Formato esperado:

- `#RRGGBB`

### Cor com alfa (`#RRGGBBAA`)

```json
"textColor": {
  "type": "string",
  "label": "Text Color",
  "gddType": "color-rrggbbaa",
  "default": "#FFFFFFFF"
}
```

**Renderizado como:** Entrada hex para valores de 8 dígitos

Formato esperado:

- `#RRGGBBAA`

Importante: incluir o `#` inicial.

### Select / Dropdown

```json
"alignment": {
  "type": "string",
  "label": "Alignment",
  "gddType": "select",
  "enum": ["left", "center", "right"],
  "default": "center",
  "gddOptions": {
    "labels": {
      "left": "Left",
      "center": "Center",
      "right": "Right"
    }
  }
}
```

**Renderizado como:** Lista pendente

Use:

- `enum` para os valores permitidos
- `gddOptions.labels` para etiquetas amigáveis

### Percentagem

```json
"opacity": {
  "type": "number",
  "label": "Opacity",
  "gddType": "percentage",
  "default": 75,
  "minimum": 0,
  "maximum": 100
}
```

**Renderizado como:** Entrada numérica com sufixo `%`

### Duração em milissegundos

```json
"fadeDuration": {
  "type": "integer",
  "label": "Fade Duration",
  "gddType": "duration-ms",
  "default": 500,
  "minimum": 0
}
```

**Renderizado como:** Entrada numérica com sufixo `ms`

### Seletor de ficheiro

```json
"videoFile": {
  "type": "string",
  "label": "Video File",
  "gddType": "file-path",
  "gddOptions": {
    "extensions": ["mp4", "mov", "webm"]
  }
}
```

**Renderizado como:** Campo de texto com botão **Procurar**

### Seletor de imagem

```json
"logoPath": {
  "type": "string",
  "label": "Logo Image",
  "gddType": "file-path/image-path",
  "gddOptions": {
    "extensions": ["png", "jpg", "jpeg", "webp"]
  }
}
```

**Renderizado como:** Seletor de ficheiro orientado a imagens com botão **Procurar**

## Arrays e objetos

O 7CG consegue renderizar dados estruturados, não apenas campos planos.

### Campos de objeto

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

**Renderizado como:** Editor aninhado com um campo por propriedade

Use objetos quando vários valores relacionados pertencem juntos.

### Campos de array

```json
"items": {
  "type": "array",
  "label": "Bullet Points",
  "minItems": 1,
  "maxItems": 5,
  "items": {
    "type": "string",
    "gddType": "single-line"
  }
}
```

**Renderizado como:** Lista com controlos de adicionar/remover

Opções úteis:

- `minItems`
- `maxItems`
- `uniqueItems`

### Arrays de objetos

```json
"team": {
  "type": "array",
  "label": "Team Members",
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

**Renderizado como:** Lista em que cada item abre numa janela própria para edição

Útil para:

- Listas de créditos
- Listas de oradores
- Entradas de oráculo repetidas

## Agrupar campos em separadores

Pode organizar campos em separadores com `gddOptions.groups`.

```json
{
  "$schema": "https://superflytv.github.io/GraphicsDataDefinition/gdd-meta-schema/v1/schema.json",
  "title": "Grouped Template",
  "type": "object",
  "gddOptions": {
    "groups": [
      { "id": "content", "label": { "en": "Content" } },
      { "id": "appearance", "label": { "en": "Appearance" } }
    ]
  },
  "properties": {
    "text": {
      "type": "string",
      "label": "Main Text",
      "gddOptions": { "group": "content" }
    },
    "color": {
      "type": "string",
      "label": "Text Color",
      "gddType": "color-rrggbb",
      "gddOptions": { "group": "appearance" }
    }
  }
}
```

Como se comporta no 7CG:

- Os campos atribuídos a grupos conhecidos aparecem em separadores
- Os campos sem grupo aparecem num separador **Outros** de fallback
- Os separadores só aparecem quando o template tem campos efetivamente agrupados

## Internacionalização (i18n)

O 7CG suporta valores traduzidos para:

- `title` do template
- `label` do campo
- `description` do campo

Use `gddOptions.i18n`.

### i18n ao nível do campo

```json
"lyrics": {
  "type": "string",
  "gddType": "multi-line",
  "label": "Lyrics",
  "description": "Lyrics to display",
  "gddOptions": {
    "i18n": {
      "label": {
        "en": "Lyrics",
        "pt": "Letra",
        "es": "Letra"
      },
      "description": {
        "en": "Lyrics to display",
        "pt": "Letra a exibir",
        "es": "Letra a mostrar"
      }
    }
  }
}
```

### i18n ao nível do template

```json
{
  "title": "My Template",
  "gddOptions": {
    "i18n": {
      "title": {
        "en": "My Template",
        "pt": "Meu Template",
        "es": "Mi Plantilla"
      }
    }
  }
}
```

O 7CG usa primeiro o idioma da interface, depois recorre ao inglês e finalmente ao valor predefinido do campo.

## Notas práticas

### Predefinições

`default` é útil, mas não se comporta de forma idêntica em todos os tipos.

Na prática:

- booleanos e muitos campos numéricos mostram a predefinição como valor inicial
- campos de string usam frequentemente a predefinição como sugestão de placeholder
- arrays e objetos usam predefinições ao construir editores aninhados

Trate as predefinições como sugestão inicial, não como regra estrita sobre a aparência de cada controlo.

### Validação

O 7CG usa detalhes do esquema como:

- `minLength`
- `maxLength`
- `minimum`
- `maximum`
- `minItems`
- `maxItems`

para moldar o editor e ajudar o utilizador, mas não deve confiar no editor genérico para garantir todas as regras de esquema da mesma forma que um validador de backend.

## Exemplo completo

```html
<script name="graphics-data-definition" type="application/json+gdd">
{
  "$schema": "https://superflytv.github.io/GraphicsDataDefinition/gdd-meta-schema/v1/schema.json",
  "title": "Credits Roll",
  "description": "Credits template with grouped fields",
  "type": "object",
  "gddOptions": {
    "groups": [
      { "id": "content", "label": { "en": "Content" } },
      { "id": "style", "label": { "en": "Style" } }
    ]
  },
  "properties": {
    "heading": {
      "type": "string",
      "label": "Heading",
      "gddType": "single-line",
      "default": "Production Team",
      "gddOptions": { "group": "content" }
    },
    "people": {
      "type": "array",
      "label": "People",
      "gddOptions": { "group": "content" },
      "items": {
        "type": "object",
        "title": "Person",
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
    },
    "textColor": {
      "type": "string",
      "label": "Text Color",
      "gddType": "color-rrggbbaa",
      "default": "#FFFFFFFF",
      "gddOptions": { "group": "style" }
    },
    "speed": {
      "type": "number",
      "label": "Speed",
      "default": 100,
      "minimum": 1,
      "maximum": 500,
      "gddOptions": { "group": "style" }
    }
  }
}
</script>
```

## Testar os seus campos

1. Guarde o ficheiro HTML com o bloco GDD embutido.
2. Atualize os templates no 7CG ou reconecte à fonte de templates.
3. Abra um módulo que use o template.
4. Confirme que etiquetas, separadores, seletores, arrays e predefinições aparecem como esperado.

Se os campos não aparecerem corretamente:

- Verifique se o JSON é válido
- Confirme que o `type` da raiz é `"object"`
- Confirme que cada propriedade tem um `type` utilizável
- Verifique a ortografia de `gddType`
- Garanta que os campos agrupados referenciam um ID de grupo real
- Confirme que os formatos de cor usam `#RRGGBB` ou `#RRGGBBAA`

## Referência rápida

| Quero... | Usar |
|------------|-----|
| Texto de uma linha | `"type": "string"` ou `"gddType": "single-line"` |
| Texto multi-linha | `"type": "string", "gddType": "multi-line"` |
| Número inteiro | `"type": "integer"` |
| Número decimal | `"type": "number"` |
| Interruptor on/off | `"type": "boolean"` |
| Seletor de cor RGB | `"type": "string", "gddType": "color-rrggbb"` |
| Cor RGBA | `"type": "string", "gddType": "color-rrggbbaa"` |
| Dropdown | `"gddType": "select"` com `enum` |
| Percentagem | `"gddType": "percentage"` |
| Duração em ms | `"gddType": "duration-ms"` |
| Seletor de ficheiro genérico | `"gddType": "file-path"` |
| Seletor de imagem | `"gddType": "file-path/image-path"` |
| Agrupar campos em separadores | `gddOptions.groups` na raiz e `gddOptions.group` em cada campo |
| Traduzir etiquetas e descrições | `gddOptions.i18n` |
| Construir listas repetidas | `"type": "array"` |
| Construir dados aninhados | `"type": "object"` |

## Passos seguintes

- [Referência de campos](./field-reference) para consulta rápida dos tipos suportados e opções
- [Arrays e objetos](./arrays-and-objects) para listas repetidas e dados aninhados
- [Agrupamento e i18n](./grouping-and-i18n) para separadores, traduções e editores mais limpos
