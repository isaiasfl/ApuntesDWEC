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
    - [7.2.3 Funciones Flecha](#723-funciones-flecha)
    - [7.3. Ejemplos Prácticos](#73-ejemplos-pr%C3%A1cticos)
      - [Ejemplo 1: Uso de `this` en el ámbito global](#ejemplo-1-uso-de-this-en-el-%C3%A1mbito-global)
      - [Ejemplo 2: Uso de `this` en un método](#ejemplo-2-uso-de-this-en-un-m%C3%A9todo)
      - [Ejemplo 3: Función flecha y `this`](#ejemplo-3-funci%C3%B3n-flecha-y-this)

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

### 7.2.3 Funciones Flecha

Las funciones flecha (`=>`) tienen un comportamiento diferente en cuanto a `this`. En una función flecha, `this` se mantiene vinculado al contexto en el que se creó la función flecha, en lugar de cambiar según el contexto de ejecución.

Ejemplo:

```javascript
function regularFunction() {
  return () => {
    console.log(this.prop); // `this` se mantiene vinculado a la función regularFunction
  };
}

const arrowFunction = regularFunction.call({ prop: "Hola" });
arrowFunction(); // Imprime "Hola"
```

### 7.3. Ejemplos Prácticos

>

A continuación, se presentan algunos ejemplos prácticos que demuestran el ámbito y el uso de `this` en JavaScript:

#### Ejemplo 1: Uso de `this` en el ámbito global

```javascript
console.log(this === window); // Verdadero en un navegador
```

#### Ejemplo 2: Uso de `this` en un método

```javascript
const myObject = {
  prop: "Hola",
  greet: function () {
    console.log(this.prop);
  },
};

myObject.greet(); // Imprime "Hola"
```

#### Ejemplo 3: Función flecha y `this`

```javascript
function regularFunction() {
  return () => {
    console.log(this.prop);
  };
}

const arrowFunction = regularFunction.call({ prop: "Hola" });
arrowFunction(); // Imprime "Hola"
```
