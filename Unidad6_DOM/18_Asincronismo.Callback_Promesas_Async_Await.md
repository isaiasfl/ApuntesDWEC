# Asincronismo. CallBacks, Promesas y Async/Await 📝 🖥️

- [Asincronismo. CallBacks, Promesas y Async/Await 📝 🖥️](#asincronismo-callbacks-promesas-y-asyncawait--️)
  - [1. Sincronismo/Asincronismo en JavaScript](#1-sincronismoasincronismo-en-javascript)
    - [Operaciones Síncronas:](#operaciones-síncronas)
    - [Operaciones Asíncronas:](#operaciones-asíncronas)
  - [2. Los Callbacks](#2-los-callbacks)
    - [2.1 Callback Básico](#21-callback-básico)
    - [2.2 Callback con Parámetros](#22-callback-con-parámetros)
    - [2.3. Callbacks en Eventos](#23-callbacks-en-eventos)
    - [2.4 Callback de Temporizador](#24-callback-de-temporizador)
    - [2.5 Callback Hell: El Desafío de los Callbacks Anidados](#25-callback-hell-el-desafío-de-los-callbacks-anidados)
  - [3. Las Promesas](#3-las-promesas)
    - [3.1 Creación de una Promesa](#31-creación-de-una-promesa)
    - [3.2 Resolución y Rechazo de Promesas](#32-resolución-y-rechazo-de-promesas)
      - [1. Método `then`:](#1-método-then)
      - [2. Método `catch`:](#2-método-catch)
      - [3. Método `finally`:](#3-método-finally)
    - [3.3 Encadenamiento de Promesas](#33-encadenamiento-de-promesas)
    - [3.4 Manejo de Errores con Promesas](#34-manejo-de-errores-con-promesas)
    - [3.5 Promesas en Paralelo](#35-promesas-en-paralelo)
  - [4. Async/Await: Simplificando el Uso de Promesas](#4-asyncawait-simplificando-el-uso-de-promesas)
    - [Otros Ejemplos:](#otros-ejemplos)
      - [1. Uso Básico:](#1-uso-básico)
      - [2. Manejo de Errores con Try/Catch:](#2-manejo-de-errores-con-trycatch)
      - [3. Múltiples Operaciones Asíncronas:](#3-múltiples-operaciones-asíncronas)
      - [4. Uso de Async/Await con Fetch:](#4-uso-de-asyncawait-con-fetch)
  - [5. Bibliografía:](#5-bibliografía)

## 1. Sincronismo/Asincronismo en JavaScript

En programación, el `sincronismo` y el `asincronismo` se refieren a la forma en que se ejecutan las tareas. En el **_sincronismo_**, las tareas se ejecutan una tras otra, en el orden en que se declaran. En el **_asincronismo_**, las tareas se pueden ejecutar al mismo tiempo, o en cualquier orden.

En JavaScript, el sincronismo es el modo de ejecución predeterminado. Cuando se ejecuta una tarea sincrónica, el navegador web detiene la ejecución del código hasta que la tarea se complete. Esto puede provocar problemas de rendimiento, ya que el navegador web puede estar esperando a que se complete una tarea que no es crítica para el flujo de la aplicación.

El asincronismo se puede utilizar para evitar estos problemas de rendimiento. Cuando se ejecuta una tarea asíncrona, el navegador web continúa ejecutando el código siguiente, sin esperar a que la tarea se complete. La tarea asíncrona se ejecuta en segundo plano y, cuando se completa, se notifica al navegador web.

### Operaciones Síncronas:

- En las operaciones síncronas, cada instrucción espera a que la instrucción anterior se complete antes de ejecutarse.
- El flujo de ejecución sigue una secuencia lineal.
- Las operaciones bloquean la ejecución del código hasta que se resuelven.

_Ejemplo síncrono:_

```javascript
console.log("Inicio");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("Fin");
```

En este ejemplo, cada número se imprimirá en orden, uno después del otro, antes de imprimir "Fin".

### Operaciones Asíncronas:

- En las operaciones asíncronas, el código no espera a que una operación se complete y continúa ejecutándose.
- Se utilizan callbacks, Promesas y async/await para manejar el resultado de las operaciones asíncronas.
- Permite realizar tareas en segundo plano sin bloquear la ejecución del código.

_Ejemplo Asíncrono con Callback:_

```javascript
console.log("Inicio");
setTimeout(() => {
  console.log("Hola Isaías. Ejecutando después de 2 segundos");
}, 2000);
console.log("Fin");
```

En este ejemplo, "Inicio" se imprimirá, luego "Fin", y finalmente, después de 2 segundos, se imprimirá "Hola Isaías. Ejecutando después de 2 segundos".

`JavaScript proporciona varios mecanismos para gestionar el asincronismo en la versión ES6 y posteriores. Los más importantes serían los CallBacks, las promesas, el Async/Await, los Event Listeners, Timers. Vamos a ver algunos de los que acabo de mencionar.`

## 2. Los Callbacks

Los callbacks en JavaScript son como piezas de un rompecabezas que encajan perfectamente en el mundo asincrónico. Son funciones que se ejecutan después de que se completa una tarea. En lugar de bloquear el flujo de ejecución, los callbacks permiten que tu código continúe haciendo otras cosas mientras espera que una tarea finalice.

### 2.1 Callback Básico

Lo primero que tenemos que recordar es que las funciones son `objetos` (object) para Javascript.

Dicho lo cual, supongamos que deseamos realizar una tarea que puede tardar en el tiempo y luego ejecutar otra función cuando termine. Aquí tenemos un ejemplo:

```javascript
function hacerTarea(callback) {
  console.log("Realizando tarea...");
  setTimeout(function () {
    console.log("Tarea completada.");
    callback();
  }, 2000);
}
/* Al parámetro de hacerTarea lo podemos llamar como queramos, pero es una buena práctica usar la palabra callback 
para indicar el tipo de parámetro que se le tiene que pasar, una función callback.
 */

function miCallback() {
  console.log("El callback ha sido ejecutado.");
}

hacerTarea(miCallback);
```

En este ejemplo, la función `hacerTarea` simula una tarea demorada en el tiempo con un setTimeout y luego llama al `callback` cuando está lista. Esto permite una ejecución no bloqueante.

### 2.2 Callback con Parámetros

Los callbacks también pueden recibir argumentos. Imagina que necesitas realizar un cálculo asincrónico y luego procesar el resultado:

```javascript
function operacionAsincrona(valor, callback) {
  setTimeout(function () {
    const resultado = valor * 2;
    callback(resultado);
  }, 1000);
}

function procesarResultado(resultado) {
  console.log(`El resultado es: ${resultado}`);
}

operacionAsincrona(5, procesarResultado);
```

Aquí, `operacionAsincrona` toma un valor y un `callback`, realiza una operación y luego pasa el resultado al `callback`. Esto como puedes comprobar es bastante versátil.

### 2.3. Callbacks en Eventos

Los callbacks son excelentes para manejar eventos. Supongamos que deseas detectar cuándo un botón se hace clic:

```javascript
const boton = document.getElementById("miBoton");

function clicCallback() {
  console.log("El botón ha sido clickeado.");
}

boton.addEventListener("click", clicCallback);
```

Al hacer clic en el botón, se llama al `clicCallback`. Esto es útil para interactuar con el usuario de manera asincrónica.

### 2.4 Callback de Temporizador

Un uso común de los callbacks es con temporizadores como hemos visto antes. Por ejemplo:

```javascript
function miCallback() {
  console.log("El temporizador ha terminado.");
}

setTimeout(miCallback, 3000);
```

Aquí, `setTimeout` espera tres segundos y luego ejecuta el `callback`. Ideal para crear animaciones y tareas programadas.

### 2.5 Callback Hell: El Desafío de los Callbacks Anidados

Sin embargo, con una programación excesiva de callbacks anidados, puedes entrar en lo que se conoce como "callback hell". Escribir y mantener código así puede ser una pesadilla:

<p align="center">
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--c0aEZX7m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b8euo2n7twvgh3dbuatd.jpeg" alt="Descripción de la imagen" width="300" />
</p>

```javascript
function nivelUno(callbackUno) {
  console.log("Nivel 1");
  setTimeout(() => {
    callbackUno();
  }, 1000);
}

function nivelDos(callbackDos) {
  console.log("Nivel 2");
  setTimeout(() => {
    callbackDos();
  }, 1000);
}

function nivelTres(callbackTres) {
  console.log("Nivel 3");
  setTimeout(() => {
    callbackTres();
  }, 1000);
}

function nivelCuatro() {
  console.log("Nivel 4");
}

// Uso de las funciones de devolución de llamada anidadas
nivelUno(() => {
  nivelDos(() => {
    nivelTres(() => {
      nivelCuatro();
    });
  });
});
```

Si bien es cierto que actualmente los programadores no solemos aplicar este tipo de gestión funcional, lo que está claro es que este código puede volverse difícil de mantener. ¿La solución? Promesas.

## 3. Las Promesas

Las Promesas son un patrón de programación que simplifica la lógica de manejo de tareas asincrónicas en JavaScript. Proporcionan una forma más estructurada y legible para trabajar con operaciones que pueden demorar, como solicitudes de red o lectura/escritura de archivos.

<p align="center">
  <img src="https://lenguajejs.com/javascript/asincronia/promesas/promises.png" alt="Promesas" width="400" />
</p>

### 3.1 Creación de una Promesa

Para crear una Promesa, utiliza el constructor `Promise`. Una Promesa tiene dos estados: pendiente **_(pending)_** o resuelta **_(fulfilled)_**. También tiene el estado **_(Reject)_** que es cuando no se puede llevar a cabo una promesa y es por tanto rechazada.

Así los tres estados detalladamente serían:

- **pending:** este estado pendiente se da cuando no hemos obtenido respuesta a la solicitud hecha por la promesa.
- **fulfilled:** una promesa pasa del estado pending al fulfilled mediante el comando resolve. Este estado se da cuando hemos obtenido una respuesta satisfactoria a la solicitud.
- **rejected:** este estado se da, a través del comando reject, cuando obtenemos una respuesta negativa a la solicitud que ha hecho la promesa.

Recuerdo que `No obtener una respuesta` significaría estar en estado _pending_.

Aquí expongo un ejemplo básico de promesa usando `Promise` obviamente para su construcción.

```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Simula una operación asincrónica
  setTimeout(() => {
    const exito = true; // Cambia a false para simular un rechazo
    if (exito) {
      resolve("La Promesa se ha cumplido.");
    } else {
      reject("La Promesa ha sido rechazada.");
    }
  }, 2000);
});
```

Por convenio se utilizan como parámetros los nombres `resolve` y `reject`. Conviene seguir usando dichos nombres a pesar de que podemos colocar lo que deseemos.

### 3.2 Resolución y Rechazo de Promesas

<p align="center">
  <img src="https://keepcoding.io/wp-content/uploads/2022/10/Captura-de-Pantalla-2022-10-26-a-las-5.12.48-p.m..png" alt="Promesas" width="300" />
</p>

Como hemos visto, en JavaScript, las Promesas son un objeto que representa el resultado eventual (éxito o fracaso) de una operación asíncrona. Las Promesas tienen varios métodos para manejar el flujo de ejecución y los resultados. Entre ellos, los más comunes son `then`, `catch` y `finally`. Aquí está una explicación de cada uno:

#### 1. Método `then`:

El método `then` se utiliza para manejar el resultado exitoso de una Promesa. Toma una función de devolución de llamada como argumento que se ejecutará cuando la Promesa se resuelva correctamente. La función de devolución de llamada recibe el valor resultante de la Promesa.

```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Operación asíncrona exitosa
  resolve("¡Éxito!");
});

miPromesa.then((resultado) => {
  console.log("Resultado:", resultado); // Imprimirá '¡Éxito!'
});
```

#### 2. Método `catch`:

El método `catch` se utiliza para manejar el rechazo de una Promesa. Toma una función de devolución de llamada como argumento que se ejecutará cuando la Promesa se rechace (cuando ocurra un error). La función de devolución de llamada recibe el motivo del rechazo.

```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Operación asíncrona que falla
  reject("¡Error!");
});

miPromesa.catch((error) => {
  console.error("Error:", error); // Imprimirá '¡Error!'
});
```

#### 3. Método `finally`:

El método `finally` se utiliza para agregar lógica que se ejecutará sin importar si la Promesa se resuelve o se rechaza. Es útil para realizar tareas que deben ocurrir sin importar el resultado de la Promesa, como limpiar recursos o ejecutar código de finalización.

```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Operación asíncrona que podría resolver o rechazar
  resolve("¡Éxito!");
});

miPromesa
  .then((resultado) => {
    console.log("Resultado:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Fin de la operación, independientemente del resultado.");
  });
```

En este ejemplo, el bloque `finally` se ejecutará siempre, independientemente de si la Promesa se resuelve o se rechaza.

Estos métodos permiten estructurar y manejar de manera más efectiva el flujo de ejecución y los errores al trabajar con Promesas en JavaScript.

```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Simula una operación asincrónica
  setTimeout(() => {
    const exito = true; // Cambia a false para simular un rechazo
    if (exito) {
      resolve("La Promesa se ha cumplido.");
    } else {
      reject("La Promesa ha sido rechazada.");
    }
  }, 2000);
});

miPromesa
  .then((resultado) => {
    console.log("Éxito:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### 3.3 Encadenamiento de Promesas

Un beneficio clave de las Promesas es que puedes encadenar múltiples operaciones asincrónicas en secuencia. Esto mejora la legibilidad del código:

```javascript
realizarTarea1()
  .then((resultado1) => realizarTarea2(resultado1))
  .then((resultado2) => realizarTarea3(resultado2))
  .then((resultado3) => {
    console.log("Todas las tareas han sido completadas.");
  })
  .catch((error) => {
    console.error("Algo salió mal:", error);
  });
```

### 3.4 Manejo de Errores con Promesas

El manejo de errores es esencial. Como ya he comentado podemos utilizar `catch` al final de una cadena de Promesas para capturar errores en cualquier parte de la secuencia:

```javascript
realizarTarea1()
  .then((resultado1) => realizarTarea2(resultado1))
  .then((resultado2) => realizarTarea3(resultado2))
  .catch((error) => {
    console.error("Algo salió mal:", error);
  });
```

### 3.5 Promesas en Paralelo

A menudo, necesitas realizar múltiples operaciones asincrónicas en paralelo y esperar a que todas se completen. Utiliza `Promise.all` para lograrlo:

```javascript
const promesa1 = hacerAlgoAsincrono1();
const promesa2 = hacerAlgoAsincrono2();
const promesa3 = hacerAlgoAsincrono3();

Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log("Todas las tareas han sido completadas:", resultados);
  })
  .catch((error) => {
    console.error("Algo salió mal:", error);
  });
```

## 4. Async/Await: Simplificando el Uso de Promesas

`async/await` es una característica introducida en ECMAScript 2017 (también conocido como ES8) que simplifica la escritura y gestión del código asíncrono en JavaScript. Permite escribir código asíncrono de manera más similar a código síncrono, haciendo que sea más legible y fácil de entender.

```javascript
async function realizarTareas() {
  try {
    const resultado1 = await realizarTarea1();
    const resultado2 = await realizarTarea2(resultado1);
    const resultado3 = await realizarTarea3(resultado2);
    console.log("Todas las tareas han sido completadas.");
  } catch (error) {
    console.error("Algo salió mal:", error);
  }
}

realizarTareas();
```

`await` pausa la ejecución hasta que la Promesa se resuelva o se rechace.

### Otros Ejemplos:

#### 1. Uso Básico:

```javascript
// Función asíncrona con async
async function obtenerDatos() {
  // Operación asíncrona, por ejemplo, una Promesa
  const resultado = await new Promise((resolve) => {
    setTimeout(() => resolve("Datos obtenidos"), 1000);
  });

  console.log(resultado);
}

// Llamada a la función asíncrona
obtenerDatos();
```

En este ejemplo, `await` se utiliza dentro de una función asíncrona para esperar que la Promesa se resuelva antes de continuar con la ejecución del código. Esto hace que el código sea más legible y se asemeje a la ejecución síncrona.

#### 2. Manejo de Errores con Try/Catch:

```javascript
async function obtenerDatos() {
  try {
    const resultado = await new Promise((resolve, reject) => {
      // Simular un error
      setTimeout(() => reject("Error al obtener datos"), 1000);
    });

    console.log(resultado);
  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerDatos();
```

`try/catch` se utiliza para manejar errores de manera más eficiente en código asíncrono.

#### 3. Múltiples Operaciones Asíncronas:

```javascript
async function operacionCompleja() {
  try {
    const resultado1 = await obtenerDatos1();
    console.log(resultado1);

    const resultado2 = await obtenerDatos2();
    console.log(resultado2);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function obtenerDatos1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Datos de la operación 1"), 1000);
  });
}

async function obtenerDatos2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Datos de la operación 2"), 1000);
  });
}

operacionCompleja();
```

En este ejemplo, se muestran dos funciones asíncronas (`obtenerDatos1` y `obtenerDatos2`) que se pueden llamar de manera secuencial dentro de una función principal (`operacionCompleja`) utilizando `await`.

#### 4. Uso de Async/Await con Fetch:

```javascript
async function obtenerDatosDesdeAPI() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos");
    }

    const datos = await response.json();
    console.log("Datos desde la API:", datos);
  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerDatosDesdeAPI();
```

En este ejemplo, `fetch` se utiliza junto con `await` para realizar una solicitud HTTP y manejar los datos resultantes de manera asincrónica.

## 5. Bibliografía:

1. Flanagan, D. (2011). JavaScript: The Definitive Guide. O'Reilly Media.
2. Resig, J., Bibeault, B., & Maras, J. (2013). Secrets of the JavaScript Ninja. Manning Publications.

3. Mozilla Developer Network (MDN) Web Docs. [JavaScript Asynchronous Programming and Callbacks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous).

4. Mozilla Developer Network (MDN) Web Docs. [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).

5. Mozilla Developer Network (MDN) Web Docs. [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

6. Axios GitHub Repository. [Axios - Promise based HTTP client for the browser and node.js](https://github.com/axios/axios).

7. JavaScript.info. [Fetch](https://javascript.info/fetch).
