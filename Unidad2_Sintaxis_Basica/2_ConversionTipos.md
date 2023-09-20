# Capítulo 2. Conversiones de Tipos en JavaScript (ES6)

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
