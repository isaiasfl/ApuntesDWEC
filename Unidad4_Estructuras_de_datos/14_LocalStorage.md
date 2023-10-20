# Uso de `localStorage` en JavaScript 📝 🖥️

`localStorage` es una característica de JavaScript que permite almacenar datos de forma persistente en el navegador web. Puede ser útil para guardar información localmente en la máquina del usuario, como preferencias, configuraciones o datos de sesión.

- [Uso de `localStorage` en JavaScript 📝 🖥️](#uso-de-localstorage-en-javascript--️)
  - [1. Introducción a `localStorage`](#1-introducción-a-localstorage)
  - [2. Almacenar y Obtener Datos](#2-almacenar-y-obtener-datos)
  - [3. Eliminar Datos](#3-eliminar-datos)
  - [4. Trabajar con Objetos](#4-trabajar-con-objetos)
  - [5. Otros métodos](#5-otros-métodos)
    - [a. `key(index)`](#a-keyindex)
    - [b. `length`](#b-length)
    - [c. `hasOwnProperty(key)`](#c-hasownpropertykey)
    - [d. `propertyIsEnumerable(key)`](#d-propertyisenumerablekey)
  - [6. Usos de `localStorage`](#6-usos-de-localstorage)

---

## 1. Introducción a `localStorage`

`localStorage` es un almacén de clave-valor que permite almacenar datos en el navegador de forma persistente. Los datos almacenados en `localStorage` no se eliminan después de cerrar el navegador y están disponibles incluso en sesiones posteriores.

## 2. Almacenar y Obtener Datos

Para almacenar datos en `localStorage`, utiliza el método `setItem(key, value)` y para obtenerlos utiliza `getItem(key)`.

```javascript
// Almacenar un valor en localStorage
localStorage.setItem("nombre", "Isaías");

// Obtener un valor de localStorage
const nombre = localStorage.getItem("nombre");
console.log(nombre); // Imprimirá 'Isaías'
```

## 3. Eliminar Datos

Puedes eliminar un elemento de `localStorage` usando `removeItem(key)` o borrar todos los datos con `clear()`.

```javascript
// Eliminar un elemento de localStorage
localStorage.removeItem("nombre");

// Borrar todos los datos de localStorage
localStorage.clear();
```

## 4. Trabajar con Objetos

`localStorage` almacena datos como cadenas de texto. Si deseas almacenar objetos, debes **_convertirlos a cadenas JSON antes de guardarlos_** y analizarlos después de recuperarlos.

```javascript
// Almacenar un objeto en localStorage
const usuario = { nombre: "Isaías", iduser: 30 };
localStorage.setItem("usuario", JSON.stringify(usuario));

// Obtener y analizar un objeto desde localStorage
const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioGuardado.nombre); // Imprimirá 'Isaías'
```

## 5. Otros métodos

### a. `key(index)`

Devuelve la clave en la posición especificada.

```javascript
const primeraClave = localStorage.key(0);
console.log(primeraClave); // Imprime la primera clave almacenada
```

### b. `length`

Devuelve la cantidad de elementos almacenados en `localStorage`.

```javascript
const cantidadElementos = localStorage.length;
console.log(cantidadElementos); // Imprime la cantidad de elementos
```

### c. `hasOwnProperty(key)`

Comprueba si una clave específica existe en `localStorage`.

```javascript
const existe = localStorage.hasOwnProperty("nombre");
console.log(existe); // Devuelve true si 'nombre' existe
```

### d. `propertyIsEnumerable(key)`

Comprueba si una clave específica es enumerable, es decir si se puede recorrer con un bucle for.

```javascript
const enumerable = localStorage.propertyIsEnumerable("nombre");
console.log(enumerable); // Devuelve true si 'nombre' es enumerable
```

## 6. Usos de `localStorage`

`localStorage` se utiliza comúnmente para:

1. **Almacenar configuraciones del usuario:**

```javascript
localStorage.setItem("idioma", "es");
```

2. **Guardar datos de inicio de sesión:**

```javascript
localStorage.setItem("token", "mi_token_secreto");
```

3. **Mantener preferencias del usuario:**

   ```javascript
   localStorage.setItem("tema", "oscuro");
   ```

4. **Almacenar datos de formularios parcialmente completados:**

   ```javascript
   localStorage.setItem("formulario", JSON.stringify(formularioData));
   ```

5. **Implementar un carrito de compras en una tienda en línea:**

   ```javascript
   const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
   ```

6. **Almacenar datos de caché para una aplicación web:**

   ```javascript
   const cacheData = localStorage.getItem("cacheData");
   if (!cacheData) {
     // Realizar una solicitud HTTP para obtener datos y luego almacenarlos en localStorage
   }
   ```

7. **Guardar preferencias de usuario para aplicaciones web:**

   ```javascript
   localStorage.setItem("preferencias", JSON.stringify(preferenciasUsuario));
   ```
