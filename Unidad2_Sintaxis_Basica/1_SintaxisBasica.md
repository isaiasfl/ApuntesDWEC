# **Capítulo 1. Contenido 📝**🖥️

- [**Capítulo 1. Contenido 📝**🖥️](#capítulo-1-contenido-️)
- [1. **Sintaxis Básica de JavaScript**](#1-sintaxis-básica-de-javascript)
  - [1.1 Declaración de Variables en JavaScript](#11-declaración-de-variables-en-javascript)
    - [i. `var`](#i-var)
    - [ii. `let`](#ii-let)
    - [iii. `const`](#iii-const)
  - [1.2 Tipos de datos en JavaScript.💎](#12-tipos-de-datos-en-javascript)
    - [Tipos de datos primitivos en JavaScript](#tipos-de-datos-primitivos-en-javascript)
    - [Características distintivas de los tipos primitivos:](#características-distintivas-de-los-tipos-primitivos)
    - [Tipos de datos no primitivos (objetos):](#tipos-de-datos-no-primitivos-objetos)
    - [Diferencias clave entre primitivos y no primitivos:](#diferencias-clave-entre-primitivos-y-no-primitivos)

# 1. **Sintaxis Básica de JavaScript**

## 1.1 Declaración de Variables en JavaScript

JavaScript ofrece tres formas de declarar variables: `var`, `let` y `const`. Cada una de ellas tiene características específicas:

### i. `var`

- Declaración global o de función.
- No respeta el bloque de alcance (`block scope`).
- Puede ser reasignada y redeclarada.

Ejemplo:

```javascript
var numero = 5;
numero = 10; // Se puede reasignar
```

### ii. `let`

- Declaración con alcance de bloque (`block scope`).
- Puede ser reasignada, pero no redeclarada en el mismo ámbito.

Ejemplo:

```javascript
let edad = 25;
edad = 30; // Se puede reasignar
```

### iii. `const`

- Declaración con alcance de bloque (`block scope`).
- No puede ser reasignada ni redeclarada en el mismo ámbito.
- Debe ser inicializada en el momento de la declaración.

Ejemplo:

```javascript
const pi = 3.1416;
```

El uso de `let` y `const` es preferido en ECMAScript 6 (ES6) para evitar problemas relacionados con el ámbito y proporcionar mayor inmutabilidad en las variables cuando sea necesario.

En resumen:

| Tipo  | Scope | Volver a Declarar | Reasignar | Hoisted | Binds this |
| :---: | :---: | :---------------: | :-------: | :-----: | :--------: |
|  var  |  No   |        Sí         |    Sí     |   Sí    |     Sí     |
|  let  |  Sí   |        No         |    Sí     |   No    |     No     |
| const |  No   |        No         |    No     |   No    |     No     |

A partir de ECMAScript 2015, `let` y `const` se elevan (hoisting) pero no se inician lo que no provoca problemas con el hoisting o elevación.

## 1.2 Tipos de datos en JavaScript.💎

En JavaScript, **un tipo de dato primitivo** es un tipo de dato que representa un valor atómico e inmutable. Esto significa que no puede ser alterado ni dividido en subcomponentes. Los tipos primitivos se caracterizan por ser valores directos, no objetos, y no tienen métodos o propiedades intrínsecas (aunque el motor de JavaScript a veces temporalmente convierte estos valores en objetos para realizar ciertas operaciones).

### Tipos de datos primitivos en JavaScript

A partir de ES6 y versiones posteriores, los tipos de datos primitivos en JavaScript son:

1. **`undefined`**: Representa la ausencia de valor. Una variable que ha sido declarada pero no inicializada tiene el valor `undefined`.
2. **`null`**: Representa intencionalmente "ningún valor" o "valor vacío". Es considerado un tipo primitivo aunque su tipo es un objeto (`typeof null` es `'object'` debido a un error histórico en el lenguaje).
3. **`boolean`**: Representa un valor lógico que puede ser `true` o `false`.
4. **`number`**: Representa números enteros y de punto flotante. JavaScript no distingue entre enteros y números de punto flotante.
5. **`bigint`** (introducido en ES2020): Representa enteros de tamaño arbitrario. Permite trabajar con números enteros más grandes que los que puede manejar el tipo `number`.
6. **`string`**: Representa una cadena de caracteres. Las cadenas son inmutables.
7. **`symbol`** (introducido en ES6): Representa un valor único e inmutable que puede ser usado como clave de propiedades de objetos, garantizando que no habrá colisión con otras claves.

### Características distintivas de los tipos primitivos:

1. **Inmutabilidad**: Los valores primitivos son inmutables. No pueden ser alterados una vez creados. Si intentas modificar un valor primitivo, en realidad estás creando un nuevo valor.

   Ejemplo:

   ```javascript
   let a = "hello Isaías";
   a[0] = "H"; // No ocurre ningún cambio, ya que las cadenas son inmutables
   console.log(a); // 'hello Isaías'
   ```

2. **Almacenamiento por valor**: Los tipos primitivos son almacenados directamente en la memoria (stack), lo que significa que cuando asignas o pasas un valor primitivo, estás trabajando con una copia del valor.

   Ejemplo:

   ```javascript
   let x = 50;
   let y = x; // y es una copia de x
   x = 30;
   console.log(y); // 10 (no cambia aunque x cambie)
   ```

### Tipos de datos no primitivos (objetos):

Los **tipos de datos no primitivos** son aquellos que **almacenan referencias** a objetos en lugar de valores directos. Esto significa que cuando asignas o pasas un objeto, lo que se copia es una referencia al objeto, no el objeto en sí. Los tipos no primitivos son mutables, lo que significa que puedes cambiar sus propiedades o el contenido de las colecciones sin cambiar la referencia al objeto.

Algunos ejemplos de tipos no primitivos son:

- **Objetos**: Representan colecciones de pares clave-valor.
- **Arrays**: Son objetos especializados para almacenar listas de elementos.
- **Funciones**: Son objetos de primera clase en JavaScript.

### Diferencias clave entre primitivos y no primitivos:

| Característica |                     Primitivos                      |                                       No primitivos                                        |
| :------------: | :-------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|  Mutabilidad   |                     Inmutables                      |                                          Mutables                                          |
| Almacenamiento | Almacenados por valor en la pila de memoria (stack) |                 Almacenados por referencia en el montón (heap) de memoria                  |
|  Comparación   |                Comparación por valor                | Comparación por referencia (dos objetos son iguales solo si comparten la misma referencia) |

Ejemplo:

```javascript
let user1 = { name: "Isaías" };
let user2 = { name: "Isaías" };
console.log(user1 === user2); // false (diferentes referencias aunque la clave name contenga el mismo nombre 'Isaías')

let numero1 = 10;
let numero2 = 10;
console.log(numero1 === numero2); // true (mismo valor)
```

---

[Volver al índice general](../INDICE_GENERAL.md)
