# Ruta puente: de JavaScript moderno a React 19 y Angular

Esta guía separa la parte de frameworks del README principal. El objetivo es que el alumnado vea la relación directa entre lo aprendido en JavaScript vanilla y lo que después aparece en React o Angular.

---

## 1. Idea principal

React y Angular no sustituyen JavaScript. Organizan de forma más predecible problemas que ya aparecen en JavaScript vanilla:

- Pintar datos.
- Reaccionar a eventos.
- Mantener estado.
- Validar formularios.
- Consumir APIs.
- Separar lógica y vista.
- Reutilizar piezas de interfaz.

---

## 2. Traducción de conceptos

| Problema | JavaScript vanilla | React 19 | Angular |
| --- | --- | --- | --- |
| Pintar HTML | `innerHTML`, `createElement` | JSX | Templates |
| Dividir UI | funciones que devuelven nodos | componentes | componentes |
| Datos de entrada | parámetros | props | inputs |
| Estado local | objeto `estado` | `useState`, `useReducer` | signals / propiedades |
| Eventos | `addEventListener` | `onClick`, `onSubmit` | `(click)`, `(submit)` |
| Formularios | `FormData` | Actions, `useActionState` | Reactive Forms |
| Efectos | código tras render/evento | `useEffect`, `useEffectEvent` | lifecycle / effects |
| API HTTP | `fetch` | efectos, actions o framework | `HttpClient` |
| Persistencia | `localStorage` | estado + efecto | servicio |

---

## 3. Patrón vanilla recomendado antes de React

```javascript
const estado = {
  tareas: [],
  filtro: "todas",
  cargando: false,
  error: "",
};

function agregarTarea(texto) {
  estado.tareas = [
    ...estado.tareas,
    { id: crypto.randomUUID(), texto, completada: false },
  ];

  render();
}

function render() {
  document.querySelector("#app").innerHTML = estado.tareas
    .map((tarea) => `<li>${tarea.texto}</li>`)
    .join("");
}
```

Este patrón prepara tres ideas clave:

- El estado es la fuente de verdad.
- La interfaz se deriva del estado.
- Los eventos cambian el estado.

---

## 4. La misma idea en React 19

```jsx
import { useState } from "react";

export function App() {
  const [tareas, setTareas] = useState([]);

  function agregarTarea(texto) {
    setTareas((tareasActuales) => [
      ...tareasActuales,
      { id: crypto.randomUUID(), texto, completada: false },
    ]);
  }

  return (
    <main>
      <FormularioTarea onCrear={agregarTarea} />
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

## 5. La misma idea en Angular

```typescript
import { Component, signal } from '@angular/core';

type Tarea = {
  id: string;
  texto: string;
  completada: boolean;
};

@Component({
  selector: 'app-root',
  template: `
    <main>
      <form (submit)="agregarTarea($event)">
        <input name="texto" placeholder="Nueva tarea" />
        <button>Añadir</button>
      </form>

      <ul>
        @for (tarea of tareas(); track tarea.id) {
          <li>{{ tarea.texto }}</li>
        }
      </ul>
    </main>
  `,
})
export class AppComponent {
  tareas = signal<Tarea[]>([]);

  agregarTarea(evento: SubmitEvent) {
    evento.preventDefault();

    const form = evento.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const texto = String(formData.get('texto') ?? '').trim();

    if (!texto) return;

    this.tareas.update((actuales) => [
      ...actuales,
      { id: crypto.randomUUID(), texto, completada: false },
    ]);

    form.reset();
  }
}
```

---

## 6. Checklist antes de empezar frameworks

- Sé explicar qué es el estado.
- Sé renderizar una lista desde un array.
- Sé usar `map`, `filter`, `find`, `some`, `every` y `reduce`.
- Sé copiar objetos y arrays con spread.
- Sé usar eventos de formulario.
- Sé validar datos antes de guardarlos.
- Sé consumir una API con `fetch`.
- Sé manejar carga, éxito y error.
- Sé separar código en módulos.
- Sé explicar qué parte de mi código sería un componente.

---

## 7. Proyecto puente recomendado

Crear un **gestor de tareas académico** en tres pasos:

1. JavaScript vanilla modular.
2. React 19 con componentes y estado.
3. Angular con componentes, signals y servicio de datos.

Requisitos comunes:

- Crear tareas.
- Completar tareas.
- Borrar tareas.
- Filtrar por estado.
- Guardar en `localStorage`.
- Cargar datos iniciales desde API.
- Mostrar estados de carga y error.

---

[Volver al índice general](../INDICE_GENERAL.md)
