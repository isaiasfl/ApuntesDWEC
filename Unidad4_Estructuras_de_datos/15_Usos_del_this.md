# `this` en JavaScript 📝 🖥️

El valor de `this` en JavaScript es un concepto importante y puede cambiar de contexto en diferentes situaciones. Esta guía te ayudará a comprender cómo funciona `this`, sus ventajas y los problemas que puedes encontrar al utilizarlo. Se utilizará JavaScript vanilla, específicamente ES6 o posterior.

## Índice

- [`this` en JavaScript 📝 🖥️](#this-en-javascript--️)
  - [Índice](#índice)
  - [1. Introducción a `this`](#1-introducción-a-this)
  - [2. Comportamiento de `this`](#2-comportamiento-de-this)
    - [En el contexto global](#en-el-contexto-global)
    - [En funciones regulares](#en-funciones-regulares)
      - [El objeto que invoca la función](#el-objeto-que-invoca-la-función)
      - [El objeto al que pertenece el método que llama la función](#el-objeto-al-que-pertenece-el-método-que-llama-la-función)
  - [3. Ventajas del uso de arrow functions](#3-ventajas-del-uso-de-arrow-functions)
    - [3.1. Consistencia de contexto](#31-consistencia-de-contexto)
      - [Ejemplo 1: Uso de arrow function en un temporizador](#ejemplo-1-uso-de-arrow-function-en-un-temporizador)
    - [3.2. Sintaxis concisa](#32-sintaxis-concisa)
      - [Ejemplo 2: Mapeo de elementos en un array](#ejemplo-2-mapeo-de-elementos-en-un-array)
      - [Ejemplo 3: Filtrado de elementos en un array](#ejemplo-3-filtrado-de-elementos-en-un-array)
      - [Ejemplo 4: Comportamiento en Funciones Anidadas](#ejemplo-4-comportamiento-en-funciones-anidadas)
  - [4. Problemas comunes y soluciones](#4-problemas-comunes-y-soluciones)
    - [Cambios de contexto](#cambios-de-contexto)
    - [Shared methods y arrow functions](#shared-methods-y-arrow-functions)
  - [5. Resumen](#5-resumen)

---

## 1. Introducción a `this`

`this` es una palabra clave en JavaScript que se refiere al objeto al que pertenece la función en la que se utiliza. El valor de `this` depende del contexto en el que se llama la función. Comprender cómo `this` se comporta es fundamental para escribir código JavaScript efectivo.

## 2. Comportamiento de `this`

### En el contexto global

Cuando `this` se utiliza en el contexto global (fuera de cualquier función), hace referencia al objeto global, que en los navegadores es `window`. Ejemplo:

```javascript
console.log(this === window); // true (en navegador, script no estricto)
```

> **`globalThis` (ES2020):** para acceder al objeto global de forma portable entre entornos (navegador, Node.js, Web Workers), usa `globalThis`:
> ```javascript
> console.log(globalThis === window);  // true en navegador
> // En Node.js, globalThis === global
> ```

### En funciones regulares

En funciones regulares, el valor de `this` depende de cómo se llama la función en tiempo de ejecución. Puede ser:

#### El objeto que invoca la función

Cuando una función regular es llamada como una función independiente, `this` se refiere al objeto global (`window` en un navegador). Sin embargo, si se llama como un método de un objeto, `this` se refiere al objeto que invoca la función.

Ejemplos:

```javascript
// Ejemplo 1: Llamada independiente
function funcionGlobal() {
  console.log(this); // this se refiere a window (objeto global)
}
funcionGlobal();

// Ejemplo 2: Llamada como método de un objeto
const objeto = {
  propiedad: "Hola",
  metodo: function () {
    console.log(this.propiedad); // this se refiere al objeto "objeto"
  },
};
objeto.metodo();
```

#### El objeto al que pertenece el método que llama la función

Cuando una función es llamada a través de un método de un objeto, `this` se refiere al objeto que contiene ese método, no al objeto que contiene la función en sí.

Ejemplos:

```javascript
const objeto1 = {
  propiedad: "Objeto 1",
  metodo: function () {
    console.log(this.propiedad);
  },
};

const objeto2 = {
  propiedad: "Objeto 2",
};

objeto2.metodo = objeto1.metodo;
objeto2.metodo(); // this se refiere a objeto2
```

## 3. Ventajas del uso de arrow functions

- **Consistencia de contexto**: En funciones arrow, `this` siempre se refiere al contexto en el que se definió la función, lo que evita problemas comunes.

- **Sintaxis concisa**: Las arrow functions tienen una sintaxis más concisa, lo que hace que el código sea más legible.

### 3.1. Consistencia de contexto

Como ya hemos dicho, en funciones arrow, `this` siempre se refiere al contexto en el que se definió la función, lo que evita problemas comunes de cambio de contexto. Esto es especialmente útil en situaciones donde necesitas mantener una referencia al objeto que contiene la función.

#### Ejemplo 1: Uso de arrow function en un temporizador

```javascript
function Temporizador() {
  this.segundos = 0;

  setInterval(() => {
    this.segundos++;
    console.log(`Han pasado ${this.segundos} segundos.`);
  }, 1000);
}

const miTemporizador = new Temporizador();
```

En este ejemplo, el uso de una arrow function dentro del `setInterval` asegura que `this` se refiera al objeto `miTemporizador`, manteniendo el contexto correcto.

### 3.2. Sintaxis concisa

Las arrow functions tienen una sintaxis más concisa en comparación con las funciones regulares, lo que hace que el código sea más legible y claro.

#### Ejemplo 2: Mapeo de elementos en un array

```javascript
const numeros = [1, 2, 3, 4, 5];

// Usando función regular
const cuadrados = numeros.map(function (numero) {
  return numero * numero;
});

// Usando arrow function
const cuadradosArrow = numeros.map((numero) => numero * numero);

console.log(cuadrados); // [1, 4, 9, 16, 25]
console.log(cuadradosArrow); // [1, 4, 9, 16, 25]
```

#### Ejemplo 3: Filtrado de elementos en un array

```javascript
const personas = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Juan", edad: 25 },
  { nombre: "Luisa", edad: 35 },
];

// Usando función regular
const mayoresDe30 = personas.filter(function (persona) {
  return persona.edad > 30;
});

// Usando arrow function
const mayoresDe30Arrow = personas.filter((persona) => persona.edad > 30);

console.log(mayoresDe30);
console.log(mayoresDe30Arrow);
```

#### Ejemplo 4: Comportamiento en Funciones Anidadas

```javascript
function MiConstructor(parametro) {
  this.propiedad = parametro;

  this.metodo1 = function () {
    console.log("Método 1 - this.propiedad:", this.propiedad);

    const metodo2 = () => {
      console.log("Método 2 - this.propiedad:", this.propiedad);
    };

    metodo2();
  };
}

const instancia = new MiConstructor("Hola, mundo");
instancia.metodo1();
```

En este ejemplo, MiConstructor es una función constructora que toma un parámetro y crea una instancia de un objeto con una propiedad y un método llamado metodo1. Dentro de metodo1, definimos una arrow function llamada metodo2. Ahora, veamos cómo se comporta this en diferentes situaciones:

En el método **metodo1**, this se refiere a la instancia creada con el constructor, por lo que this.propiedad accede a la propiedad de esa instancia. En este caso, this se mantiene dentro del ámbito de la función constructora.

Dentro de **metodo2**, this también hace referencia a la instancia creada por el constructor. Esto es posible gracias a que metodo2 es una arrow function. Las arrow functions heredan el valor de this del contexto en el que se definen, en este caso, metodo1.

Como resultado, en ambos métodos, this se mantiene en el contexto de la instancia del constructor y no se "sale" de la función constructora. Esta es una de las ventajas de usar arrow functions en situaciones como esta, ya que evitan que this cambie de contexto en funciones anidadas.

## 4. Problemas comunes y soluciones

### Cambios de contexto

Uno de los problemas comunes es cuando el contexto de `this` cambia inesperadamente. Para solucionar esto, puedes usar métodos como `bind`, `call`, o `apply` para establecer el valor de `this` explícitamente.

Ejemplo:

```javascript
const objeto = {
  valor: 42,
  obtenerValor: function () {
    return this.valor;
  },
};

const otroObjeto = { valor: 100 };

const obtenerValorDeOtroObjeto = objeto.obtenerValor.bind(otroObjeto);
console.log(obtenerValorDeOtroObjeto()); // 100
```

### Shared methods y arrow functions

El uso de arrow functions para compartir métodos entre instancias puede causar problemas al mantener el contexto de `this`. Para compartir métodos entre instancias, es preferible usar funciones prototipadas o definir los métodos en el prototipo del constructor.

Ejemplo:

```javascript
function MiConstructor() {
  this.valor = 0;
}

MiConstructor.prototype.incrementar = function () {
  this.valor++;
};
```

## 5. Resumen

- `this` en JavaScript se refiere al objeto al que pertenece la función en la que se utiliza.
- El valor de `this` puede cambiar según el contexto de ejecución.
- Las funciones regulares pueden tener diferentes valores de `this` según cómo se llamen.
- Las arrow functions heredan `this` del contexto en el que se definen, lo que puede ser útil para mantener la consistencia del contexto.
- Para solucionar problemas de cambio de contexto, se pueden usar métodos como `bind`, `call` o `apply`.

---

[Volver al índice general](../INDICE_GENERAL.md)
