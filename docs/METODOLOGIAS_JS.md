# Metodologías de programación en JavaScript

[Volver al índice general](../INDICE_GENERAL.md)

Esta guía explica las formas más comunes de plantear un programa en JavaScript. Es importante porque React y Angular no eliminan estas metodologías: las organizan mejor.

---

## 1. Imperativa

Dice al ordenador paso a paso qué hacer.

```javascript
const numeros = [1, 2, 3];
const resultado = [];

for (const numero of numeros) {
  if (numero % 2 === 0) {
    resultado.push(numero * 2);
  }
}
```

Ventaja: fácil de entender al principio.

Inconveniente: crece mal si mezclas datos, lógica y renderizado.

---

## 2. Declarativa

Dice qué resultado quieres obtener.

```javascript
const resultado = [1, 2, 3]
  .filter((numero) => numero % 2 === 0)
  .map((numero) => numero * 2);
```

Ventaja: más corta y más clara para transformaciones de datos.

React se apoya mucho en esta forma de pensar.

---

## 3. Funcional

Trabaja con funciones puras y composición.

```javascript
const sumar = (a, b) => a + b;
const duplicar = (numero) => numero * 2;
const aplicar = (fn, valor) => fn(valor);

aplicar(duplicar, 5);
```

Reglas útiles:

- evita efectos secundarios innecesarios;
- no mutar datos si puedes devolver una copia;
- usa funciones pequeñas y componibles.

---

## 4. Orientada a objetos

Modela entidades con datos y comportamiento.

```javascript
class Tarea {
  constructor(texto) {
    this.texto = texto;
    this.completada = false;
  }

  completar() {
    this.completada = true;
  }
}
```

En JavaScript moderno esta metodología existe, pero en frontend educativo suele ser mejor mezclarla con funciones y módulos, no abusar de clases por inercia.

---

## 5. Basada en eventos

React y el DOM se basan en eventos: click, input, submit, focus, change.

```javascript
document.querySelector("#form").addEventListener("submit", (evento) => {
  evento.preventDefault();
});
```

Si entiendes eventos bien, entiendes la mitad de una app de interfaz.

---

## 6. Reactiva

La UI se actualiza cuando cambia el estado o una señal.

En vanilla:

```javascript
estado.tareas = [...estado.tareas, nuevaTarea];
render();
```

En React:

```jsx
setTareas((actuales) => [...actuales, nuevaTarea]);
```

En Angular:

```typescript
tareas.update((actuales) => [...actuales, nuevaTarea]);
```

---

## 7. Modular

Divide el problema en piezas pequeñas:

- `state.js`
- `render.js`
- `events.js`
- `storage.js`
- `api.js`

Esta es la metodología que más ayuda a pasar de JavaScript a frameworks sin sufrir.

---

## 8. Basada en componentes

Es la organización típica de React y Angular.

- Un componente recibe datos.
- Devuelve una vista.
- Reacciona a eventos.
- Puede componerse con otros componentes.

---

## 9. Qué debe saber el alumno

- Qué diferencia hay entre escribir de forma imperativa y declarativa.
- Qué aporta la programación funcional.
- Cuándo tiene sentido una clase y cuándo no.
- Por qué los eventos no son un detalle menor.
- Cómo cambiar estado sin mezclarlo con la vista.
- Cómo modularizar una app pequeña para que escale.

---

[Volver al índice general](../INDICE_GENERAL.md)
