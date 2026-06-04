# DOM (Modelo de Objetos del Documento) en JavaScript 📝 🖥️

- [DOM (Modelo de Objetos del Documento) en JavaScript 📝 🖥️](#dom-modelo-de-objetos-del-documento-en-javascript--️)
  - [1. Introducción al DOM](#1-introducción-al-dom)
    - [1.1 ¿Qué es el DOM?](#11-qué-es-el-dom)
    - [1.2 La estructura del árbol DOM](#12-la-estructura-del-árbol-dom)
    - [1.3 Navegadores y el DOM](#13-navegadores-y-el-dom)
    - [1.4 Acceso al DOM](#14-acceso-al-dom)
    - [1.5 Manipulación del DOM](#15-manipulación-del-dom)
    - [2. Elementos del DOM](#2-elementos-del-dom)
      - [2.1 Acceso a los Elementos](#21-acceso-a-los-elementos)
        - [2.1.1 getElementById](#211-getelementbyid)
        - [2.1.2 getElementsByClassName](#212-getelementsbyclassname)
        - [2.1.3 getElementsByTagName](#213-getelementsbytagname)
        - [2.1.4 querySelector y querySelectorAll](#214-queryselector-y-queryselectorall)
      - [2.2 Modificación de Elementos](#22-modificación-de-elementos)
        - [2.2.1 innerHTML y textContent](#221-innerhtml-y-textcontent)
        - [2.2.2 setAttribute y removeAttribute](#222-setattribute-y-removeattribute)
        - [2.2.3 classList para manipulación de clases](#223-classlist-para-manipulación-de-clases)
      - [2.3 Creación de Nuevos Elementos](#23-creación-de-nuevos-elementos)
        - [2.3.1 createElement](#231-createelement)
        - [2.3.2 appendChild e insertBefore](#232-appendchild-e-insertbefore)
    - [3. Navegación y Manipulación del DOM](#3-navegación-y-manipulación-del-dom)
      - [3.1 Navegación en el Árbol DOM](#31-navegación-en-el-árbol-dom)
        - [3.1.1 Padres e Hijos](#311-padres-e-hijos)
        - [3.1.2 Hermanos](#312-hermanos)
      - [3.2 Métodos para Recorrer el DOM](#32-métodos-para-recorrer-el-dom)
        - [3.2.1 parentNode, nextSibling y previousSibling](#321-parentnode-nextsibling-y-previoussibling)
        - [3.2.2 firstChild y lastChild](#322-firstchild-y-lastchild)
    - [4. Estilos y Medición](#4-estilos-y-medición)
      - [4.1 Cambio de Propiedades CSS](#41-cambio-de-propiedades-css)
        - [4.1.1 Acceder a Propiedades CSS](#411-acceder-a-propiedades-css)
        - [4.1.2 Cambiar Propiedades CSS](#412-cambiar-propiedades-css)
      - [4.2 Obtención de Medidas de Elementos](#42-obtención-de-medidas-de-elementos)
        - [4.2.1 offsetWidth y offsetHeight](#421-offsetwidth-y-offsetheight)
        - [4.2.2 clientWidth y clientHeight](#422-clientwidth-y-clientheight)
        - [4.2.3 getComputedStyle](#423-getcomputedstyle)
    - [5. Manipulación de Formularios](#5-manipulación-de-formularios)
      - [5.1 Acceso a Elementos de Formulario](#51-acceso-a-elementos-de-formulario)
        - [5.1.1 Acceso por ID](#511-acceso-por-id)
        - [5.1.2 Acceso por Nombre](#512-acceso-por-nombre)
      - [5.2 Envío de Formularios](#52-envío-de-formularios)
        - [5.2.1 Prevenir el Envío de Formularios](#521-prevenir-el-envío-de-formularios)
      - [5.3 Validación de Formularios](#53-validación-de-formularios)
        - [5.3.1 Validación Personalizada](#531-validación-personalizada)
    - [6. Manipulación de Atributos de Datos](#6-manipulación-de-atributos-de-datos)
      - [6.1 Atributos de Datos Personalizados](#61-atributos-de-datos-personalizados)
        - [6.1.1 Acceso a Atributos de Datos](#611-acceso-a-atributos-de-datos)
        - [6.1.2 Modificación de Atributos de Datos](#612-modificación-de-atributos-de-datos)
        - [6.2 Uso de `data-*`](#62-uso-de-data-)
    - [7. Trabajo con Imágenes](#7-trabajo-con-imágenes)
      - [7.1 Cambio de Imágenes](#71-cambio-de-imágenes)
        - [7.1.1 Cambio de la Fuente de la Imagen](#711-cambio-de-la-fuente-de-la-imagen)
        - [7.1.2 Precarga de Imágenes](#712-precarga-de-imágenes)
      - [7.2 Galería de Imágenes](#72-galería-de-imágenes)
    - [8. Manipulación de Eventos](#8-manipulación-de-eventos)
      - [8.1 Event Listeners](#81-event-listeners)
        - [8.1.1 Uso de `addEventListener`](#811-uso-de-addeventlistener)
        - [8.1.2 Eliminación de Event Listeners](#812-eliminación-de-event-listeners)
      - [8.2 Event Objects](#82-event-objects)
        - [8.2.1 Propiedades del Event Object](#821-propiedades-del-event-object)
        - [8.2.2 Tipos de Eventos Comunes](#822-tipos-de-eventos-comunes)
      - [8.3 Event Bubbling y Capturing](#83-event-bubbling-y-capturing)
        - [8.3.1 Event Bubbling](#831-event-bubbling)
        - [8.3.2 Event Capturing](#832-event-capturing)
      - [8.4 Eventos de Ratón y Teclado](#84-eventos-de-ratón-y-teclado)
    - [9. BIBLIOGRAFÍA](#9-bibliografía)

## 1. Introducción al DOM

### 1.1 ¿Qué es el DOM?

El Modelo de Objetos del Documento (DOM) es una interfaz de programación que representa la estructura de un documento HTML o XML. El DOM es esencial para interactuar con los elementos de una página web utilizando JavaScript.

Ejemplo:

```javascript
const root = document;
const htmlNode = document.documentElement;
const bodyNode = document.body;
```

### 1.2 La estructura del árbol DOM

El DOM organiza los elementos HTML en una estructura de árbol jerárquica. Cada elemento es un nodo en el árbol, y el nodo raíz se llama "Document".

Ejemplo:

```javascript
const root = document;
const htmlNode = document.documentElement;
const bodyNode = document.body;
```

### 1.3 Navegadores y el DOM

Cada navegador web implementa su propio motor DOM. Aunque siguen estándares, puede haber diferencias en la forma en que los navegadores interpretan y representan el DOM. Es importante considerar la compatibilidad cruzada al desarrollar aplicaciones web.

### 1.4 Acceso al DOM

El objeto global `document` proporciona acceso al DOM. Puedes acceder a elementos, modificar contenido, estilos y estructura de la página.

Ejemplo:

```javascript
const myElement = document.getElementById("miElemento");
myElement.innerHTML = "Nuevo contenido";
```

### 1.5 Manipulación del DOM

La manipulación del DOM implica cambiar elementos, agregar nuevos elementos o eliminar elementos existentes en la página.

Ejemplo:

```javascript
const myElement = document.getElementById("miElemento");
myElement.classList.add("destacado");
```

### 2. Elementos del DOM

Los elementos del DOM son los bloques de construcción fundamentales de una página web. Puedes acceder a ellos, modificar su contenido y estilo, y crear nuevos elementos. En esta sección, exploraremos cómo trabajar con elementos del DOM de manera más detallada.

#### 2.1 Acceso a los Elementos

##### 2.1.1 getElementById

El método `getElementById` te permite acceder a un elemento utilizando su ID. Aquí hay un ejemplo:

**Ejemplo: Acceder a un elemento por su ID**

```html
<div id="miDiv">Este es un div con ID by Isaías</div>
```

```javascript
const div = document.getElementById("miDiv");
div.textContent =
  "Este div ha sido modificado con JavaScript para DWEC by Isaías";
```

##### 2.1.2 getElementsByClassName

El método `getElementsByClassName` te permite acceder a elementos que comparten una clase específica. Aquí hay un ejemplo:

**Ejemplo: Acceder a elementos por su clase**

```html
<ul>
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>
```

```javascript
const items = document.getElementsByClassName("item");
for (const item of items) {
  item.textContent = "Elemento modificado DWEC";
}
```

##### 2.1.3 getElementsByTagName

El método `getElementsByTagName` te permite acceder a elementos por su etiqueta. Aquí hay un ejemplo:

**Ejemplo: Acceder a elementos por su etiqueta**

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```javascript
const listaItems = document.getElementsByTagName("li");
for (const item of listaItems) {
  item.textContent = "Elemento de lista modificado";
}
```

##### 2.1.4 querySelector y querySelectorAll

`querySelector` y `querySelectorAll` te permiten acceder a elementos utilizando selectores CSS. Aquí hay un ejemplo:

**Ejemplo 1: Acceder al primer párrafo con la clase "destacado"**

```html
<p class="destacado">
  Este es un párrafo destacado con Apuntes para Desarrollo Web en Entorno
  Cliente.
</p>
<p>Este es un párrafo normal. By Isaías</p>
```

```javascript
const parrafoDestacado = document.querySelector(".destacado");
parrafoDestacado.textContent = "¡Este párrafo ha sido destacado -DWEC!";
```

**Ejemplo 2: Acceder a todos los elementos de la clase "elemento"**

```html
<div class="elemento">Elemento 1</div>
<div class="elemento">Elemento 2</div>
<div class="otro">Otro elemento</div>
```

```javascript
const elementos = document.querySelectorAll(".elemento");
elementos.forEach((elemento, indice) => {
  elemento.textContent = `Elemento ${indice + 1}`;
});
```

#### 2.2 Modificación de Elementos

##### 2.2.1 innerHTML y textContent

`innerHTML` y `textContent` te permiten acceder y modificar el contenido HTML y el texto de un elemento. Aquí hay un ejemplo:

**Ejemplo: Modificar el contenido de un elemento**

```html
<div id="miDiv"><strong>Texto de ejemplo</strong></div>
```

```javascript
const div = document.getElementById("miDiv");
div.innerHTML = "<em>Nuevo contenido HTML</em>";
div.textContent = "Nuevo contenido de texto";
```

##### 2.2.2 setAttribute y removeAttribute

`setAttribute` y `removeAttribute` te permiten establecer y eliminar atributos en elementos. Aquí hay un ejemplo:

**Ejemplo: Establecer y eliminar atributos**

```html
<a id="miGithub" href="https://www.github.com/isaiasfl"
  >Enlace de GitHub Isaías</a
>
```

```javascript
const enlace = document.getElementById("miGithub");
enlace.setAttribute("target", "_blank"); // Abrir enlace en una nueva pestaña
enlace.removeAttribute("href"); // Eliminar el atributo "href"
```

##### 2.2.3 classList para manipulación de clases

`classList` te permite agregar, eliminar y verificar clases en elementos. Aquí hay un ejemplo:

**Ejemplo: Agregar y quitar clases de un elemento**

```html
<div id="miDiv" class="rojo">Este es un div</div>
```

```javascript
const div = document.getElementById("miDiv");
div.classList.add("grande"); // Agregar la clase "grande"
div.classList.remove("rojo"); // Eliminar la clase "rojo"
```

#### 2.3 Creación de Nuevos Elementos

##### 2.3.1 createElement

El método `createElement` te permite crear nuevos elementos. Aquí hay un ejemplo:

**Ejemplo: Crear un nuevo párrafo y añadirlo al cuerpo del documento**

```javascript
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent =
  "Este es un nuevo párrafo creado con JavaScript por Isaías FL";
document.body.appendChild(nuevoParrafo);
```

##### 2.3.2 appendChild e insertBefore

`appendChild` y `insertBefore` te permiten agregar elementos a un elemento padre. Aquí hay un ejemplo:

**Ejemplo: Agregar un elemento al final de una lista no ordenada**

```html
<ul id="miLista">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>
```

```javascript
const lista = document.getElementById("miLista");
const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 3";
lista.appendChild(nuevoElemento); // Agregar al final de la lista
```

### 3. Navegación y Manipulación del DOM

La navegación y manipulación del DOM son tareas comunes al trabajar con páginas web y JavaScript. Esta sección cubrirá cómo navegar por el árbol DOM y cómo manipular elementos de manera efectiva.

#### 3.1 Navegación en el Árbol DOM

##### 3.1.1 Padres e Hijos

Puedes acceder a los padres e hijos de un elemento para recorrer el árbol DOM. Aquí tienes ejemplos de cómo hacerlo:

**Ejemplo 1: Acceder al elemento padre**

```javascript
const child = document.getElementById("hijo");
const parent = child.parentNode;
console.log(parent.id); // Devuelve el ID del elemento padre
```

**Ejemplo 2: Acceder al primer y último hijo**

```javascript
const parent = document.getElementById("padre");
const primerHijo = parent.firstElementChild;
const ultimoHijo = parent.lastElementChild;
console.log(primerHijo.id); // Devuelve el ID del primer hijo
console.log(ultimoHijo.id); // Devuelve el ID del último hijo
```

##### 3.1.2 Hermanos

Para acceder a elementos hermanos, puedes utilizar las propiedades `nextSibling` y `previousSibling`. Aquí tienes ejemplos:

**Ejemplo 1: Acceder al siguiente y anterior hermano**

```javascript
const elemento = document.getElementById("miElemento");
const siguienteHermano = elemento.nextSibling;
const hermanoAnterior = elemento.previousSibling;
console.log(siguienteHermano.id); // Devuelve el ID del siguiente hermano
console.log(hermanoAnterior.id); // Devuelve el ID del hermano anterior
```

**Ejemplo 2: Ignorar nodos de texto**

```javascript
function siguienteElementoNoTexto(node) {
  let siguiente = node.nextSibling;
  while (siguiente && siguiente.nodeType !== 1) {
    siguiente = siguiente.nextSibling;
  }
  return siguiente;
}
const elemento = document.getElementById("miElemento");
const siguienteHermano = siguienteElementoNoTexto(elemento);
console.log(siguienteHermano.id); // Devuelve el ID del siguiente hermano que no es un nodo de texto
```

#### 3.2 Métodos para Recorrer el DOM

##### 3.2.1 parentNode, nextSibling y previousSibling

Las propiedades `parentNode`, `nextSibling`, y `previousSibling` son formas simples de recorrer el DOM. Aquí tienes ejemplos:

**Ejemplo 1: Recorrer hacia arriba (ancestros) en el árbol DOM**

```javascript
const elemento = document.getElementById("miElemento");
let nodoActual = elemento;
while (nodoActual.parentNode) {
  nodoActual = nodoActual.parentNode;
  console.log(nodoActual.tagName);
}
```

**Ejemplo 2: Recorrer hacia abajo (hijos) en el árbol DOM**

```javascript
const elemento = document.getElementById("miElemento");
let nodoActual = elemento;
for (let i = 0; i < nodoActual.children.length; i++) {
  console.log(nodoActual.children[i].tagName);
}
```

##### 3.2.2 firstChild y lastChild

Las propiedades `firstChild` y `lastChild` te permiten acceder al primer y último hijo de un elemento. Aquí tienes ejemplos:

**Ejemplo 1: Acceder al primer y último hijo de un elemento**

```javascript
const contenedor = document.getElementById("contenedor");
const primerHijo = contenedor.firstElementChild;
const ultimoHijo = contenedor.lastElementChild;
console.log(primerHijo.textContent); // Contenido del primer hijo
console.log(ultimoHijo.textContent); // Contenido del último hijo
```

Claro, aquí tienes el punto 4 sobre "Estilos y Medición" en el formato de Markdown con ejemplos detallados en JavaScript ES6 o posterior:

### 4. Estilos y Medición

La manipulación de estilos y la obtención de medidas de elementos son operaciones comunes al trabajar con el DOM. Esta sección aborda cómo cambiar las propiedades CSS de un elemento y cómo obtener medidas de elementos en la página.

#### 4.1 Cambio de Propiedades CSS

##### 4.1.1 Acceder a Propiedades CSS

Para acceder a las propiedades CSS de un elemento, puedes utilizar la propiedad `style`. Aquí tienes un ejemplo:

**Ejemplo: Acceder y cambiar un estilo CSS**

```javascript
const elemento = document.getElementById("miElemento");
elemento.style.color = "blue";
elemento.style.fontSize = "16px";
```

##### 4.1.2 Cambiar Propiedades CSS

Puedes cambiar las propiedades CSS de un elemento directamente a través de JavaScript. Aquí tienes un ejemplo:

**Ejemplo: Cambiar el fondo de un elemento cuando se hace clic**

```javascript
const elemento = document.getElementById("cambiarColor");
elemento.addEventListener("click", function () {
  elemento.style.backgroundColor = "yellow";
});
```

#### 4.2 Obtención de Medidas de Elementos

##### 4.2.1 offsetWidth y offsetHeight

Las propiedades `offsetWidth` y `offsetHeight` te permiten obtener las dimensiones de un elemento, incluyendo el ancho y el alto, junto con los márgenes. Aquí tienes un ejemplo:

**Ejemplo: Obtener el ancho y alto de un elemento**

```javascript
const elemento = document.getElementById("miElemento");
const ancho = elemento.offsetWidth;
const alto = elemento.offsetHeight;
console.log(`Ancho: ${ancho}px, Alto: ${alto}px`);
```

##### 4.2.2 clientWidth y clientHeight

Las propiedades `clientWidth` y `clientHeight` te permiten obtener las dimensiones de un elemento, excluyendo los márgenes pero incluyendo el relleno. Aquí tienes un ejemplo:

**Ejemplo: Obtener el ancho y alto del contenido de un elemento**

```javascript
const elemento = document.getElementById("miElemento");
const ancho = elemento.clientWidth;
const alto = elemento.clientHeight;
console.log(`Ancho del contenido: ${ancho}px, Alto del contenido: ${alto}px`);
```

##### 4.2.3 getComputedStyle

El método `getComputedStyle` te permite obtener las propiedades calculadas de un elemento, incluyendo estilos heredados y calculados. Aquí tienes un ejemplo:

**Ejemplo: Obtener propiedades CSS calculadas de un elemento**

```javascript
const elemento = document.getElementById("miElemento");
const estilos = window.getComputedStyle(elemento);
const colorTexto = estilos.color;
const tamañoFuente = estilos.fontSize;
console.log(`Color de texto: ${colorTexto}, Tamaño de fuente: ${tamañoFuente}`);
```

Por supuesto, aquí están los puntos 5 y 6, "Manipulación de Formularios" y "Manipulación de Atributos de Datos", con ejemplos más extensos:

### 5. Manipulación de Formularios

La manipulación de formularios es fundamental cuando trabajas con aplicaciones web interactivas. En esta sección, exploraremos cómo acceder, enviar, y validar formularios en el DOM.

#### 5.1 Acceso a Elementos de Formulario

##### 5.1.1 Acceso por ID

Puedes acceder a elementos de formulario utilizando sus IDs. Aquí hay un ejemplo:

**Ejemplo: Acceder a un campo de entrada por su ID**

```javascript
const campoTexto = document.getElementById("nombre");
campoTexto.value = "Isaías Fernández"; // Establecer el valor del campo de texto
```

##### 5.1.2 Acceso por Nombre

Si varios elementos de formulario tienen el mismo nombre, puedes acceder a ellos como una colección. Aquí hay un ejemplo:

**Ejemplo: Acceder a múltiples casillas de verificación por nombre**

```javascript
const checkboxes = document.getElementsByName("intereses");
checkboxes.forEach((checkbox) => {
  checkbox.checked = true; // Marcar todas las casillas de verificación
});
```

#### 5.2 Envío de Formularios

##### 5.2.1 Prevenir el Envío de Formularios

Puedes evitar que un formulario se envíe utilizando el evento `submit` y la función `preventDefault`. Aquí hay un ejemplo:

**Ejemplo: Prevenir el envío de un formulario y mostrar un mensaje**

```javascript
const formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario
  alert("Formulario no enviado. Debe completar todos los campos.");
});
```

#### 5.3 Validación de Formularios

##### 5.3.1 Validación Personalizada

Puedes realizar validaciones personalizadas en formularios utilizando JavaScript. Aquí hay un ejemplo:

**Ejemplo: Validar un campo de correo electrónico**

```javascript
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("enviar");

submitButton.addEventListener("click", function (event) {
  const email = emailInput.value;
  if (!validateEmail(email)) {
    event.preventDefault(); // Evitar el envío si el correo es inválido
    alert("El correo electrónico no es válido.");
  }
});

function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}
```

### 6. Manipulación de Atributos de Datos

La manipulación de atributos de datos es útil para almacenar información personalizada en elementos HTML. Utilizaremos atributos de datos personalizados y la notación `data-*` para acceder y modificar estos valores.

#### 6.1 Atributos de Datos Personalizados

##### 6.1.1 Acceso a Atributos de Datos

Puedes acceder a los atributos de datos personalizados utilizando `getAttribute`. Aquí hay un ejemplo:

**Ejemplo: Acceder a atributos de datos personalizados**

```html
<div id="miElemento" data-usuario="ejemplo" data-rol="admin"></div>
```

```javascript
const elemento = document.getElementById("miElemento");
const usuario = elemento.getAttribute("data-usuario");
const rol = elemento.getAttribute("data-rol");
console.log(`Usuario: ${usuario}, Rol: ${rol}`);
```

##### 6.1.2 Modificación de Atributos de Datos

Puedes modificar atributos de datos personalizados utilizando `setAttribute`. Aquí hay un ejemplo:

**Ejemplo: Modificar atributos de datos personalizados**

```html
<div id="miElemento" data-usuario="ejemplo" data-rol="admin"></div>
```

```javascript
const elemento = document.getElementById("miElemento");
elemento.setAttribute("data-usuario", "nuevo-usuario");
elemento.setAttribute("data-rol", "nuevo-rol");
```

##### 6.2 Uso de `data-*`

La notación `data-*` te permite definir y acceder a atributos de datos personalizados de una manera más legible. Aquí hay un ejemplo:

**Ejemplo: Uso de atributos de datos `data-*`**

```html
<div id="miElemento" data-usuario="ejemplo" data-rol="admin"></div>
```

```javascript
const elemento = document.getElementById("miElemento");
const usuario = elemento.dataset.usuario;
const rol = elemento.dataset.rol;
console.log(`Usuario: ${usuario}, Rol: ${rol}`);
```

Por supuesto, aquí tienes el punto 7, "Trabajo con Imágenes", con detalles, explicaciones y ejemplos adicionales:

### 7. Trabajo con Imágenes

La manipulación de imágenes es esencial al trabajar con aplicaciones web que incluyen gráficos y contenido visual. En esta sección, exploraremos cómo cambiar imágenes y precargarlas para una experiencia de usuario más fluida.

#### 7.1 Cambio de Imágenes

##### 7.1.1 Cambio de la Fuente de la Imagen

Puedes cambiar la fuente de una imagen en el DOM para mostrar una imagen diferente. Aquí hay un ejemplo:

**Ejemplo: Cambiar la fuente de una imagen al hacer clic en un botón**

```html
<img id="miImagen" src="imagen1.jpg" alt="Imagen 1" />
<button id="cambiarImagen">Cambiar Imagen</button>
```

```javascript
const imagen = document.getElementById("miImagen");
const boton = document.getElementById("cambiarImagen");

boton.addEventListener("click", function () {
  if (imagen.src.endsWith("imagen1.jpg")) {
    imagen.src = "imagen2.jpg";
    imagen.alt = "Imagen 2";
  } else {
    imagen.src = "imagen1.jpg";
    imagen.alt = "Imagen 1";
  }
});
```

##### 7.1.2 Precarga de Imágenes

Precargar imágenes es útil para mejorar la velocidad de carga de una página web. Aquí hay un ejemplo de cómo precargar imágenes en JavaScript:

**Ejemplo: Precargar imágenes en una página web**

```javascript
function precargarImagenes() {
  const imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];
  for (const imagenSrc of imagenes) {
    const imagen = new Image();
    imagen.src = imagenSrc;
  }
}

// Llamar a la función de precarga al cargar la página
window.addEventListener("load", precargarImagenes);
```

La función `precargarImagenes` crea instancias de objetos `Image` y les asigna la fuente de las imágenes que deseas precargar. Estas imágenes se cargarán en caché en el navegador, lo que acelerará su aparición cuando se utilicen en la página.

#### 7.2 Galería de Imágenes

Crear una galería de imágenes es una forma común de presentar múltiples imágenes en una página web. Aquí hay un ejemplo de cómo construir una simple galería de imágenes:

**Ejemplo: Galería de Imágenes con Controles**

```html
<div id="galeria">
  <img src="imagen1.jpg" alt="Imagen 1" />
  <img src="imagen2.jpg" alt="Imagen 2" />
  <img src="imagen3.jpg" alt="Imagen 3" />
</div>
<button id="anterior">Anterior</button>
<button id="siguiente">Siguiente</button>
```

```javascript
const galeria = document.getElementById("galeria");
const imagenes = galeria.getElementsByTagName("img");
let indiceActual = 0;

function mostrarImagen(indice) {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";
  }
  imagenes[indice].style.display = "block";
}

function avanzarImagen() {
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }
  mostrarImagen(indiceActual);
}

function retrocederImagen() {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }
  mostrarImagen(indiceActual);
}

mostrarImagen(indiceActual);

const botonAnterior = document.getElementById("anterior");
botonAnterior.addEventListener("click", retrocederImagen);

const botonSiguiente = document.getElementById("siguiente");
botonSiguiente.addEventListener("click", avanzarImagen);
```

### 8. Manipulación de Eventos

La manipulación de eventos es esencial para crear aplicaciones web interactivas. JavaScript permite detectar y responder a eventos del usuario y del navegador. En esta sección, exploraremos cómo trabajar con eventos en el DOM.

#### 8.1 Event Listeners

Los event listeners son funciones que se ejecutan cuando ocurre un evento en un elemento específico. Puedes adjuntar y eliminar event listeners para responder a eventos como clics, cambios y movimientos del ratón.

##### 8.1.1 Uso de `addEventListener`

El método `addEventListener` te permite registrar event listeners en elementos del DOM. Aquí hay un ejemplo de cómo utilizarlo:

**Ejemplo: Agregar un event listener para el clic en un botón**

```html
<button id="miBoton">Haz clic</button>
```

```javascript
const boton = document.getElementById("miBoton");

function handleClick() {
  alert("¡Has hecho clic en el botón!");
}

boton.addEventListener("click", handleClick);
```

En este ejemplo, la función `handleClick` se ejecutará cuando se haga clic en el botón.

##### 8.1.2 Eliminación de Event Listeners

Puedes eliminar event listeners utilizando el método `removeEventListener`. Es útil cuando deseas detener la escucha de eventos en un elemento.

**Ejemplo: Eliminar un event listener después del primer clic**

```html
<button id="miBoton">Haz clic una vez</button>
```

```javascript
const boton = document.getElementById("miBoton");

function handleClick() {
  alert("¡Has hecho clic en el botón!");
  boton.removeEventListener("click", handleClick);
}

boton.addEventListener("click", handleClick);
```

En este ejemplo, el event listener se eliminará después del primer clic en el botón.

#### 8.2 Event Objects

Cuando ocurre un evento, se crea un objeto de evento que contiene información sobre el evento, como la posición del ratón, la tecla presionada y el elemento objetivo. Aquí hay ejemplos de algunas propiedades comunes del objeto de evento.

##### 8.2.1 Propiedades del Event Object

**Ejemplo: Acceder a la posición del ratón en un evento de clic**

```javascript
document.addEventListener("click", function (event) {
  console.log(`Posición X: ${event.clientX}, Posición Y: ${event.clientY}`);
});
```

En este ejemplo, el objeto de evento `event` contiene las coordenadas X e Y del lugar donde se hizo clic.

##### 8.2.2 Tipos de Eventos Comunes

Los eventos pueden ser de muchos tipos. A continuación, se muestran ejemplos de eventos comunes:

**Ejemplo: Eventos de ratón**

```javascript
const enlace = document.getElementById("miEnlace");

enlace.addEventListener("click", function (event) {
  console.log("Clic en el enlace");
});

enlace.addEventListener("mouseover", function (event) {
  console.log("El ratón entró en el enlace");
});

enlace.addEventListener("mouseout", function (event) {
  console.log("El ratón salió del enlace");
});
```

**Ejemplo: Eventos de teclado**

```javascript
document.addEventListener("keydown", function (event) {
  console.log(`Tecla presionada: ${event.key}`);
});

document.addEventListener("keyup", function (event) {
  console.log(`Tecla liberada: ${event.key}`);
});
```

#### 8.3 Event Bubbling y Capturing

Los eventos en el DOM siguen una propagación desde el elemento objetivo hacia el elemento raíz del documento. Este proceso se conoce como event bubbling. También puedes utilizar event capturing para capturar eventos en la fase de propagación.

##### 8.3.1 Event Bubbling

El event bubbling se refiere a la fase en la que un evento se propaga desde el elemento objetivo hacia arriba en la jerarquía del DOM, desde el elemento más interno al más externo. Esto significa que primero se ejecuta el event listener en el elemento más interno y luego los event listeners en los elementos contenedores a lo largo de la jerarquía hasta llegar al elemento raíz del documento (por lo general, el elemento `document`).

**Ejemplo: Event Bubbling**

```html
<div id="contenedor">
  <button id="boton">Haz clic</button>
</div>
```

```javascript
const contenedor = document.getElementById("contenedor");
const boton = document.getElementById("boton");

contenedor.addEventListener("click", function (event) {
  console.log("Evento en el contenedor");
});

boton.addEventListener("click", function (event) {
  console.log("Evento en el botón");
});
```

Cuando se hace clic en el botón, se activará el evento en el botón y luego en el contenedor, siguiendo la propagación de eventos hacia arriba.

##### 8.3.2 Event Capturing

El event capturing es la fase opuesta, en la que un evento se propaga desde el elemento raíz hacia abajo en la jerarquía del DOM hasta llegar al elemento objetivo. Esto significa que primero se ejecuta el event listener en el elemento raíz y luego los event listeners en los elementos descendientes, incluido el elemento objetivo.

**Ejemplo: Event Capturing**

```html
<div id="contenedor">
  <button id="boton">Haz clic</button>
</div>
```

```javascript
const contenedor = document.getElementById("contenedor");
const boton = document.getElementById("boton");

contenedor.addEventListener(
  "click",
  function (event) {
    console.log("Evento en el contenedor (capturing)");
  },
  true
); // El tercer parámetro "true" habilita el event capturing.

boton.addEventListener("click", function (event) {
  console.log("Evento en el botón");
});
```

En este ejemplo, el evento se activa en el contenedor durante la fase de captura, y luego en el botón.

#### 8.4 Eventos de Ratón y Teclado

Los eventos de ratón y teclado son comunes en aplicaciones web interactivas. Aquí tienes ejemplos de eventos de ratón y teclado:

**Ejemplo: Eventos de Ratón**

```javascript
const elemento = document.getElementById("miElemento");

elemento.addEventListener("mousedown", function (event) {
  console.log("Botón del ratón presionado");
});

elemento.addEventListener("mouseup", function (event) {
  console.log("Botón del ratón liberado");
});
```

**Ejemplo: Eventos de Teclado**

```javascript
document.addEventListener("keydown", function (event) {
  console.log(`Tecla presionada: ${event.key}`);
});

document.addEventListener("keyup", function (event) {
  console.log(`Tecla liberada: ${event.key}`);
});
```

### 9. BIBLIOGRAFÍA

1. **Introducción al DOM:**

   - Mozilla Developer Network (MDN). (s.f.). "Introducing the DOM." [https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

2. **Elementos del DOM:**

   - MDN. (s.f.). "Document.getElementById()." [https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
   - MDN. (s.f.). "Document.getElementsByClassName()." [https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
   - MDN. (s.f.). "Document.getElementsByTagName()." [https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)
   - MDN. (s.f.). "Document.querySelector()." [https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

3. **Navegación y Manipulación del DOM:**

   - MDN. (s.f.). "Traversing an HTML Document." [https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_document](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_document)
   - MDN. (s.f.). "ParentNode." [https://developer.mozilla.org/en-US/docs/Web/API/ParentNode](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode)

4. **Estilos y Medición:**

   - MDN. (s.f.). "HTMLElement.style." [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
   - MDN. (s.f.). "Element.offsetWidth." [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth)
   - MDN. (s.f.). "Window.getComputedStyle()." [https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

5. **Manipulación de Formularios:**

   - MDN. (s.f.). "HTMLFormElement." [https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement)
   - MDN. (s.f.). "FormEvent." [https://developer.mozilla.org/en-US/docs/Web/API/FormEvent](https://developer.mozilla.org/en-US/docs/Web/API/FormEvent)

6. **Manipulación de Atributos de Datos:**

   - MDN. (s.f.). "Using data attributes." [https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

7. **Trabajo con Imágenes:**

   - MDN. (s.f.). "Working with images." [https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)

8. **Manipulación de Eventos:**
   - MDN. (s.f.). "Introduction to events." [https://developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events)
   - MDN. (s.f.). "Event." [https://developer.mozilla.org/en-US/docs/Web/API/Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
9. **Más información de JavaScript: :bookmark:**
   - GitHub. "Apuntes de GitHub generados por mí para el curso de DWEC." [https://github.com/isaiasfl/ApuntesDWEC](https://github.com/isaiasfl/ApuntesDWEC)

---

[Volver al índice general](../INDICE_GENERAL.md)
