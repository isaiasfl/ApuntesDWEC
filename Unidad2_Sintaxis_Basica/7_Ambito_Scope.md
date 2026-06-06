# **Capítulo 7. Contenido 📝** 🖥️

- [7. Ambito (Scope) y Uso de `this` en JavaScript (ECMAScript 6+)](#7-ambito-scope-y-uso-de-this-en-javascript-ecmascript-6)
  - [7.1. Ambito (Scope)](#71-ambito-scope)
    - [7.1.1 Ambito Global](#711-ambito-global)
    - [7.1.2 Ambito de Función](#712-ambito-de-funci%C3%B3n)
    - [7.1.3 Ambito de Bloque](#713-ambito-de-bloque)
    - [7.1.4 Ambito de Cierre (Closures)](#714-ambito-de-cierre-closures)
  - [7.2. Uso de `this`](#72-uso-de-this)
    - [7.2.1 Objeto Global](#721-objeto-global)
    - [7.2.2 Métodos y `this`](#722-m%C3%A9todos-y-this)
    - [7.2.3 Funciones Flecha y `this`](#723-funciones-flecha-y-this)
    - [7.2.4 `strict mode` y `this`](#724-strict-mode-y-this)
  - [7.3. Ejemplos Prácticos](#73-ejemplos-pr%C3%A1cticos)
    - [Ejemplo 1: Closure contador](#ejemplo-1-closure-contador-%C3%A1mbito-l%C3%A9xico-en-acci%C3%B3n)
    - [Ejemplo 2: `this` en event listeners](#ejemplo-2-this-en-event-listeners)
    - [Ejemplo 3: TDZ](#ejemplo-3-tdz-temporal-dead-zone)
    - [Ejemplo 4: `this` perdido y cómo solucionarlo](#ejemplo-4-this-perdido-y-c%C3%B3mo-solucionarlo)

---

# 7. Ambito (Scope) y Uso de `this` en JavaScript (ECMAScript 6+)

En JavaScript, el ámbito (scope) se refiere a las reglas que determinan dónde pueden ser accedidas las variables y funciones dentro de un programa. Comprender el ámbito y el uso de `this` es fundamental para escribir código JavaScript efectivo. Este manual explora los conceptos de ámbito y `this` en ECMAScript 6 y versiones posteriores, junto con ejemplos prácticos.

## 7.1. Ambito (Scope)

El ámbito en JavaScript determina dónde una variable o función es accesible en un programa. ECMAScript 6 introduce nuevos tipos de ámbito, como el ámbito de bloque.

### 7.1.1 Ambito Global

Las variables declaradas fuera de cualquier función tienen un ámbito global y pueden ser accedidas desde cualquier lugar del código.

Ejemplo:

```javascript
let globalVar = "Soy global";

function exampleFunction() {
  console.log(globalVar); // Acceso a globalVar desde la función
}

exampleFunction(); // Imprime "Soy global"
console.log(globalVar); // También se puede acceder aquí
```

### 7.1.2 Ambito de Función

Las variables declaradas dentro de una función tienen un ámbito local y solo pueden ser accedidas desde dentro de esa función.

Ejemplo:

```javascript
function exampleFunction() {
  let localVar = "Soy local";
  console.log(localVar); // Acceso a localVar dentro de la función
}

exampleFunction(); // Imprime "Soy local"
console.log(localVar); // Error: localVar no está definida fuera de la función
```

### 7.1.3 Ambito de Bloque

ECMAScript 6 introduce el ámbito de bloque, que se aplica a variables declaradas con `let` y `const`. Estas variables solo son accesibles dentro del bloque en el que se declaran.

Ejemplo:

```javascript
if (true) {
  let blockVar = "Soy local de bloque";
  console.log(blockVar); // Acceso a blockVar dentro del bloque
}

console.log(blockVar); // Error: blockVar no está definida fuera del bloque
```

### 7.1.4 Ambito de Cierre (Closures)

Los closures ocurren cuando una función se declara dentro de otra función y tiene acceso a las variables de su función contenedora, incluso después de que la función contenedora haya terminado de ejecutarse.

Ejemplo:

```javascript
function outerFunction() {
  let outerVar = "Externa";

  function innerFunction() {
    console.log(outerVar); // Acceso a outerVar dentro del closure
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Imprime "Externa"
```

## 7.2. Uso de `this`

La palabra clave `this` se utiliza en JavaScript para referirse al contexto en el que se está ejecutando el código. Su valor puede cambiar según el contexto de ejecución.

### 7.2.1 Objeto Global

Cuando `this` se usa en el ámbito global o fuera de cualquier función, hace referencia al objeto global, que en un navegador es `window`.

Ejemplo:

```javascript
console.log(this === window); // En un navegador, esto es verdadero
```

### 7.2.2 Métodos y `this`

Dentro de un método de un objeto, `this` hace referencia al objeto en sí.

Ejemplo:

```javascript
const myObject = {
  prop: "Hola",
  greet: function () {
    console.log(this.prop); // Acceso a la propiedad prop del objeto
  },
};

myObject.greet(); // Imprime "Hola"
```

### 7.2.3 Funciones Flecha y `this`

Las funciones flecha (`=>`) **no tienen su propio `this`**. Heredan el `this` del ámbito léxico donde fueron definidas, lo que las hace ideales para callbacks dentro de métodos:

```javascript
const usuario = {
  nombre: "Isaías",
  asignaturas: ["DWEC", "DIW"],

  // Método con función tradicional
  mostrarTradicional() {
    // this = usuario (el objeto que llama al método)
    this.asignaturas.forEach(function (asig) {
      console.log(this.nombre, asig); // ❌ this.nombre = undefined
      // Dentro de function(), this es el objeto global (o undefined en strict mode)
    });
  },

  // Método con arrow function
  mostrarFlecha() {
    this.asignaturas.forEach((asig) => {
      console.log(this.nombre, asig); // ✅ this.nombre = "Isaías"
      // Arrow hereda el this del método mostrarFlecha (que es usuario)
    });
  },
};

usuario.mostrarFlecha();
// Imprime: Isaías DWEC, Isaías DIW
```

> **Regla práctica:** usa arrow functions para callbacks y métodos dentro de métodos. Usa funciones tradicionales (`function` o método abreviado) cuando necesites que `this` dependa de quién llame a la función.

### 7.2.4 `strict mode` y `this`

En **modo estricto** (`"use strict"`), `this` en una función tradicional no apunta al objeto global (`window`), sino que es `undefined`:

```javascript
"use strict";

function mostrarThis() {
  console.log(this); // undefined (no window)
}

// En un método de objeto, this sigue siendo el objeto
const obj = {
  nombre: "Hola",
  mostrarThis() {
    console.log(this); // { nombre: "Hola" }
  },
};
obj.mostrarThis(); // ✅ correcto
```

> Los módulos ES (`type="module"`) y las clases siempre ejecutan en modo estricto automáticamente.

### 7.3. Ejemplos Prácticos

#### Ejemplo 1: Closure contador (ámbito léxico en acción)

```javascript
function crearContador(inicial = 0) {
  let contador = inicial; // Variable privada dentro del closure

  return {
    incrementar: () => ++contador,
    decrementar: () => --contador,
    valor: () => contador,
  };
}

const c = crearContador(10);
console.log(c.incrementar()); // 11
console.log(c.incrementar()); // 12
console.log(c.decrementar()); // 11
console.log(c.valor());       // 11
```

#### Ejemplo 2: `this` en event listeners

```javascript
const boton = { texto: "Púlsame" };

// ❌ función tradicional: this será el elemento DOM, no 'boton'
document.querySelector("button")?.addEventListener("click", function () {
  console.log(this.texto); // undefined (this = elemento <button>)
});

// ✅ arrow function: this es 'boton' (capturado del ámbito léxico)
document.querySelector("button")?.addEventListener("click", () => {
  console.log(boton.texto); // "Púlsame"
});
```

#### Ejemplo 3: TDZ (Temporal Dead Zone)

```javascript
// var se eleva e inicializa con undefined → accesible
console.log(a); // undefined
var a = 5;

// let/const se elevan pero NO se inicializan → ReferenceError
try {
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
} catch (e) {
  console.log("Error capturado:", e.message);
}
let b = 10;
console.log(b); // 10 (ahora sí)
```

#### Ejemplo 4: `this` perdido y cómo solucionarlo

```javascript
const usuario = {
  nombre: "Isaías",
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

// ❌ Al pasar el método como callback, this se pierde
setTimeout(usuario.saludar, 1000); // "Hola, soy undefined"

// ✅ Solución 1: arrow wrapper
setTimeout(() => usuario.saludar(), 1000); // "Hola, soy Isaías"

// ✅ Solución 2: bind()
setTimeout(usuario.saludar.bind(usuario), 1000); // "Hola, soy Isaías"
```

---

[Volver al índice general](../INDICE_GENERAL.md)
