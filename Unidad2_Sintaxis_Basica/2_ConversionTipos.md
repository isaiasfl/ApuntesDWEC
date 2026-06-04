# **Capítulo 2. Contenido 📝**🖥️

- [2. Conversiones de Tipos en JavaScript (ES6)](#2-conversiones-de-tipos-en-javascript-es6)
  - [2.1 Conversión a String](#21-conversi%C3%B3n-a-string)
    - [i. Usando `String()`](#i-usando-string)
    - [ii. Usando Template Literals (Template Strings)](#ii-usando-template-literals-template-strings)
  - [2.2 Conversión a Number](#22-conversi%C3%B3n-a-number)
    - [i. Usando `Number()`](#i-usando-number)
    - [2. Usando `parseInt()` o `parseFloat()` para conversiones más específicas](#2-usando-parseint-o-parsefloat-para-conversiones-m%C3%A1s-espec%C3%ADficas)
  - [Conversión a Boolean](#conversi%C3%B3n-a-boolean)
    - [1. Usando `Boolean()`](#1-usando-boolean)
    - [2. Conversión implícita en condiciones](#2-conversi%C3%B3n-impl%C3%ADcita-en-condiciones)
  - [Conversión a Array](#conversi%C3%B3n-a-array)
    - [1. Usando el operador de propagación (Spread Operator)](#1-usando-el-operador-de-propagaci%C3%B3n-spread-operator)
    - [2. Usando `Array.from()`](#2-usando-arrayfrom)
  - [Conversión a Objeto](#conversi%C3%B3n-a-objeto)
    - [1. Usando `Object()`](#1-usando-object)

---

# 2. Conversiones de Tipos en JavaScript (ES6)

En JavaScript ES6, existen varias formas de convertir entre diferentes tipos de datos. Estas conversiones son útiles para realizar operaciones específicas o garantizar que los tipos sean los adecuados para una función o cálculo. A continuación, se presentan las conversiones más comunes:

## 2.1 Conversión a String

### i. Usando `String()`

```javascript
const numero = 42;
const texto = String(numero);
```

### ii. Usando Template Literals (Template Strings)

```javascript
const numero = 42;
const texto = `${numero}`;
```

## 2.2 Conversión a Number

### i. Usando `Number()`

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

### 1. Usando `Object()`

```javascript
const numero = 42;
const objeto = Object(numero); // Object { [[PrimitiveValue]]: 42 }
```

---

[Volver al índice general](../INDICE_GENERAL.md)
