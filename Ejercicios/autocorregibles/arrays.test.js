import assert from "node:assert/strict";

// El alumnado debe implementar estas funciones.
// La idea es que cada función sea pura: mismo input, mismo output.

export function sumarNumeros(numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

export function filtrarPares(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}

export function obtenerNombres(alumnos) {
  return alumnos.map((alumno) => alumno.nombre);
}

export function agruparPorEstado(tareas) {
  return tareas.reduce((grupos, tarea) => {
    const estado = tarea.estado;

    return {
      ...grupos,
      [estado]: [...(grupos[estado] ?? []), tarea],
    };
  }, {});
}

assert.equal(sumarNumeros([1, 2, 3, 4]), 10);
assert.deepEqual(filtrarPares([1, 2, 3, 4, 5, 6]), [2, 4, 6]);
assert.deepEqual(
  obtenerNombres([
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 7 },
  ]),
  ["Ana", "Luis"],
);
assert.deepEqual(
  agruparPorEstado([
    { id: 1, texto: "Repasar", estado: "pendiente" },
    { id: 2, texto: "Entregar", estado: "completada" },
    { id: 3, texto: "Practicar", estado: "pendiente" },
  ]),
  {
    pendiente: [
      { id: 1, texto: "Repasar", estado: "pendiente" },
      { id: 3, texto: "Practicar", estado: "pendiente" },
    ],
    completada: [{ id: 2, texto: "Entregar", estado: "completada" }],
  },
);

console.log("Todos los tests de arrays han pasado.");
