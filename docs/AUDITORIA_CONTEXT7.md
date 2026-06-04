# Auditoría Context7

[Volver al índice general](../INDICE_GENERAL.md)

Fecha: 2026-06-05

Esta auditoría recoge qué afirmaciones técnicas del README y guías se han contrastado con Context7 y fuentes oficiales.

---

## React

Consulta usada:

```bash
npx ctx7@latest docs /facebook/react/v19_2_0 "React 19.2 Actions useActionState useOptimistic useEffectEvent Activity components state current docs"
```

Verificado:

- React 19 incluye patrones con Actions y `useActionState`.
- `useOptimistic` aparece en patrones modernos para actualizaciones optimistas.
- React 19.2 incluye `useEffectEvent`.
- React 19.2 incluye `<Activity />` para ocultar/restaurar partes de UI conservando estado.

Uso en el repo:

- README menciona React 19 y React 19.2 de forma coherente.
- La práctica puente usa `useActionState` como ejemplo conceptual.
- La guía JS -> React mantiene la equivalencia correcta entre estado vanilla y `useState`.

---

## Angular

Consultas usadas:

```bash
npx ctx7@latest library angular "Angular current docs signals standalone components reactive forms HttpClient control flow"
npx ctx7@latest docs /websites/angular_dev "signals components control flow reactive forms HttpClient current Angular docs for beginner transition from JavaScript"
```

Verificado:

- Angular actual usa componentes como unidad principal.
- Angular actual documenta `signal()` para estado reactivo.
- Angular actual usa sintaxis moderna de control flow como `@if` y `@for`.
- Angular mantiene formularios reactivos como enfoque estable.
- `HttpClient` sigue siendo la herramienta documentada para HTTP.

Matiz importante:

- Signal Forms aparece en documentación actual, pero como API experimental. Por eso el repo no la presenta como base estable para alumnado.

---

## Node, npm, pnpm y Vite

Verificado con fuentes oficiales fuera de Context7:

- Node.js 24 es línea Active LTS en junio de 2026.
- Node.js 26 existe como Current, pero para clase se recomienda LTS.
- npm sigue siendo el gestor incluido con Node.
- Corepack permite activar pnpm.
- Vite sigue siendo una herramienta recomendada para proyectos JavaScript vanilla y React.

---

## Qué no se puede afirmar todavía

- No se ha ejecutado cada snippet de JavaScript de todos los apuntes. Muchos bloques son ejemplos didácticos parciales y no programas completos.
- No se ha validado cada enlace externo, solo los enlaces locales Markdown.
- No se ha hecho todavía una normalización completa de todos los encabezados antiguos con HTML.

---

## Comprobaciones locales añadidas

```bash
node scripts/check-doc-links.js
node Ejercicios/autocorregibles/arrays.test.js
```

Resultado actual:

- Enlaces locales Markdown correctos en 39 archivos.
- Test autocorregible de arrays correcto.
- Sin bloques de código Markdown abiertos.
- Sin encabezados duplicados detectados en la última pasada.

---

[Volver al índice general](../INDICE_GENERAL.md)
