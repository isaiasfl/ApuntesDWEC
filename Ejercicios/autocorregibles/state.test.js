import assert from "node:assert/strict";

export function crearEstadoInicial() {
  return {
    tareas: [],
    filtro: "todas",
    cargando: false,
    error: "",
  };
}

export function agregarTarea(estado, texto) {
  const textoLimpio = String(texto).trim();

  if (!textoLimpio) {
    return estado;
  }

  return {
    ...estado,
    tareas: [
      ...estado.tareas,
      {
        id: crypto.randomUUID(),
        texto: textoLimpio,
        completada: false,
      },
    ],
  };
}

export function cambiarFiltro(estado, filtro) {
  return {
    ...estado,
    filtro,
  };
}

export function actualizarTarea(estado, id, cambios) {
  return {
    ...estado,
    tareas: estado.tareas.map((tarea) => {
      if (tarea.id !== id) return tarea;

      return {
        ...tarea,
        ...cambios,
      };
    }),
  };
}

export function obtenerTareasVisibles(estado) {
  if (estado.filtro === "pendientes") {
    return estado.tareas.filter((tarea) => !tarea.completada);
  }

  if (estado.filtro === "completadas") {
    return estado.tareas.filter((tarea) => tarea.completada);
  }

  return estado.tareas;
}

assert.deepEqual(crearEstadoInicial(), {
  tareas: [],
  filtro: "todas",
  cargando: false,
  error: "",
});

const estadoBase = crearEstadoInicial();
const estadoConTarea = agregarTarea(estadoBase, "  Estudiar React  ");

assert.equal(estadoBase.tareas.length, 0);
assert.equal(estadoConTarea.tareas.length, 1);
assert.equal(estadoConTarea.tareas[0].texto, "Estudiar React");
assert.equal(estadoConTarea.tareas[0].completada, false);
assert.equal(typeof estadoConTarea.tareas[0].id, "string");

const estadoConFiltro = cambiarFiltro(estadoConTarea, "pendientes");
assert.equal(estadoConFiltro.filtro, "pendientes");
assert.equal(estadoConTarea.filtro, "todas");

const estadoActualizado = actualizarTarea(estadoConTarea, estadoConTarea.tareas[0].id, {
  completada: true,
});

assert.equal(estadoActualizado.tareas[0].completada, true);
assert.equal(estadoConTarea.tareas[0].completada, false);

const estadoConVarias = {
  ...estadoConTarea,
  tareas: [
    ...estadoConTarea.tareas,
    { id: "2", texto: "Repasar arrays", completada: true },
  ],
};

assert.deepEqual(
  obtenerTareasVisibles({ ...estadoConVarias, filtro: "pendientes" }),
  [
    {
      id: estadoConTarea.tareas[0].id,
      texto: "Estudiar React",
      completada: false,
    },
  ],
);

assert.deepEqual(
  obtenerTareasVisibles({ ...estadoConVarias, filtro: "completadas" }),
  [{ id: "2", texto: "Repasar arrays", completada: true }],
);

assert.deepEqual(
  obtenerTareasVisibles({ ...estadoConVarias, filtro: "todas" }),
  estadoConVarias.tareas,
);

console.log("Todos los tests de estado han pasado.");
