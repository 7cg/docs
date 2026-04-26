---
sidebar_position: 6
---

# Pruebas y depuración de plantillas

Esta guía te ayuda a comprobar si una plantilla está siendo descubierta correctamente por 7CG y por qué los campos pueden no aparecer como esperas.

Está escrita para autores de plantillas que ya tienen un HTML con un bloque GDD embebido.

## Empieza por lo básico

Antes de buscar problemas más profundos, confirma primero:

1. El HTML de la plantilla contiene un bloque `graphics-data-definition` válido.
2. El esquema raíz usa `"type": "object"`.
3. El JSON es válido y no tiene comas sobrantes.
4. Cada campo en `properties` tiene un `type` válido.
5. La plantilla se ha refrescado en 7CG después de los cambios.

Si alguno está mal, el resto del comportamiento del editor será poco fiable.

## Comprueba si la plantilla aparece en 7CG

Si la plantilla no aparece en 7CG, comprueba:

- Que la plantilla está en una ubicación escaneada por tu CasparCG/templates
- Que 7CG ha refrescado su lista de plantillas
- Que la plantilla pertenece a la familia correcta para el módulo que estás probando

Ejemplos:

- `LOWERTHIRDS/...` para el flujo de Tercios Inferiores
- `CREDITS/...` para el flujo de Créditos
- `BIBLE/...` para plantillas bíblicas
- `HYMNS/...` para plantillas de Letras
- `QRCODE/...` para flujos de QR

Si el prefijo está mal, la plantilla puede existir en disco pero nunca aparecer en el selector que esperas.

## Cuando los campos no aparecen

Si la plantilla aparece pero no hay campos en el editor:

- Asegúrate de que `properties` existe en la raíz
- Asegúrate de que el `type` raíz es `"object"`
- Asegúrate de que las definiciones de campo son objetos JSON válidos
- Asegúrate de que los campos no están a `null` por accidente

Comprueba también si solo creaste estructuras anidadas sin una propiedad de nivel superior válida. 7CG necesita propiedades reales en la raíz antes de construir el editor.

## Cuando las etiquetas se ven mal

Si el editor muestra claves técnicas en lugar de etiquetas amigables:

- Añade un `label`
- O al menos una `description`

7CG hace fallback en este orden:

1. `label` traducido
2. `label` simple
3. `description` traducida
4. `description` simple
5. clave del campo

Si te saltas tanto `label` como `description`, los usuarios verán nombres técnicos como `f0`, `headingText` o `speaker_name`.

## Cuando las pestañas no aparecen

Si esperabas pestañas agrupadas pero solo ves una lista plana:

- Comprueba que `gddOptions.groups` existe en la raíz
- Comprueba que cada campo agrupado tiene `gddOptions.group`
- Comprueba que el ID del grupo del campo coincide con un ID real en la raíz

Las pestañas solo aparecen cuando 7CG encuentra ambos:

- grupos definidos
- campos que pertenecen a esos grupos

Los campos sin grupo se colocan en una pestaña **Otros** cuando hay pestañas agrupadas activas.

## Cuando los colores no se comportan correctamente

Comprueba el formato con cuidado:

- `color-rrggbb` espera `#RRGGBB`
- `color-rrggbbaa` espera `#RRGGBBAA`

Errores comunes:

- olvidar el `#` inicial
- usar 6 dígitos en un campo con alfa
- usar 8 dígitos en un campo RGB simple

Si el control de color se ve raro, prueba con un valor muy obvio como:

- `#FF0000`
- `#00FF00`
- `#0000FFFF`

## Cuando los desplegables no funcionan

Para campos select, necesitas ambos:

- `gddType: "select"`
- un array `enum`

Ejemplo:

```json
"alignment": {
  "type": "string",
  "label": "Alignment",
  "gddType": "select",
  "enum": ["left", "center", "right"]
}
```

Si falta `enum`, 7CG no renderiza el campo como el desplegable esperado.

Si los valores se ven demasiado técnicos, añade etiquetas amigables en `gddOptions.labels`.

## Cuando arrays u objetos parecen rotos

Los campos estructurados son más potentes, pero también más fáciles de configurar mal.

### Para objetos

Comprueba:

- `type: "object"`
- `properties` existe

Si falta `properties`, el editor de objeto no tiene nada que renderizar.

### Para arrays

Comprueba:

- `type: "array"`
- `items` existe

Si falta `items`, 7CG no tiene esquema para cada entrada de la lista.

Para arrays de objetos, recuerda que cada elemento se abre en su propio cuadro. Si el cuadro está vacío, el problema suele estar en `items.properties`.

## Cuando los selectores de archivo no encajan

Si quieres un botón Examinar:

- usa `gddType: "file-path"` para archivos genéricos
- usa `gddType: "file-path/image-path"` para imágenes

Si el selector permite demasiados tipos de archivo, añade:

```json
"gddOptions": {
  "extensions": ["png", "jpg", "jpeg", "webp"]
}
```

Sin filtros de extensión, el selector es más genérico.

## Cuando las traducciones no aparecen

Si `gddOptions.i18n` parece ignorado:

- confirma que las claves de traducción están bajo el campo correcto
- confirma que el código de idioma coincide con el idioma actual de la UI de 7CG
- recuerda que 7CG recurre al inglés y luego al valor por defecto

Buenos sitios para usar i18n:

- `title` de la plantilla
- `label` del campo
- `description` del campo

## Rutina de pruebas práctica

Al construir una plantilla nueva, usa esta secuencia:

1. Empieza con un solo campo string simple y confirma que la plantilla aparece.
2. Añade un tipo de campo más cada vez.
3. Prueba la agrupación solo cuando los campos base funcionen.
4. Prueba arrays y objetos solo cuando etiquetas y campos básicos estén estables.
5. Prueba i18n después de que la versión sin traducción funcione.

Esto facilita ver qué cambio introdujo el problema.

## Buenas pruebas rápidas

Úsalas como checklist final:

- La plantilla aparece en el selector correcto
- El título es legible
- Cada campo tiene una etiqueta amigable
- Los campos multilínea preservan saltos de línea
- Los colores aceptan el formato esperado
- Los campos select muestran las opciones esperadas
- Añadir/editar/quitar en arrays funciona
- Las secciones de objeto muestran todos los campos hijo esperados
- Las pestañas de grupo aparecen en el orden esperado

## Páginas relacionadas

- [Desarrollo de plantillas](./)
- [Inicio rápido: campos de plantilla](./quick-start)
- [Familias de plantillas](./template-families)

## Pasos siguientes

- [Referencia de campos](./field-reference) cuando necesites confirmar las opciones admitidas
- [Familias de plantillas](./template-families) para confirmar que tu plantilla aparece en el módulo correcto
