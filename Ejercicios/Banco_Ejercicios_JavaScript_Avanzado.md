# Banco ampliado de ejercicios JavaScript

Colección de ejercicios progresivos para reforzar los apuntes de DWEC antes de pasar a React o Angular.

Cada ejercicio debe resolverse con funciones pequeñas, nombres claros y comentarios cuando la intención no sea obvia.

---

## 1. Sintaxis, tipos y operadores

1. Crea una función `esNumeroValido(valor)` que devuelva `true` solo si el valor es de tipo number y no es `NaN`.
2. Crea una función `normalizarTexto(texto)` que elimine espacios al inicio/final y convierta el texto a minúsculas.
3. Crea una función `calcularPrecioFinal(precio, iva, descuento)` que aplique primero descuento y después IVA.
4. Crea una función `clasificarEdad(edad)` que devuelva `menor`, `adulto` o `senior`.
5. Crea una función `compararValores(a, b)` que explique la diferencia entre `==` y `===` con varios casos.
6. Crea una función `esTruthy(valor)` que devuelva un objeto con el valor original y su conversión booleana.
7. Crea una función `formatearNombre(nombre, apellidos)` que use template literals.
8. Crea una función `obtenerIniciales(nombreCompleto)` que devuelva las iniciales en mayúsculas.

---

## 2. Funciones y closures

1. Crea una función `crearContador()` que devuelva otra función capaz de incrementar un contador privado.
2. Crea una función `crearValidadorLongitud(min)` que devuelva una función validadora.
3. Crea una función `aplicarOperacion(a, b, operacion)` donde `operacion` sea un callback.
4. Crea una función `memoizar(fn)` que cachee resultados sencillos.
5. Crea una función `debounce(fn, delay)` para retrasar búsquedas en un input.
6. Crea una función `once(fn)` que solo permita ejecutar `fn` una vez.
7. Crea una función `componer(f, g)` que permita componer dos funciones.
8. Crea una función recursiva `aplanarArray(array)` para arrays anidados.

---

## 3. Arrays

1. Dado un array de notas, calcula media, nota máxima y nota mínima.
2. Filtra alumnos aprobados a partir de un array de objetos `{ nombre, nota }`.
3. Ordena productos por precio ascendente sin mutar el array original.
4. Agrupa tareas por estado: `pendiente`, `en-progreso`, `completada`.
5. Elimina duplicados de un array usando `Set`.
6. Convierte un array de usuarios en un objeto indexado por `id`.
7. Implementa una función `chunk(array, size)`.
8. Implementa una función `interseccion(a, b)`.
9. Implementa una función `diferencia(a, b)`.
10. Usa `reduce` para contar palabras repetidas en un texto.
11. Usa `some` para comprobar si hay tareas vencidas.
12. Usa `every` para comprobar si todos los alumnos tienen email.

---

## 4. Objetos, destructuring y JSON

1. Extrae `nombre`, `email` y `ciudad` de un objeto usuario usando destructuring.
2. Renombra propiedades al desestructurar: `nombre` -> `nombreAlumno`.
3. Crea una copia de un objeto actualizando solo una propiedad.
4. Fusiona configuración por defecto y configuración de usuario.
5. Crea una función `seleccionarCampos(objeto, campos)`.
6. Crea una función `eliminarCampos(objeto, campos)`.
7. Convierte un objeto en array de pares con `Object.entries`.
8. Valida que un JSON se pueda parsear sin romper el programa.
9. Usa `JSON.stringify` con indentación para mostrar datos en pantalla.
10. Crea un `reviver` para convertir fechas al parsear JSON.

---

## 5. Set y Map

1. Usa `Set` para obtener etiquetas únicas.
2. Usa `Map` para relacionar rutas con funciones manejadoras.
3. Crea una caché simple con `Map`.
4. Cuenta apariciones de palabras con `Map`.
5. Crea una función que convierta un `Map` a objeto.
6. Crea una función que convierta un objeto a `Map`.
7. Usa `Set` para comprobar si dos listas comparten elementos.
8. Modela permisos de usuario con `Set`.

---

## 6. DOM y eventos

1. Crea una lista de alumnos desde un array de objetos.
2. Añade un formulario para crear alumnos.
3. Valida el formulario antes de añadir datos.
4. Implementa borrado de elementos con delegación de eventos.
5. Implementa edición inline de una tarea.
6. Crea filtros por texto con un input de búsqueda.
7. Muestra contador de elementos visibles.
8. Añade clases CSS con `classList`.
9. Crea un modal accesible con apertura y cierre.
10. Crea tabs usando atributos `data-*`.
11. Crea una galería con miniaturas.
12. Crea un formulario con mensajes de error por campo.

---

## 7. Asincronía y Fetch API

1. Crea una función `esperar(ms)` que devuelva una promesa.
2. Ejecuta tres tareas asíncronas en serie.
3. Ejecuta tres tareas asíncronas en paralelo con `Promise.all`.
4. Usa `Promise.allSettled` para mostrar éxitos y errores.
5. Crea un wrapper `fetchJSON(url)` con control de errores.
6. Carga usuarios desde una API y píntalos en tarjetas.
7. Añade estado de carga mientras llega la respuesta.
8. Añade estado de error si falla la petición.
9. Cancela una petición con `AbortController`.
10. Crea una búsqueda con debounce y fetch.
11. Simula login con validación remota.
12. Crea una app de clima con OpenWeatherMap o API similar.

---

## 8. Módulos y arquitectura

1. Divide una app en `state.js`, `render.js`, `events.js` y `storage.js`.
2. Crea un módulo `api.js` para peticiones HTTP.
3. Crea un módulo `validators.js` para validar formularios.
4. Crea un módulo `formatters.js` para formatear fechas y moneda.
5. Usa exportaciones nombradas.
6. Usa una exportación por defecto.
7. Usa importación dinámica para cargar una funcionalidad opcional.
8. Documenta cada módulo con un comentario inicial breve.

---

## 9. Puente a React y Angular

1. Convierte una función `renderTareas(tareas)` en un componente conceptual.
2. Identifica qué variables de una app vanilla serían estado.
3. Identifica qué datos serían props.
4. Convierte eventos DOM en nombres de handlers: `handleSubmit`, `handleDelete`.
5. Reescribe una actualización mutante como actualización inmutable.
6. Diseña componentes para una app de tareas: `App`, `Formulario`, `Lista`, `Tarea`, `Filtros`.
7. Diseña servicios para una app Angular: `TareasService`, `StorageService`, `ApiService`.
8. Explica qué código vanilla se convertiría en `useEffect` o en servicio Angular.
