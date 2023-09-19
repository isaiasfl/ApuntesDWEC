# **Sintaxis Básica de JavaScript**

## Declaración de Variables en JavaScript

JavaScript ofrece tres formas de declarar variables: `var`, `let` y `const`. Cada una de ellas tiene características específicas:

### `var`

- Declaración global o de función.
- No respeta el bloque de alcance (`block scope`).
- Puede ser reasignada y redeclarada.

Ejemplo:

```javascript
var numero = 5;
numero = 10; // Se puede reasignar
```

### `let`

- Declaración con alcance de bloque (`block scope`).
- Puede ser reasignada, pero no redeclarada en el mismo ámbito.

Ejemplo:

```javascript
let edad = 25;
edad = 30; // Se puede reasignar
```

### `const`

- Declaración con alcance de bloque (`block scope`).
- No puede ser reasignada ni redeclarada en el mismo ámbito.
- Debe ser inicializada en el momento de la declaración.

Ejemplo:

```javascript
const pi = 3.1416;
```

El uso de `let` y `const` es preferido en ECMAScript 6 (ES6) para evitar problemas relacionados con el ámbito y proporcionar mayor inmutabilidad en las variables cuando sea necesario.

En resumen: 

| Tipo   | Scope | Volver a Declarar | Reasignar | Hoisted  | Binds this |
|:------:|:-----:|:-----------------:|:---------:|:--------:|:----------:|
| var    |   No  |       Sí          |     Sí    |    Sí    |     Sí     |
| let    |   Sí  |       No          |     Sí    |    No    |     No     |
| const  |   No  |       No          |     No    |    No    |     No     |



## Tipos de datos primitivos.💎

- Números enteros y flotantes:
  - `let edad = 25;`
  - `let cantidad = -10;`
  - `let precio = 99.99;`
  - `const pi = 3.1416;`

- BigInt:
  - `const numeroGrande = 1234567890123456789012345678901234567890n;`

- Cadenas de texto:
  - `let nombre = "Juan";`
  - `let mensaje = 'Hola, mundo';`

- Valores booleanos:
  - `let esVerdadero = true;`
  - `let esFalso = false;`

- Valores nulos y indefinidos:
  - `let valorNulo = null;`
  - `let valorIndefinido = undefined;`

- Símbolos: (Introducidos en ECMAScript 6)
  - `const simbolo = Symbol('descripcion');`

  Algunos ejemplos de symbol:

  ```javascript
  // Creación de un símbolo con una descripción
  const simbolo1 = Symbol('Este es un símbolo');
  const simbolo2 = Symbol('Otro símbolo');

  // Los símbolos son únicos, incluso si tienen la misma descripción
  console.log(simbolo1 === simbolo2); // false

  // Los símbolos se pueden utilizar como propiedades de objetos
  const objeto = {
    [simbolo1]: 'Valor del símbolo 1',
    [simbolo2]: 'Valor del símbolo 2'
  };

  // Acceso a los valores a través de los símbolos
  console.log(objeto[simbolo1]); // 'Valor del símbolo 1'
  console.log(objeto[simbolo2]); // 'Valor del símbolo 2'

