# **Capítulo 11. Contenido 📝** 🖥️

- [**Capítulo 11. Contenido 📝** 🖥️](#capítulo-11-contenido--️)
- [11. Estructura de Datos Objeto en JavaScript (ES6)](#11-estructura-de-datos-objeto-en-javascript-es6)
  - [11.1 Formas de crear Objetos](#111-formas-de-crear-objetos)
    - [11.1.1 Sintaxis de Objeto Literal](#1111-sintaxis-de-objeto-literal)
    - [11.1.2 Constructor de Objeto o función constructora.](#1112-constructor-de-objeto-o-función-constructora)
    - [11.1.3 Usando Clases.](#1113-usando-clases)
    - [11.1.4 Object.create()](#1114-objectcreate)
    - [11.1.5 Patrón Singleton](#1115-patrón-singleton)
      - [Ejemplo 1: Singleton básico](#ejemplo-1-singleton-básico)
  - [11.2 Acceso a Propiedades](#112-acceso-a-propiedades)
  - [11.3 Modificación de Propiedades](#113-modificación-de-propiedades)
  - [11.4 Eliminación de Propiedades](#114-eliminación-de-propiedades)
  - [11.5 Métodos Importantes](#115-métodos-importantes)
    - [11.5.1 Object.keys()](#1151-objectkeys)
    - [11.5.2 Object.values()](#1152-objectvalues)
    - [11.5.3 Object.entries()](#1153-objectentries)
    - [11.5.4 Object.assign()](#1154-objectassign)
    - [11.5.5 Object.freeze()](#1155-objectfreeze)
  - [11.6 Iteración en Objetos](#116-iteración-en-objetos)
  - [11.7 Desestructuración de Objetos.](#117-desestructuración-de-objetos)
    - [Ejemplo 1: Extracción básica de propiedades](#ejemplo-1-extracción-básica-de-propiedades)
    - [Ejemplo 2: Propiedades con alias](#ejemplo-2-propiedades-con-alias)
    - [Ejemplo 3: Extracción de propiedades anidadas](#ejemplo-3-extracción-de-propiedades-anidadas)
  - [11.8 `Array.from()` en JavaScript](#118-arrayfrom-en-javascript)
    - [11.8.1 Sintaxis](#1181-sintaxis)
      - [Ejemplo 1:](#ejemplo-1)
      - [Ejemplo 2:](#ejemplo-2)
      - [Ejemplo 3:](#ejemplo-3)
      - [Ejemplo 4:](#ejemplo-4)
      - [Ejemplo 5:](#ejemplo-5)
  - [11.9 Métodos para trabajar con JSON en JavaScript `JSON.stringify()` y `JSON.parse()`.](#119-métodos-para-trabajar-con-json-en-javascript-jsonstringify-y-jsonparse)
    - [11.9.1 `JSON.stringify()`](#1191-jsonstringify)
    - [Ejemplos de `JSON.stringify()`](#ejemplos-de-jsonstringify)
      - [Ejemplo 1: Conversión básica](#ejemplo-1-conversión-básica)
      - [Ejemplo 2: Personalización con `replacer`](#ejemplo-2-personalización-con-replacer)
      - [Ejemplo 3: Formateo con `space`](#ejemplo-3-formateo-con-space)
    - [11.9.2 `JSON.parse()`](#1192-jsonparse)
    - [Ejemplos de `JSON.parse()`](#ejemplos-de-jsonparse)
      - [Ejemplo 4: Conversión básica](#ejemplo-4-conversión-básica)
      - [Ejemplo 5: Personalización con `reviver`](#ejemplo-5-personalización-con-reviver)
    - [Resumen](#resumen)

---

# 11. Estructura de Datos Objeto en JavaScript (ES6)

Los objetos en JavaScript son una de las estructuras de datos más fundamentales y poderosas. Son colecciones de pares clave-valor y se utilizan para representar datos estructurados.

## 11.1 Formas de crear Objetos

Hay varias formas de crear objetos en JavaScript ES6:

### 11.1.1 Sintaxis de Objeto Literal

La forma más común de crear un objeto es utilizando la sintaxis de objeto literal:

```javascript
const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador",
};
```

### 11.1.2 Constructor de Objeto o función constructora.

También puedes crear objetos utilizando un constructor de objeto. Consiste en crear una función a la que se le pasen como parámetros las propiedades del objeto y dentro de esa función usamos el objeto this. Para crear una instancia simplemente usamos new pasando los parámetros que queramos.

```javascript
function Persona(nombre, cp, profesion) {
  this.nombre = nombre;
  this.cp = cp;
  this.profesion = profesion;
}

const juan = new Persona("Isaías", 18000, "Desarrollador");
```

### 11.1.3 Usando Clases.

Se puede realizar la creación usando el azucar sintáctico que nos provee Javascript a partir de ECMAScript6 con la sintaxis de clases. Sería una copia de la anterior adaptada a clases. Cambiamos un constructor de objeto por un constructor de clase

```javascript
class Persona {
  constructor(nombre, cp, profesion) {
    this.nombre = nombre;
    this.cp = cp;
    this.profesion = profesion;
  }
}

const newPersona = new Persona("Isaías", 18000, "Developer");
```

### 11.1.4 Object.create()

Otra forma de crear objetos es utilizando `Object.create()`:

```javascript
const persona = Object.create(null);
persona.nombre = "Isaías";
persona.cp = 18000;
persona.profesion = "Desarrollador";
```

### 11.1.5 Patrón Singleton

Tomando los conceptos de las funciones autoinvocables de los clousures de Javascript (que veremos más adelante), podemos crear este patrón de programación `Singleton` en el cual el objeto sólo se instancia una única vez y así te aseguras que no se creen nuevas instancias.

```javascript
const usuario1 = new (function PersonaSingleton() {
  this.name = "Isaías";
  this.cp = 18000;
  this.profesion = "FullStack";
})();

// otra forma de hacerlo más despacio sería:

Class Persona {
  constructor (nombre,cp,profesion) {
    this.nom = nombre;
    this.cp = cp;
    this.profesion = profesion;
    // Compruebo que la instancia existe. Si existiese
    // entonces devuelvo la instancia.
    // si la instancia no existe, entonces creo una nueva.
    if (typeof Persona.instance === "object") {
      return Persona.instance
    }
    Persona.instance = this;
    return this;
  }
}

const isaias = new Persona('Isaías',18000,'developer');
// si intento crear otra persona, me devolvería la primera `persona creada`
```

> _Nota:_
>
> > _El patrón Singleton es un patrón de diseño de software que se utiliza para garantizar que una clase tenga una sola instancia y proporcionar un punto de acceso global a esa instancia en todo el programa. En JavaScript, donde no hay soporte nativo para clases singleton, puedes implementar este patrón para asegurarte de que una clase tenga una única instancia en tu aplicación._
> >
> > ### ¿Por qué se utiliza el patrón Singleton?
> >
> > El patrón Singleton se utiliza por varias razones:
> >
> > 1. **Control de acceso**: Garantiza que solo haya una instancia de una clase y proporciona un punto único de acceso a esa instancia, lo que puede ser útil en situaciones donde se necesita un único punto de control, como una configuración global o un registro de eventos.
> > 2. **Conservación de recursos**: Si una instancia de una clase es costosa en términos de recursos (como una conexión a una base de datos), el patrón Singleton ayuda a conservar esos recursos al evitar la creación de múltiples instancias innecesarias.
> > 3. **Mantenimiento y gestión**: Facilita la gestión y el mantenimiento de una instancia única, lo que puede simplificar la aplicación y reducir la complejidad.

#### Ejemplo 1: Singleton básico

```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  // Métodos de la instancia
  showMessage() {
    console.log("¡Hola desde la instancia Singleton!");
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true, ambas variables apuntan a la misma instancia

instance1.showMessage(); // ¡Hola desde la instancia Singleton!
```

## 11.2 Acceso a Propiedades

Puedes acceder a las propiedades de un objeto de varias maneras:

```javascript
const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador",
};

// Notación de punto
console.log(persona.nombre); // "Juan"

// Notación de corchetes
console.log(persona["edad"]); // 30
```

## 11.3 Modificación de Propiedades

Puedes modificar propiedades de un objeto de la siguiente manera:

```javascript
persona.edad = 31;
persona["profesion"] = "Ingeniero";
```

## 11.4 Eliminación de Propiedades

Puedes eliminar propiedades de un objeto usando el operador `delete`:

```javascript
delete persona.profesion;
```

## 11.5 Métodos Importantes

JavaScript proporciona varios métodos incorporados que son útiles para trabajar con objetos. Aquí hay algunos de los más importantes:

### 11.5.1 Object.keys()

El método `Object.keys(obj)` devuelve un array con las claves (propiedades) de un objeto:

```javascript
const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador",
};

const claves = Object.keys(persona);
console.log(claves); // ["nombre", "edad", "profesion"]
```

### 11.5.2 Object.values()

El método `Object.values(obj)` devuelve un array con los valores de un objeto:

```javascript
const valores = Object.values(persona);
console.log(valores); // ["Juan", 30, "Desarrollador"]
```

### 11.5.3 Object.entries()

El método `Object.entries(obj)` devuelve un array de arrays con pares clave-valor:

```javascript
const entradas = Object.entries(persona);
console.log(entradas);
// [["nombre", "Juan"], ["edad", 30], ["profesion", "Desarrollador"]]
```

### 11.5.4 Object.assign()

El método `Object.assign(target, source)` copia las propiedades de uno o más objetos fuente en un objeto destino:

```javascript
const destino = {};
const fuente1 = { a: 1 };
const fuente2 = { b: 2 };

Object.assign(destino, fuente1, fuente2);
console.log(destino); // { a: 1, b: 2 }
```

### 11.5.5 Object.freeze()

El método `Object.freeze(obj)` evita que se puedan agregar, modificar o eliminar propiedades de un objeto:

```javascript
const objetoCongelado = Object.freeze(persona);
objetoCongelado.nombre = "Carlos"; // Esto no tiene efecto (en modo estricto, lanza un error)
```

## 11.6 Iteración en Objetos

Puedes iterar sobre las propiedades de un objeto utilizando bucles `for...in`:

```javascript
for (const clave in persona) {
  if (persona.hasOwnProperty(clave)) {
    console.log(`${clave}: ${persona[clave]}`);
  }
}
```

## 11.7 Desestructuración de Objetos.

En JavaScript ES6 y versiones posteriores, puedes extraer elementos de un objeto utilizando la desestructuración. La desestructuración te permite asignar valores de propiedades de un objeto a variables individuales de una manera más concisa.

### Ejemplo 1: Extracción básica de propiedades

Supongamos que tienes un objeto `persona` y deseas extraer sus propiedades en variables individuales:

```javascript
// Objeto persona
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "México",
};

// Desestructuración para extraer propiedades
const { nombre, edad, ciudad } = persona;

console.log(nombre); // Resultado: "Juan"
console.log(edad); // Resultado: 30
console.log(ciudad); // Resultado: "México"
```

### Ejemplo 2: Propiedades con alias

Puedes asignar un alias a las propiedades mientras las extraes del objeto:

```javascript
// Objeto libro
const libro = {
  titulo: "La sombra del viento",
  autor: "Carlos Ruiz Zafón",
  año: 2001,
};

// Desestructuración con alias
const { titulo: nombreLibro, autor: nombreAutor, año: publicadoEn } = libro;

console.log(nombreLibro); // Resultado: "La sombra del viento"
console.log(nombreAutor); // Resultado: "Carlos Ruiz Zafón"
console.log(publicadoEn); // Resultado: 2001
```

### Ejemplo 3: Extracción de propiedades anidadas

Si tienes propiedades anidadas en un objeto, también puedes extraerlas utilizando la desestructuración:

```javascript
// Objeto con propiedades anidadas
const producto = {
  nombre: "Portátil",
  marca: "Asus"
  detalles: {
    peso: "1.5 kg",
    precio: 950,
  },
};

// Desestructuración de propiedades anidadas
const {
  nombre,
  detalles: { peso, precio },
} = producto;

console.log(nombre); // Resultado: "Portátil"
console.log(peso); // Resultado: "1.5 kg"
console.log(precio); // Resultado: 900
```

## 11.8 `Array.from()` en JavaScript

`Array.from()` es un método incorporado en JavaScript que se utiliza para crear un nuevo objeto de matriz (array) a partir de una `secuencia iterable`, como un objeto iterable, un objeto similar a un array (con una propiedad `length` y elementos indexados), o una cadena de texto. Este método es útil para convertir otras estructuras de datos en matrices o realizar operaciones en datos iterables.

### 11.8.1 Sintaxis

La sintaxis básica de `Array.from()` es la siguiente:

```javascript
Array.from(iterable[, mapFn[, thisArg]])
```

- `iterable`: El objeto iterable del cual se creará la nueva matriz.
- `mapFn` (opcional): Una función de mapeo que se ejecuta para cada elemento del iterable antes de agregarlo a la nueva matriz.
- `thisArg` (opcional): Un valor que se utiliza como `this` al ejecutar la función `mapFn`.

#### Ejemplo 1:

Crear una matriz a partir de una cadena de texto

```javascript
const texto = "JavaScript";
const caracteres = Array.from(texto);

console.log(caracteres); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
```

`Array.from()` se utiliza para convertir una cadena de texto en una matriz de caracteres.

#### Ejemplo 2:

Crear una matriz con elementos duplicados a partir de un objeto iterable

```javascript
const iterable = [1, 2, 3];
const matrizDuplicada = Array.from(iterable, (elemento) => elemento * 2);

console.log(matrizDuplicada); // [2, 4, 6]
```

Aquí, `Array.from()` se usa para crear una nueva matriz duplicando cada elemento del objeto iterable original.

#### Ejemplo 3:

Crear una matriz a partir de un objeto similar a un array

```javascript
const objetoSimilarArray = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};

const matrizDesdeObjeto = Array.from(objetoSimilarArray);

console.log(matrizDesdeObjeto); // ['a', 'b', 'c']
```

En este caso, `Array.from()` se utiliza para convertir un objeto similar a un array en una matriz real.

#### Ejemplo 4:

Crear una matriz con elementos filtrados a partir de un objeto iterable

```javascript
const iterable = [1, 2, 3, 4, 5];
const matrizFiltrada = Array.from(iterable, (elemento) =>
  elemento % 2 === 0 ? elemento : null
).filter(Boolean);

console.log(matrizFiltrada); // [2, 4]
```

`Array.from()` se usa para crear una nueva matriz filtrando solo los elementos pares del objeto iterable original.

#### Ejemplo 5:

Crear una matriz de objetos a partir de un objeto iterable

```javascript
const iterable = ["Manzana", "Banana", "Cereza"];
const matrizDeObjetos = Array.from(iterable, (fruta) => ({ nombre: fruta }));

console.log(matrizDeObjetos);
// [
//   { nombre: 'Manzana' },
//   { nombre: 'Banana' },
//   { nombre: 'Cereza' }
// ]
```

Aquí `Array.from()` se utiliza para crear una matriz de objetos con cada elemento del iterable como valor de la propiedad `nombre`.

## 11.9 Métodos para trabajar con JSON en JavaScript `JSON.stringify()` y `JSON.parse()`.

En JavaScript, `JSON.stringify()` y `JSON.parse()` son dos métodos esenciales para trabajar con datos en formato JSON (JavaScript Object Notation). JSON es un formato de intercambio de datos ampliamente utilizado en aplicaciones web para enviar y recibir datos entre el cliente y el servidor.

### 11.9.1 `JSON.stringify()`

`JSON.stringify()` es un método que convierte un objeto JavaScript en una cadena de texto en formato JSON. Esta cadena resultante puede ser utilizada para transmitir datos o para guardarlos en un archivo. Puede tomar tres argumentos: el objeto que se va a convertir, un argumento opcional llamado `replacer` (una función que personaliza la conversión), y otro argumento opcional llamado `space` (para dar formato legible al resultado).

**Sintaxis**

```javascript
JSON.stringify(objeto, replacer, espacio);
```

- `objeto`: El objeto que se va a convertir en una cadena JSON.
- `replacer` (opcional): Una función que permite personalizar la conversión. Puede ser un array o una función.
- `espacio` (opcional): La cantidad de espacio (indentación) que se usará para formatear la cadena JSON resultante.

### Ejemplos de `JSON.stringify()`

#### Ejemplo 1: Conversión básica

```javascript
const usuario = {
  nombre: "Juan",
  edad: 30,
  isAdmin: false,
};

const jsonString = JSON.stringify(usuario);

console.log(jsonString);
// Resultado: {"nombre":"Juan","edad":30,"isAdmin":false}
```

En este ejemplo, el objeto `usuario` se convierte en una cadena JSON simple.

#### Ejemplo 2: Personalización con `replacer`

```javascript
const habitacion = {
  numero: 23,
  toJSON() {
    return this.numero;
  },
};

const reunion = {
  titulo: "Conferencia",
  habitacion,
};

const jsonString = JSON.stringify(reunion, (clave, valor) => {
  return clave === "habitacion" ? valor.toJSON() : valor;
});

console.log(jsonString);
// Resultado: {"titulo":"Conferencia","habitacion":23}
```

Usamos un `replacer` para personalizar la conversión del objeto `reunion` y convertir la propiedad `habitacion` en su valor personalizado utilizando el método `toJSON()`.

#### Ejemplo 3: Formateo con `space`

```javascript
const usuario = {
  nombre: "Ana",
  edad: 28,
  isAdmin: true,
};

const jsonString = JSON.stringify(usuario, null, 2);

console.log(jsonString);
// Resultado con formato:
// {
//   "nombre": "Ana",
//   "edad": 28,
//   "isAdmin": true
// }
```

En este caso, usamos el tercer argumento `space` para dar formato legible a la cadena JSON resultante.

### 11.9.2 `JSON.parse()`

`JSON.parse()` es un método que convierte una cadena de texto en formato JSON en un objeto JavaScript. Puede tomar dos argumentos: la cadena JSON que se va a analizar y un argumento opcional llamado `reviver` (una función que permite realizar transformaciones durante la conversión).

**Sintaxis**

```javascript
JSON.parse(cadenaJSON, reviver);
```

- `cadenaJSON`: La cadena JSON que se va a analizar y convertir en un objeto JavaScript.
- `reviver` (opcional): Una función que permite personalizar la conversión durante el análisis.

### Ejemplos de `JSON.parse()`

#### Ejemplo 4: Conversión básica

```javascript
const cadenaJSON = '{"nombre": "Maria", "edad": 35, "isAdmin": false}';

const usuario = JSON.parse(cadenaJSON);

console.log(usuario);
// Resultado: { nombre: 'Maria', edad: 35, isAdmin: false }
```

En este ejemplo, la cadena JSON se convierte en un objeto JavaScript llamado `usuario`.

#### Ejemplo 5: Personalización con `reviver`

```javascript
const cadenaJSON = '{"fechaNacimiento": "1990-05-15"}';

const usuario = JSON.parse(cadenaJSON, (clave, valor) => {
  if (clave === "fechaNacimiento") {
    return new Date(valor);
  }
  return valor;
});

console.log(usuario.fechaNacimiento.getFullYear());
// Resultado: 1990
```

Usamos un `reviver` para convertir la cadena JSON en un objeto JavaScript y transformar la propiedad `fechaNacimiento` en un objeto `Date`.

### Resumen

- `JSON.stringify()` se utiliza para convertir un objeto JavaScript en una cadena JSON.
- `JSON.parse()` se utiliza para convertir una cadena JSON en un objeto JavaScript.
- Ambos métodos son esenciales para trabajar con la serialización y deserialización de datos en aplicaciones web y comunicaciones cliente-servidor.
- `replacer` en `JSON.stringify()` permite personalizar la conversión.
- Utiliza `JSON.stringify()` con `space` para dar formato legible a los datos JSON.

---

[Volver al índice general](../INDICE_GENERAL.md)
