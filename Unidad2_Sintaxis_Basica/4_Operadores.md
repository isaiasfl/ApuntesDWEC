# **Capítulo 4. Contenido 📝** 🖥️

- [4. Operadores Lógicos y de Comparación en JavaScript.](#4-operadores-l%C3%B3gicos-y-de-comparaci%C3%B3n-en-javascript)
  - [4.1. Operadores de Comparación](#41-operadores-de-comparaci%C3%B3n)
    - [i. Igualdad (`==`) y Desigualdad (`!=`)](#i-igualdad--y-desigualdad-)
    - [ii. Igualdad Estricta (`===`) y Desigualdad Estricta (`!==`)](#ii-igualdad-estricta--y-desigualdad-estricta-)
    - [iii. Mayor que (`>`) y Menor que (`<`)](#iii-mayor-que--y-menor-que-)
    - [iv. Mayor o Igual que (`>=`) y Menor o Igual que (`<=`)](#iv-mayor-o-igual-que--y-menor-o-igual-que-)
  - [4.2. Operadores Lógicos](#42-operadores-l%C3%B3gicos)
    - [i. AND Lógico (`&&`)](#i-and-l%C3%B3gico-)
    - [ii. OR Lógico (`||`)](#ii-or-l%C3%B3gico-)
    - [iii. NOT Lógico (`!`)](#iii-not-l%C3%B3gico-)
    - [iv. Ejemplo Completo](#iv-ejemplo-completo)
  - [4.3. Operador Ternario (`?`)](#43-operador-ternario-)
    - [Ejemplo:](#ejemplo)
  - [4.4. Operador Nullish Coalescing (`??`)](#44-operador-nullish-coalescing-)
    - [Ejemplo:](#ejemplo-1)
  - [4.5. Combinación de Operadores (`?`) y (`??`)](#45-combinaci%C3%B3n-de-operadores--y-)
    - [Ejemplo:](#ejemplo-2)
  - [4.6. Operadores de Asignación Lógica (ES2021)](#46-operadores-de-asignaci%C3%B3n-l%C3%B3gica-es2021)

---

# 4. Operadores Lógicos y de Comparación en JavaScript.

Los operadores lógicos y de comparación son fundamentales en JavaScript para realizar evaluaciones y tomar decisiones lógicas en tus programas. ES6 y versiones posteriores han ampliado las capacidades con nuevos operadores. A continuación, se presentan los operadores más comunes junto con ejemplos de uso.

## 4.1. Operadores de Comparación

Los operadores de comparación se utilizan para comparar valores y devuelven un valor booleano (verdadero o falso) según el resultado de la comparación.

### i. Igualdad (`==`) y Desigualdad (`!=`)

- `==` compara si dos valores son iguales.
- `!=` compara si dos valores no son iguales.

```javascript
const numero1 = 5;
const numero2 = 10;

console.log(numero1 == numero2); // false
console.log(numero1 != numero2); // true
```

### ii. Igualdad Estricta (`===`) y Desigualdad Estricta (`!==`)

- `===` compara si dos valores son iguales y tienen el mismo tipo de datos.
- `!==` compara si dos valores no son iguales o tienen tipos de datos diferentes.

```javascript
const texto1 = "5";
const numero3 = 5;

console.log(texto1 === numero3); // false (tipos diferentes)
console.log(texto1 !== numero3); // true
```

### iii. Mayor que (`>`) y Menor que (`<`)

- `>` compara si un valor es mayor que otro.
- `<` compara si un valor es menor que otro.

```javascript
const edad1 = 25;
const edad2 = 30;

console.log(edad1 > edad2); // false
console.log(edad1 < edad2); // true
```

### iv. Mayor o Igual que (`>=`) y Menor o Igual que (`<=`)

- `>=` compara si un valor es mayor o igual que otro.
- `<=` compara si un valor es menor o igual que otro.

```javascript
const cantidad1 = 50;
const cantidad2 = 50;

console.log(cantidad1 >= cantidad2); // true
console.log(cantidad1 <= cantidad2); // true
```

## 4.2. Operadores Lógicos

Los operadores lógicos se utilizan para realizar operaciones lógicas en valores booleanos.

### i. AND Lógico (`&&`)

El operador `&&` devuelve `true` si ambos operandos son `true`.

```javascript
const esMayorDeEdad = true;
const tieneLicencia = true;

console.log(esMayorDeEdad && tieneLicencia); // true
```

**Cortocircuito (short-circuit):** `&&` evalúa de izquierda a derecha. Si el primer operando es *falsy*, devuelve ese valor inmediatamente sin evaluar el segundo:

```javascript
console.log(false && cualquierCosa); // false (no evalúa cualquierCosa)
console.log(0 && "no llega");        // 0
console.log("Hola" && 42);           // 42 (ambos truthy, devuelve el último)
```

### ii. OR Lógico (`||`)

El operador `||` devuelve `true` si al menos uno de los operandos es `true`.

```javascript
const esEstudiante = false;
const trabaja = true;

console.log(esEstudiante || trabaja); // true
```

**Cortocircuito:** `||` devuelve el primer operando *truthy* sin evaluar el resto:

```javascript
console.log("Hola" || "no llega"); // "Hola" (primer truthy)
console.log(0 || 42);              // 42
console.log(null || "defecto");    // "defecto" (patrón clásico de valor por defecto)
```

### iii. NOT Lógico (`!`)

El operador `!` invierte el valor booleano de su operando.

```javascript
const esDiaLaboral = true;

console.log(!esDiaLaboral); // false
```

### iv. Ejemplo Completo

A continuación, un ejemplo completo que combina operadores de comparación y operadores lógicos:

```javascript
// Datos de entrada
const edad = 20; // La edad de la persona
const esEstudiante = false; // Si la persona es estudiante o no

// Condiciones
if (edad >= 18 && !esEstudiante) {
  console.log("¡Eres elegible para solicitar la tarjeta de descuento!");
} else if (edad < 18) {
  console.log(
    "Lo siento, debes ser mayor de 18 años para solicitar la tarjeta."
  );
} else {
  console.log(
    "Lo siento, los estudiantes no son elegibles para la tarjeta de descuento."
  );
}
```

## 4.3. Operador Ternario (`?`)

El operador ternario, representado por `condición ? expresión1 : expresión2`, es una forma concisa de realizar una evaluación condicional en JavaScript. Si la condición es verdadera, se ejecuta `expresión1`; de lo contrario, se ejecuta `expresión2`. Es útil para asignar valores basados en una condición.

### Ejemplo de operador ternario

```javascript
const edad = 18;
const esMayor = edad >= 18 ? "Sí" : "No";
console.log(`¿Es mayor de edad? ${esMayor}`); // Imprime "¿Es mayor de edad? Sí"
```

## 4.4. Operador Nullish Coalescing (`??`)

El operador nullish coalescing (`??`) se utiliza para proporcionar un valor predeterminado en caso de que una expresión sea `null` o `undefined`. Es útil para manejar valores nulos o indefinidos de manera segura.

### Ejemplo de nullish coalescing

```javascript
const valor = null;
const valorPredeterminado = valor ?? "Valor predeterminado";
console.log(valorPredeterminado); // Imprime "Valor predeterminado"
```

## 4.5. Combinación de Operadores (`?`) y (`??`)

Puedes combinar el operador ternario y el operador de nullish coalescing para crear lógica condicional más compleja.

### Ejemplo combinado de `?` y `??`

```javascript
const nombre = null;
const mensaje = nombre ? `Hola, ${nombre}` : "Hola, usuario";
console.log(mensaje); // Imprime "Hola, usuario"

const edad = undefined;
const mensajeEdad = edad ?? "Edad no especificada";
console.log(mensajeEdad); // Imprime "Edad no especificada"
```

> En este ejemplo, `nombre` se evalúa como falso debido a que es `null`, por lo que se utiliza el valor predeterminado "Hola, usuario". En el segundo caso, `edad` se evalúa como `undefined`, por lo que se utiliza "Edad no especificada" como valor predeterminado.

> Estos operadores son herramientas poderosas para realizar evaluaciones condicionales y manejar valores nulos o indefinidos de manera efectiva en JavaScript.

## 4.6. Operadores de Asignación Lógica (ES2021)

Combinan los operadores lógicos con la asignación para escribir código más conciso:

| Operador | Equivalente a | Descripción |
|:--------:|:------------:|-------------|
| `x \|\|= y` | `x \|\| (x = y)` | Asigna `y` solo si `x` es *falsy* |
| `x &&= y` | `x && (x = y)` | Asigna `y` solo si `x` es *truthy* |
| `x ??= y` | `x ?? (x = y)` | Asigna `y` solo si `x` es `null` o `undefined` |

```javascript
// ||= — valor por defecto si la variable es falsy
let nombre = "";
nombre ||= "Anónimo";
console.log(nombre); // "Anónimo" ("" es falsy)

// &&= — ejecutar solo si la condición se cumple
let usuario = { nombre: "Isaías" };
usuario &&= usuario.nombre;
console.log(usuario); // "Isaías"

// ??= — inicializar solo si es null o undefined (respeta "" y 0)
let config = { volumen: 0 };
config.volumen ??= 50;
console.log(config.volumen); // 0 (no se reemplaza porque 0 no es null/undefined)

let nombre2 = null;
nombre2 ??= "Isaías";
console.log(nombre2); // "Isaías"
```

---

[Volver al índice general](../INDICE_GENERAL.md)
