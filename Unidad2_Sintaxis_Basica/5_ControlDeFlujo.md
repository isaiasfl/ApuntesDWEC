# Capítulo 5: Estructuras de Control de Flujo en JavaScript (ES6)

Las estructuras de control de flujo en JavaScript permiten tomar decisiones y repetir acciones según sea necesario en un programa. Estas estructuras son fundamentales para el flujo de ejecución de un programa.

## 5.1. Estructuras Condicionales

### 5.1.1. Declaración `if`

La estructura `if` se utiliza para ejecutar un bloque de código si una condición es verdadera.

```javascript
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}
```

### 5.1.2. Declaración `else`

El bloque `else` se ejecuta si la condición en `if` es falsa.

```javascript
let edad = 15;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

### 5.1.3. `else if`

`else if` se utiliza para evaluar múltiples condiciones secuencialmente.

```javascript
let puntuacion = 85;

if (puntuacion >= 90) {
  console.log("Excelente");
} else if (puntuacion >= 70) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
```

## 5.2. Bucles

### 5.2.1. `for` Loop

El bucle `for` permite ejecutar un bloque de código un número específico de veces.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteración #" + (i + 1));
}
```

### 5.2.2. `while` Loop

El bucle `while` se ejecuta mientras una condición sea verdadera.

```javascript
let contador = 0;

while (contador < 5) {
  console.log("Contador: " + contador);
  contador++;
}
```

### 5.2.3. `do...while` Loop

`do...while` es similar a `while`, pero garantiza que el bloque se ejecute al menos una vez.

```javascript
let x = 5;

do {
  console.log("El valor de x es: " + x);
  x--;
} while (x > 0);
```

## 5.3. Estructuras de Control Avanzadas

### 5.3.1. `switch` Statement

`switch` se utiliza para evaluar múltiples casos y ejecutar código según el caso que coincida.

```javascript
let diaSemana = "Lunes";

switch (diaSemana) {
  case "Lunes":
    console.log("Hoy es lunes.");
    break;
  case "Martes":
    console.log("Hoy es martes.");
    break;
  default:
    console.log("Es otro día de la semana.");
}
```

### 5.3.2. `break` y `continue`

`break` se utiliza para salir de un bucle o `switch`, mientras que `continue` se utiliza para saltar a la siguiente iteración en un bucle.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Salta la iteración actual cuando i es 2
  }
  console.log("Valor de i: " + i);
}
```

## 5.4 Ejercicios 😑 📖:

**Ejercicio 1:**

```
Calcular la letra del Documento Nacional de Identidad (DNI) sabiendo que es un proceso matemático que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.

El array de letras es el siguiente:

letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

Se debe validar que el número que se pretende calcular su Letra es entero y de la longitud correcta.
```

**Ejercicio 2:**

```
Programa para calcular el factorial de un número entero. Se debe de validar que es un número entero al que se le va a aplicar el factorial.

```
