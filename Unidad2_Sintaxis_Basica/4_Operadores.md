# Capítulo 4: Manual de Operadores Lógicos y de Comparación en JavaScript.

Los operadores lógicos y de comparación son fundamentales en JavaScript para realizar evaluaciones y tomar decisiones lógicas en tus programas. En ECMAScript 6, se introducen varios operadores nuevos que amplían las capacidades de comparación. A continuación, se presentan los operadores más comunes junto con ejemplos de uso.

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

### ii. OR Lógico (`||`)

El operador `||` devuelve `true` si al menos uno de los operandos es `true`.

```javascript
const esEstudiante = false;
const trabaja = true;

console.log(esEstudiante || trabaja); // true
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
