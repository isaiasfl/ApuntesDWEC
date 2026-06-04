# Auditoría inicial de apuntes

Fecha: 2026-06-05

Esta auditoría no sustituye una revisión pedagógica completa unidad por unidad. Sirve como primera pasada técnica para detectar problemas visibles y dejar una lista de mejora continua.

## Revisado en esta iteración

- README principal.
- Licencia y atribución.
- Ruta de aprendizaje.
- Entorno Node, nvm, npm, pnpm y Vite.
- Ejercicios existentes enlazados desde README.
- Práctica puente hacia React 19.
- Estructura básica de Markdown y bloques de código.

## Correcciones aplicadas

- README convertido en portada moderna del repositorio.
- Stack visual con badges de JavaScript, Node, npm, pnpm, Vite, React, Angular y MDN.
- Fase 5 reducida a ruta y enlaces, sin desarrollar teoría dentro del bloque de estudio.
- Guía separada para JS -> React / Angular.
- Licencia cambiada de GPLv3 a CC BY 4.0 para reforzar atribución docente.
- Añadido `CITATION.cff` para citar el material correctamente.
- Añadidas plantillas de issues.
- Añadido banco ampliado de ejercicios.
- Añadida base de ejercicios autocorregibles con `node:assert`.
- Actualizada unidad de Node/npm para incluir nvm, pnpm, Corepack y Vite actual.
- Añadida página de diagramas Mermaid para explicar flujos de DOM, fetch, estado, event loop y puente a frameworks.
- Añadida plantilla de pull request y configuración de issues.
- Convertida la antigua `Unidad7/prueba.txt` en una unidad real: `Unidad7_Preparacion_React_Angular/20_Preparacion_React_Angular.md`.
- Añadido `INDICE_GENERAL.md` para navegar todo el repo desde un único punto.
- Añadido script local para comprobar enlaces Markdown internos principales.

## Comprobaciones técnicas realizadas

- No hay bloques de código Markdown sin cerrar.
- El test autocorregible de arrays tiene script en `package.json`.
- La estructura del README enlaza a documentos existentes o añadidos en esta iteración.

## Siguientes mejoras recomendadas

- Normalizar títulos de unidades para evitar dobles H1.
- Sustituir encabezados HTML antiguos (`<center>`, `<B>`) por Markdown limpio.
- Revisar todos los ejemplos JavaScript con ejecución real cuando sea posible.
- Añadir soluciones separadas para profesorado si se desea.
- Crear más tests autocorregibles por tema: funciones, objetos, DOM y fetch.
- Publicar una versión GitHub Pages o MkDocs para navegación web.
- Integrar diagramas Mermaid dentro de unidades complejas: event loop, prototipos, DOM y fetch.

---

[Volver al índice general](../INDICE_GENERAL.md)
