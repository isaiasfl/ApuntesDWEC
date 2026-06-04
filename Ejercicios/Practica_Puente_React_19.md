# Práctica puente: de JavaScript vanilla a React 19

Esta práctica sirve para conectar lo aprendido en JavaScript con la forma de pensar que se usa en React: estado, renderizado declarativo, componentes, eventos, formularios y asincronía.

La idea es construir primero una miniaplicación en JavaScript vanilla y después reconocer cómo se traduciría a React 19.

---

## Objetivos

- Separar datos, lógica y vista.
- Pintar la interfaz desde un estado.
- Evitar mutaciones innecesarias.
- Controlar eventos de usuario.
- Validar formularios.
- Consumir una API con `fetch`.
- Preparar la mentalidad de componentes.
- Entender qué hacen `useState`, `useEffect` y `useActionState` antes de usarlos.

---

## 1. Estado inicial

En React se habla mucho de "estado". En JavaScript vanilla también podemos practicarlo con un objeto central.

```javascript
const estado = {
  filtro: "todas",
  cargando: false,
  error: "",
  tareas: [
    { id: 1, texto: "Repasar arrays", completada: true },
    { id: 2, texto: "Practicar fetch", completada: false },
  ],
};
```

Regla: la pantalla debe salir siempre de `estado`. Si cambia el estado, se vuelve a renderizar.

---

## 2. Renderizado declarativo en vanilla

```html
<main>
  <h1>Gestor de tareas DWEC</h1>

  <form id="formulario-tarea">
    <input id="texto-tarea" name="texto" placeholder="Nueva tarea" />
    <button>Añadir</button>
  </form>

  <section id="app"></section>
</main>
```

```javascript
const app = document.querySelector("#app");

function obtenerTareasVisibles() {
  if (estado.filtro === "pendientes") {
    return estado.tareas.filter((tarea) => !tarea.completada);
  }

  if (estado.filtro === "completadas") {
    return estado.tareas.filter((tarea) => tarea.completada);
  }

  return estado.tareas;
}

function render() {
  const tareasVisibles = obtenerTareasVisibles();

  app.innerHTML = `
    <p>Total: ${estado.tareas.length}</p>
    <p>Pendientes: ${estado.tareas.filter((tarea) => !tarea.completada).length}</p>

    <div>
      <button data-filtro="todas">Todas</button>
      <button data-filtro="pendientes">Pendientes</button>
      <button data-filtro="completadas">Completadas</button>
    </div>

    <ul>
      ${tareasVisibles
        .map(
          (tarea) => `
            <li>
              <label>
                <input
                  type="checkbox"
                  data-id="${tarea.id}"
                  ${tarea.completada ? "checked" : ""}
                />
                ${tarea.texto}
              </label>
              <button data-borrar="${tarea.id}">Borrar</button>
            </li>
          `,
        )
        .join("")}
    </ul>
  `;
}

render();
```

En React, esta función `render()` se reparte en componentes.

---

## 3. Eventos como acciones

```javascript
document.querySelector("#formulario-tarea").addEventListener("submit", (evento) => {
  evento.preventDefault();

  const formData = new FormData(evento.currentTarget);
  const texto = formData.get("texto")?.trim();

  if (!texto) {
    estado.error = "La tarea no puede estar vacía";
    render();
    return;
  }

  estado.tareas = [
    ...estado.tareas,
    {
      id: crypto.randomUUID(),
      texto,
      completada: false,
    },
  ];

  estado.error = "";
  evento.currentTarget.reset();
  render();
});
```

La acción del usuario no toca directamente toda la pantalla. Cambia el estado y después se renderiza.

---

## 4. Delegación de eventos

```javascript
app.addEventListener("click", (evento) => {
  const botonFiltro = evento.target.closest("[data-filtro]");
  const botonBorrar = evento.target.closest("[data-borrar]");

  if (botonFiltro) {
    estado.filtro = botonFiltro.dataset.filtro;
    render();
  }

  if (botonBorrar) {
    const id = botonBorrar.dataset.borrar;
    estado.tareas = estado.tareas.filter((tarea) => String(tarea.id) !== id);
    render();
  }
});

app.addEventListener("change", (evento) => {
  const checkbox = evento.target.closest("input[type='checkbox'][data-id]");

  if (!checkbox) {
    return;
  }

  const id = checkbox.dataset.id;

  estado.tareas = estado.tareas.map((tarea) =>
    String(tarea.id) === id
      ? { ...tarea, completada: checkbox.checked }
      : tarea,
  );

  render();
});
```

Esto prepara para React porque en React también se trabaja con eventos que actualizan estado.

---

## 5. Persistencia con localStorage

```javascript
const CLAVE_STORAGE = "dwec:tareas";

function guardarTareas() {
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(estado.tareas));
}

function cargarTareas() {
  const tareasGuardadas = localStorage.getItem(CLAVE_STORAGE);

  if (!tareasGuardadas) {
    return;
  }

  try {
    estado.tareas = JSON.parse(tareasGuardadas);
  } catch {
    estado.tareas = [];
  }
}
```

Mejora propuesta: llamar a `guardarTareas()` cada vez que se añade, borra o completa una tarea.

---

## 6. Fetch con estados de carga y error

```javascript
async function cargarTareasRemotas() {
  try {
    estado.cargando = true;
    estado.error = "";
    render();

    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

    if (!respuesta.ok) {
      throw new Error(`Error HTTP ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    estado.tareas = datos.map((tarea) => ({
      id: tarea.id,
      texto: tarea.title,
      completada: tarea.completed,
    }));
  } catch (error) {
    estado.error = error.message;
  } finally {
    estado.cargando = false;
    render();
  }
}
```

En React, este patrón suele aparecer con `useEffect`, un loader del framework o una acción.

---

## 7. Traducción mental a React

### Vanilla: añadir una tarea

```javascript
estado.tareas = [...estado.tareas, nuevaTarea];
render();
```

### React: añadir una tarea

```jsx
setTareas((tareasActuales) => [...tareasActuales, nuevaTarea]);
```

### Vanilla: pintar una lista

```javascript
app.innerHTML = tareas.map(crearHtmlTarea).join("");
```

### React: pintar una lista

```jsx
return tareas.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />);
```

---

## 8. Versión conceptual en React 19

```jsx
import { useActionState, useState } from "react";

async function crearTarea(estadoAnterior, formData) {
  const texto = formData.get("texto")?.trim();

  if (!texto) {
    return { ok: false, mensaje: "La tarea no puede estar vacía" };
  }

  return {
    ok: true,
    mensaje: "Tarea creada",
    tarea: {
      id: crypto.randomUUID(),
      texto,
      completada: false,
    },
  };
}

export function App() {
  const [tareas, setTareas] = useState([]);
  const [estadoFormulario, accionCrearTarea, pendiente] = useActionState(
    async (estadoAnterior, formData) => {
      const resultado = await crearTarea(estadoAnterior, formData);

      if (resultado.ok) {
        setTareas((tareasActuales) => [...tareasActuales, resultado.tarea]);
      }

      return resultado;
    },
    { ok: null, mensaje: "" },
  );

  return (
    <main>
      <h1>Gestor de tareas DWEC</h1>

      <form action={accionCrearTarea}>
        <input name="texto" placeholder="Nueva tarea" />
        <button disabled={pendiente}>
          {pendiente ? "Guardando..." : "Añadir"}
        </button>
      </form>

      {estadoFormulario.mensaje && <p>{estadoFormulario.mensaje}</p>}

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.texto}</li>
        ))}
      </ul>
    </main>
  );
}
```

---

## 9. Retos para entregar

1. Añadir validación de longitud mínima: una tarea debe tener al menos 3 caracteres.
2. Mostrar un mensaje de error debajo del formulario.
3. Crear filtros: todas, pendientes y completadas.
4. Persistir las tareas en `localStorage`.
5. Cargar tareas iniciales desde una API.
6. Separar el código vanilla en módulos.
7. Crear una versión React con componentes: `App`, `FormularioTarea`, `ListaTareas`, `Tarea`, `Filtros`.
8. Explicar en un README corto que partes del proyecto vanilla se traducen a `state`, `props`, `events` y `effects`.

---

## 10. Checklist antes de empezar React

- Sé usar `map`, `filter`, `find`, `some`, `every` y `reduce`.
- Sé copiar arrays y objetos sin mutarlos directamente.
- Sé usar destructuring en parámetros de funciones.
- Sé crear y consumir módulos ES.
- Sé controlar formularios con `FormData`.
- Sé usar `fetch` con `try/catch`.
- Sé pintar una interfaz desde un objeto de estado.
- Sé explicar qué es un componente.
- Sé diferenciar evento, estado, renderizado y efecto.

---

[Volver al índice general](../INDICE_GENERAL.md)
