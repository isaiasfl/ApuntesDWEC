# Clean Code aplicado a JavaScript

[Volver al índice general](../INDICE_GENERAL.md)

Esta guía resume criterios de código limpio para las prácticas de JavaScript del repositorio. No es teoría decorativa: debe aplicarse en ejercicios, miniapps vanilla y preparación para React/Angular.

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

---

## 2. Funciones pequeñas

Una función debe hacer una cosa concreta.

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

---

## 8. Relación con React y Angular

| Clean Code en JS | React | Angular |
| --- | --- | --- |
| Funciones pequeñas | componentes pequeños / custom hooks | componentes y servicios |
| Estado separado | `useState`, `useReducer` | signals / servicios |
| Render desde datos | JSX declarativo | templates |
| Validadores aislados | lógica reutilizable | validators |
| API aislada | actions/loaders/services | `HttpClient` service |

---

[Volver al índice general](../INDICE_GENERAL.md)
