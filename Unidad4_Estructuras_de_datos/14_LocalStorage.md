# Uso de `localStorage` en JavaScript 📝 🖥️

`localStorage` es una característica de JavaScript que permite almacenar datos de forma persistente en el navegador web. Puede ser útil para guardar información localmente en la máquina del usuario, como preferencias, configuraciones o datos de sesión.

- [Uso de `localStorage` en JavaScript 📝 🖥️](#uso-de-localstorage-en-javascript--️)
  - [1. Introducción a `localStorage`](#1-introducción-a-localstorage)
  - [2. Almacenar y Obtener Datos](#2-almacenar-y-obtener-datos)
  - [3. Eliminar Datos](#3-eliminar-datos)
  - [4. Trabajar con Objetos](#4-trabajar-con-objetos)
  - [5. Otros métodos](#5-otros-métodos)
    - [a. `key(index)`](#a-keyindex)
    - [b. `length`](#b-length)
    - [c. Verificar si una clave existe](#c-verificar-si-una-clave-existe)
  - [6. Usos de `localStorage`](#6-usos-de-localstorage)
  - [7. `sessionStorage` — el hermano efímero](#7-sessionstorage--el-hermano-efímero)
  - [8. Cookies vs Storage: ¿dónde guardo cada cosa?](#8-cookies-vs-storage-dónde-guardo-cada-cosa)
    - [La regla de oro](#la-regla-de-oro)
    - [`document.cookie` — la API legacy](#documentcookie--la-api-legacy)
    - [Cookies HttpOnly: JavaScript en los dos lados de la autenticación](#cookies-httponly-javascript-en-los-dos-lados-de-la-autenticación)
    - [Flujo completo de login con JWT + HttpOnly](#flujo-completo-de-login-con-jwt--httponly)
    - [¿Qué es JWT y dónde se guarda?](#qué-es-jwt-y-dónde-se-guarda)
    - [Tabla comparativa final](#tabla-comparativa-final)

---

## 1. Introducción a `localStorage`

`localStorage` es un almacén de clave-valor que permite almacenar datos en el navegador de forma persistente. Los datos almacenados en `localStorage` no se eliminan después de cerrar el navegador y están disponibles incluso en sesiones posteriores.

## 2. Almacenar y Obtener Datos

Para almacenar datos en `localStorage`, utiliza el método `setItem(key, value)` y para obtenerlos utiliza `getItem(key)`.

```javascript
// Almacenar un valor en localStorage
localStorage.setItem("nombre", "Isaías");

// Obtener un valor de localStorage
const nombre = localStorage.getItem("nombre");
console.log(nombre); // Imprimirá 'Isaías'
```

## 3. Eliminar Datos

Puedes eliminar un elemento de `localStorage` usando `removeItem(key)` o borrar todos los datos con `clear()`.

```javascript
// Eliminar un elemento de localStorage
localStorage.removeItem("nombre");

// Borrar todos los datos de localStorage
localStorage.clear();
```

## 4. Trabajar con Objetos

`localStorage` almacena datos como cadenas de texto. Si deseas almacenar objetos, debes **_convertirlos a cadenas JSON antes de guardarlos_** y analizarlos después de recuperarlos.

```javascript
// Almacenar un objeto en localStorage
const usuario = { nombre: "Isaías", iduser: 30 };
localStorage.setItem("usuario", JSON.stringify(usuario));

// Obtener y analizar un objeto desde localStorage
const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioGuardado.nombre); // Imprimirá 'Isaías'
```

## 5. Otros métodos

### a. `key(index)`

Devuelve la clave en la posición especificada.

```javascript
const primeraClave = localStorage.key(0);
console.log(primeraClave); // Imprime la primera clave almacenada
```

### b. `length`

Devuelve la cantidad de elementos almacenados en `localStorage`.

```javascript
const cantidadElementos = localStorage.length;
console.log(cantidadElementos); // Imprime la cantidad de elementos
```

### c. Verificar si una clave existe

`localStorage` es un objeto `Storage`, no un objeto plano. No hereda de `Object.prototype`, por lo que **no** dispone de `hasOwnProperty()` ni `propertyIsEnumerable()`. La forma correcta de verificar si una clave existe es con `getItem()`:

```javascript
// ✅ Forma correcta
const existe = localStorage.getItem("nombre") !== null;
console.log(existe); // true si 'nombre' existe

// ❌ Esto lanza TypeError: localStorage.hasOwnProperty no es una función
// const existe = localStorage.hasOwnProperty("nombre");
```

Para iterar sobre todas las claves, usa `key(index)` con un bucle:

```javascript
for (let i = 0; i < localStorage.length; i++) {
  const clave = localStorage.key(i);
  console.log(`${clave}: ${localStorage.getItem(clave)}`);
}
```

## 6. Usos de `localStorage`

`localStorage` se utiliza comúnmente para:

1. **Almacenar configuraciones del usuario:**

```javascript
localStorage.setItem("idioma", "es");
```

2. **Mantener preferencias del usuario:**

   ```javascript
   localStorage.setItem("tema", "oscuro");
   ```

3. **Almacenar datos de formularios parcialmente completados:**

   ```javascript
   localStorage.setItem("formulario", JSON.stringify(formularioData));
   ```

4. **Implementar un carrito de compras en una tienda en línea:**

   ```javascript
   const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
   ```

5. **Almacenar datos de caché para una aplicación web:**

   ```javascript
   const cacheData = localStorage.getItem("cacheData");
   if (!cacheData) {
     // Realizar una solicitud HTTP para obtener datos y luego almacenarlos en localStorage
   }
   ```

6. **Guardar preferencias de usuario para aplicaciones web:**

   ```javascript
   localStorage.setItem("preferencias", JSON.stringify(preferenciasUsuario));
   ```

> ⚠️ **Alerta de seguridad:** Nunca almacenes tokens de autenticación, contraseñas ni datos sensibles en `localStorage`. Cualquier script que se ejecute en la página (incluyendo código inyectado por XSS) puede leer `localStorage`. Para tokens, usa **cookies `HttpOnly` + `Secure`** gestionadas por el servidor.

## 7. `sessionStorage` — el hermano efímero

`sessionStorage` tiene exactamente la misma API que `localStorage`, pero los datos solo persisten durante la sesión de la pestaña. Al cerrar la pestaña, se eliminan:

```javascript
// Misma API, distinta persistencia
sessionStorage.setItem("datosTemporales", JSON.stringify(datos));
const temporal = JSON.parse(sessionStorage.getItem("datosTemporales"));
sessionStorage.clear(); // Se limpia también al cerrar la pestaña
```

| Característica | `localStorage` | `sessionStorage` |
|:---|:---|:---|
| Persistencia | Ilimitada (hasta que se borre manualmente) | Solo durante la sesión de la pestaña |
| Ámbito | Por origen, compartido entre pestañas | Por origen y por pestaña (aislado) |
| Capacidad | ~5-10 MB | ~5-10 MB |
| API | `setItem`, `getItem`, `removeItem`, `clear`, `key`, `length` | Ídem |

## 8. Cookies vs Storage: ¿dónde guardo cada cosa?

### La regla de oro

| Dato | Dónde | Por qué |
|------|-------|---------|
| Preferencias de UI (tema, idioma) | `localStorage` | No sensible, necesita persistir |
| Estado de formulario, drafts | `sessionStorage` | Efímero, se descarta al cerrar pestaña |
| Carrito de compra no autenticado | `localStorage` | Persiste entre visitas |
| **Token de autenticación** | **Cookie HttpOnly** | JS no puede leerla → inmune a XSS |
| Datos de sesión de usuario | **Cookie HttpOnly** (el servidor la lee) | No debe ser accesible desde JS |

### `document.cookie` — la API legacy

JavaScript puede leer/escribir cookies no-HttpOnly mediante `document.cookie`, pero su API es incómoda (todo es un string, sin métodos `get`/`set`):

```javascript
// Escribir una cookie (caduca en 7 días, solo accesible en esta ruta)
document.cookie = "tema=oscuro; max-age=604800; path=/; SameSite=Lax";

// Leer TODAS las cookies (devuelve un string gigante)
console.log(document.cookie); // "tema=oscuro; carrito=3; ..."

// Para parsearlas necesitas una helper function
function getCookie(nombre) {
  const valor = document.cookie
    .split("; ")
    .find((fila) => fila.startsWith(nombre + "="));
  return valor ? valor.split("=")[1] : null;
}
console.log(getCookie("tema")); // "oscuro"
```

> En 2026, `document.cookie` solo se usa para leer cookies **no sensibles** que el servidor expone deliberadamente a JS. Para almacenamiento en cliente, localStorage/sessionStorage tienen una API mucho más limpia.

### Cookies HttpOnly: JavaScript en los dos lados de la autenticación

JavaScript está en **ambos extremos** de la comunicación:

- **Backend (Node.js)**: genera el JWT, lo firma con una clave secreta, y lo envía al navegador como cookie HttpOnly.
- **Frontend (navegador)**: **no toca el token**. El navegador lo almacena y lo adjunta automáticamente en cada petición.

Esta separación de responsabilidades es lo que hace el sistema seguro: el token nunca pisa el ámbito de JavaScript en el cliente.

### Flujo completo de login con JWT + HttpOnly

```
┌─────────────────────────────────────────────────────────┐
│ 1. CLIENTE: envía credenciales                          │
│    fetch("/api/login", { method:"POST",                 │
│      body: JSON.stringify({user, pass}),                │
│      credentials: "include" })                          │
├─────────────────────────────────────────────────────────┤
│ 2. SERVIDOR (Node.js): valida credenciales, firma JWT   │
│    const jwt = require("jsonwebtoken");                 │
│    const token = jwt.sign({ user, rol }, SECRET,        │
│                           { expiresIn: "1h" });        │
│    res.setHeader("Set-Cookie",                          │
│      `token=${token}; HttpOnly; Secure; SameSite=Strict;│
│       Max-Age=3600; Path=/`);                           │
│    res.json({ mensaje: "Login exitoso" });              │
├─────────────────────────────────────────────────────────┤
│ 3. NAVEGADOR: guarda la cookie (invisible para JS)      │
│    El frontend no hace nada — no hay token en el body   │
├─────────────────────────────────────────────────────────┤
│ 4. CLIENTE: siguiente petición (la cookie viaja sola)   │
│    fetch("/api/perfil", { credentials: "include" })     │
│    → Navegador adjunta Cookie: token=jwt_abc123         │
├─────────────────────────────────────────────────────────┤
│ 5. SERVIDOR: middleware verifica el JWT en cada petición│
│    app.use((req, res, next) => {                        │
│      const token = req.cookies.token; // leer cookie    │
│      req.usuario = jwt.verify(token, SECRET);           │
│      next();                                            │
│    });                                                  │
└─────────────────────────────────────────────────────────┘
```

**Código real del servidor (Node.js + Express):**

```javascript
// Servidor: login — genera JWT y lo envía como cookie HttpOnly
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET; // NUNCA hardcodees secretos

app.post("/api/login", async (req, res) => {
  const { usuario, password } = req.body;

  // 1. Validar credenciales contra BD (omitido por brevedad)
  const user = await db.usuarios.findByLogin(usuario, password);
  if (!user) return res.status(401).json({ error: "Credenciales inválidas" });

  // 2. Firmar JWT con datos NO sensibles en el payload
  const token = jwt.sign(
    { sub: user.id, nombre: user.nombre, rol: user.rol }, // payload (público)
    SECRET,                                                 // clave secreta del servidor
    { expiresIn: "1h" }                                     // caducidad corta
  );

  // 3. Enviar cookie HttpOnly — JavaScript del cliente NUNCA verá este token
  res.setHeader("Set-Cookie",
    `token=${token}; HttpOnly; Secure; SameSite=Strict; Max-Age=3600; Path=/`
  );
  res.json({ mensaje: `Bienvenido ${user.nombre}` }); // sin token en el body
});

// Servidor: middleware que protege rutas — verifica JWT en cada petición
app.use("/api/protegida", (req, res, next) => {
  const token = req.cookies?.token; // cookie-parser extrae las cookies
  if (!token) return res.status(401).json({ error: "No autenticado" });

  try {
    req.usuario = jwt.verify(token, SECRET); // verifica firma y expiración
    next(); // token válido → continuar
  } catch {
    res.status(401).json({ error: "Token inválido o expirado" });
  }
});

app.get("/api/protegida/perfil", (req, res) => {
  // req.usuario viene del middleware, ya verificado
  res.json({ usuario: req.usuario.nombre, rol: req.usuario.rol });
});
```

**Código real del cliente (navegador):**

```javascript
// Cliente: login — envía credenciales, recibe cookie sin tocarla
const respuesta = await fetch("/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ usuario: "isaias", password: "secreto" }),
  credentials: "include", // ← envía cookies existentes y guarda las nuevas
});

const { mensaje } = await respuesta.json();
console.log(mensaje); // "Bienvenido isaias"
// No hay token aquí — ya está seguro en la cookie HttpOnly

// Cliente: acceder a ruta protegida — la cookie viaja automáticamente
const perfilResp = await fetch("/api/protegida/perfil", {
  credentials: "include", // ← el navegador adjunta la cookie solo
});
const perfil = await perfilResp.json();
console.log(perfil.usuario); // "isaias"

// Cliente: logout — el servidor borra la cookie
await fetch("/api/logout", {
  method: "POST",
  credentials: "include",
});
// Servidor responde con Set-Cookie: token=; Max-Age=0 → se borra
```

> `credentials: "include"` le dice a `fetch` que envíe cookies incluso en peticiones cross-origin. Si tu API y tu frontend están en dominios distintos, el servidor necesita además configurar CORS con `credentials: true` y un origen explícito (no `*`). Con `axios`, se configura como `withCredentials: true`.

**Flags de seguridad de las cookies:**

| Flag | Efecto |
|------|--------|
| `HttpOnly` | Bloquea el acceso desde `document.cookie` → inmune a XSS |
| `Secure` | Solo se envía por HTTPS (nunca en HTTP plano) |
| `SameSite=Strict` | No se envía desde otros sitios → protege contra CSRF |
| `SameSite=Lax` | Se envía al navegar, no desde `<img>`/`<form>` de terceros |
| `Max-Age` / `Expires` | Controla la caducidad |

### ¿Qué es JWT y dónde se guarda?

**JWT (JSON Web Token)** es un token firmado digitalmente que contiene información del usuario (payload) codificada en base64. Tiene 3 partes separadas por puntos:

```
eyJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvIjoiaXNhaWFzIiwicm9sIjoicHJvZmVzb3IifQ.firma
|______ header _______|_________ payload ___________|__ firma __|
```

- **Header**: algoritmo de firma (ej. HS256)
- **Payload**: datos del usuario (NO encriptados, solo codificados en base64 — cualquiera puede decodificarlos)
- **Firma**: hash que garantiza que el token no fue alterado (solo el servidor puede verificarlo)

> El payload es **público**. Nunca metas contraseñas ni datos sensibles en un JWT. Cualquiera que tenga el token puede leer su contenido con `JSON.parse(atob(token.split('.')[1]))`.

**Los dos patrones de almacenamiento de JWT en 2026:**

| Patrón | Descripción | Seguridad |
|--------|-------------|-----------|
| ❌ **JWT en localStorage** | `localStorage.setItem("token", jwt)` y lo envías en header `Authorization: Bearer <jwt>` | Vulnerable a XSS: cualquier script malicioso puede robar el token |
| ✅ **JWT en cookie HttpOnly** | El servidor lo envía como cookie HttpOnly. El navegador lo adjunta solo. JS nunca lo toca. | Inmune a XSS. Requiere protección CSRF adicional (SameSite + token CSRF) |
| ✅ **Access token en memoria + Refresh en cookie** | Access token (corta vida, ~15 min) en variable JS. Refresh token (larga vida) en cookie HttpOnly. | Lo más seguro: el token sensible nunca toca localStorage ni es accesible desde JS |

### Tabla comparativa final

| | `localStorage` | `sessionStorage` | Cookie (JS) | Cookie HttpOnly |
|:---|:---|:---|:---|:---|
| **Accesible desde JS** | ✅ | ✅ | ✅ | ❌ |
| **Persistencia** | Ilimitada | Hasta cerrar pestaña | Configurable | Configurable |
| **Capacidad** | ~5-10 MB | ~5-10 MB | ~4 KB | ~4 KB |
| **Se envía al servidor** | ❌ (manual vía fetch header) | ❌ | ✅ (automático) | ✅ (automático) |
| **API ergonómica** | ✅ `setItem`/`getItem` | ✅ ídem | ❌ (string parse) | N/A (solo servidor) |
| **¿Seguro para auth?** | ❌ vulnerable a XSS | ❌ vulnerable a XSS | ❌ vulnerable a XSS | ✅ inmune a XSS |
| **Uso principal** | Estado de UI, caché | Estado temporal de UI | Flags no sensibles | **Auth tokens, sesiones** |

> **Regla de oro:** datos que solo importan al cliente → `localStorage`/`sessionStorage`. Datos que autentican al usuario → cookie HttpOnly gestionada por el servidor. Si tu JWT toca `localStorage`, alguien con XSS te lo roba.

---

[Volver al índice general](../INDICE_GENERAL.md)
