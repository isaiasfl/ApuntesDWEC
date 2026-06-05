import assert from "node:assert/strict";

export function esNumeroValido(valor) {
  return typeof valor === "number" && !Number.isNaN(valor);
}

export function normalizarTexto(texto) {
  return texto.trim().toLowerCase();
}

export function crearTarea(texto) {
  return {
    id: crypto.randomUUID(),
    texto: texto.trim(),
    completada: false,
  };
}

assert.equal(esNumeroValido(42), true);
assert.equal(esNumeroValido(Number.NaN), false);
assert.equal(normalizarTexto("  Hola Mundo  "), "hola mundo");

const tarea = crearTarea("  Estudiar JavaScript  ");
assert.equal(tarea.texto, "Estudiar JavaScript");
assert.equal(tarea.completada, false);
assert.equal(typeof tarea.id, "string");

console.log("Todos los tests de funciones han pasado.");
