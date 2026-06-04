# 8. Estructuras de Datos. Arrays en JavaScript 📝\*\* 🖥️

- [8. Estructuras de Datos. Arrays en JavaScript 📝\*\* 🖥️](#8-estructuras-de-datos-arrays-en-javascript--️)
  - [8.1 Introducción](#81-introducción)
  - [8.2 Creación de Arrays](#82-creación-de-arrays)
    - [8.2.1 Arrays Literales](#821-arrays-literales)
    - [8.2.2 Constructor `Array`](#822-constructor-array)
  - [8.3 Acceso y Modificación de Elementos](#83-acceso-y-modificación-de-elementos)
    - [8.3.1 Índices y Elementos](#831-índices-y-elementos)
    - [8.3.2 Modificación de Elementos](#832-modificación-de-elementos)
  - [8.4 Métodos Importantes de Arrays](#84-métodos-importantes-de-arrays)
    - [i. `push()` y `pop()`](#i-push-y-pop)
    - [ii. `shift()` y `unshift()`](#ii-shift-y-unshift)
    - [iii. `Slice()`](#iii-slice)
    - [iv. `splice()`](#iv-splice)
    - [v. `concat()`](#v-concat)
    - [vi. `map()`](#vi-map)
    - [vii. `filter()`](#vii-filter)
    - [viii. `reduce()`](#viii-reduce)
    - [ix. `sort()`](#ix-sort)
    - [x. `forEach()`](#x-foreach)
  - [8.5 Arrays Multidimensionales](#85-arrays-multidimensionales)
    - [Ejemplos de Dificultad Media](#ejemplos-de-dificultad-media)
      - [Ejemplo 1: Filtrar Números Pares](#ejemplo-1-filtrar-números-pares)
      - [Ejemplo 2: Suma de Matrices](#ejemplo-2-suma-de-matrices)
    - [Ejemplos de Dificultad Alta](#ejemplos-de-dificultad-alta)
      - [Ejemplo 3: Rotación de Matrices](#ejemplo-3-rotación-de-matrices)
      - [Ejemplo 4: Búsqueda Binaria](#ejemplo-4-búsqueda-binaria)
  - [8.6 Metodos que modifican o no el Array original](#86-metodos-que-modifican-o-no-el-array-original)
    - [8.6.1 Modificar el Array Original](#861-modificar-el-array-original)
    - [8.6.2 Crear una Copia](#862-crear-una-copia)
  - [8.7 Recorrer Arrays en JavaScript](#87-recorrer-arrays-en-javascript)
    - [8.7.1 Usando `for...in`](#871-usando-forin)
    - [8.7.2 Usando `for...of`](#872-usando-forof)
    - [8.7.3 Diferencias entre `for...in` y `for...of`](#873-diferencias-entre-forin-y-forof)
    - [8.7.4 Método `forEach`](#874-método-foreach)
  - [8.8 Clonar un Array](#88-clonar-un-array)
  - [8.9 Destructuring con Arrays](#89-destructuring-con-arrays)
    - [a. Destructuring Básico](#a-destructuring-básico)
    - [b. Asignación por Defecto](#b-asignación-por-defecto)
    - [c. Destructuring Anidado](#c-destructuring-anidado)
    - [d. Rest Parameters](#d-rest-parameters)

---

## 8.1 Introducción

Los arrays son una de las estructuras de datos fundamentales en JavaScript. Permiten almacenar y organizar colecciones de elementos de manera ordenada. En este documento, exploraremos en profundidad cómo trabajar con arrays en JavaScript utilizando ECMAScript 6 o versiones superiores.

## 8.2 Creación de Arrays

### 8.2.1 Arrays Literales

Puedes crear un array literalmente encerrando elementos entre corchetes `[]` y separándolos por comas.

```javascript
const frutas = ["manzana", "plátano", "naranja"];
```

### 8.2.2 Constructor `Array`

También puedes utilizar el constructor `Array` para crear un array vacío o con elementos predeterminados.

```javascript
const miArrayVacio = new Array();
const numeros = new Array(1, 2, 3, 4, 5);
```

## 8.3 Acceso y Modificación de Elementos

### 8.3.1 Índices y Elementos

Los elementos en un array se numeran con índices comenzando desde 0. Puedes acceder a un elemento utilizando su índice.

```javascript
const fruta = frutas[0]; // Acceder a la primera fruta (manzana)
```

### 8.3.2 Modificación de Elementos

Puedes modificar elementos en un array asignando un nuevo valor a través de su índice.

```javascript
frutas[1] = "pera"; // Modificar la segunda fruta (plátano a pera)
```

## 8.4 Métodos Importantes de Arrays

### i. `push()` y `pop()`

- `push(elemento)`: Agrega un elemento al final del array.
- `pop()`: Elimina el último elemento del array y lo retorna.

```javascript
const numeros = [1, 2, 3];
numeros.push(4); // [1, 2, 3, 4]
const ultimo = numeros.pop(); // último = 4, numeros = [1, 2, 3]
```

### ii. `shift()` y `unshift()`

- `shift()`: Elimina el primer elemento del array y lo retorna.
- `unshift(elemento)`: Agrega un elemento al principio del array.

```javascript
const colores = ["rojo", "verde", "azul"];
const primerColor = colores.shift(); // primerColor = "rojo", colores = ["verde", "azul"]
colores.unshift("amarillo"); // colores = ["amarillo", "verde", "azul"]
```

### iii. `Slice()`

El método `slice()` en JavaScript se utiliza para extraer una porción de un array y crear un nuevo array con los elementos seleccionados.
`slice()` toma uno o dos argumentos: el índice de inicio (inclusive) y el índice de fin (exclusivo) de la porción que se desea extraer.

**Sintaxis:**

```javascript
array.slice([índiceInicio[, índiceFin]])
```

- `índiceInicio` (opcional): El índice a partir del cual se comenzará a extraer elementos. Si no se especifica, se usará 0 como índice de inicio.
- `índiceFin` (opcional): El índice hasta el cual se extraerán elementos. El elemento en esta posición no se incluirá en el nuevo array. Si no se especifica, se extraerán elementos hasta el final del array.

**Ejemplos:**

```javascript
const frutas = ["manzana", "banana", "cereza", "dátiles", "uva"];

// Ejemplo 1: Extraer una porción del array original
const porcion1 = frutas.slice(1, 4);
console.log(porcion1); // Resultado: ["banana", "cereza", "dátiles"]

// Ejemplo 2: Extraer elementos desde el índice de inicio
const desdeInicio = frutas.slice(2);
console.log(desdeInicio); // Resultado: ["cereza", "dátiles", "uva"]

// Ejemplo 3: Copiar un array completo
const copiaFrutas = frutas.slice();
console.log(copiaFrutas); // Resultado: ["manzana", "banana", "cereza", "dátiles", "uva"]
```

### iv. `splice()`

`splice(indice, cantidad, elemento1, elemento2, ...)`: Permite modificar el array al eliminar, reemplazar o agregar elementos en una posición específica.

```javascript
const numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 1); // Elimina el elemento en el índice 2: [1, 2, 4, 5]
numeros.splice(2, 0, 6, 7); // Agrega 6 y 7 en el índice 2: [1, 2, 6, 7, 4, 5]
```

### v. `concat()`

`concat(array1, array2, ...)`: Combina dos o más arrays creando uno nuevo.

```javascript
const frutas1 = ["manzana", "plátano"];
const frutas2 = ["naranja", "pera"];
const todasLasFrutas = frutas1.concat(frutas2); // ["manzana", "plátano", "naranja", "pera"]
```

### vi. `map()`

`map(función)`: Crea un nuevo array aplicando una función a cada elemento del array original. En el callback (los paréntesis) de esta función, podemos utilizar hasta 3 parámetros: el valor de cada elemento, el índice de la iteración, y a sí mismo.

```javascript
const numeros = [1, 2, 3];
const duplicados = numeros.map((numero) => numero * 2); // [2, 4, 6]
```

```javascript
const numeros1 = [2, 2, 2];
const numeros2 = [2, 2, 2];
const numerosSumados = numeros1.map((el, i) => el + numeros2[i]); // [4, 4, 4]
```

### vii. `filter()`

`filter(función)`: Crea un nuevo array con todos los elementos que cumplan una condición dada por la función. Igual que en map(), podemos utilizar el valor, el índice, y a sí mismo.

```javascript
const edades = [25, 18, 30, 15, 40];
const mayoresDeEdad = edades.filter((edad) => edad >= 18); // [25, 18, 30, 40]
```

### viii. `reduce()`

`reduce(función, valorInicial)`: Aplica una función acumulativa a los elementos del array, retornando un único valor acumulado. Aquí, además del índice y de la referencia a sí mismo, tenemos un acumulador (prevValue), el valor actual (currValue) y el valor inicial (initialValue).

```javascript
const initialValue = 0;
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  initialValue
); // 15
```

```javascript
const numeros = [5, 10, 15];
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 10); // 40
const suma = numeros.reduce((acumulador, numero) => acumulador + numero); // 30
```

### ix. `sort()`

El método `sort()` en JavaScript se utiliza para ordenar los elementos de un array en su lugar (sin crear un nuevo array). Por defecto, `sort()` ordena los elementos como cadenas de texto y los compara en orden lexicográfico. Sin embargo, puedes proporcionar una función de comparación personalizada para ordenar elementos de acuerdo a criterios específicos. El valor de retorno de esta función debe ser un número cuyo signo indique el orden relativo de los dos elementos: negativo si a es menor que b, positivo si a es mayor que b, y cero si son iguales.

```javascript
array.sort([comparador]);
```

- `array`: El array que deseas ordenar.
- `comparador` (opcional): Una función que define el criterio de ordenación personalizado. Puedes omitir este argumento para ordenar los elementos como cadenas de texto.

```javascript
const numeros = [4, 2, 9, 1, 5];
numeros.sort((a, b) => a - b);
console.log(numeros); // Resultado: [1, 2, 4, 5, 9]
```

```javascript
const letras = ["b", "d", "a", "c"];
letras.sort().reverse();
console.log(letras); // Resultado: ["d", "c", "b", "a"]
```

Primero ordenamos las letras alfabéticamente y luego invertimos el orden usando `reverse()` para obtener el orden inverso.

### x. `forEach()`

`forEach(función)`: Ejecuta una función en cada elemento del array sin crear un nuevo array.

```javascript
const frutas = ["manzana", "plátano", "naranja"];
frutas.forEach((fruta) => console.log(fruta));
```

## 8.5 Arrays Multidimensionales

Los arrays multidimensionales son arrays que contienen otros arrays como elementos. Pueden utilizarse para representar matrices y estructuras de datos más complejas.

```javascript
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const primerElemento = matriz[0][0]; // 1
```

### Ejemplos de Dificultad Media

#### Ejemplo 1: Filtrar Números Pares

```javascript
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter((numero) => numero % 2 === 0); // [2, 4, 6]
```

#### Ejemplo 2: Suma de Matrices

```javascript
const matriz = [
  [1, 2],
  [3, 4],
];
const suma = matriz
  .reduce((total, fila) => total.concat(fila), [])
  .reduce((a, b) => a + b); // 10
```

### Ejemplos de Dificultad Alta

#### Ejemplo 3: Rotación de Matrices

```javascript
function rotarMatriz(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;
  const resultado = Array.from({ length: columnas }, () => []);

  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      resultado[j][filas - 1 - i] = matriz[i][j];
    }
  }

  return resultado;
}

const matrizOriginal = [
  [1, 2, 3],
  [4, 5, 6],
];
const matrizRotada = rotarMatriz(matrizOriginal);
```

#### Ejemplo 4: Búsqueda Binaria

```javascript
function busquedaBinaria(array, elemento) {
  let inicio = 0;
  let fin = array.length - 1;

  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);

    if (array[medio] === elemento) {
      return medio;
    } else if (array[medio] < elemento) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1;
}

const numerosOrdenados = [1, 3, 5, 7, 9, 11, 13];
const indice = busquedaBinaria(numerosOrdenados, 7); // 3
```

## 8.6 Metodos que modifican o no el Array original

Aquí están los métodos de arrays que pueden modificar el array original y los que crean una copia:

### 8.6.1 Modificar el Array Original

1. `push(elemento)`: Agrega un elemento al final del array. Modifica el array original al agregar un nuevo elemento al final.

2. `pop()`: Elimina el último elemento del array y lo retorna. Modifica el array original al eliminar un elemento.

3. `shift()`: Elimina el primer elemento del array y lo retorna. Modifica el array original al eliminar un elemento.

4. `unshift(elemento)`: Agrega un elemento al principio del array. Modifica el array original al agregar un nuevo elemento al principio.

5. `splice(indice, cantidad, elemento1, elemento2, ...)`: Permite modificar el array al eliminar, reemplazar o agregar elementos en una posición específica. Esto afecta al array original.

6. `forEach(función)`: Ejecuta una función en cada elemento del array sin crear un nuevo array. No crea una copia; en su lugar, permite realizar modificaciones en el lugar.
7. `sort([comparador])`: Ordena los elementos de un array, modificando dicho array y aplicando el comparador para establecer el orden.

### 8.6.2 Crear una Copia

1. `concat(array1, array2, ...)`: Combina dos o más arrays creando uno nuevo sin modificar los arrays originales. El método `concat` no modifica los arrays originales y crea una nueva copia.

2. `map(función)`: Crea un nuevo array aplicando una función a cada elemento del array original sin modificar el array original. `map` crea una copia transformada.

3. `filter(función)`: Crea un nuevo array con todos los elementos que cumplan una condición dada por la función sin modificar el array original. `filter` crea una copia filtrada.

4. `reduce(función, valorInicial)`: Aplica una función acumulativa a los elementos del array, retornando un único valor acumulado sin modificar el array original. No crea una copia, sino que produce un resultado acumulado.

## 8.7 Recorrer Arrays en JavaScript

En JavaScript, hay varias formas de recorrer un array. Las dos más comunes son utilizando `for...in` y `for...of`. Cada uno tiene sus propias características y diferencias.

### 8.7.1 Usando `for...in`

El bucle `for...in` se utiliza para iterar sobre las propiedades enumerables de un objeto. Aunque es posible utilizarlo para recorrer arrays, no es la forma más recomendada debido a algunas limitaciones.

```javascript
const frutas = ["manzana", "plátano", "uva"];

for (const indice in frutas) {
  console.log(frutas[indice]);
}
```

**Limitaciones de `for...in` con Arrays:**

1. Itera sobre las propiedades enumerables, incluyendo las propiedades agregadas al prototipo del array.
2. Los índices del array se manejan como cadenas en lugar de números.
3. No garantiza un orden específico en la iteración.

### 8.7.2 Usando `for...of`

El bucle `for...of` se introdujo en ECMAScript 6 y es la forma más recomendada de recorrer arrays en JavaScript. Proporciona una forma más limpia y sencilla de acceder a los elementos de un array.

```javascript
const frutas = ["manzana", "plátano", "uva"];

for (const fruta of frutas) {
  console.log(fruta);
}
```

**Ventajas de `for...of` con Arrays:**

1. Itera directamente sobre los valores de los elementos del array.
2. Ofrece un código más limpio y legible.
3. Garantiza un orden específico en la iteración.

### 8.7.3 Diferencias entre `for...in` y `for...of`

- `for...in` itera sobre las propiedades enumerables de un objeto, mientras que `for...of` itera sobre los valores de los elementos de un iterable (como un array).
- `for...in` se utiliza principalmente para objetos, y puede no comportarse de la manera esperada con arrays debido a las limitaciones mencionadas.
- `for...of` es más adecuado para recorrer arrays, ya que proporciona acceso directo a los valores de los elementos.

En resumen, al recorrer arrays en JavaScript, se recomienda utilizar el bucle `for...of` debido a su simplicidad y claridad, así como a su capacidad para garantizar un orden específico en la iteración.

### 8.7.4 Método `forEach`

El método `forEach()` en JavaScript se utiliza para iterar sobre los elementos de un array y ejecutar una función proporcionada una vez por cada elemento. Es una forma de recorrer el array y realizar operaciones en cada elemento sin necesidad de utilizar bucles `for` o `while`.

**Sintaxis:**

```javascript
array.forEach(function (elemento, índice, arreglo) {
  // Código a ejecutar para cada elemento
});
```

- `elemento`: El elemento actual que se está procesando en el array.
- `índice`: El índice del elemento actual en el array.
- `arreglo`: El array original que se está recorriendo.

**Ejemplo:**

```javascript
const frutas = ["manzana", "banana", "cereza"];

frutas.forEach(function (fruta, index) {
  console.log(`Índice ${index}: ${fruta}`);
});
```

**Nota:** Es importante mencionar que el método `forEach()` no modifica el array original y no crea un nuevo array; se utiliza principalmente para realizar tareas de iteración o ejecutar funciones en cada elemento del array.

Otro ejemplo sería:

```javascript
const numeros = [1, 2, 3, 4, 5];
let suma = 0;

numeros.forEach(function (numero) {
  suma += numero;
});

console.log(`La suma de los números es: ${suma}`);
```

## 8.8 Clonar un Array

Puedes clonar (copiar) un array en JavaScript de varias maneras, las más comunes:

1. **Usando el operador de propagación (Spread Operator):**

   El operador de propagación (`...`) se utiliza para copiar elementos de un array a otro. Aquí tienes un ejemplo:

   ```javascript
   const arrayOriginal = [1, 2, 3];
   const arrayClonado = [...arrayOriginal];
   ```

   En este caso, `arrayClonado` será una copia exacta de `arrayOriginal`.

2. **Usando el método `Array.from()`:**

   El método `Array.from()` toma un objeto iterable (como un array) y crea un nuevo array a partir de él. Aquí tienes un ejemplo:

   ```javascript
   const arrayOriginal = [1, 2, 3];
   const arrayClonado = Array.from(arrayOriginal);
   ```

   Esto también producirá una copia del array original en `arrayClonado`.

3. **Usando el método `slice()`:**

   El método `slice()` se puede utilizar para crear una copia de una porción de un array. Si no se le pasa ningún argumento, copiará todo el array. Aquí tienes un ejemplo:

   ```javascript
   const arrayOriginal = [1, 2, 3];
   const arrayClonado = arrayOriginal.slice();
   ```

   Esto clonará todo el array original en `arrayClonado`.

4. **Usando el constructor `Array()` y el método `concat()`:**

   También puedes utilizar el constructor `Array()` y el método `concat()` para crear una copia de un array:

   ```javascript
   const arrayOriginal = [1, 2, 3];
   const arrayClonado = [].concat(arrayOriginal);
   ```

   Esto generará una copia de `arrayOriginal` en `arrayClonado`.

**Nota:** Hay que tener en cuenta que los métodos 1 y 2 crean un espacio undefined en los huecos que hubiera en el array original, mientras que el 3 y el 4 conservan dichos huecos.

```javascript
const arrayOriginal = [1, 2, , 3, 4]; // En el array original no existe el elemento de índice 2
console.log(arrayOriginal); // [ 1, 2, <1 empty item>, 3, 4 ]
console.log(2 in arrayOriginal); // false

const arrayClonadoSpread = [...arrayOriginal];
console.log(arrayClonadoSpread); // [ 1, 2, undefined, 3, 4 ]
console.log(2 in arrayClonadoSpread); // true

const arrayClonadoArrayFrom = Array.from(arrayOriginal);
console.log(arrayClonadoArrayFrom); // [ 1, 2, undefined, 3, 4 ]
console.log(2 in arrayClonadoArrayFrom); // true

const arrayClonadoSlice = arrayOriginal.slice();
console.log(arrayClonadoSlice); // [ 1, 2, <1 empty item>, 3, 4 ]
console.log(2 in arrayClonadoSlice); // false

const arrayClonadoConcat = [].concat(arrayOriginal);
console.log(arrayClonadoConcat); // [ 1, 2, <1 empty item>, 3, 4 ]
console.log(2 in arrayClonadoConcat); // false
```

## 8.9 Destructuring con Arrays

El destructuring es una técnica que permite extraer valores de un array y asignarlos a variables en una sola línea de código. Esto simplifica la extracción de datos de arrays y mejora la legibilidad del código.

### a. Destructuring Básico

```javascript
// Sintaxis básica de destructuring con arrays
const [valor1, valor2] = ["Manzana", "Banana"];
console.log(valor1); // Imprimirá 'Manzana'
console.log(valor2); // Imprimirá 'Banana'
```

### b. Asignación por Defecto

Puedes proporcionar valores por defecto en caso de que un elemento no exista en el array.

```javascript
const [fruta1, fruta2, fruta3 = "Naranja"] = ["Manzana", "Banana"];
console.log(fruta1); // Imprimirá 'Manzana'
console.log(fruta3); // Imprimirá 'Naranja' (valor por defecto)
```

### c. Destructuring Anidado

El destructuring también se puede utilizar para descomponer arrays anidados.

```javascript
const [usuario, [hobby1, hobby2]] = ["Alice", ["Pintura", "Música"]];
console.log(usuario); // Imprimirá 'Alice'
console.log(hobby1); // Imprimirá 'Pintura'
```

### d. Rest Parameters

El operador de propagación `...` (rest) se puede utilizar para capturar elementos restantes en un nuevo array.

```javascript
const [a, b, ...resto] = [1, 2, 3, 4, 5];
console.log(a); // Imprimirá 1
console.log(b); // Imprimirá 2
console.log(resto); // Imprimirá [3, 4, 5]
```

---

[Volver al índice general](../INDICE_GENERAL.md)
