import assert from "node:assert/strict";

export function obtenerPais(objeto) {
  return objeto.pais ?? "No se encuentra";
}

export function tienePropiedad(objeto, clave) {
  return Object.hasOwn(objeto, clave);
}

export function eliminarClave(objeto, clave) {
  const copia = { ...objeto };
  delete copia[clave];
  return copia;
}

export function sumarTemperaturas(objeto) {
  return Object.values(objeto).reduce((total, valor) => {
    return typeof valor === "number" ? total + valor : total;
  }, 0);
}

assert.equal(obtenerPais({ continente: "Europa", pais: "España" }), "España");
assert.equal(obtenerPais({ continente: "Europa" }), "No se encuentra");
assert.equal(tienePropiedad({ a: 1, b: 2 }, "b"), true);
assert.equal(tienePropiedad({ a: 1 }, "b"), false);
assert.deepEqual(eliminarClave({ a: 1, b: 2, c: 3 }, "b"), { a: 1, c: 3 });
assert.equal(sumarTemperaturas({ enero: 10, febrero: 12, marzo: "x" }), 22);

console.log("Todos los tests de objetos han pasado.");
