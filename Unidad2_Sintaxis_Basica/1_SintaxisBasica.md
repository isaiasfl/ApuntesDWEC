# Sintaxis Básica de JavaScript

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

