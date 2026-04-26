---
sidebar_position: 6
---

# Testes e depuração de templates

Este guia ajuda-o a verificar se um template está a ser descoberto corretamente pelo 7CG e por que motivo os campos podem não aparecer como espera.

Foi escrito para autores de templates que já têm um HTML com um bloco GDD embutido.

## Comece pelo básico

Antes de procurar problemas mais profundos, confirme primeiro:

1. O HTML do template contém um bloco `graphics-data-definition` válido.
2. O esquema raiz usa `"type": "object"`.
3. O JSON é válido e não tem vírgulas a mais.
4. Cada campo em `properties` tem um `type` utilizável.
5. O template foi atualizado no 7CG após as alterações.

Se algum destes pontos estiver errado, o resto do comportamento do editor será pouco fiável.

## Verifique se o template aparece no 7CG

Se o template não aparece de todo no 7CG, verifique:

- O template está numa localização varrida pela sua configuração de CasparCG/templates
- O 7CG atualizou a sua lista de templates
- O template pertence à família correta para o módulo que está a testar

Exemplos:

- `LOWERTHIRDS/...` para o fluxo de Oráculos
- `CREDITS/...` para o fluxo de Ficha Técnica
- `BIBLE/...` para templates de Bíblia
- `HYMNS/...` para templates de Letras
- `QRCODE/...` para fluxos de QR Code

Se o prefixo está errado, o template pode existir em disco mas nunca aparecer no seletor esperado.

## Quando os campos não aparecem

Se o template aparece mas não há campos no editor:

- Confirme que `properties` existe na raiz
- Confirme que o `type` da raiz é `"object"`
- Confirme que as definições dos campos são objetos JSON válidos
- Garanta que os campos não estão acidentalmente a `null`

Verifique também se criou apenas estruturas aninhadas sem uma propriedade de topo válida. O 7CG precisa de propriedades reais na raiz antes de conseguir construir o editor.

## Quando as etiquetas parecem erradas

Se o editor mostra chaves técnicas em vez de etiquetas amigáveis:

- Adicione um `label`
- Ou pelo menos adicione uma `description`

O 7CG faz fallback nesta ordem:

1. `label` traduzido
2. `label` simples
3. `description` traduzida
4. `description` simples
5. chave do campo

Se saltar `label` e `description`, os utilizadores verão nomes técnicos como `f0`, `headingText` ou `speaker_name`.

## Quando os separadores não aparecem

Se esperava separadores agrupados mas só vê uma lista plana:

- Verifique se `gddOptions.groups` existe na raiz
- Verifique se cada campo agrupado tem `gddOptions.group`
- Verifique se o ID do grupo do campo corresponde a um ID de grupo real na raiz

Os separadores só aparecem quando o 7CG encontra ambos:

- grupos definidos
- campos que efetivamente pertencem a esses grupos

Os campos sem grupo são colocados num separador **Outros** quando os separadores agrupados estão ativos.

## Quando as cores não se comportam corretamente

Verifique o formato com cuidado:

- `color-rrggbb` espera `#RRGGBB`
- `color-rrggbbaa` espera `#RRGGBBAA`

Erros comuns:

- esquecer o `#` inicial
- usar 6 dígitos num campo com alfa
- usar 8 dígitos num campo RGB simples

Se o controlo de cor parece estranho, teste com um valor muito óbvio como:

- `#FF0000`
- `#00FF00`
- `#0000FFFF`

## Quando as listas pendentes não funcionam

Para campos select, precisa de ambos:

- `gddType: "select"`
- um array `enum`

Exemplo:

```json
"alignment": {
  "type": "string",
  "label": "Alignment",
  "gddType": "select",
  "enum": ["left", "center", "right"]
}
```

Se `enum` falta, o 7CG não renderiza o campo como a lista pendente esperada.

Se os valores parecem demasiado técnicos, adicione etiquetas amigáveis em `gddOptions.labels`.

## Quando arrays ou objetos parecem partidos

Os campos estruturados são mais poderosos, mas também mais fáceis de configurar mal.

### Para objetos

Verifique:

- `type: "object"`
- `properties` existe

Se faltar `properties`, o editor de objeto não tem nada para renderizar.

### Para arrays

Verifique:

- `type: "array"`
- `items` existe

Se faltar `items`, o 7CG não tem esquema para cada entrada da lista.

Para arrays de objetos, lembre-se que cada item abre numa janela própria. Se a janela está vazia, o problema está geralmente em `items.properties`.

## Quando os seletores de ficheiro não correspondem ao esperado

Se quer um botão Procurar:

- use `gddType: "file-path"` para ficheiros genéricos
- use `gddType: "file-path/image-path"` para imagens

Se o seletor permite demasiados tipos de ficheiro, adicione:

```json
"gddOptions": {
  "extensions": ["png", "jpg", "jpeg", "webp"]
}
```

Sem filtros de extensão, o seletor é mais genérico.

## Quando as traduções não aparecem

Se `gddOptions.i18n` parece ignorado:

- confirme que as chaves de tradução estão sob o campo correto
- confirme que o código de idioma corresponde ao idioma atual da UI do 7CG
- lembre-se de que o 7CG recorre ao inglês e depois ao valor predefinido

Bons sítios para usar i18n:

- `title` do template
- `label` do campo
- `description` do campo

## Rotina de teste prática

Ao construir um novo template, use esta sequência:

1. Comece com um único campo string simples e confirme que o template aparece.
2. Adicione mais um tipo de campo de cada vez.
3. Teste o agrupamento só depois de os campos base funcionarem.
4. Teste arrays e objetos só depois de etiquetas e campos básicos estarem estáveis.
5. Teste i18n depois de a versão sem tradução funcionar.

Torna muito mais fácil ver qual a alteração que introduziu o problema.

## Bons testes rápidos

Use isto como checklist final:

- O template aparece no seletor correto
- O título é legível
- Todos os campos têm uma etiqueta amigável
- Os campos multi-linha preservam quebras de linha
- As cores aceitam o formato esperado
- Os campos select mostram as opções esperadas
- Adicionar/editar/remover em arrays funciona
- As secções de objeto mostram todos os campos filho esperados
- Os separadores aparecem na ordem esperada

## Páginas relacionadas

- [Desenvolvimento de templates](./)
- [Início rápido: campos de template](./quick-start)
- [Famílias de templates](./template-families)

## Passos seguintes

- [Referência de campos](./field-reference) quando precisar de confirmar opções suportadas
- [Famílias de templates](./template-families) para confirmar que o seu template aparece no módulo certo
