# Programación Orientada a Objetos en JavaScript basada en Prototipos 📝 🖥️

- [Programación Orientada a Objetos en JavaScript basada en Prototipos 📝 🖥️](#programación-orientada-a-objetos-en-javascript-basada-en-prototipos--️)
  - [1. Introducción a la Programación Orientada a Objetos Basada en Prototipos](#1-introducción-a-la-programación-orientada-a-objetos-basada-en-prototipos)
  - [2. POO usando Objetos Literales](#2-poo-usando-objetos-literales)
    - [2.1. Creación de Objetos Literales](#21-creación-de-objetos-literales)
    - [2.2. Instanciar un Objeto Literal.](#22-instanciar-un-objeto-literal)
      - [Object.create()](#objectcreate)
        - [Sintaxis](#sintaxis)
          - [Ejemplo 1](#ejemplo-1)
          - [Ejemplo 2](#ejemplo-2)
      - [Object.assign()](#objectassign)
        - [Uso 1: Combinar Objetos](#uso-1-combinar-objetos)
          - [Sintaxis](#sintaxis-1)
          - [Ejemplo combinar Objetos](#ejemplo-combinar-objetos)
        - [Uso 2: Clonar Objetos](#uso-2-clonar-objetos)
          - [Sintaxis](#sintaxis-2)
          - [Ejemplo Clonar Objetos](#ejemplo-clonar-objetos)
    - [2.3. Métodos Getter y Setter](#23-métodos-getter-y-setter)
    - [2.4. Métodos Compartidos](#24-métodos-compartidos)
    - [2.5. Prototipos](#25-prototipos)
      - [Ejemplo getPrototypeOf 1](#ejemplo-getprototypeof-1)
      - [Ejemplo getPrototypeOf 2](#ejemplo-getprototypeof-2)
    - [2.6. Herencia Prototipal y Cadena de Prototipos](#26-herencia-prototipal-y-cadena-de-prototipos)
      - [Ejemplo herencia 1](#ejemplo-herencia-1)
      - [Ejemplo herencia 2](#ejemplo-herencia-2)
    - [2.7. Herencia de Prototipos en Objetos Integrados](#27-herencia-de-prototipos-en-objetos-integrados)
      - [Ejemplo 1 Array prototype](#ejemplo-1-array-prototype)
      - [Ejemplo 2 String prototype](#ejemplo-2-string-prototype)
  - [3. POO usando Funciones Constructoras y el Operador `new`](#3-poo-usando-funciones-constructoras-y-el-operador-new)
    - [3.1. Creación de Funciones Constructoras](#31-creación-de-funciones-constructoras)
    - [3.2. Definición de Propiedades y Métodos de Instancia](#32-definición-de-propiedades-y-métodos-de-instancia)
    - [3.3. El Prototipo en las Funciones Constructoras](#33-el-prototipo-en-las-funciones-constructoras)
    - [3.4. Herencia en Funciones Constructoras](#34-herencia-en-funciones-constructoras)
    - [3.5. Métodos Estáticos](#35-métodos-estáticos)
    - [3.6. Getters y Setters](#36-getters-y-setters)
      - [Usando Object.defineProperty()](#usando-objectdefineproperty)
      - [Definiendo Getters y Setters en el propio Constructor](#definiendo-getters-y-setters-en-el-propio-constructor)
  - [4. POO usando Clases en ES6](#4-poo-usando-clases-en-es6)
    - [Ejemplo 1 Clases](#ejemplo-1-clases)
    - [Ejemplo 2 Clases](#ejemplo-2-clases)
    - [4.1. Getters y Setters](#41-getters-y-setters)
      - [Ejemplo 1 Getters](#ejemplo-1-getters)
      - [Ejemplo 2 Setters](#ejemplo-2-setters)
    - [4.2. Métodos Estáticos](#42-métodos-estáticos)
      - [Ejemplo 1 static method](#ejemplo-1-static-method)
      - [Ejemplo 2 static method](#ejemplo-2-static-method)
    - [4.2b. Bloques estáticos (ES2022)](#42b-bloques-estáticos-es2022)
    - [4.3. Herencia Entre Clases](#43-herencia-entre-clases)
      - [Ejemplo 1:](#ejemplo-1-1)
      - [Ejemplo 2:](#ejemplo-2-1)
    - [4.4. Encapsulación](#44-encapsulación)
      - [Propiedades Protegidas](#propiedades-protegidas)
        - [Sintaxis](#sintaxis-3)
          - [Ejemplo](#ejemplo)
      - [Métodos de Clase Protegidos](#métodos-de-clase-protegidos)
        - [Sintaxis](#sintaxis-4)
        - [Ejemplo](#ejemplo-1)
      - [Métodos de Clase Privados (ES2022)](#métodos-de-clase-privados)
        - [Sintaxis](#sintaxis-5)
        - [Ejemplo](#ejemplo-2)
    - [4.5. Ventajas de Propiedades Protegidas y Métodos de Clase Protegidos](#45-ventajas-de-propiedades-protegidas-y-métodos-de-clase-protegidos)
    - [4.6. Métodos de Encadenamiento](#46-métodos-de-encadenamiento)
      - [Ejemplo 1:](#ejemplo-1-2)
      - [Ejemplo 2:](#ejemplo-2-2)

---

## 1. Introducción a la Programación Orientada a Objetos Basada en Prototipos

La programación orientada a objetos basada en prototipos en JavaScript, también conocida como "OOP prototipal" o "herencia prototipal", es un paradigma de programación que se diferencia de la programación orientada a objetos basada en clases tradicionales que se encuentra en lenguajes como Java o C++.

JavaScript utiliza un sistema de prototipos en lugar de clases para definir objetos y su comportamiento. Este enfoque se ha vuelto más estructurado y expresivo con la introducción de la sintaxis de clase en ECMAScript 6 (ES6).
Cada objeto en JavaScript tiene un prototipo del cual hereda propiedades y métodos.

## 2. POO usando Objetos Literales

Los objetos literales son la forma más simple de crear objetos en JavaScript. Aquí, veremos cómo definir propiedades, métodos, getters, setters y herencia en objetos literales.

### 2.1. Creación de Objetos Literales

Un objeto literal es una colección de pares clave-valor:

```javascript
const persona = {
  nombre: "Juan",
  edad: 30,
  obtenerNombre: function () {
    return this.nombre;
  },
};
```

### 2.2. Instanciar un Objeto Literal.

Para instanciar un objeto literal usamos el método Object.create.

#### Object.create()

Object.create() se utiliza para crear un nuevo objeto con el prototipo especificado. Puedes utilizarlo para crear objetos con prototipos personalizados.

##### Sintaxis de `Object.create()`

```javascript
Object.create(prototipo, [propiedadesOpcionales]);
```

Donde:

- prototipo: El objeto que se convertirá en el prototipo del nuevo objeto.
- propiedadesOpcionales (opcional): Un objeto que define propiedades adicionales para el nuevo objeto.

###### Ejemplo 1

```javascript
const prototipoPersonalizado = {
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

const objetoConPrototipo = Object.create(prototipoPersonalizado);
objetoConPrototipo.nombre = "Isaías FL";

objetoConPrototipo.saludar(); // Salida: Hola, mi nombre es Isaías FL
```

###### Ejemplo 2

```javascript
const prototipo = { x: 10 };
const objetoConPropiedades = Object.create(prototipo, {
  y: {
    value: 20,
    writable: true,
    enumerable: true,
  },
});

console.log(objetoConPropiedades.x); // 10
console.log(objetoConPropiedades.y); // 20
```

#### Object.assign()

`Object.assign()` es una función en JavaScript que se utiliza para copiar las propiedades de uno o más objetos fuente a un objeto destino. Es útil en varias situaciones, y en este manual, vamos a explorar sus dos usos principales.

##### Uso 1: Combinar Objetos

En este caso, `Object.assign()` se utiliza para combinar varios objetos en uno solo. El objeto destino contendrá todas las propiedades de los objetos fuente. Si dos objetos tienen propiedades con el mismo nombre, la última propiedad encontrada sobrescribirá las anteriores.

###### Sintaxis de combinación con `Object.assign()`

```javascript
Object.assign(objetoDestino, ...objetosFuente);
```

- `objetoDestino`: El objeto al que se copiarán las propiedades de los objetos fuente.
- `objetosFuente`: Uno o más objetos cuyas propiedades se copiarán en el objeto destino.

###### Ejemplo combinar Objetos

```javascript
const objetoDestino = { a: 1, b: 2 };
const fuente1 = { b: 3, c: 4 };
const fuente2 = { d: 5 };

Object.assign(objetoDestino, fuente1, fuente2);

console.log(objetoDestino);
// Resultado: { a: 1, b: 3, c: 4, d: 5 }
```

En este ejemplo, las propiedades de `fuente1` y `fuente2` se copian en `objetoDestino`, sobrescribiendo la propiedad `b` de `objetoDestino`.

##### Uso 2: Clonar Objetos

`Object.assign()` también se utiliza para clonar un objeto existente, creando una copia independiente del objeto original.

###### Sintaxis de clonación con `Object.assign()`

```javascript
const copia = Object.assign({}, objetoOriginal);
```

- `copia`: El nuevo objeto clonado.
- `objetoOriginal`: El objeto que se clonará.

###### Ejemplo Clonar Objetos

```javascript
const original = { x: 1, y: 2 };
const clon = Object.assign({}, original);

console.log(clon);
// Resultado: { x: 1, y: 2 }

console.log(original === clon); // false (son objetos diferentes)
```

En este ejemplo, `Object.assign()` crea una copia de `original` en `clon`, y los dos objetos son independientes entre sí.

### 2.3. Métodos Getter y Setter

Puedes definir métodos getter y setter para acceder y modificar propiedades:

```javascript
const persona = {
  nombre: "María",
  _edad: 19,
  get edad() {
    return this._edad;
  },
  set edad(nuevaEdad) {
    if (nuevaEdad >= 0) {
      this._edad = nuevaEdad;
    }
  },
};
```

### 2.4. Métodos Compartidos

Los métodos se pueden compartir entre objetos para ahorrar memoria:

```javascript
const metodosComunes = {
  saludar() {
    return `Hola, soy ${this.nombre}`;
  },
};

const persona1 = Object.create(metodosComunes);
persona1.nombre = "Ana";

const persona2 = Object.create(metodosComunes);
persona2.nombre = "Luis";
```

### 2.5. Prototipos

Cada objeto en JavaScript tiene un prototipo que define las propiedades y métodos heredados. El prototipo de un objeto se puede acceder mediante `Object.getPrototypeOf(obj)`.

#### Ejemplo getPrototypeOf 1

```javascript
const animal = {
  sonido: "Hace un sonido indefinido.",
};

const perro = Object.create(animal);
console.log(Object.getPrototypeOf(perro) === animal); // Salida: true
```

#### Ejemplo getPrototypeOf 2

```javascript
const gato = Object.create(animal);
console.log(Object.getPrototypeOf(gato) === animal); // Salida: true
```

### 2.6. Herencia Prototipal y Cadena de Prototipos

La herencia prototipal permite que un objeto herede propiedades y métodos de otro objeto. La cadena de prototipos es la secuencia de objetos que se siguen hasta encontrar una propiedad o método.

#### Ejemplo herencia 1

```javascript
const animal = {
  sonido: "Hace un sonido indefinido.",
};

const perro = Object.create(animal);
console.log(perro.sonido); // Salida: 'Hace un sonido indefinido.'
```

#### Ejemplo herencia 2

```javascript
const gato = Object.create(animal);
gato.sonido = "Miau";
console.log(gato.sonido); // Salida: 'Miau'
```

### 2.7. Herencia de Prototipos en Objetos Integrados

Los objetos integrados de JavaScript, como `Array` o `String`, también utilizan herencia de prototipos. Puedes agregar métodos personalizados a estos objetos integrados a través de su prototipo.

#### Ejemplo 1 Array prototype

```javascript
Array.prototype.duplicar = function () {
  return this.map((item) => item * 2);
};

const numeros = [1, 2, 3];
console.log(numeros.duplicar()); // [2, 4, 6]
```

> ⚠️ Extender prototipos nativos (`Array.prototype`, `String.prototype`, etc.) es una práctica **desaconsejada** en producción: puede causar conflictos con librerías externas o futuras versiones de JS. Se muestra aquí con fines didácticos.

#### Ejemplo 2 String prototype

```javascript
String.prototype.reversa = function () {
  return this.split("").reverse().join("");
};

const texto = "Hola";
console.log(texto.reversa()); // Salida: 'aloH'
```

## 3. POO usando Funciones Constructoras y el Operador `new`

### 3.1. Creación de Funciones Constructoras

Las funciones constructoras son la base de la POO en JavaScript. Puedes crear objetos utilizando funciones constructoras.

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const sara = new Persona("Sara", 40);
```

### 3.2. Definición de Propiedades y Métodos de Instancia

Dentro de una función constructora, puedes definir propiedades y métodos que serán específicos de cada instancia.

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`);
  };
}
```

### 3.3. El Prototipo en las Funciones Constructoras

Cada función constructora en JavaScript tiene una propiedad `prototype`, que es un objeto compartido por todas las instancias creadas a partir de esa función.

```javascript
function Animal(nombre) {
  this.nombre = nombre;
}

Animal.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`);
};
```

### 3.4. Herencia en Funciones Constructoras

Puedes lograr la herencia en JavaScript utilizando funciones constructoras y sus prototipos. Esto permite crear relaciones de herencia entre diferentes tipos de objetos.

```javascript
function Perro(nombre, raza) {
  Animal.call(this, nombre);
  this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;
```

Así, la explicación de lo que hace Animal.call(this, nombre) sería:

- Animal es una función constructora que crea instancias de objetos del tipo Animal. El primer parámetro this se refiere al contexto de la instancia actual que se está creando. En este caso, se refiere a la instancia de Perro que se está construyendo.

- nombre es un argumento que se pasa al constructor Animal. Esto se hace para establecer una propiedad específica de Animal en la instancia de Perro.

Cuando se llama a Animal.call(this, nombre), se ejecuta el constructor de Animal, y dentro de ese constructor, this se refiere a la instancia de Perro. Esto permite que el constructor de Animal establezca propiedades específicas de Animal en la instancia de Perro, como nombre.

En resumen, Animal.call(this, nombre) se utiliza para inicializar la parte de Perro que es común con Animal, estableciendo propiedades y ejecutando código del constructor Animal. Esto es fundamental para la implementación de la herencia en JavaScript utilizando funciones constructoras.

Por otra parte la explicación a las líneas de `Perro.prototype` serían:

1. `Perro.prototype = Object.create(Animal.prototype);`:

   En esta línea, estamos estableciendo el prototipo de `Perro` para que herede del prototipo de `Animal`. En otras palabras, estamos diciendo que el prototipo de `Perro` debe ser un objeto que herede las propiedades y métodos del prototipo de `Animal`. Esto se logra utilizando `Object.create(Animal.prototype)`.

   Cuando hacemos esto, el prototipo de `Perro` ahora contiene una copia del prototipo de `Animal`, lo que significa que las instancias de `Perro` heredarán todas las propiedades y métodos definidos en el prototipo de `Animal`. Esto establece una relación de herencia entre las dos funciones constructoras.

2. `Perro.prototype.constructor = Perro;`:

   La segunda línea es necesaria para corregir una consecuencia no deseada de la primera línea. Cuando estableces el prototipo de `Perro` usando `Object.create(Animal.prototype)`, el constructor original de `Perro` (que es `Perro`) se sobrescribe. Para solucionar esto, restauramos el constructor de `Perro` a su valor original.

   Esto es importante si más adelante deseas crear nuevas instancias de `Perro` utilizando `new Perro()`. El constructor se usa para crear instancias de objetos, y restaurarlo garantiza que las nuevas instancias sigan siendo instancias de `Perro`.

En resumen, estas dos líneas permiten que `Perro` herede propiedades y métodos de `Animal` y, al mismo tiempo, mantienen la coherencia de la construcción de nuevas instancias de `Perro`. Esta es una técnica común para implementar la herencia en JavaScript con funciones constructoras.

### 3.5. Métodos Estáticos

En JavaScript, las funciones constructoras no tienen una sintaxis nativa para definir métodos estáticos de la misma manera que las clases ES6. Sin embargo, puedes simular métodos estáticos agregándolos directamente a la propia función constructora. Un método estático es un método que está asociado con la función constructora en sí, en lugar de estar en las instancias individuales creadas a partir de esa función constructora.

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Método estático agregado directamente a la función constructora
Persona.obtenerDescripcion = function (persona) {
  return `${persona.nombre}, ${persona.edad} años de edad`;
};

const lucas = new Persona("Lucas", 23);
const descripcion = Persona.obtenerDescripcion(lucas);

console.log(descripcion); // Resultado: 'Lucas, 23 años de edad'
```

Hay que tener muy presente que los métodos estáticos no pueden acceder a las propiedades de las instancias directamente, ya que no están asociados con instancias individuales. Son útiles cuando deseas realizar una operación que esté relacionada con la función constructora en sí, pero no necesitas acceder a las propiedades de una instancia específica.

### 3.6. Getters y Setters

#### Usando Object.defineProperty()

Para implementar getters y setters en funciones constructoras en JavaScript se puede utilizar `Object.defineProperty`. Este enfoque te permite definir getters y setters de manera más detallada y controlada.

```javascript
function Persona(nombre, edad) {
  let _nombre = nombre; // Propiedad "privada" con let
  let _edad = edad; // Propiedad "privada" con let

  Object.defineProperty(this, "nombre", {
    get: function () {
      return _nombre;
    },
    set: function (nuevoNombre) {
      if (typeof nuevoNombre === "string") {
        _nombre = nuevoNombre;
      } else {
        console.error("El nombre debe ser una cadena de texto.");
      }
    },
  });

  Object.defineProperty(this, "edad", {
    get: function () {
      return _edad;
    },
    set: function (nuevaEdad) {
      if (typeof nuevaEdad === "number" && nuevaEdad >= 0) {
        _edad = nuevaEdad;
      } else {
        console.error(
          "La edad debe ser un número válido y no puede ser negativa."
        );
      }
    },
  });
}

const juan = new Persona("Juan", 30);

// Utilizar los getters
console.log(juan.nombre); // Resultado: 'Juan'
console.log(juan.edad); // Resultado: 30

// Utilizar los setters
juan.nombre = "María";
juan.edad = 25;

console.log(juan.nombre); // Resultado: 'María'
console.log(juan.edad); // Resultado: 25
```

#### Definiendo Getters y Setters en el propio Constructor

```javascript
function Persona(nombre, edad) {
  let _nombre = nombre; // Propiedad "privada" con let
  let _edad = edad; // Propiedad "privada" con let

  // Getter para obtener el nombre
  this.getNombre = function () {
    return _nombre;
  };

  // Setter para establecer el nombre
  this.setNombre = function (nuevoNombre) {
    if (typeof nuevoNombre === "string") {
      _nombre = nuevoNombre;
    } else {
      console.error("El nombre debe ser una cadena de texto.");
    }
  };

  // Getter para obtener la edad
  this.getEdad = function () {
    return _edad;
  };

  // Setter para establecer la edad
  this.setEdad = function (nuevaEdad) {
    if (typeof nuevaEdad === "number" && nuevaEdad >= 0) {
      _edad = nuevaEdad;
    } else {
      console.error(
        "La edad debe ser un número válido y no puede ser negativa."
      );
    }
  };
}

const juan = new Persona("Juan", 30);

// Utilizar los getters
console.log(juan.getNombre()); // Resultado: 'Juan'
console.log(juan.getEdad()); // Resultado: 30

// Utilizar los setters
juan.setNombre("María");
juan.setEdad(25);

console.log(juan.getNombre()); // Resultado: 'María'
console.log(juan.getEdad()); // Resultado: 25
```

## 4. POO usando Clases en ES6

A partir de ECMAScript 6, JavaScript introduce la sintaxis de clases, que es una forma más clara de crear objetos y definir métodos.

#### Ejemplo 1 Clases

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona1 = new Persona("Mario", 20);
persona1.saludar();
```

#### Ejemplo 2 Clases

```javascript
class Coche {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  conducir() {
    console.log(`Conduciendo un ${this.marca} ${this.modelo}.`);
  }
}

const coche1 = new Coche("Toyota", "Camry");
coche1.conducir();
```

### 4.1. Getters y Setters

Los getters y setters son métodos especiales que se utilizan para acceder y modificar propiedades de un objeto de manera controlada.

#### Ejemplo 1 Getters

```javascript
class Coche {
  constructor(marca) {
    this._marca = marca;
  }

  get marca() {
    return this._marca;
  }

  set marca(nuevaMarca) {
    if (nuevaMarca.length > 2) {
      this._marca = nuevaMarca;
    } else {
      console.error("La marca debe tener al menos 3 caracteres.");
    }
  }
}

const coche1 = new Coche("Toyota");
console.log(coche1.marca); // Salida: 'Toyota'
coche1.marca = "Ford"; // Cambio exitoso
```

#### Ejemplo 2 Setters

```javascript
const persona = {
  _nombre: "Isaías",
  get nombre() {
    return this._nombre;
  },
  set nombre(nuevoNombre) {
    if (nuevoNombre.length >= 3) {
      this._nombre = nuevoNombre;
    } else {
      console.error("El nombre debe tener al menos 3 caracteres.");
    }
  },
};

console.log(persona.nombre); // Salida: 'Isaías'
persona.nombre = "A"; // Error
```

### 4.2. Métodos Estáticos

Los métodos estáticos son métodos que pertenecen a la clase en lugar de las instancias. Se pueden llamar en la clase en sí, no en una instancia.

#### Ejemplo 1 static method

```javascript
class Utilidades {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Utilidades.sumar(2, 3)); // Salida: 5
```

#### Ejemplo 2 static method

```javascript
class Matematicas {
  static cuadrado(numero) {
    return numero * numero;
  }
}

console.log(Matematicas.cuadrado(5)); // Salida: 25
```

### 4.2b. Bloques estáticos (ES2022)

Los bloques `static {}` permiten ejecutar lógica de inicialización compleja para la clase, más allá de simples asignaciones:

```javascript
class Configuracion {
  static #datosPrivados = new Map();

  // Bloque estático: se ejecuta una sola vez cuando la clase se define
  static {
    this.#datosPrivados.set("version", "2.0");
    this.#datosPrivados.set("entorno", "producción");
    console.log("Clase Configuracion inicializada");
  }

  static obtener(clave) {
    return this.#datosPrivados.get(clave);
  }
}

console.log(Configuracion.obtener("version")); // "2.0"
```

### 4.3. Herencia Entre Clases

#### Ejemplo de herencia entre `Animal` y `Perro`

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }
}

const miPerro = new Perro("Max", "Labrador");
console.log(miPerro.nombre); // Salida: 'Max'
```

#### Ejemplo de herencia entre `Vehiculo` y `Coche`

```javascript
class Vehiculo {
  constructor(marca) {
    this.marca = marca;
  }
}

class Coche extends Vehiculo {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }
}

const miCoche = new Coche("Toyota", "Camry");
console.log(miCoche.marca); // Salida: 'Toyota'
```

### 4.4. Encapsulación

#### Propiedades Protegidas

En JavaScript, las propiedades protegidas y los métodos son una técnica utilizada para encapsular datos y funcionalidades de una manera que permita el acceso controlado desde dentro y fuera de una clase. Aunque JavaScript no admite la visibilidad real de propiedades privadas como en otros lenguajes, puedes simular propiedades protegidas y métodos utilizando una convención de nomenclatura y acceso controlado.

Las propiedades protegidas son propiedades que se denotan con una convención de nomenclatura específica para indicar que no deben ser accedidas directamente desde fuera de la clase. La convención típica es usar un guion bajo (`_`) al principio del nombre de la propiedad.

##### Sintaxis de propiedades protegidas

```javascript
class MiClase {
  constructor() {
    this._propiedadProtegida = valor;
  }
}
```

###### Ejemplo de propiedad protegida

```javascript
class Coche {
  constructor(marca) {
    this._marca = marca;
  }

  obtenerMarca() {
    return this._marca;
  }
}
```

#### Métodos de Clase Protegidos

Los métodos de clase protegidos son funciones que se denotan de manera similar con una convención de nomenclatura específica utilizando un guion bajo al principio del nombre del método. Esto indica que el método no debe ser llamado directamente desde fuera de la clase.

##### Sintaxis de método protegido

```javascript
class MiClase {
  _miMetodoProtegido() {
    // Implementación del método protegido...
  }
}
```

##### Ejemplo de método protegido

```javascript
class Persona {
  constructor(nombre) {
    this._nombre = nombre;
  }

  _saludar() {
    console.log(`Hola, soy ${this._nombre}.`);
  }

  presentarse() {
    this._saludar();
  }
}
```

#### Métodos de Clase Privados

Los métodos de clase privados son funciones que solo se pueden llamar desde dentro de la clase. Proporcionan una forma de ocultar la implementación de cierta funcionalidad y mejorar la modularidad del código.

##### Sintaxis de método privado

Para definir un método de clase privado en una clase, se utiliza la siguiente sintaxis:

```javascript
class MiClase {
  #miMetodoPrivado() {
    // Implementación del método privado...
  }
  // Resto de la clase...
}
```

##### Ejemplo de método privado

```javascript
class Persona {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  #saludar() {
    console.log(`Hola, soy ${this.#nombre}.`);
  }

  presentarse() {
    this.#saludar();
  }
}
```

### 4.5. Ventajas de Propiedades Protegidas y Métodos de Clase Protegidos

- **Encapsulación:** Las propiedades protegidas y los métodos permiten ocultar detalles de implementación y proporcionan una interfaz clara y segura para interactuar con objetos.

- **Prevención de Errores:** Evitan la manipulación accidental de propiedades o la llamada no autorizada a métodos, reduciendo la probabilidad de errores en el código.

- **Mejora de la Modularidad:** Facilitan la construcción de clases altamente modularizadas y promueven una estructura de código más limpia y mantenible.

- **Seguridad:** Los datos sensibles y la lógica interna se protegen de accesos no autorizados.

- **Facilita el Mantenimiento:** Las propiedades protegidas y los métodos de clase protegidos hacen que sea más fácil cambiar la implementación interna sin afectar el código externo que utiliza la clase.

Aunque JavaScript no admite la visibilidad real de propiedades privadas, las propiedades protegidas y los métodos de clase protegidos son una técnica efectiva para controlar el acceso a datos y funcionalidades dentro de una clase. Utiliza esta convención de nomenclatura para indicar que ciertas propiedades y métodos no deben ser accedidos directamente desde fuera de la clase.

### 4.6. Métodos de Encadenamiento

Los métodos de encadenamiento permiten llamar a varios métodos en una sola línea, lo que mejora la legibilidad del código.

#### Ejemplo de encadenamiento con `Calculadora`

```javascript
class Calculadora {
  constructor(valor = 0) {
    this.valor = valor;
  }

  sumar(valor) {
    this.valor += valor;
    return this;
  }

  restar(valor) {
    this.valor -= valor;
    return this;
  }

  obtenerResultado() {
    return this.valor;
  }
}

const resultado = new Calculadora()
  .sumar(5)
  .restar(3)
  .sumar(10)
  .obtenerResultado(); // El resultado es 12
console.log(resultado); // Salida: 12
```

#### Ejemplo de encadenamiento con `Pedido`

```javascript
class Pedido {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
    return this;
  }

  calcularTotal() {
    const total = this.productos.reduce(
      (acc, producto) => acc + producto.precio,
      0
    );
    return total;
  }
}

const producto1 = { nombre: "Camiseta", precio: 20 };
const producto2 = { nombre: "Pantalón", precio: 30 };

const total = new Pedido()
  .agregarProducto(producto1)
  .agregarProducto(producto2)
  .calcularTotal();

console.log(total); // Salida: 50
```

---

[Volver al índice general](../INDICE_GENERAL.md)
