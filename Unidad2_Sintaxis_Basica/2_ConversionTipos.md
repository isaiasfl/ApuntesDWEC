# **Capítulo 2. Contenido 📝**🖥️

- [2. Conversiones de Tipos en JavaScript (ES6)](#2-conversiones-de-tipos-en-javascript-es6)
  - [2.1 Conversión a String](#21-conversi%C3%B3n-a-string)
    - [1. Usando `String()`](#1-usando-string)
    - [2. Usando Template Literals (Template Strings)](#2-usando-template-literals-template-strings)
  - [2.2 Conversión a Number](#22-conversi%C3%B3n-a-number)
    - [1. Usando `Number()`](#1-usando-number)
    - [2. Usando `parseInt()` o `parseFloat()`](#2-usando-parseint-o-parsefloat-para-conversiones-m%C3%A1s-espec%C3%ADficas)
  - [Conversión a Boolean](#conversi%C3%B3n-a-boolean)
    - [1. Usando `Boolean()`](#1-usando-boolean)
    - [2. Conversión implícita en condiciones](#2-conversi%C3%B3n-impl%C3%ADcita-en-condiciones)
  - [Conversión a Array](#conversi%C3%B3n-a-array)
    - [1. Usando el operador de propagación (Spread Operator)](#1-usando-el-operador-de-propagaci%C3%B3n-spread-operator)
    - [2. Usando `Array.from()`](#2-usando-arrayfrom)
  - [Conversión a Objeto](#conversi%C3%B3n-a-objeto)
    - [1. Usando `Object.fromEntries()` (ES2019)](#1-usando-objectfromentries-es2019)
    - [2. De objeto a string y viceversa (JSON)](#2-de-objeto-a-string-y-viceversa-json)
  - [Trucos rápidos de conversión](#trucos-r%C3%A1pidos-de-conversi%C3%B3n)
  - [Valores truthy y falsy](#valores-truthy-y-falsy)

---

# 2. Conversiones de Tipos en JavaScript (ES6)

En JavaScript ES6, existen varias formas de convertir entre diferentes tipos de datos. Estas conversiones son útiles para realizar operaciones específicas o garantizar que los tipos sean los adecuados para una función o cálculo. A continuación, se presentan las conversiones más comunes:

## 2.1 Conversión a String

### 1. Usando `String()`

```javascript
const numero = 42;
const texto = String(numero);
```

### 2. Usando Template Literals (Template Strings)

```javascript
const numero = 42;
const texto = `${numero}`;
```

## 2.2 Conversión a Number

### 1. Usando `Number()`

```javascript
const texto = "42";
const numero = Number(texto);
```

### 2. Usando `parseInt()` o `parseFloat()` para conversiones más específicas

```javascript
const texto = "42.5";
const entero = parseInt(texto);
const decimal = parseFloat(texto);
```

## Conversión a Boolean

### 1. Usando `Boolean()`

```javascript
const valor = 42;
const esVerdadero = Boolean(valor); // true
```

### 2. Conversión implícita en condiciones

```javascript
const valor = 0;
if (valor) {
  // Esto no se ejecutará, ya que 0 se evalúa como falso
} else {
  // Esto se ejecutará
}
```

## Conversión a Array

### 1. Usando el operador de propagación (Spread Operator)

```javascript
const cadena = "Hola";
const arreglo = [...cadena]; // ["H", "o", "l", "a"]
```

### 2. Usando `Array.from()`

```javascript
const cadena = "Hola";
const arreglo = Array.from(cadena); // ["H", "o", "l", "a"]
```

## Conversión a Objeto

### 1. Usando `Object.fromEntries()` (ES2019)

Convierte un array de pares `[clave, valor]` o un `Map` en un objeto:

```javascript
const entradas = [["nombre", "Isaías"], ["edad", 35]];
const objeto = Object.fromEntries(entradas);
console.log(objeto); // { nombre: "Isaías", edad: 35 }
```

### 2. De objeto a string y viceversa (JSON)

Para serializar y deserializar objetos, usa `JSON.stringify()` y `JSON.parse()`:

```javascript
const usuario = { nombre: "Isaías", edad: 35 };

// Objeto → String JSON
const json = JSON.stringify(usuario);
console.log(json); // '{"nombre":"Isaías","edad":35}'

// String JSON → Objeto
const recuperado = JSON.parse(json);
console.log(recuperado.nombre); // "Isaías"
```

> `Object(numero)` como en `Object(42)` crea un **objeto envoltorio** (`Number { 42 }`), no un objeto literal. Esto tiene usos muy específicos y no se recomienda como "conversión a objeto" de uso general.

## Trucos rápidos de conversión

| De → A | Método explícito | Forma abreviada |
|--------|-----------------|-----------------|
| → String | `String(x)` | `x.toString()` o `` `${x}` `` |
| → Number | `Number(x)` | `+x` (unario) |
| → Boolean | `Boolean(x)` | `!!x` (doble negación) |

```javascript
console.log(+"42");      // 42 (string → number)
console.log(!!"Hola");   // true (string → boolean)
console.log(!!0);        // false (número → boolean)
console.log(`${true}`);   // "true" (boolean → string)
```

## Valores truthy y falsy

En contextos booleanos (condiciones de `if`, `while`, etc.), JavaScript evalúa los valores como `true` o `false`:

**Falsy** (se evalúan como `false`):

```javascript
false, 0, -0, 0n, "", null, undefined, NaN
```

**Truthy** (se evalúan como `true`): todos los demás, incluyendo:

```javascript
true, 1, -1, "0", "false", [], {}, function() {}, Infinity
```

```javascript
// Ejemplos prácticos
if ("") console.log("No se ejecuta");       // "" es falsy
if ([]) console.log("¡Sí se ejecuta!");      // [] es truthy
if (0) console.log("No se ejecuta");        // 0 es falsy
if ("0") console.log("¡Sí se ejecuta!");     // "0" es truthy (es un string no vacío)
```

---

[Volver al índice general](../INDICE_GENERAL.md)
