# API's en JavaScript Vanilla 📝 🖥️

## Índice

- [API's en JavaScript Vanilla 📝 🖥️](#apis-en-javascript-vanilla--️)
  - [Índice](#índice)
  - [Introducción](#introducción)
  - [Definición de API en JavaScript Vanilla ES6 o posterior](#definición-de-api-en-javascript-vanilla-es6-o-posterior)
  - [Para qué se utilizan las APIs](#para-qué-se-utilizan-las-apis)
  - [APIs en JavaScript Vanilla ES6 o posterior](#apis-en-javascript-vanilla-es6-o-posterior)
    - [WebSockets](#websockets)
    - [Notification API](#notification-api)
    - [Intersection Observer](#intersection-observer)
    - [Verificar conexión a Internet](#verificar-conexión-a-internet)
    - [Ejecutar a pantalla completa](#ejecutar-a-pantalla-completa)
    - [Verificar si estoy viendo una página web](#verificar-si-estoy-viendo-una-página-web)
    - [Fetch API](#fetch-api)
      - [Etapas de una petición Fetch](#etapas-de-una-petición-fetch)
      - [Método](#método)
      - [URL](#url)
      - [Cabeceras](#cabeceras)
      - [Body](#body)
      - [Opciones adicionales](#opciones-adicionales)
      - [Ejemplos](#ejemplos)
        - [Ejemplo 1: Realizar una solicitud GET](#ejemplo-1-realizar-una-solicitud-get)
      - [Ejemplo 2: Realizar una solicitud POST](#ejemplo-2-realizar-una-solicitud-post)
      - [Ejemplo 3: Realizar una solicitud PUT](#ejemplo-3-realizar-una-solicitud-put)
      - [Ejemplo 4: Realizar una solicitud DELETE](#ejemplo-4-realizar-una-solicitud-delete)
      - [Ejemplo 5: Asyc/Await](#ejemplo-5-asycawait)
      - [Ejemplo 6: Manejo de errores con respuesta no satisfactoria](#ejemplo-6-manejo-de-errores-con-respuesta-no-satisfactoria)
      - [Ejemplo 7: Especificar el modo de CORS](#ejemplo-7-especificar-el-modo-de-cors)
          - [Orígenes](#orígenes)
          - [Flujo de una solicitud CORS](#flujo-de-una-solicitud-cors)
          - [Encabezados CORS Comunes](#encabezados-cors-comunes)
          - [Ejemplo de Encabezados CORS en una Respuesta](#ejemplo-de-encabezados-cors-en-una-respuesta)
          - [Ejemplo de Solicitud CORS desde JavaScript](#ejemplo-de-solicitud-cors-desde-javascript)
        - [Ventajas de la Fetch API](#ventajas-de-la-fetch-api)
        - [Desventajas de la Fetch API](#desventajas-de-la-fetch-api)
    - [LocalStorage y SessionStorage API](#localstorage-y-sessionstorage-api)
    - [Geolocation API](#geolocation-api)
    - [Canvas API](#canvas-api)
    - [IndexedDB API](#indexeddb-api)
    - [History API](#history-api)
    - [Web Workers API](#web-workers-api)
  - [Concepto de EndPoint](#concepto-de-endpoint)
  - [Conclusiones](#conclusiones)
  - [Bibliografía](#bibliografía)

---

## Introducción

Una API (Interfaz de Programación de Aplicaciones) en programación es un conjunto de reglas y protocolos que permiten a dos aplicaciones comunicarse entre sí. Las API se utilizan para proporcionar una capa de abstracción entre el desarrollador y el código subyacente, lo que facilita el desarrollo de aplicaciones.

En el contexto de JavaScript, las API se utilizan para acceder a funciones y datos del navegador, el sistema operativo o cualquier otro servicio externo. Las API de JavaScript se pueden clasificar en dos categorías principales:

- APIs del navegador: Estas API se proporcionan por el navegador web y se utilizan para interactuar con el navegador y sus funciones. Por ejemplo, la API de Geolocalización proporciona funciones para obtener la ubicación del usuario y otras muchas que detallo en este manual.
- APIs externas: Estas API se proporcionan por un servicio externo, como una API de un servicio web.

## Definición de API en JavaScript Vanilla ES6 o posterior

En JavaScript Vanilla, es decir, sin el uso de bibliotecas o frameworks adicionales, una API es un conjunto de funciones y métodos proporcionados por el navegador para interactuar con funciones específicas del entorno web.

Las API de JavaScript Vanilla son las que se incluyen en el estándar de JavaScript y se pueden utilizar en cualquier navegador que lo implemente.

## Para qué se utilizan las APIs

Las APIs se utilizan para ampliar las capacidades de una aplicación. Permiten acceder y manipular funciones del navegador y del sistema operativo, facilitando la creación de aplicaciones web más interactivas y dinámicas.

Por tanto, las API se pueden utilizar para una gran variedad de tareas, entre las que se incluyen:

- Acceso a datos: Las API se pueden utilizar para acceder a datos de fuentes externas, como bases de datos, servicios web o sensores.
- Interacción con el usuario: Las API se pueden utilizar para interactuar con el usuario, como para mostrar notificaciones, obtener la entrada del usuario o controlar la interfaz de usuario.
- Gestión de eventos: Las API se pueden utilizar para gestionar eventos, como cuando el usuario hace clic en un botón o cuando el navegador carga una página web.
- Comunicación entre aplicaciones: Las API se pueden utilizar para comunicar aplicaciones entre sí, como para enviar mensajes entre aplicaciones o compartir datos.

## APIs en JavaScript Vanilla ES6 o posterior

A continuación vamos a realizar un recorrido básico por algunas de las Apis ya implementadas en JavaScript. En la parte de bibliografía podéis encontrar mucha mayor documentación. Aquí pretendo realizar un pequeño esbozo.

### WebSockets

Los WebSockets proporcionan una comunicación bidireccional entre el cliente y el servidor. Permiten la transmisión de datos en tiempo real, lo que es útil para aplicaciones que requieren actualizaciones instantáneas.

Ejemplo de uso:

```javascript
const socket = new WebSocket("ws://example.com");
socket.addEventListener("open", (event) => {
  console.log("Conexión establecida");
});
socket.addEventListener("message", (event) => {
  console.log("Mensaje recibido:", event.data);
});
```

### Notification API

La Notification API se utiliza para mostrar notificaciones en el navegador, permitiendo a las aplicaciones enviar alertas al usuario incluso cuando la aplicación no está abierta.

Ejemplo de uso:

```javascript
if ("Notification" in window) {
  if (Notification.permission === "granted") {
    new Notification("¡Hola, mundo!");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("¡Hola, mundo!");
      }
    });
  }
}
```

### Intersection Observer

El Intersection Observer permite a las aplicaciones detectar cuando un elemento entra o sale del área visible del usuario, lo que es útil para cargar recursos de manera eficiente.

Ejemplo de uso:

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Elemento visible:", entry.target);
    }
  });
});

observer.observe(document.getElementById("miElemento"));
```

### Verificar conexión a Internet

Para verificar la conexión a Internet, se puede usar el objeto `navigator.onLine`.

Ejemplo de uso:

```javascript
if (navigator.onLine) {
  console.log("Conectado a Internet");
} else {
  console.log("Sin conexión a Internet");
}
```

### Ejecutar a pantalla completa

La Fullscreen API permite solicitar y salir del modo de pantalla completa.

Ejemplo de uso:

```javascript
const elemento = document.getElementById("miElemento");

if (elemento.requestFullscreen) {
  elemento.requestFullscreen();
} else if (elemento.mozRequestFullScreen) {
  elemento.mozRequestFullScreen();
} else if (elemento.webkitRequestFullscreen) {
  elemento.webkitRequestFullscreen();
}
```

### Verificar si estoy viendo una página web

Para verificar si el usuario está activo en la página web, se puede usar el evento de visibilidad.

Ejemplo de uso:

```javascript
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.log("El usuario está viendo la página");
  } else {
    console.log("El usuario no está viendo la página");
  }
});
```

### Fetch API

La Fetch API es una API relativamente nueva que proporciona una forma sencilla de realizar solicitudes HTTP. La Fetch API se puede utilizar para realizar solicitudes GET, POST, PUT y DELETE.

La sintaxis básica es:

```javascript
let promise = fetch(url, [options]);
```

- url – la URL para acceder.
- options – parámetros opcionales: método, encabezados, etc.

`El navegador inicia la solicitud de inmediato y devuelve una promesa que el código de llamada debería utilizar para obtener el resultado.`

#### Etapas de una petición Fetch

Obtener una respuesta suele ser un proceso de dos etapas.

- Primero, el `promise`, devuelto por fetch, se resuelve con un objeto de la clase Response que fetch incorporada tan pronto como el servidor responde con encabezados.

  En esta etapa podemos verificar el estado de HTTP, para ver si es exitoso o no, verificar los encabezados, pero aún no tenemos el cuerpo.

  La promesa se rechaza si fetch no se pudo realizar la solicitud HTTP, por ejemplo, problemas de red, o si no existe dicho sitio. Los estados HTTP anormales, como 404 o 500, no provocan un error.

  Podemos ver el estado HTTP en las propiedades de respuesta:

  - status – Código de estado HTTP, por ejemplo 200.
  - ok – booleano, true si el código de estado HTTP es 200-299.

- En segundo lugar, para obtener el cuerpo de la respuesta, necesitamos utilizar una llamada a un método adicional.

  Response proporciona múltiples métodos basados ​​en promesas para acceder al cuerpo en varios formatos:

  - response.text() – leer la respuesta y la devuelve como texto.
  - response.json() – analiza la respuesta como JSON.
  - response.formData() – devuelve la respuesta como FormDataobject.
  - response.blob() – devuelve la respuesta como Blob (datos binarios con tipo).
  - response.arrayBuffer() – devuelve la respuesta como ArrayBuffer (representación de bajo nivel de datos binarios).
  - Además, `response.body` es un objeto ReadableStream , que le permite leer el body fragmento por fragmento.

Además, Fetch API admite una gran variedad de opciones, entre las que se incluyen:

- Método: El método de la solicitud HTTP.
- URL: La URL de la solicitud HTTP.
- Cabeceras: Las cabeceras de la solicitud HTTP.
- Body: El cuerpo de la solicitud HTTP.

#### Método

El método de la solicitud HTTP se puede especificar mediante el primer argumento del método fetch(). Los valores posibles son los siguientes:

    - GET: Solicita el recurso especificado en la URL.
    - POST: Envía datos al recurso especificado en la URL.
    - PUT: Actualiza el recurso especificado en la URL.
    - DELETE: Elimina el recurso especificado en la URL.

#### URL

La URL de la solicitud HTTP se puede especificar mediante el segundo argumento del método fetch(). La URL debe ser una cadena que represente la ubicación del recurso que se desea solicitar.

#### Cabeceras

Las cabeceras de la solicitud HTTP se pueden especificar mediante el objeto options del método fetch(). El objeto options tiene un campo headers que es un objeto que contiene las cabeceras de la solicitud.

Por ejemplo, para especificar una cabecera Content-Type con el valor application/json, se puede utilizar el siguiente código:

```JavaScript
const options = {
  headers: {
    "Content-Type": "application/json"
  }
};

const response = await fetch(url, options);
```

#### Body

El cuerpo de la solicitud HTTP se puede especificar mediante el objeto `options` del método `fetch()`. El objeto `options` tiene un campo `body` que es un objeto que contiene el cuerpo de la solicitud.

El cuerpo de la solicitud puede ser una cadena, un objeto o un array. Si el cuerpo de la solicitud es una cadena, se codificará en formato `application/x-www-form-urlencoded`. Si el cuerpo de la solicitud es un objeto, se codificará en formato `application/json`. Si el cuerpo de la solicitud es un array, se codificará en formato `application/octet-stream`.

Por ejemplo, para especificar un cuerpo de solicitud con el valor `{"name": "Isaías FL"}`, se puede utilizar el siguiente código:

```JavaScript
const options = {
  body: {
  name: "Isaías FL"
}
};

const response = await fetch(url, options);
```

#### Opciones adicionales

La Fetch API admite una serie de opciones adicionales que se pueden especificar mediante el objeto `options` del método `fetch()`. Estas opciones incluyen las siguientes:

- credentials: Especifica si la solicitud debe realizar un envío de credenciales. Los valores posibles son omit, same-origin y include.

- redirect: Especifica cómo se deben manejar los redireccionamientos. Los valores posibles son follow, error y manual.

- mode: Especifica el modo de CORS. Los valores posibles son cors, no-cors y same-origin.

- signal: Especifica un objeto AbortController que se puede utilizar para abortar la solicitud.

#### Ejemplos

Veamos algunos ejemplos del uso de la Fetch API:

##### Ejemplo 1: Realizar una solicitud GET

```JavaScript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log('Datos obtenidos:', data))
  .catch(error => console.error('Error:', error));

```

Este ejemplo realiza una solicitud GET al recurso especificado en la URL `https://api.example.com/data`. **(es una url ficticia..no lo olvides)** Si la solicitud es exitosa, el método `response.json()` se utiliza para convertir la respuesta en un objeto JSON. Como podrás observar por el `then`, estoy fetch me devuelve una **_promesa_**.

#### Ejemplo 2: Realizar una solicitud POST

Para realizar una solicitud POST, puedes incluir un objeto de opciones que contiene el método, las cabeceras y el cuerpo de la solicitud.

```JavaScript
fetch('https://api.example.com/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'value' }),
})
  .then(response => response.json())
  .then(data => console.log('Respuesta POST:', data))
  .catch(error => console.error('Error:', error));

```

#### Ejemplo 3: Realizar una solicitud PUT

```JavaScript
fetch('https://api.example.com/update/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'updatedValue' }),
})
  .then(response => response.json())
  .then(data => console.log('Respuesta PUT:', data))
  .catch(error => console.error('Error:', error));

```

#### Ejemplo 4: Realizar una solicitud DELETE

```JavaScript
fetch('https://api.example.com/delete/1', {
  method: 'DELETE',
})
  .then(response => response.json())
  .then(data => console.log('Respuesta DELETE:', data))
  .catch(error => console.error('Error:', error));

```

#### Ejemplo 5: Asyc/Await

También podemos hacer uso de `async/await` :

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
```

#### Ejemplo 6: Manejo de errores con respuesta no satisfactoria

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

#### Ejemplo 7: Especificar el modo de CORS

**CORS (Cross-Origin Resource Sharing)** es una política de seguridad implementada por los navegadores web para restringir las solicitudes HTTP entre diferentes orígenes. Un origen se define como la combinación de protocolo (http o https), dominio y puerto. Cuando una página web en un dominio intenta realizar una solicitud HTTP a un dominio diferente al de la propia página, CORS entra en juego para proteger al usuario y prevenir posibles ataques.

La política de mismo origen es fundamental para evitar que un sitio web malicioso realice solicitudes no autorizadas en nombre del usuario. CORS proporciona un mecanismo para que los servidores especifiquen qué dominios pueden acceder a sus recursos a través de solicitudes HTTP. A continuación, se explican algunos conceptos clave:

###### Orígenes

- **Origen del Peticionario (Origin):** Es el origen del dominio que está realizando la solicitud. Este origen es parte de la solicitud HTTP y está disponible en el encabezado `Origin`.

- **Origen del Recurso (Access-Control-Allow-Origin):** Es el origen del dominio que posee los recursos a los que se está intentando acceder. Este origen es parte de la respuesta HTTP y está especificado en el encabezado `Access-Control-Allow-Origin`.

###### Flujo de una solicitud CORS

1. **Preflight Request (Solicitud de Preflight):** Antes de enviar la solicitud real, el navegador puede enviar una solicitud de preflight para verificar si el servidor permite la solicitud. Esto se hace mediante una solicitud HTTP OPTIONS. El servidor responde con los encabezados CORS permitidos para la solicitud real.

2. **Solicitud Real:** Si la solicitud de preflight es exitosa, se realiza la solicitud real. En esta etapa, el navegador agrega automáticamente el encabezado `Origin` a la solicitud y verifica si el servidor permite el acceso desde ese origen.

3. **Respuesta del Servidor:** El servidor responde con los encabezados CORS permitidos, y si la respuesta es permitida según la política CORS, el navegador permite que el contenido sea entregado al código JavaScript en el origen solicitante.

###### Encabezados CORS Comunes

- **`Access-Control-Allow-Origin`:** Especifica qué origenes tienen permiso para acceder al recurso. Puede ser un origen específico o un comodín (`*`) para permitir a cualquier origen.

- **`Access-Control-Allow-Methods`:** Especifica los métodos HTTP permitidos cuando se accede al recurso.

- **`Access-Control-Allow-Headers`:** Especifica los encabezados HTTP permitidos cuando se accede al recurso.

- **`Access-Control-Allow-Credentials`:** Indica si las solicitudes desde el navegador deben incluir credenciales (como cookies o credenciales HTTP).

###### Ejemplo de Encabezados CORS en una Respuesta

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://mi-dominio-frontend.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type
```

###### Ejemplo de Solicitud CORS desde JavaScript

```javascript
fetch("https://api.example.com/data", {
  method: "GET",
  mode: "cors", // Permite solicitudes entre diferentes dominios
  credentials: "include", // Incluye cookies en la solicitud
})
  .then((response) => response.json())
  .then((data) => console.log("Datos obtenidos con CORS:", data))
  .catch((error) => console.error("Error:", error));
```

CORS es esencial para la seguridad en la web moderna al permitir que los servidores controlen qué dominios pueden acceder a sus recursos, evitando así posibles amenazas de seguridad.

##### Ventajas de la Fetch API

La Fetch API ofrece una serie de ventajas sobre otras APIs de solicitudes HTTP, como XMLHttpRequest:

- Es más sencilla de utilizar: La Fetch API tiene una API más sencilla y fácil de entender que XMLHttpRequest.
- Es más flexible: La Fetch API admite una mayor variedad de opciones que XMLHttpRequest.
- Es más eficiente: La Fetch API es más eficiente que XMLHttpRequest, ya que utiliza un modelo de promesas.

##### Desventajas de la Fetch API

La Fetch API también tiene algunas desventajas, como:

- No es compatible con todos los navegadores: La Fetch API no es compatible con todos los navegadores, por lo que es necesario utilizar un polyfill para los navegadores antiguos.
- No es tan potente como XMLHttpRequest: La Fetch API no es tan potente como XMLHttpRequest, ya que no admite algunas características avanzadas, como la transferencia de archivos.

### LocalStorage y SessionStorage API

Las APIs de almacenamiento local (`localStorage`) y de almacenamiento de sesión (`sessionStorage`) permiten almacenar datos de forma persistente o de sesión en el navegador.

Ejemplo de uso:

```javascript
// Almacenar datos en localStorage
localStorage.setItem("clave", "valor");

// Obtener datos de localStorage
const valor = localStorage.getItem("clave");
console.log(valor); // Imprime: valor

// Almacenar datos en sessionStorage
sessionStorage.setItem("clave", "valor");

// Obtener datos de sessionStorage
const valorSession = sessionStorage.getItem("clave");
console.log(valorSession); // Imprime: valor
```

### Geolocation API

La Geolocation API proporciona información sobre la ubicación física del dispositivo.

Ejemplo de uso:

```javascript
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Ubicación actual:", position.coords);
  },
  (error) => {
    console.error("Error al obtener la ubicación:", error);
  }
);
```

### Canvas API

La Canvas API permite dibujar gráficos, imágenes y otros elementos en el navegador.

Ejemplo de uso:

```javascript
const canvas = document.getElementById("miCanvas");
const contexto = canvas.getContext("2d");

// Dibujar un rectángulo rojo
contexto.fillStyle = "red";
contexto.fillRect(10, 10, 50, 50);
```

### IndexedDB API

La IndexedDB API proporciona una base de datos en el lado del cliente para el almacenamiento de grandes cantidades de datos.

Ejemplo de uso:

```javascript
const request = indexedDB.open("miBaseDeDatos", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const objectStore = db.createObjectStore("miObjeto", { keyPath: "id" });
  objectStore.createIndex("nombre", "nombre", { unique: false });

  // Agregar datos iniciales
  objectStore.add({ id: 1, nombre: "Ejemplo 1" });
};

request.onsuccess = (event) => {
  const db = event.target.result;
  const transaction = db.transaction(["miObjeto"], "readwrite");
  const objectStore = transaction.objectStore("miObjeto");
  const request = objectStore.get(1);

  request.onsuccess = (event) => {
    const item = event.target.result;
    console.log("Datos recuperados:", item);
  };
};

request.onerror = (event) => {
  console.error("Error al abrir la base de datos:", event.target.errorCode);
};
```

### History API

La History API permite manipular la barra de historial del navegador.

Ejemplo de uso:

```javascript
// Agregar una entrada al historial
window.history.pushState({ page: 1 }, "Título de la página", "?page=1");

// Escuchar cambios en el historial
window.addEventListener("popstate", (event) => {
  console.log("Cambio en el historial:", event.state);
});
```

### Web Workers API

La Web Workers API permite ejecutar scripts en segundo plano para procesamiento intensivo sin bloquear la interfaz de usuario.

Ejemplo de uso:

```javascript
// Trabajador (worker.js)
self.onmessage = function (event) {
  const resultado = event.data[0] * event.data[1];
  self.postMessage(resultado);
};

// En el script principal
const miTrabajador = new Worker("worker.js");
miTrabajador.onmessage = function (event) {
  console.log("Resultado:", event.data);
};

miTrabajador.postMessage([5, 10]); // Enviar datos al trabajador
```

## Concepto de EndPoint

En el contexto de las APIs, un EndPoint es la URL específica a la que se envían las solicitudes para interactuar con un servicio o recurso.

Ejemplo de EndPoint:

```
https://api.example.com/data
```

En este caso, `data` es el EndPoint al que se realiza una solicitud para obtener información.

## Conclusiones

Las APIs en JavaScript Vanilla ES6 o posterior proporcionan una amplia gama de funcionalidades para mejorar la interactividad y la eficiencia de las aplicaciones web. El uso de Fetch API y Axios facilita la comunicación con servidores y la manipulación de datos, cada uno con sus ventajas y desventajas.

## Bibliografía

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/)
- [W3C Web APIs](https://www.w3.org/TR/)
- [WebSocket API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [Notification API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
- [Intersection Observer API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Fullscreen API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
- [Visibility API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)
- [Fetch API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Axios Documentation](https://axios-http.com/docs/intro)
