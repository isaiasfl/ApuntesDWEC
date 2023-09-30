# **Capítulo 5. Contenido 📝** 🖥️

- [5. Funciones en JavaScript (ECMAScript 6)](#5-funciones-en-javascript-ecmascript-6)
  - [1. Declaración de funciones](#1-declaraci%C3%B3n-de-funciones)
  - [2. Expresiones de funciones o expresiones funcionales.](#2-expresiones-de-funciones-o-expresiones-funcionales)
  - [3. Funciones de flecha](#3-funciones-de-flecha)
    - [3.1. Funciones de Flecha como Argumentos](#31-funciones-de-flecha-como-argumentos)
    - [3.2. Funciones de Flecha Multilínea](#32-funciones-de-flecha-multil%C3%ADnea)
  - [4.Diferencia Entre Parámetros y Argumentos en JavaScript](#4diferencia-entre-par%C3%A1metros-y-argumentos-en-javascript)
    - [4.1 Parámetros](#41-par%C3%A1metros)
      - [Ejemplo de Declaración de Función con Parámetros](#ejemplo-de-declaraci%C3%B3n-de-funci%C3%B3n-con-par%C3%A1metros)
    - [4.2 Argumentos](#42-argumentos)
      - [Ejemplo de Llamada de Función con Argumentos](#ejemplo-de-llamada-de-funci%C3%B3n-con-argumentos)
    - [Resumen](#resumen)
  - [5. Valores predeterminados de parámetros](#5-valores-predeterminados-de-par%C3%A1metros)
  - [6. Rest parameters y operador spread](#6-rest-parameters-y-operador-spread)
  - [7. Funciones como expresiones](#7-funciones-como-expresiones)
  - [8. Funciones anónimas](#8-funciones-an%C3%B3nimas)
  - [9. Cierres (closures)](#9-cierres-closures)
  - [10. Funciones recursivas](#10-funciones-recursivas)

---

# 5. Funciones en JavaScript (ECMAScript 6)

Las funciones son bloques de código reutilizables que pueden realizar tareas específicas en JavaScript.
Las funciones son los principales “bloques de construcción” del programa. Permiten que el código se llame muchas veces sin repetición.

> ECMAScript 6 (también conocido como ES6 o ES2015) introdujo nuevas características que hacen que trabajar con funciones sea más poderoso y flexible.

## 1. Declaración de funciones

En JavaScript, puedes declarar una función de la siguiente manera:

```javascript
function saludar() {
  console.log("¡Hola, mundo!, Bienvenido Isaías");
}

// Llamada a la función
saludar(); // Imprime: ¡Hola, mundo!, Bienvenido Isaías
```

## 2. Expresiones de funciones o expresiones funcionales.

Las expresiones de funciones son funciones definidas dentro de una expresión, y pueden asignarse a variables. Por ejemplo:

```javascript
const suma = function (a, b) {
  return a + b;
};

const resultado = suma(5, 3);
console.log(resultado); // Imprime: 8
```

## 3. Funciones de flecha

Las funciones de flecha son una forma más concisa de escribir funciones anónimas. Se definen utilizando la sintaxis `() => {}`. Ejemplo:

```javascript
const duplicar = (numero) => {
  return numero * 2;
};

console.log(duplicar(4)); // Imprime: 8
```

Las funciones flecha de `una sóla línea` no necesitan el return porque sería **implícito** y por tanto la función anterior se podría crear así:

```javascript
const duplicar = (numero) => numero * 2;

console.log(duplicar(9)); // Imprime: 18
```

Las funciones de flecha pueden usarse también en situaciones más avanzadas, como funciones de orden superior (higher-order functions) y para reducir la sintaxis.

### 3.1. Funciones de Flecha como Argumentos

Las funciones de flecha son útiles para funciones de orden superior, como `map`, `filter` y `reduce` que veremos más adelante:

```javascript
const numeros = [1, 2, 3, 4, 5];

const cuadrados = numeros.map((numero) => numero ** 2);
console.log(cuadrados); // [1, 4, 9, 16, 25]
```

### 3.2. Funciones de Flecha Multilínea

Las funciones de flecha pueden manejar bloques de código multilínea siempre que los encerremos en `{}`. Además es en este caso es `obligatorio el uso de return`:

```javascript
const operacionCompleja = (a, b) => {
  const resultado = a + b;
  return resultado * 2;
};
```

**Más Ejemplos:**

```javascript
const nombreFuncion = (parametro1, parametro2) => {
  // Múltiples instrucciones o expresiones
  // Puedes hacer lo que necesites aquí
  return resultado;
};
```

```javascript
const operacionCompleja = (a, b) => {
  const suma = a + b;
  const resta = a - b;
  const producto = a * b;

  return `Suma: ${suma}, Resta: ${resta}, Producto: ${producto}`;
};

const resultado = operacionCompleja(5, 3);
console.log(resultado);
```

En este ejemplo, la función `operacionCompleja` toma dos parámetros `a` y `b`, y dentro del bloque de la función, realizamos varias operaciones matemáticas. La función finalmente devuelve una cadena que muestra los resultados de esas operaciones.

La ventaja de usar una función de flecha multilínea aquí es que nos permite escribir un código más limpio y legible al agrupar todas las operaciones relacionadas en un solo bloque de código.

## 4.Diferencia Entre Parámetros y Argumentos en JavaScript

En JavaScript, los términos "parámetros" y "argumentos" se utilizan en el contexto de las funciones, pero se refieren a conceptos diferentes. Es importante comprender la diferencia entre ellos para escribir funciones efectivas y comprender cómo funcionan. A continuación, se proporciona una explicación de cada uno con ejemplos.

### 4.1 Parámetros

Los parámetros son nombres de variables que se definen en la declaración de una función. Estos actúan como marcadores de posición para los valores que se pasarán a la función cuando se invoque. Los parámetros se encuentran en la definición de la función y actúan como variables locales dentro de la función.

#### Ejemplo de Declaración de Función con Parámetros

```javascript
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}

saludar("Isaías"); // imprime Hola, Isaías!
```

En este ejemplo, `nombre` es un parámetro de la función `saludar`. Es un marcador de posición para el valor que se pasará cuando se llame a la función.

### 4.2 Argumentos

Los argumentos son los valores reales que se pasan a una función cuando se la llama. Los argumentos se utilizan para proporcionar valores concretos a los parámetros de la función. Los argumentos se encuentran en la llamada de la función.

#### Ejemplo de Llamada de Función con Argumentos

```javascript
saludar("Isaías");
```

En este ejemplo, `"Isaías"` es un argumento que se pasa a la función `saludar`. Cuando se llama a la función, el valor del argumento se asigna al parámetro `nombre` dentro de la función.

### Resumen

En resumen, la diferencia clave entre parámetros y argumentos es la siguiente:

- **Parámetros:** Son nombres de variables en la definición de la función y actúan como marcadores de posición para los valores que se pasarán.

- **Argumentos:** Son los valores reales que se pasan a la función cuando se la llama y se asignan a los parámetros correspondientes.

## 5. Valores predeterminados de parámetros

ES6 permite asignar valores predeterminados a los parámetros de una función. Esto es útil cuando un parámetro es opcional:

```javascript
function saludar(nombre = "Usuario") {
  console.log(`¡Hola, ${nombre}!`);
}

saludar(); // Imprime: ¡Hola, Usuario!
saludar("Lorena"); // Imprime: ¡Hola, Lorena!
```

Otra forma interesante sería con `||`.

```javascript
function mensaje(text) {
  // si text es indefinida o falsa, la establece a 'vacío'
  text = text || 'Bienvenido!!';
  ...
}
```

## 6. Rest parameters y operador spread

Los rest parameters y el operador spread (`...`) permiten trabajar con un número variable de argumentos en una función:

```javascript
function sumar(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

const resultado = sumar(1, 2, 3, 4, 5);
console.log(resultado); // Imprime: 15
```

> `reduce()` lo veremos más adelante.

## 7. Funciones como expresiones

Las funciones pueden asignarse a variables y pasarse como argumentos a otras funciones. Esto es fundamental para conceptos como callbacks y promesas:

```javascript
const funcionSaludo = function (nombre) {
  console.log(`¡Hola, ${nombre}!`);
};

function ejecutarFuncion(funcion) {
  funcion("D. Isaías");
}

ejecutarFuncion(funcionSaludo); // Imprime: ¡Hola, D.Isaías!
```

## 8. Funciones anónimas

Las funciones anónimas son funciones sin nombre que se pueden definir y utilizar inmediatamente. A menudo se usan para encapsular código:

```javascript
(function () {
  console.log("Esta es una función anónima autoinvocada.");
})();
```

## 9. Cierres (closures)

Los cierres o `Closures` son funciones que tienen acceso a variables de su ámbito externo incluso después de que ese ámbito haya terminado su ejecución. Esto permite mantener datos privados en una función:

```javascript
function contador() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const incrementar = contador();
incrementar(); // Imprime: 1
incrementar(); // Imprime: 2
```

## 10. Funciones recursivas

Una función recursiva es aquella que se llama a sí misma para resolver un problema. Esto es útil en situaciones donde una tarea se puede dividir en subproblemas similares:

```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Imprime: 120
```
