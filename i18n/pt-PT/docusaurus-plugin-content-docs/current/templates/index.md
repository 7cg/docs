---
sidebar_position: 1
---

# Desenvolvimento de Templates

Aprenda a criar e personalizar templates gráficos do CasparCG para uso com o 7CG.

## O que é um template?

Um template do 7CG é um template gráfico HTML do CasparCG que apresenta conteúdo dinâmico na saída de transmissão. Os templates são construídos com React e incluem um esquema GDD (Graphics Data Definition) embutido que define:

- **Título do template** — Nome de apresentação no 7CG
- **Propriedades** — Definições de campos que criam controlos de entrada na interface do 7CG
- **Tipos de campo** — Entradas especializadas como seletores de cor, áreas de texto e listas pendentes
- **Internacionalização** — Etiquetas e descrições em vários idiomas

## Começar

A parte mais importante do desenvolvimento de templates para integração com o 7CG é definir corretamente o seu **esquema GDD**. O esquema está embutido no ficheiro HTML do template e determina que campos aparecem no 7CG quando os utilizadores trabalham com o template.

Consulte o [Guia de início rápido](./quick-start) para saber como definir campos que aparecem corretamente no cliente 7CG.

## Páginas recomendadas a seguir

Depois do início rápido, as páginas mais úteis são:

- [Referência de campos](./field-reference) para consulta rápida dos tipos suportados, valores `gddType` e opções comuns
- [Arrays e objetos](./arrays-and-objects) para construir listas, blocos aninhados, entradas de créditos e outros dados estruturados
- [Agrupamento e i18n](./grouping-and-i18n) para organizar campos em separadores e localizar títulos, etiquetas e descrições
- [Testes e depuração de templates](./testing-and-debugging) para perceber por que um template ou campo não aparece como esperado
- [Famílias de templates](./template-families) para perceber onde os templates aparecem no 7CG conforme o prefixo da família

## Estrutura de um template

Um template típico contém:

```
my-template/
├── index.html       # HTML com esquema GDD embutido
├── index.jsx        # Componente React do gráfico
├── styles.css       # Estilos do template (opcional)
└── image.png        # Captura de pré-visualização (opcional)
```

O esquema GDD é embutido em `index.html` através de uma tag de script especial:

```html
<script name="graphics-data-definition" type="application/json+gdd">
  {
    "$schema": "https://superflytv.github.io/GraphicsDataDefinition/gdd-meta-schema/v1/schema.json",
    "title": "O Meu Template",
    "type": "object",
    "properties": {
      /* definições de campos */
    }
  }
</script>
```

Este esquema embutido é o que o 7CG lê para perceber os campos do template e apresentá-los na interface.
