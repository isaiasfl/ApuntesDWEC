# Clean Code aplicado a JavaScript

[Volver al índice general](../INDICE_GENERAL.md)

Clean Code no es una marca ni una receta cerrada. En este repositorio lo usamos como un conjunto de criterios prácticos para escribir código comprensible, mantenible y fácil de probar.

Se fundamenta en tres ideas:

- Legibilidad: el código debe poder leerse sin interpretar cada línea como un acertijo.
- Mantenibilidad: cambiar una parte no debería romper media aplicación.
- Testabilidad: si el código está bien separado, se puede comprobar mejor.

Esta guía resume criterios de código limpio para las prácticas de JavaScript del repositorio. No es teoría decorativa: debe aplicarse en ejercicios, miniapps vanilla y preparación para React/Angular.

## 0. En qué se basa

La idea clásica de Clean Code viene de prácticas de ingeniería de software orientadas a:

- escribir código que se pueda leer meses después;
- reducir la complejidad accidental;
- separar responsabilidades;
- evitar duplicar lógica;
- dejar pruebas fáciles de ejecutar.

En este repositorio eso se traduce en una regla simple: si una práctica no se puede explicar rápido, probablemente mezcla demasiadas cosas.

### Lo que sí es

- código con nombres claros;
- funciones pequeñas y orientadas a una sola tarea;
- estado aislado de la vista;
- entradas validadas antes de modificar datos;
- errores controlados;
- módulos con responsabilidades concretas.

### Lo que no es

- escribir comentarios para justificar un mal diseño;
- usar clases por costumbre;
- hacer funciones minúsculas pero con nombres confusos;
- convertir el ejercicio en una estructura artificial;
- reescribir todo sin necesidad.

---

## 1. Nombres claros

Evita nombres genéricos:

```javascript
// Evitar
function calc(x, y) {
  return x + y;
}

// Mejor
function calcularTotal(precio, impuestos) {
  return precio + impuestos;
}
```

Regla: el nombre debe explicar la intención sin necesitar un comentario.

Si el nombre no puede ser claro, probablemente la función está haciendo demasiado.

---

## 2. Funciones pequeñas

Una función debe hacer una cosa concreta.

Una función larga no siempre está mal, pero una función con varias responsabilidades suele ser una señal de diseño confuso.

```javascript
function validarTextoTarea(texto) {
  return texto.trim().length >= 3;
}

function crearTarea(texto) {
  return {
    id: crypto.randomUUID(),
    texto: texto.trim(),
    completada: false,
  };
}
```

---

## 3. Separar estado, render y eventos

```javascript
// state.js
export const estado = {
  tareas: [],
  filtro: "todas",
};
```

```javascript
// render.js
export function renderTareas(tareas) {
  return tareas.map((tarea) => `<li>${tarea.texto}</li>`).join("");
}
```

```javascript
// events.js
export function registrarEventos({ onCrearTarea }) {
  document.querySelector("#form").addEventListener("submit", (evento) => {
    evento.preventDefault();
    const formData = new FormData(evento.currentTarget);
    onCrearTarea(String(formData.get("texto") ?? ""));
  });
}
```

Esta separación prepara directamente para componentes, hooks y servicios.

Cuando una práctica crece, este patrón evita que todo termine mezclado en un único archivo `main.js`.

---

## 4. Evitar mutaciones accidentales

```javascript
const tareasActualizadas = tareas.map((tarea) =>
  tarea.id === id ? { ...tarea, completada: true } : tarea,
);
```

Este patrón es más fácil de llevar a React que modificar el objeto original.

---

## 5. Controlar errores

```javascript
async function fetchJSON(url) {
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}`);
  }

  return respuesta.json();
}
```

Toda práctica con API debe contemplar:

- carga;
- éxito;
- error;
- reintento o nueva búsqueda.

Eso es parte del Clean Code en frontend: no solo “traer datos”, sino definir cómo se comporta la interfaz cuando algo falla.

---

## 6. Comentarios útiles

Un comentario debe explicar intención, decisión o contexto. No debe repetir lo que el código ya dice.

```javascript
// Bien: explica una decisión.
// Creamos un nuevo array para evitar mutar el estado original.
const nuevasTareas = [...tareas, nuevaTarea];

// Mal: repite el código.
// Sumamos uno al contador.
contador++;
```

---

## 7. Checklist para entregar prácticas

- [ ] Los nombres de variables y funciones son claros.
- [ ] Cada función tiene una responsabilidad concreta.
- [ ] La lógica de datos no está mezclada con el DOM.
- [ ] Los eventos llaman a funciones con intención clara.
- [ ] No se mutan arrays u objetos sin necesidad.
- [ ] Las llamadas `fetch` controlan errores.
- [ ] Hay estados visuales de carga y error.
- [ ] El código está dividido en módulos cuando la práctica crece.
- [ ] Los comentarios explican decisiones, no instrucciones obvias.
- [ ] El código se puede explicar en voz alta.

## 8. Ejercicios de refactor

1. Toma una práctica que tenga `innerHTML` y extrae una función `render`.
2. Toma una función larga y divídela en dos funciones pequeñas.
3. Toma un objeto estado global y separa `state`, `render`, `events` y `storage`.
4. Toma una llamada `fetch` sin control de error y conviértela en `fetchJSON`.
5. Toma un array mutado con `push` y cámbialo por una versión inmutable con spread.
6. Toma una validación de formulario dentro del DOM y muévela a una función pura.

---

## 9. Relación con React y Angular

| Clean Code en JS | React | Angular |
| --- | --- | --- |
| Funciones pequeñas | componentes pequeños / custom hooks | componentes y servicios |
| Estado separado | `useState`, `useReducer` | signals / servicios |
| Render desde datos | JSX declarativo | templates |
| Validadores aislados | lógica reutilizable | validators |
| API aislada | actions/loaders/services | `HttpClient` service |

---

[Volver al índice general](../INDICE_GENERAL.md)
