# Manual de Estructura de Datos Objeto en JavaScript (ES6)

Los objetos en JavaScript son una de las estructuras de datos más fundamentales y poderosas. Son colecciones de pares clave-valor y se utilizan para representar datos estructurados. En ECMAScript 6 (ES6), se introdujeron algunas mejoras significativas en la sintaxis y funcionalidad de los objetos. A continuación, se presenta una guía detallada sobre cómo trabajar con objetos en JavaScript ES6.

## Creación de Objetos

Hay varias formas de crear objetos en JavaScript ES6:

### Sintaxis de Objeto Literal

La forma más común de crear un objeto es utilizando la sintaxis de objeto literal:

```javascript
const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador",
};
```

### Constructor de Objeto

También puedes crear objetos utilizando un constructor de objeto:

```javascript
function Persona(nombre, edad, profesion) {
  this.nombre = nombre;
  this.edad = edad;
  this.profesion = profesion;
}

const juan = new Persona("Juan", 30, "Desarrollador");
```

### Object.create()

Otra forma de crear objetos es utilizando `Object.create()`:

```javascript
const persona = Object.create(null);
persona.nombre = "Juan";
persona.edad = 30;
persona.profesion = "Desarrollador";
```

## Acceso a Propiedades

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

## Modificación de Propiedades

Puedes modificar propiedades de un objeto de la siguiente manera:

```javascript
persona.edad = 31;
persona["profesion"] = "Ingeniero";
```

## Eliminación de Propiedades

Puedes eliminar propiedades de un objeto usando el operador `delete`:

```javascript
delete persona.profesion;
```

## Métodos Importantes

JavaScript proporciona varios métodos incorporados que son útiles para trabajar con objetos. Aquí hay algunos de los más importantes:

### Object.keys()

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

### Object.values()

El método `Object.values(obj)` devuelve un array con los valores de un objeto:

```javascript
const valores = Object.values(persona);
console.log(valores); // ["Juan", 30, "Desarrollador"]
```

### Object.entries()

El método `Object.entries(obj)` devuelve un array de arrays con pares clave-valor:

```javascript
const entradas = Object.entries(persona);
console.log(entradas);
// [["nombre", "Juan"], ["edad", 30], ["profesion", "Desarrollador"]]
```

### Object.assign()

El método `Object.assign(target, source)` copia las propiedades de uno o más objetos fuente en un objeto destino:

```javascript
const destino = {};
const fuente1 = { a: 1 };
const fuente2 = { b: 2 };

Object.assign(destino, fuente1, fuente2);
console.log(destino); // { a: 1, b: 2 }
```

### Object.freeze()

El método `Object.freeze(obj)` evita que se puedan agregar, modificar o eliminar propiedades de un objeto:

```javascript
const objetoCongelado = Object.freeze(persona);
objetoCongelado.nombre = "Carlos"; // Esto no tiene efecto (en modo estricto, lanza un error)
```

## Iteración en Objetos

Puedes iterar sobre las propiedades de un objeto utilizando bucles `for...in`:

```javascript
for (const clave in persona) {
  if (persona.hasOwnProperty(clave)) {
    console.log(`${clave}: ${persona[clave]}`);
  }
}
```
