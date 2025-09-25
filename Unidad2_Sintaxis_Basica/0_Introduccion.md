# **Capítulo 0. JavaScript Moderno ES6+ y TypeScript 📝**💻

- [**Capítulo 0. JavaScript Moderno ES6+ y TypeScript 📝**💻](#capítulo-0-javascript-moderno-es6-y-typescript-)
- [0. Introducción a `JavaScript` 📖](#0-introducción-a-javascript-)
  - [0.1 Historia de JavaScript](#01-historia-de-javascript)
    - [Los Primeros Días](#los-primeros-días)
    - [La Guerra de Navegadores](#la-guerra-de-navegadores)
    - [Estándares y Evolución](#estándares-y-evolución)
    - [JavaScript en la Actualidad](#javascript-en-la-actualidad)
    - [La Revolución ES6+](#la-revolución-es6)
  - [0.2 Características Modernas](#02-características-modernas)
    - [1. **Lenguaje Multi-paradigma Moderno**](#1-lenguaje-multi-paradigma-moderno)
    - [2. **Compilado e Interpretado (JIT)**](#2-compilado-e-interpretado-jit)
    - [3. **Programación Funcional Avanzada**](#3-programación-funcional-avanzada)
    - [4. **Tipado Dinámico con TypeScript**](#4-tipado-dinámico-con-typescript)
    - [5. **Orientado a Objetos Moderno**](#5-orientado-a-objetos-moderno)
    - [6. **Asincronía Nativa y Moderna**](#6-asincronía-nativa-y-moderna)
    - [7. **Multiplataforma y Universal**](#7-multiplataforma-y-universal)
  - [0.3 Palabras Reservadas](#03-palabras-reservadas)
  - [0.4 Primeros Pasos con JavaScript Moderno](#04-primeros-pasos-con-javascript-moderno)
    - [Hola Mundo Moderno](#hola-mundo-moderno)
    - [Variables y Constantes](#variables-y-constantes)
    - [Arrow Functions](#arrow-functions)
    - [Template Literals](#template-literals)
    - [Destructuring](#destructuring)
  - [0.5 Introducción a TypeScript](#05-introducción-a-typescript)
    - [¿Qué es TypeScript?](#qué-es-typescript)
    - [Ventajas de TypeScript](#ventajas-de-typescript)
    - [Instalación y Configuración](#instalación-y-configuración)
    - [Primer Código con TypeScript](#primer-código-con-typescript)

---

# 0. Introducción a `JavaScript` 📖

## 0.1 Historia de JavaScript

JavaScript es uno de los lenguajes de programación más populares y ampliamente utilizados en la web. Su historia se remonta a la década de 1990:

### Los Primeros Días

- A principios de la década de 1990, Marc Andreessen y su equipo en Netscape Communications desarrollaron el navegador web Netscape Navigator.
- En 1995, Brendan Eich fue contratado por Netscape para crear un lenguaje de programación que pudiera ejecutarse en el navegador.
- Eich creó JavaScript en tan solo 10 días. Fue lanzado con Netscape Navigator 2.0 en diciembre de 1995.

### La Guerra de Navegadores

- JavaScript rápidamente ganó popularidad como el lenguaje de programación para el lado del cliente en la web.
- Microsoft respondió con JScript, su propia versión de JavaScript, lo que llevó a una "guerra de navegadores" entre Netscape y Microsoft.

### Estándares y Evolución

- Para evitar la fragmentación, Netscape entregó JavaScript a la ECMA International (European Computer Manufacturers Association), una organización de estándares, en 1996.
- El estándar ECMAScript se creó basado en JavaScript, y la primera edición se publicó en 1997.
- A lo largo de los años, ECMAScript ha evolucionado con nuevas versiones y características, como ES6 (ECMAScript 2015) que introdujo mejoras significativas.

### JavaScript en la Actualidad

- Hoy en día, JavaScript se encuentra en todas partes, no solo en navegadores web, sino también en servidores (Node.js), aplicaciones móviles (React Native), y más.
- Es uno de los lenguajes más utilizados para el desarrollo web, permitiendo la creación de sitios web interactivos y dinámicos.

### La Revolución ES6+

En 2015, JavaScript experimentó una transformación radical con la especificación **ES6 (ECMAScript 2015)**. Desde entonces, el lenguaje ha evolucionado con nuevas características cada año:

- **ES6 (2015)**: Classes, let/const, arrow functions, template literals, destructuring, modules, promises
- **ES7 (2016)**: Array.prototype.includes(), exponentiation operator (\*\*)
- **ES8 (2017)**: async/await, Object.values(), Object.entries(), string padding
- **ES9 (2018)**: async iteration, object rest/spread, Promise.finally()
- **ES10 (2019)**: Array.prototype.flat(), Array.prototype.flatMap(), Object.fromEntries()
- **ES11 (2020)**: BigInt, optional chaining (?.), nullish coalescing (??)
- **ES12 (2021)**: Logical assignment operators, numeric separators, String.prototype.replaceAll()
- **ES13 (2022)**: Object.hasOwn(), Array.prototype.at(), error cause
- **ES14 (2023)**: Array.prototype.findLast(), Array.prototype.findLastIndex()
- **ES15 (2024)**: Decorators, Pipeline Operator, Records and Tuples (en evaluación)

## 0.2 Características Modernas

JavaScript en 2025 es un lenguaje moderno, potente y versátil. Así es JavaScript hoy en día:

#### 1. **Lenguaje Multi-paradigma Moderno**

JavaScript ha evolucionado para soportar múltiples paradigmas de programación:

- **Programación Funcional**: Con arrow functions, inmutabilidad, funciones puras y composición
- **Programación Orientada a Objetos**: Con clases ES6, herencia y encapsulación
- **Programación Asíncrona**: Con async/await, promises y streams
- **Programación Reactiva**: Con observables y patrones modernos

```javascript
// Ejemplo de programación funcional moderna
const procesarDatos = (datos) =>
  datos
    .filter((item) => item.activo)
    .map((item) => ({ ...item, procesado: true }))
    .reduce((acc, item) => [...acc, item], []);

// Ejemplo de programación asíncrona moderna
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
```

#### 2. **Compilado e Interpretado (JIT)**

JavaScript moderno utiliza compilación **Just-In-Time (JIT)** en los navegadores modernos:

- **V8 (Chrome/Node.js)**: Compila JavaScript a código máquina nativo
- **SpiderMonkey (Firefox)**: Motor optimizado para rendimiento
- **JavaScriptCore (Safari)**: Compilación por niveles
- **Chakra (Edge)**: Optimización dinámica

```javascript
// Código que se optimiza automáticamente
function sumarNumeros(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Los motores JIT optimizan este código basado en el uso
```

#### 3. **Programación Funcional Avanzada**

JavaScript ES6+ ofrece características poderosas para programación funcional:

```javascript
// Array methods funcionales
const numeros = [1, 2, 3, 4, 5];
const resultado = numeros
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((acc, n) => acc + n, 0);

// Functions como ciudadanos de primera clase
const crearOperacion = (operador) => (a, b) => {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      return 0;
  }
};

const sumar = crearOperacion("+");
const multiplicar = crearOperacion("*");
```

#### 4. **Tipado Dinámico con TypeScript**

JavaScript mantiene su tipado dinámico pero ahora cuenta con **TypeScript** para quienes prefieren tipado estático:

```javascript
// JavaScript: tipado dinámico
let variable = 42;        // number
variable = "Hola";        // string
variable = [1, 2, 3];     // array
variable = {nombre: "Isaías"}; // object

// TypeScript: tipado estático opcional
let numero: number = 42;
let texto: string = "Profesor Isaías FL";
let usuario: {nombre: string, edad: number} = {
  nombre: "Isaías",
  edad: 35
};
```

#### 5. **Orientado a Objetos Moderno**

JavaScript es un lenguaje **orientado a objetos**, pero en lugar de basarse en clases tradicionales (como C++ o Java), usa un sistema de **prototipos**. Los objetos en JavaScript pueden heredar propiedades y métodos de otros objetos a través de la herencia basada en prototipos.

Sin embargo, desde **ES6** (ECMAScript 2015), se introdujeron las **clases**, que proporcionan una sintaxis más familiar para la orientación a objetos, aunque internamente JavaScript sigue utilizando prototipos. Esta sintaxis de clases es un "azúcar sintáctico" sobre el modelo basado en prototipos, pero hace el código más legible y fácil de entender para desarrolladores que vienen de otros lenguajes.

**Conceptos clave de POO en JavaScript moderno:**

- **Encapsulación**: Agrupar datos y métodos que operan sobre esos datos
- **Herencia**: Crear nuevas clases basadas en clases existentes
- **Polimorfismo**: Usar una interfaz común para diferentes tipos de objetos
- **Abstracción**: Ocultar detalles complejos y mostrar solo lo necesario

**Ejemplo de clases modernas con características ES6+:**

```javascript
// Clases modernas con propiedades privadas (ES2022)
class Estudiante {
  #nombre; // Propiedad privada (solo accesible desde la clase)
  #edad; // Propiedad privada
  static universidad = "UDC"; // Propiedad estática (compartida por todas las instancias)

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
    console.log(
      `Nuevo estudiante ${this.#nombre} inscrito en ${Estudiante.universidad}`,
    );
  }

  // Getter público para acceder a la propiedad privada
  get nombre() {
    return this.#nombre;
  }

  // Setter público para modificar la propiedad privada con validación
  set edad(nuevaEdad) {
    if (nuevaEdad > 0 && nuevaEdad < 100) {
      this.#edad = nuevaEdad;
    } else {
      console.error("Edad no válida");
    }
  }

  // Método público
  estudiar(asignatura) {
    console.log(`${this.#nombre} está estudiando ${asignatura}`);
  }

  // Método estático (se llama sobre la clase, no sobre la instancia)
  static crearEstudianteProfesor(nombre) {
    return new Estudiante(nombre, 35);
  }
}

// Herencia moderna - extends
class EstudianteDWEC extends Estudiante {
  #proyecto; // Propiedad privada específica de esta clase

  constructor(nombre, edad, proyecto) {
    super(nombre, edad); // Llama al constructor de la clase padre
    this.#proyecto = proyecto;
    console.log(`Estudiante de DWEC con proyecto: ${this.#proyecto}`);
  }

  // Sobrescritura de método
  estudiar(asignatura) {
    console.log(
      `${this.nombre} está programando ${asignatura} para su proyecto ${this.#proyecto}`,
    );
  }

  // Método específico de esta clase
  programar() {
    console.log(`${this.nombre} está desarrollando en ${this.#proyecto}`);
  }
}

// Uso práctico de las clases
const isaías = new EstudianteDWEC("Isaías FL", 35, "React");
isaías.estudiar("JavaScript");
isaías.programar();

// Uso de método estático
const profesor = Estudiante.crearEstudianteProfesor("Profesor Invitado");
console.log(`Profesor creado: ${profesor.nombre}`);
```

#### 6. **Asincronía Nativa y Moderna**

JavaScript es conocido por su enfoque **asíncrono** y su capacidad para manejar operaciones basadas en eventos, como las interacciones del usuario o las solicitudes HTTP. Este enfoque es especialmente importante en entornos como los **navegadores** y **Node.js**, donde ciertas operaciones, como la carga de datos desde un servidor, pueden tardar un tiempo en completarse.

**El modelo de eventos** permite a JavaScript responder a acciones como clics de usuario, movimientos del ratón o el envío de formularios. Este comportamiento basado en eventos garantiza que JavaScript no detenga el flujo de ejecución mientras espera que ciertas operaciones finalicen, lo que resulta en una mejor **experiencia de usuario** y una mayor **eficiencia**.

**Conceptos fundamentales de la asincronía en JavaScript:**

- **Single Thread**: JavaScript ejecuta código en un solo hilo principal
- **Event Loop**: Mecanismo que gestiona la ejecución de tareas asíncronas
- **Non-blocking**: Las operaciones asíncronas no bloquean el hilo principal
- **Callback Queue**: Cola donde se almacenan las funciones callback pendientes

**Evolución de la asincronía en JavaScript:**

1. **Callbacks (1995)**: El método original para manejar asincronía
2. **Promises (2015)**: ES6 introdujo las promesas para mejorar la gestión asíncrona
3. **Async/Await (2017)**: ES8 proporcionó una sintaxis más clara para trabajar con promesas
4. **Top-level await (2022)**: Permitido usar await fuera de funciones async

**Ejemplos prácticos de asincronía moderna:**

```javascript
// Múltiples formas de manejar asincronía en JavaScript moderno:

// 1. Promesas encadenadas (ES6)
console.log("Iniciando carga de alumnos...");
fetch("/api/alumnos")
  .then((response) => {
    console.log("Respuesta recibida, procesando datos...");
    return response.json();
  })
  .then((alumnos) => {
    const alumnosActivos = alumnos.filter((a) => a.activo);
    console.log("Alumnos activos:", alumnosActivos);
    return alumnosActivos;
  })
  .catch((error) => {
    console.error("Error en la petición:", error);
  });

// 2. Async/Await (ES8) - Más legible y fácil de depurar
async function obtenerAlumnosActivos() {
  try {
    console.log("Buscando alumnos activos...");
    const response = await fetch("/api/alumnos");
    const alumnos = await response.json();
    const alumnosActivos = alumnos.filter((alumno) => alumno.activo);

    console.log(`Se encontraron ${alumnosActivos.length} alumnos activos`);
    return alumnosActivos;
  } catch (error) {
    console.error("Error al obtener alumnos:", error);
    throw error;
  }
}

// 3. Promise.all para operaciones paralelas (optimización)
async function cargarDatosParalelos() {
  console.log("Cargando datos en paralelo...");
  try {
    const [alumnos, profesores, asignaturas] = await Promise.all([
      fetch("/api/alumnos").then((r) => r.json()),
      fetch("/api/profesores").then((r) => r.json()),
      fetch("/api/asignaturas").then((r) => r.json()),
    ]);

    console.log("Todos los datos cargados exitosamente");
    return { alumnos, profesores, asignaturas };
  } catch (error) {
    console.error("Error en carga paralela:", error);
  }
}

// 4. Eventos del DOM (manejo de interacciones del usuario)
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("cargarDatos");

  boton.addEventListener("click", async () => {
    boton.disabled = true;
    boton.textContent = "Cargando...";

    try {
      const alumnos = await obtenerAlumnosActivos();
      mostrarAlumnosEnTabla(alumnos);
    } catch (error) {
      mostrarError("No se pudieron cargar los alumnos");
    } finally {
      boton.disabled = false;
      boton.textContent = "Cargar Alumnos";
    }
  });
});

// 5. Top-level await (ES2022) - En módulos
// // En un archivo .mjs:
// const datos = await fetch('/api/config').then(r => r.json());
// console.log("Configuración cargada:", datos);
```

**Ventajas de la asincronía moderna:**

- **Mejor rendimiento**: No bloquea la interfaz de usuario
- **Código más legible**: Async/await se lee como código síncrono
- **Mejor manejo de errores**: Try/catch funciona con código asíncrono
- **Composición**: Las promesas se pueden combinar y encadenar fácilmente

El enfoque asíncrono de JavaScript permite que el programa continúe ejecutándose mientras espera por operaciones más lentas, como una solicitud de red o la lectura de archivos. Esto mejora significativamente el rendimiento en aplicaciones interactivas, evitando que la interfaz de usuario se "congele" mientras espera respuestas del servidor.

#### 7. **Multiplataforma y Universal**

JavaScript es **multiplataforma**. Se ejecuta no solo en navegadores y servidores (con Node.js), sino también en entornos como aplicaciones móviles (con frameworks como **React Native**), aplicaciones de escritorio (con **Electron**), y dispositivos IoT. Esto lo convierte en uno de los lenguajes más versátiles disponibles.

**Ecosistema JavaScript moderno:**

- **Frontend**: React, Vue, Angular, Svelte
- **Backend**: Node.js, Express, NestJS, Fastify
- **Móvil**: React Native, Ionic, Capacitor
- **Desktop**: Electron, Tauri, NW.js
- **IoT**: Johnny-Five, Espruino, JerryScript

**Ejemplo de código JavaScript multiplataforma:**

```javascript
// Mismo código base JavaScript que funciona en múltiples plataformas:

// 1. Navegador Web (frontend)
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="bienvenida">
      <h1>¡Hola desde el navegador!</h1>
      <p>Profesor Isaías FL - DWEC</p>
      <button id="saludar">Saludar</button>
    </div>
  `;

  document.getElementById("saludar").addEventListener("click", () => {
    alert("¡Hola alumnos de DWEC!");
  });
});

// 2. Node.js (backend - servidor)
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head><title>Servidor Node.js</title></head>
        <body>
          <h1>¡Hola desde el servidor Node.js!</h1>
          <p>Servidor creado por Isaías FL</p>
        </body>
      </html>
    `);
  }
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

// 3. Móvil con React Native (concepto)
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>¡Hola desde móvil!</Text>
//       <Text style={styles.subtitle}>Profesor: Isaías FL</Text>
//       <Button title="Presionar" onPress={() => alert('¡Hola!')} />
//     </View>
//   );
// }
```

**Ventajas de la multiplataforma con JavaScript:**

- **Mismo lenguaje**: Aprender JavaScript para todo el stack
- **Reutilización de código**: Compartir lógica entre plataformas
- **Gran comunidad**: Soporte y librerías para cualquier necesidad
- **Rápido desarrollo**: Herramientas y frameworks maduros
- **Alta demanda**: Muchas oportunidades laborales

## 0.3 Palabras Reservadas

Son las palabras (en inglés) que se utilizan para construir las sentencias de JavaScript y que por tanto no pueden ser utilizadas libremente. Las palabras actualmente reservadas por JavaScript son:

```javascript
break, case, catch, continue, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with.
```

Además, en versiones modernas se han añadido palabras reservadas para ES6+:

```javascript
await, class, const, enum, export, extends, implements, import, interface, let, package, private, protected, public, static, super, yield.
```

---

## 0.4 Primeros Pasos con JavaScript Moderno

Vamos a crear nuestros primeros ejemplos utilizando JavaScript moderno ES6+. Estos son los conceptos fundamentales que necesitarás para empezar a programar en JavaScript actual.

### Hola Mundo Moderno

El clásico "Hola Mundo" pero con características modernas:

```javascript
// Hola Mundo con template literals
const profesor = "Isaías FL";
const modulo = "DWEC";
const mensaje = `¡Hola! Soy ${profesor} y te doy la bienvenida a ${modulo}`;

console.log(mensaje); // ¡Hola! Soy Isaías FL y te doy la bienvenida a DWEC

// Mostrar en una página web
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: #2c3e50;">${mensaje}</h1>
        <p style="background: #ecf0f1; padding: 10px; border-radius: 5px;">
          Este es un ejemplo de JavaScript moderno con template literals.
        </p>
      </div>
    `;
  }
});
```

### Variables y Constantes (let y const)

En JavaScript moderno, usamos `let` y `const` en lugar de `var`:

```javascript
// const - Para valores que no cambian
const NOMBRE_CURSO = "Desarrollo Web en Entorno Cliente";
const PROFESOR = "Isaías FL";

// let - Para valores que sí pueden cambiar
let numeroAlumnos = 25;
let aulaActual = "Aula Informática 1";

console.log(`Curso: ${NOMBRE_CURSO}`);
console.log(`Profesor: ${PROFESOR}`);
console.log(`Número de alumnos: ${numeroAlumnos}`);

// Podemos cambiar los valores de let
numeroAlumnos = 26;
aulaActual = "Laboratorio 2";

console.log(`Actualizado: ${numeroAlumnos} alumnos en ${aulaActual}`);

// const no se puede reasignar (daría error)
// NOMBRE_CURSO = "Otro curso"; // Error: Assignment to constant variable
```

**¿Por qué usar let y const en lugar de var?**

- **const**: Previene reasignaciones accidentales
- **let**: Tiene scope de bloque (solo existe dentro del bloque donde se define)
- **var**: Tiene scope de función y puede causar problemas de hoisting

### Arrow Functions

Las funciones flecha son una forma más concisa de escribir funciones:

```javascript
// Función tradicional
function saludarTradicional(nombre) {
  return `Hola, ${nombre}`;
}

// Arrow function básica
const saludarFlecha = (nombre) => {
  return `Hola, ${nombre}`;
};

// Arrow function más concisa (si solo tiene un parámetro)
const saludarConcisa = (nombre) => `Hola, ${nombre}`;

// Arrow function sin parámetros
const saludarProfesor = () => "Hola, soy el profesor Isaías FL";

// Ejemplos de uso
console.log(saludarTradicional("María"));
console.log(saludarFlecha("Juan"));
console.log(saludarConcisa("Ana"));
console.log(saludarProfesor());

// Arrow functions con múltiples parámetros
const calcularMedia = (nota1, nota2, nota3) => {
  const media = (nota1 + nota2 + nota3) / 3;
  return `La media de ${nota1}, ${nota2} y ${nota3} es: ${media.toFixed(2)}`;
};

console.log(calcularMedia(7.5, 8.0, 6.5));
```

### Template Literals

Los template literals permiten crear cadenas de texto con variables y expresiones:

```javascript
const profesor = "Isaías FL";
const asignatura = "JavaScript";
const nivel = "Básico";

// Template literal multilínea
const descripcion = `
Curso: ${asignatura}
Profesor: ${profesor}
Nivel: ${nivel}
Duración: 120 horas
`;

console.log(descripcion);

// Template literals con expresiones
const precioBase = 100;
const descuento = 0.15;
const precioFinal = precioBase * (1 - descuento);

const mensaje = `
${profesor} - ${asignatura}
----------------------------------------
Precio base: €${precioBase}
Descuento: ${descuento * 100}%
Precio final: €${precioFinal.toFixed(2)}
¡Ahorras: €${(precioBase * descuento).toFixed(2)}!
`;

console.log(mensaje);

// Template literals con funciones
const formatearNombre = (nombre, apellidos) => {
  const nombreCompleto = `${nombre} ${apellidos}`.toUpperCase();
  return `ALUMNO: ${nombreCompleto}`;
};

console.log(formatearNombre("juan", "pérez")); // ALUMNO: JUAN PÉREZ
```

### Destructuring

El destructuring permite extraer valores de arrays y objetos de forma concisa:

```javascript
// Destructuring de arrays
const tecnologias = ["JavaScript", "TypeScript", "React", "Node.js"];
const [js, ts, react, node] = tecnologias;

console.log(`Frontend: ${js} y ${react}`);
console.log(`Backend: ${node}`);
console.log(`Tipado: ${ts}`);

// Destructuring de objetos
const profesorInfo = {
  nombre: "Isaías",
  apellidos: "FL",
  modulo: "DWEC",
  experiencia: 10,
  especialidades: ["JavaScript", "TypeScript", "React"],
};

const { nombre, apellidos, modulo, experiencia } = profesorInfo;
console.log(`Profesor: ${nombre} ${apellidos}`);
console.log(`Módulo: ${modulo}`);
console.log(`Experiencia: ${experiencia} años`);

// Destructuring con valores por defecto
const configuracion = {
  tema: "oscuro",
  idioma: "español",
};

const { tema, idioma, tamanoFuente = "mediana" } = configuracion;
console.log(`Tema: ${tema}, Idioma: ${idioma}, Fuente: ${tamanoFuente}`);

// Destructuring en parámetros de funciones
const mostrarInfoAlumno = ({ nombre, edad, curso = "DWEC" }) => {
  return `Alumno: ${nombre}, Edad: ${edad}, Curso: ${curso}`;
};

const alumno1 = { nombre: "Ana", edad: 20 };
const alumno2 = { nombre: "Carlos", edad: 21, curso: "DAW" };

console.log(mostrarInfoAlumno(alumno1)); // Curso: DWEC (por defecto)
console.log(mostrarInfoAlumno(alumno2)); // Curso: DAW
```

---

## 0.5 Introducción a TypeScript

TypeScript es un superconjunto de JavaScript que añade tipado estático opcional. Fue desarrollado por Microsoft y se ha convertido en el estándar para desarrollo JavaScript a gran escala.

### ¿Qué es TypeScript?

TypeScript es un lenguaje de programación que extiende JavaScript añadiendo:

- **Tipado estático**: Define tipos para variables, parámetros y retornos
- **Interfaces**: Define contratos para objetos
- **Clases mejoradas**: Con modificadores de acceso y más
- **Enumeraciones**: Conjuntos de constantes con nombre
- **Genéricos**: Funciones y clases que trabajan con varios tipos
- **Decoradores**: Metadatos para clases y métodos

### Ventajas de TypeScript

1. **Detección temprana de errores**: Los errores se detectan en tiempo de compilación
2. **Mejor autocompletado**: Los IDEs ofrecen mejor soporte
3. **Documentación viva**: Los tipos sirven como documentación
4. **Refactorización más segura**: Los cambios se propagan correctamente
5. **Mejor colaboración**: El código es más explícito y claro

### Instalación y Configuración

Para empezar con TypeScript, necesitas instalarlo:

```bash
# Instalar TypeScript globalmente
npm install -g typescript

# Instalar TypeScript en tu proyecto
npm install --save-dev typescript

# Crear archivo de configuración
npx tsc --init
```

### Primer Código con TypeScript

Veamos ejemplos comparando JavaScript con TypeScript:

```typescript
// TypeScript: Variables tipadas
let nombre: string = "Isaías FL";
let edad: number = 35;
let esProfesor: boolean = true;
let tecnologias: string[] = ["JavaScript", "TypeScript", "React"];
let info: { nombre: string; edad: number } = {
  nombre: "Isaías",
  edad: 35,
};

// TypeScript: Funciones tipadas
function saludar(nombre: string): string {
  return `Hola, ${nombre}`;
}

function calcularMedia(notas: number[]): number {
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  return suma / notas.length;
}

// TypeScript: Interfaces
interface Alumno {
  nombre: string;
  edad: number;
  curso?: string; // ? significa opcional
}

interface Profesor {
  nombre: string;
  especialidades: string[];
  experiencia: number;
}

function mostrarInfoPersona(persona: Alumno | Profesor): void {
  console.log(`Nombre: ${persona.nombre}`);

  if ("experiencia" in persona) {
    console.log(`Experiencia: ${persona.experiencia} años`);
  } else if ("curso" in persona) {
    console.log(`Curso: ${persona.curso || "No asignado"}`);
  }
}

// Uso de las interfaces
const alumno: Alumno = {
  nombre: "Ana García",
  edad: 20,
  curso: "DWEC",
};

const profesor: Profesor = {
  nombre: "Isaías FL",
  especialidades: ["JavaScript", "TypeScript"],
  experiencia: 10,
};

mostrarInfoPersona(alumno);
mostrarInfoPersona(profesor);

// TypeScript: Genéricos
function crearArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

const numeros: number[] = crearArray([1, 2, 3]);
const textos: string[] = crearArray(["a", "b", "c"]);

console.log(numeros); // [1, 2, 3]
console.log(textos); // ["a", "b", "c"]
```

### ¿Cómo usar TypeScript con JavaScript?

Puedes usar TypeScript gradualmente:

1. **Empieza con JavaScript puro**: Renombra tus archivos .js a .ts
2. **Añade tipos gradualmente**: Comienza con funciones clave
3. **Usa interfaces para objetos**: Define la estructura de tus datos
4. **Configura el compilador**: Ajusta tsconfig.json según tus necesidades
5. **Integración con herramientas**: La mayoría de frameworks soportan TypeScript

**Compilar TypeScript a JavaScript:**

```bash
# Compilar un archivo
tsc miarchivo.ts

# Compilar en modo vigilancia (para desarrollo)
tsc --watch miarchivo.ts

# Compilar todo el proyecto
tsc
```

TypeScript se compila a JavaScript estándar, por lo que puede ejecutarse en cualquier navegador o entorno Node.js.

---
