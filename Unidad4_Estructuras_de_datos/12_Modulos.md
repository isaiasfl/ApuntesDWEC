# 12. Importaciones y Exportaciones en JavaScript 📝 🖥️

- [12. Importaciones y Exportaciones en JavaScript 📝 🖥️](#12-importaciones-y-exportaciones-en-javascript--️)
  - [12.1. Exportar desde un Módulo](#121-exportar-desde-un-módulo)
  - [12.2. Importar en otro Módulo](#122-importar-en-otro-módulo)
  - [12.3. Exportar e Importar Funciones](#123-exportar-e-importar-funciones)
  - [12.4. Exportar e Importar Clases](#124-exportar-e-importar-clases)
  - [12.5. Módulos con Exportaciones Nombradas y Por Defecto](#125-módulos-con-exportaciones-nombradas-y-por-defecto)
  - [12.6. Reexportación y Agregación de Módulos](#126-reexportación-y-agregación-de-módulos)
  - [12.7. Cargar Módulos Dinámicamente](#127-cargar-módulos-dinámicamente)

---

## 12.1. Exportar desde un Módulo

Puedes exportar múltiples elementos desde un módulo, incluyendo variables, funciones y clases. Aquí hay un ejemplo con múltiples exportaciones:

```javascript
// En archivo: miModulo.js
export const nombre = "Juan";
export let edad = 30;

export function saludar() {
  return `Hola, soy ${nombre} y tengo ${edad} años.`;
}
```

## 12.2. Importar en otro Módulo

Puedes importar múltiples elementos desde un módulo en otro. Aquí importamos el nombre, la edad y la función `saludar` desde el módulo anterior:

```javascript
// En otro archivo
import { nombre, edad, saludar } from "./miModulo.js";

console.log(nombre); // Imprime "Juan"
console.log(edad); // Imprime 30
console.log(saludar()); // Imprime "Hola, soy Juan y tengo 30 años."
```

> **NOTA:**
>
> > Para que los módulos funcionen hay que colocar en la llamada del script de html la propiedad: `type="module"` o dará error en el import 😧
> > `<script src="app.js" type="module"></script>`

## 12.3. Exportar e Importar Funciones

Las funciones también pueden exportarse e importarse de manera avanzada. Aquí se exporta una función y se importa con un alias:

```javascript
// En archivo: funciones.js
export function sumar(a, b) {
  return a + b;
}

// En otro archivo
import { sumar as add } from "./funciones.js";

console.log(add(5, 3)); // Imprime 8
```

## 12.4. Exportar e Importar Clases

Las clases son elementos importantes para la programación orientada a objetos en JavaScript. Pueden exportarse e importarse de la siguiente manera:

```javascript
// En archivo: clase.js
export class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// En otro archivo
import { Persona } from "./clase.js";

const persona = new Persona("Ana", 25);
console.log(persona.saludar()); // Imprime "Hola, soy Ana y tengo 25 años."
```

## 12.5. Módulos con Exportaciones Nombradas y Por Defecto

Un módulo puede exportar elementos tanto nombrados como por defecto. Aquí se exporta una función por defecto junto con exportaciones nombradas:

```javascript
// En archivo: moduloCompleto.js
export default function () {
  return "Exportación por defecto";
}

export const nombre = "Juan";
export let edad = 30;

// En otro archivo
import funcionPorDefecto, { nombre, edad } from "./moduloCompleto.js";

console.log(funcionPorDefecto()); // Imprime "Exportación por defecto"
console.log(nombre); // Imprime "Juan"
```

## 12.6. Reexportación y Agregación de Módulos

Puedes reexportar elementos de otros módulos y agregarlos en un nuevo módulo. Esto facilita la organización de tus importaciones:

```javascript
// En archivo: moduloA.js
export const variableA = "Valor de A";

// En archivo: moduloB.js
export const variableB = "Valor de B";

// En archivo: moduloC.js
export { variableA } from "./moduloA.js";
export { variableB } from "./moduloB.js";

// En otro archivo
import { variableA, variableB } from "./moduloC.js";

console.log(variableA); // Imprime "Valor de A"
console.log(variableB); // Imprime "Valor de B"
```

## 12.7. Cargar Módulos Dinámicamente

Puedes cargar módulos dinámicamente utilizando la función `import()`. Esto es útil para cargar módulos de forma asincrónica:

```javascript
// En archivo: dinamico.js
export function mostrarMensaje() {
  console.log("Mensaje desde el módulo dinámico");
}

// En otro archivo
document.querySelector("button").addEventListener("click", async () => {
  const moduloDinamico = await import("./dinamico.js");
  moduloDinamico.mostrarMensaje();
});
```

---

[Volver al índice general](../INDICE_GENERAL.md)
