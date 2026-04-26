---
sidebar_position: 4
---

# Arrays e objetos

Esta página explica como construir dados estruturados de template no 7CG usando:

- `type: "object"`
- `type: "array"`

Estes tipos de campo são especialmente úteis quando um template precisa de mais do que alguns campos de texto planos.

Exemplos comuns:

- listas de equipa ou créditos
- bullet points repetidos
- horários
- blocos agrupados de nome/título
- gráficos com várias pessoas

## Quando usar um objeto

Use um objeto quando vários valores relacionados pertencem juntos.

Casos de uso:

- um bloco de nome com `line1` e `line2`
- um bloco de legenda com `title`, `subtitle` e `tag`
- um bloco de estilo com várias definições relacionadas

### Exemplo básico de objeto

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

### O que os utilizadores veem no 7CG

Um objeto é renderizado como um editor aninhado contendo os campos filho listados em `properties`.

Dá ao utilizador uma secção visível para o bloco inteiro em vez de espalhar campos relacionados pelo editor.

## Quando usar um array

Use um array quando o utilizador precisa de uma lista repetível de itens.

Casos de uso:

- bullet points
- vários oradores
- nomes de créditos
- itens de agenda
- listas de equipa

### Array de strings

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

### O que os utilizadores veem no 7CG

Para itens primitivos como strings ou números, os utilizadores editam a lista inline.

Podem:

- adicionar itens
- remover itens
- editar cada item diretamente na lista

Se `maxItems` estiver definido, o botão de adicionar mostra a contagem atual.

## Arrays de objetos

Os arrays de objetos são um dos padrões estruturados mais úteis no 7CG.

Use-os quando cada item da lista precisa de vários campos.

Casos de uso:

- entradas de créditos com `name` e `role`
- listas de oradores com `name`, `title` e `organization`
- entradas de agenda com `time`, `title` e `location`

### Exemplo de créditos

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

### O que os utilizadores veem no 7CG

Para arrays de objetos, cada item aparece como uma entrada da lista com:

- uma pré-visualização do conteúdo atual
- um botão de editar
- um botão de remover

Editar abre o item numa janela própria, o que mantém os itens complexos manejáveis.

## Objetos aninhados dentro de arrays

Pode combinar objetos e arrays livremente.

Por exemplo, cada item de array pode conter um objeto aninhado:

```json
"speakers": {
  "type": "array",
  "label": "Speakers",
  "items": {
    "type": "object",
    "title": "Speaker",
    "properties": {
      "identity": {
        "type": "object",
        "label": "Identity",
        "properties": {
          "name": {
            "type": "string",
            "label": "Name"
          },
          "title": {
            "type": "string",
            "label": "Title"
          }
        }
      }
    }
  }
}
```

É poderoso, mas também torna o editor mais complexo. Use o aninhamento quando ajuda os utilizadores a perceber a estrutura, não apenas porque o esquema o permite.

## Propriedades úteis de array

### `minItems`

```json
"minItems": 1
```

Indica que se espera pelo menos um item.

### `maxItems`

```json
"maxItems": 10
```

Limita quantos itens os utilizadores podem adicionar.

### `uniqueItems`

```json
"uniqueItems": true
```

Marca a lista como destinada a conter valores únicos.

Útil para a intenção do autor, ainda que os utilizadores devam testar o comportamento final no editor.

## Predefinições para campos estruturados

As predefinições são especialmente úteis para arrays e objetos.

### Predefinição de objeto

```json
"nameBlock": {
  "type": "object",
  "label": "Name Block",
  "default": {
    "line1": "Jane Smith",
    "line2": "Presenter"
  },
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

### Predefinição de array

```json
"bulletPoints": {
  "type": "array",
  "label": "Bullet Points",
  "default": ["Welcome", "Announcements", "Closing Prayer"],
  "items": {
    "type": "string"
  }
}
```

As predefinições facilitam o teste dos editores estruturados porque os utilizadores veem imediatamente como o template se comporta com dados realistas.

## Bons padrões

### Padrão: Bloco de nome de duas linhas

Use um objeto.

Porquê:

- as duas linhas pertencem juntas
- os utilizadores percebem o bloco como uma unidade

### Padrão: Lista de bullets

Use um array de strings.

Porquê:

- os utilizadores podem adicionar, remover e reordenar itens repetidos

### Padrão: Rolo de créditos

Use um array de objetos.

Porquê:

- cada linha tem vários valores
- os utilizadores precisam de uma lista repetível de entradas semelhantes

### Padrão: Gráfico de múltiplos oradores

Use um array de objetos, com cada objeto a conter os campos do orador.

Porquê:

- escala melhor do que criar campos fixos `speaker1`, `speaker2`, `speaker3`

## Padrões a evitar

### Evite achatar dados repetidos sem necessidade

Menos útil:

```json
"person1Name": { "type": "string" },
"person1Role": { "type": "string" },
"person2Name": { "type": "string" },
"person2Role": { "type": "string" }
```

Melhor:

```json
"team": {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "role": { "type": "string" }
    }
  }
}
```

### Evite aninhamento profundo sem necessidade real

Se a estrutura ficar demasiado profunda, o editor torna-se mais difícil de usar.

Prefira a estrutura mais simples que ainda corresponda ao modelo mental do utilizador.

## Checklist prática de testes

Ao testar arrays e objetos no 7CG, confirme que:

- as secções de objeto mostram todos os campos filho esperados
- os arrays primitivos permitem adicionar/remover corretamente
- os arrays de objetos abrem a sua janela de edição corretamente
- as pré-visualizações dos itens de objeto são significativas
- `minItems` e `maxItems` se comportam como esperado
- as predefinições produzem dados iniciais úteis

## Páginas relacionadas

- [Desenvolvimento de templates](./)
- [Início rápido: campos de template](./quick-start)
- [Referência de campos](./field-reference)
- [Testes e depuração de templates](./testing-and-debugging)

## Passos seguintes

- [Agrupamento e i18n](./grouping-and-i18n) para dividir editores maiores em separadores mais claros
- [Testes e depuração de templates](./testing-and-debugging) para verificar o comportamento de arrays e objetos no 7CG
