# **Capítulo 10. Contenido 📝** 🖥️

- [**Capítulo 10. Contenido 📝** 🖥️](#capítulo-10-contenido--️)
- [10. Estructura de Datos `Map`.](#10-estructura-de-datos-map)
  - [10.1 Introducción a `Map`](#101-introducción-a-map)
    - [Creación de un `Map`](#creación-de-un-map)
  - [10.2 Métodos Disponibles en `Map`](#102-métodos-disponibles-en-map)
    - [1. `set(key, value)`](#1-setkey-value)
    - [2. `get(key)`](#2-getkey)
    - [3. `has(key)`](#3-haskey)
    - [4. `delete(key)`](#4-deletekey)
    - [5. `size`](#5-size)
    - [6. `keys()`](#6-keys)
    - [7. `values()`](#7-values)
    - [8. `entries()`](#8-entries)
    - [9. `forEach(callback)`](#9-foreachcallback)
  - [10.3 Conversión de `Map` a Otras Estructuras de Datos](#103-conversión-de-map-a-otras-estructuras-de-datos)
    - [1. `Map` a Array de Arrays](#1-map-a-array-de-arrays)
    - [2. `Map` a Array de Objetos](#2-map-a-array-de-objetos)
    - [3. `Map` a Objeto](#3-map-a-objeto)
  - [10.4 Ejemplos del uso de Map.](#104-ejemplos-del-uso-de-map)
    - [1. Almacenar Datos de Configuración](#1-almacenar-datos-de-configuración)
    - [2. Almacenar Datos de Traducción](#2-almacenar-datos-de-traducción)
    - [3. Manejar Datos de Formularios Dinámicos](#3-manejar-datos-de-formularios-dinámicos)
    - [4. Cache de Datos](#4-cache-de-datos)
    - [5. Almacenamiento de Datos Relacionados](#5-almacenamiento-de-datos-relacionados)
    - [6. Enrutamiento en Aplicaciones de Una Página (SPA)](#6-enrutamiento-en-aplicaciones-de-una-página-spa)
    - [7. Manejar Eventos y Escuchadores](#7-manejar-eventos-y-escuchadores)

---

# 10. Estructura de Datos `Map`.

## 10.1 Introducción a `Map`

`Map` es una estructura de datos en JavaScript que permite almacenar pares clave-valor, donde cada clave está asociada a un valor. A diferencia de los objetos (`Object`), las claves en un `Map` pueden ser de cualquier tipo, incluidos objetos y funciones. Además, `Map` mantiene el orden de inserción de los elementos, lo que es útil en muchas situaciones.

### Creación de un `Map`

Puedes crear un `Map` vacío de la siguiente manera:

```javascript
const miMapa = new Map();
```

## 10.2 Métodos Disponibles en `Map`

### 1. `set(key, value)`

Añade un par clave-valor al `Map`.

```javascript
const miMapa = new Map();
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);
```

### 2. `get(key)`

Obtiene el valor asociado a una clave específica.

```javascript
console.log(miMapa.get("nombre")); // Imprime 'Juan'
```

### 3. `has(key)`

Comprueba si una clave existe en el `Map`.

```javascript
console.log(miMapa.has("nombre")); // Devuelve true
console.log(miMapa.has("ciudad")); // Devuelve false
```

### 4. `delete(key)`

Elimina un par clave-valor del `Map`.

```javascript
miMapa.delete("nombre");
console.log(miMapa.has("nombre")); // Devuelve false
```

### 5. `size`

Obtiene el número de elementos en el `Map`.

```javascript
console.log(miMapa.size); // Devuelve 1
```

### 6. `keys()`

Obtiene un iterador de las claves del `Map`.

```javascript
for (const clave of miMapa.keys()) {
  console.log(clave);
}
```

### 7. `values()`

Obtiene un iterador de los valores en el `Map`.

```javascript
for (const valor of miMapa.values()) {
  console.log(valor);
}
```

### 8. `entries()`

Obtiene un iterador de pares clave-valor en el `Map`.

```javascript
for (const [clave, valor] of miMapa.entries()) {
  console.log(`${clave}: ${valor}`);
}
```

### 9. `forEach(callback)`

Itera sobre cada par clave-valor y ejecuta una función de devolución de llamada.

```javascript
miMapa.forEach((valor, clave) => {
  console.log(`${clave}: ${valor}`);
});
```

## 10.3 Conversión de `Map` a Otras Estructuras de Datos

### 1. `Map` a Array de Arrays

Puedes convertir un `Map` en un array de arrays utilizando el operador de propagación (`...`).

```javascript
const miMapa = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
]);

const arrayDeArrays = [...miMapa];
console.log(arrayDeArrays); // Devuelve [['nombre', 'Juan'], ['edad', 30]]
```

### 2. `Map` a Array de Objetos

Puedes convertir un `Map` en un array de objetos utilizando `Array.from()` y `map()`.

```javascript
const miMapa = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
]);

const arrayDeObjetos = Array.from(miMapa, ([clave, valor]) => ({
  clave,
  valor,
}));
console.log(arrayDeObjetos); // Devuelve [{ clave: 'nombre', valor: 'Juan' }, { clave: 'edad', valor: 30 }]
```

### 3. `Map` a Objeto

Para convertir un `Map` en un objeto, puedes utilizar el constructor `Object.fromEntries()` (ES2019 o superior).

```javascript
const miMapa = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
]);

const miObjeto = Object.fromEntries(miMapa);
console.log(miObjeto); // Devuelve { nombre: 'Juan', edad: 30 }
```

## 10.4 Ejemplos del uso de Map.

### 1. Almacenar Datos de Configuración

Puedes utilizar un `Map` para almacenar configuraciones o ajustes de tu aplicación web de manera estructurada:

```javascript
const config = new Map();

config.set("colorFondo", "azul");
config.set("idioma", "español");

console.log(config.get("colorFondo")); // Devuelve 'azul'
```

### 2. Almacenar Datos de Traducción

En aplicaciones multilingües, puedes usar un `Map` para almacenar traducciones:

```javascript
const traducciones = new Map();

traducciones.set(
  "en",
  new Map([
    ["hello", "Hello"],
    ["world", "World"],
  ])
);

traducciones.set(
  "es",
  new Map([
    ["hello", "Hola"],
    ["world", "Mundo"],
  ])
);

console.log(traducciones.get("en").get("hello")); // Devuelve 'Hello'
```

### 3. Manejar Datos de Formularios Dinámicos

Cuando trabajas con formularios dinámicos que requieren almacenar valores asociados a elementos específicos, un `Map` puede ser útil:

```javascript
const formularioDatos = new Map();

formularioDatos.set(elementoInput, "valor introducido");
formularioDatos.set(elementoCheckbox, true);
```

### 4. Cache de Datos

Un `Map` puede usarse para implementar una caché de datos en una aplicación web para mejorar el rendimiento:

```javascript
const cache = new Map();

function obtenerDatosDesdeAPI(id) {
  if (cache.has(id)) {
    return Promise.resolve(cache.get(id));
  } else {
    return fetch(`https://api.com/datos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        cache.set(id, data);
        return data;
      });
  }
}
```

### 5. Almacenamiento de Datos Relacionados

Puedes usar un `Map` para almacenar datos relacionados, como información de usuarios y sus preferencias:

```javascript
const usuarios = new Map();

const usuario1 = { nombre: "Juan", edad: 30 };
const usuario2 = { nombre: "María", edad: 25 };

usuarios.set(usuario1, { idioma: "español", tema: "oscuro" });
usuarios.set(usuario2, { idioma: "inglés", tema: "claro" });
```

### 6. Enrutamiento en Aplicaciones de Una Página (SPA)

En aplicaciones web de una página (SPA), puedes usar un `Map` para mapear rutas a componentes o vistas:

```javascript
const rutaComponentes = new Map();

rutaComponentes.set("/inicio", InicioComponente);
rutaComponentes.set("/perfil", PerfilComponente);
```

### 7. Manejar Eventos y Escuchadores

Puedes usar `Map` para administrar escuchadores de eventos en elementos DOM o para implementar sistemas de pub/sub (publicación/suscripción):

```javascript
const eventos = new Map();

eventos.set("click", [escuchador1, escuchador2]);
eventos.set("input", [escuchador3]);

// Agregar un nuevo escuchador al evento 'click' .
eventos.get("click").push(escuchador4);
```

---

[Volver al índice general](../INDICE_GENERAL.md)
