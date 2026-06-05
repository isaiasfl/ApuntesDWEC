# Ejercicios autocorregibles

Esta carpeta contiene una base para que el alumnado pueda practicar JavaScript con pruebas automáticas usando Node.js.

La idea es sencilla: cada archivo exporta funciones que el alumno debe completar o usar como referencia, y luego se valida el comportamiento con `assert`.

Los autocorregibles están pensados para temas donde importa mucho la lógica pura:

- arrays;
- objetos;
- funciones;
- estado y transformación de datos.

## Requisitos

- Node.js 24 LTS.
- Haber ejecutado `nvm use` desde la raíz del repo si se usa nvm.

## Uso propuesto

1. El alumno copia una plantilla de ejercicio.
2. Implementa las funciones pedidas.
3. Ejecuta el test con Node.

```bash
node Ejercicios/autocorregibles/arrays.test.js
node Ejercicios/autocorregibles/objects.test.js
node Ejercicios/autocorregibles/functions.test.js
```

## Objetivo docente

Los tests no sustituyen la corrección del profesor. Sirven para que el alumno tenga retroalimentación inmediata sobre casos básicos.

También ayudan a diferenciar entre:

- código que compila o “parece correcto”;
- código que realmente produce el resultado esperado;
- código que además respeta mutabilidad, claridad y estructura.

## Archivos disponibles

- `arrays.test.js`
- `objects.test.js`
- `functions.test.js`
- `state.test.js`

---

[Volver al índice general](../../INDICE_GENERAL.md)
