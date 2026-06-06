# **Capítulo 9. Contenido 📝** 🖥️

- [**Capítulo 9. Contenido 📝** 🖥️](#capítulo-9-contenido--️)
- [9. Conjuntos (Sets) en JavaScript](#9-conjuntos-sets-en-javascript)
  - [9.1 Creación de un Conjunto](#91-creación-de-un-conjunto)
  - [9.2 Agregar Elementos](#92-agregar-elementos)
  - [9.3 Eliminar Elementos](#93-eliminar-elementos)
  - [9.4 Verificar la Existencia y Acceder a los Elementos](#94-verificar-la-existencia-y-acceder-a-los-elementos)
  - [9.5 Tamaño del Conjunto](#95-tamaño-del-conjunto)
  - [9.6 Iterar a través de un Conjunto](#96-iterar-a-través-de-un-conjunto)
  - [9.7 Convertir un Conjunto a un Array](#97-convertir-un-conjunto-a-un-array)
  - [9.8 Eliminar Duplicados de un Array](#98-eliminar-duplicados-de-un-array)
  - [9.9 Realizar Operaciones de Conjunto](#99-realizar-operaciones-de-conjunto)
  - [9.10 Más Ejemplos de Operaciones de Conjunto](#910-más-ejemplos-de-operaciones-de-conjunto)
    - [Verificar la Igualdad de Conjuntos](#verificar-la-igualdad-de-conjuntos)
    - [Comprobar si un Conjunto es Subconjunto de Otro](#comprobar-si-un-conjunto-es-subconjunto-de-otro)
    - [Eliminar Todos los Elementos de un Conjunto](#eliminar-todos-los-elementos-de-un-conjunto)
  - [Usar Objetos y Tipos no Primitivos en un Conjunto](#usar-objetos-y-tipos-no-primitivos-en-un-conjunto)
  - [Iterar Usando el Método `forEach()`](#iterar-usando-el-método-foreach)
  - [9.11 Métodos nativos de conjuntos (ES2025)](#911-métodos-nativos-de-conjuntos-es2025)
  - [9.12 Uso de Conjuntos en Conjunción con Arrays](#912-uso-de-conjuntos-en-conjunción-con-arrays)
  - [9.13 Resumen: Limitaciones de los Conjuntos ⏱](#913-resumen-limitaciones-de-los-conjuntos-)

---

# 9. Conjuntos (Sets) en JavaScript

Los conjuntos, también conocidos como **Sets**, son una estructura de datos en JavaScript que almacenan colecciones de elementos únicos. Esto significa que no puede haber elementos duplicados en un conjunto. Los conjuntos son útiles cuando necesitas mantener una lista de elementos únicos y realizar operaciones como agregar, eliminar y verificar la existencia de elementos.
Para inicializar un Set podríamos usar un iterable como una matriz o un string.
Además, mantiene el mismo orden (cosa que no pasa con otras estructuras como los objetos) en que hemos definido los elementos que pertenecen a mi estructura Set.

## 9.1 Creación de un Conjunto

Puedes crear un conjunto vacío de la siguiente manera:

```javascript
const miSet = new Set();
```

También puedes crear un conjunto inicializado con elementos:

```javascript
const animales = new Set(["perro", "gato", "canario"]);
```

## 9.2 Agregar Elementos

Para agregar un elemento a un conjunto, puedes usar el método `add()`:

```javascript
animales.add("conejo");
```

## 9.3 Eliminar Elementos

Puedes eliminar un elemento de un conjunto utilizando el método `delete()`:

```javascript
animales.delete("gato");
```

## 9.4 Verificar la Existencia y Acceder a los Elementos

No podemos usar un índice dado que el set no tiene índices por tanto sólo podemos usar el método `has()` que comprueba si existe el elemento en el Set.
Puedes verificar si un elemento existe en un conjunto utilizando el método `has()`:

```javascript
if (animales.has("perro")) {
  console.log("perro está en el conjunto de animales.");
} else {
  console.log("El perro no está en el conjunto de animales.");
}
```

## 9.5 Tamaño del Conjunto

Puedes obtener el tamaño de un conjunto usando la propiedad `size`:

```javascript
const tamaño = animales.size;
console.log(`El tamaño del conjunto de animales es ${tamaño}.`);
```

## 9.6 Iterar a través de un Conjunto

Puedes recorrer los elementos de un conjunto utilizando un bucle `for...of`:

```javascript
for (let animal of animales) {
  console.log(animal);
}
```

## 9.7 Convertir un Conjunto a un Array

Si necesitas convertir un conjunto en un array, puedes hacerlo de la siguiente manera:

```javascript
const arrayDeanimales = Array.from(animales);
```

Aunque hay otra forma más rápida:

```javascript
const arrayDeanimales = [ ...animales ];
```

> Esto se debe a que los tres puntos (`...`) en este contexto se conocen como el operador de propagación (spread operator), y se utiliza para descomponer los elementos de un objeto iterable (como un conjunto) en elementos individuales, que luego se pueden utilizar para construir un nuevo array.

## 9.8 Eliminar Duplicados de un Array

Puedes usar un conjunto para eliminar elementos duplicados de un array:

```javascript
const arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
const conjuntoSinDuplicados = new Set(arrayConDuplicados);
const arraySinDuplicados = Array.from(conjuntoSinDuplicados);
console.log(arraySinDuplicados); // Resultado: [1, 2, 3, 4, 5]
```

## 9.9 Realizar Operaciones de Conjunto

Puedes realizar operaciones de conjuntos como unión, intersección y diferencia usando conjuntos:

```javascript
const conjuntoA = new Set([1, 2, 3, 4]);
const conjuntoB = new Set([3, 4, 5, 6]);

// Unión de conjuntos
const union = new Set([...conjuntoA, ...conjuntoB]);

// Intersección de conjuntos
const interseccion = new Set([...conjuntoA].filter((x) => conjuntoB.has(x)));

// Diferencia de conjuntos
const diferencia = new Set([...conjuntoA].filter((x) => !conjuntoB.has(x)));

console.log("Unión:", union);
console.log("Intersección:", interseccion);
console.log("Diferencia:", diferencia);
```

Claro, aquí tienes más ejemplos y funcionalidades del objeto `Set` en JavaScript:

## 9.10 Más Ejemplos de Operaciones de Conjunto

### Verificar la Igualdad de Conjuntos

Puedes verificar si dos conjuntos son iguales comparándolos elemento por elemento:

```javascript
const conjunto1 = new Set([1, 2, 3]);
const conjunto2 = new Set([3, 2, 1]);

function sonIguales(conjuntoA, conjuntoB) {
  if (conjuntoA.size !== conjuntoB.size) {
    return false;
  }
  for (const elemento of conjuntoA) {
    if (!conjuntoB.has(elemento)) {
      return false;
    }
  }
  return true;
}

console.log(sonIguales(conjunto1, conjunto2)); // Resultado: true
```

### Comprobar si un Conjunto es Subconjunto de Otro

Puedes comprobar si un conjunto es un subconjunto de otro utilizando el método `every()`:

```javascript
const conjuntoA = new Set([1, 2, 3, 4]);
const conjuntoB = new Set([2, 3]);

const esSubconjunto = [...conjuntoB].every((elemento) =>
  conjuntoA.has(elemento)
);

console.log(esSubconjunto); // Resultado: true
```

### Eliminar Todos los Elementos de un Conjunto

Puedes eliminar todos los elementos de un conjunto utilizando el método `clear()`:

```javascript
const miSet = new Set([1, 2, 3]);
miSet.clear();
console.log(miSet); // Resultado: Set {}
```

## Usar Objetos y Tipos no Primitivos en un Conjunto

Los conjuntos pueden contener objetos y tipos no primitivos como elementos. Cada elemento se considera único según su referencia, no su valor. Por ejemplo:

```javascript
const objeto1 = { nombre: "Alice" };
const objeto2 = { nombre: "Bob" };

const conjuntoDeObjetos = new Set([objeto1, objeto2]);

console.log(conjuntoDeObjetos.size); // Resultado: 2
```

## Iterar Usando el Método `forEach()`

Puedes iterar a través de un conjunto utilizando el método `forEach()`:

```javascript
const conjunto = new Set([1, 2, 3]);

conjunto.forEach(function (valor, mismoValor, conjunto) {
  console.log(valor);
});

// Resultado:
// 1
// 2
// 3
```

> En `Set.forEach()`, el callback recibe `(valor, valor, conjunto)`: los dos primeros parámetros son el mismo valor (por compatibilidad de firma con `Map.forEach()`). Usa solo el primero.

## 9.11 Métodos nativos de conjuntos (ES2025)

Desde 2025, `Set` incorpora métodos nativos para operaciones de conjunto, mucho más legibles que las versiones manuales:

```javascript
const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

// Unión
console.log(a.union(b));             // Set {1, 2, 3, 4, 5, 6}

// Intersección
console.log(a.intersection(b));      // Set {3, 4}

// Diferencia
console.log(a.difference(b));        // Set {1, 2}

// Diferencia simétrica
console.log(a.symmetricDifference(b)); // Set {1, 2, 5, 6}

// Comprobaciones booleanas
console.log(a.isSubsetOf(b));        // false
console.log(a.isSupersetOf(b));      // false
console.log(a.isDisjointFrom(b));    // false (comparten 3, 4)
```

> **Compatibilidad:** disponible en Node 24+, Chrome 122+, Firefox 127+, Safari 17+. Para navegadores más antiguos, usa las versiones manuales de 9.9.

## 9.12 Uso de Conjuntos en Conjunción con Arrays

Los conjuntos son útiles cuando necesitas garantizar la unicidad de elementos en un array. Puedes usar un conjunto para eliminar duplicados de un array y luego convertirlo nuevamente en un array:

```javascript
const arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
const conjuntoUnico = new Set(arrayConDuplicados);
const arrayUnico = [...conjuntoUnico];

console.log(arrayUnico); // Resultado: [1, 2, 3, 4, 5]
```

## 9.13 Resumen: Limitaciones de los Conjuntos ⏱

- Los conjuntos no admiten índices para acceder a elementos específicos, a diferencia de los arrays.
- Los elementos en un conjunto deben ser únicos, por lo que no se permiten duplicados.
- No hay un método `get()` para acceder a un elemento por valor; debes verificar su existencia usando `has()` y luego obtenerlo mediante un bucle o convertir el conjunto en un array.
- Con matrices u otras estructuras tendríamos que establecer protocolos para verificar si ya existe un elemento antes de insertarlo. Con Set no haría falta.

---

[Volver al índice general](../INDICE_GENERAL.md)
