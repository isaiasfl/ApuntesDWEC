# **Capítulo 0. Contenido 📝**💻

- [0. Introducción a `JavaScript`. 📖](#0-introducci%C3%B3n-a-javascript-)
  - [0.1 Historia de JavaScript](#01-historia-de-javascript)
    - [Los Primeros Días](#los-primeros-d%C3%ADas)
    - [La Guerra de Navegadores](#la-guerra-de-navegadores)
    - [Estándares y Evolución](#est%C3%A1ndares-y-evoluci%C3%B3n)
    - [JavaScript en la Actualidad](#javascript-en-la-actualidad)
  - [0.2 Características.](#02-caracter%C3%ADsticas)
  - [0.3 Palabras Reservadas.](#03-palabras-reservadas)

---

# 0. Introducción a `JavaScript`. 📖

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

## 0.2 Características.

Javascript es un lenguaje de programación, o lo que es lo mismo, un mecanismo con el que podemos decirle a nuestro navegador que tareas debe realizar, en que orden y cuantas veces."​

Así `Javascript` es:

#### 1. **Lenguaje de programación del lado del cliente y del servidor**
JavaScript originalmente fue diseñado para ejecutarse en el **navegador del cliente** (en la máquina del usuario) y mejorar la interactividad y funcionalidad de las páginas web. Sin embargo, desde la aparición de **Node.js**, JavaScript también se ejecuta **del lado del servidor**, permitiendo a los desarrolladores crear aplicaciones completas (frontend y backend) en JavaScript.

#### 2. **Interpretado, no compilado**
JavaScript es un lenguaje **interpretado**, lo que significa que el código fuente se ejecuta directamente en el entorno de ejecución, como el navegador o Node.js, sin necesidad de una etapa de compilación previa. El entorno de ejecución **interpreta y ejecuta** el código línea por línea, aunque **motores modernos** como **V8** (Chrome) utilizan técnicas de compilación JIT (Just-In-Time) para mejorar el rendimiento.

#### 3. **Imperativo, estructurado y funcional**
JavaScript es un lenguaje **imperativo**, lo que implica que el código define pasos concretos que debe seguir el programa. También soporta **programación estructurada**, organizando el código en bloques como funciones y bucles.

Además, JavaScript admite el paradigma **funcional**, lo que permite tratar funciones como ciudadanos de primera clase (pueden asignarse a variables, pasarse como argumentos y retornarse desde otras funciones). Con características como **funciones de orden superior**, **closures** y **inmutabilidad**, JavaScript facilita la programación funcional.

#### 4. **Tipificación débil y dinámica**
JavaScript tiene **tipificación débil**, lo que significa que permite la conversión implícita entre tipos de datos (coerción). Por ejemplo, se puede sumar un número y una cadena sin errores, lo que puede conducir a resultados inesperados si no se maneja correctamente.

Además, JavaScript tiene un **tipado dinámico**, lo que significa que el tipo de una variable se determina en tiempo de ejecución y puede cambiar durante la ejecución del programa:
```javascript
let variable = 42;  // Tipo número
variable = "Ahora es una cadena";  // Cambia a cadena
```

#### 5. **Orientado a objetos y basado en prototipos**
JavaScript es un lenguaje **orientado a objetos**, pero en lugar de basarse en clases tradicionales (como C++ o Java), usa un sistema de **prototipos**. Los objetos en JavaScript pueden heredar propiedades y métodos de otros objetos a través de la herencia basada en prototipos. 

Sin embargo, desde **ES6** (ECMAScript 2015), se introdujeron las **clases**, que proporcionan una sintaxis más familiar para la orientación a objetos, aunque internamente JavaScript sigue utilizando prototipos:
```javascript
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}
```
Esta sintaxis de clases es un "azúcar sintáctico" sobre el modelo basado en prototipos.

#### 6. **Event-driven y asíncrono**
JavaScript es conocido por su enfoque **asíncrono** y su capacidad para manejar operaciones basadas en eventos, como las interacciones del usuario o solicitudes HTTP. JavaScript usa **callbacks**, **promesas** y, desde **ES8 (2017)**, **async/await** para manejar la programación asíncrona de manera más legible y ordenada:
```javascript
async function obtenerDatos() {
    const respuesta = await fetch('https://api.profesor.isaias.com/datos');
    const datos = await respuesta.json();
    console.log(datos);
}
```
Este enfoque asíncrono es esencial en entornos como los navegadores, donde las operaciones pueden tardar en completarse y JavaScript debe continuar ejecutándose sin bloquear el hilo principal.

#### 7. **Multiplataforma**
JavaScript es **multiplataforma**. Se ejecuta no solo en navegadores y servidores (con Node.js), sino también en entornos como aplicaciones móviles (con frameworks como **React Native**), aplicaciones de escritorio (con **Electron**), y dispositivos IoT. Esto lo convierte en uno de los lenguajes más versátiles disponibles.

## 0.3 Palabras Reservadas.

Son las palabras (en inglés) que se utilizan para construir las sentencias de JavaScript y que por tanto no pueden ser utilizadas libremente. Las palabras actualmente reservadas por JavaScript son:

```javascript
break, case, catch, continue, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with.
```
