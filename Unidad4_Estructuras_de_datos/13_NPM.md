# 13. Node.js, npm, pnpm y Vite en JavaScript Vanilla 📝 🖥️

- [13. Node.js, npm, pnpm y Vite en JavaScript Vanilla 📝 🖥️](#13-nodejs-npm-pnpm-y-vite-en-javascript-vanilla--️)
  - [13.1. Instalación de Node.js con nvm](#131-instalación-de-nodejs-con-nvm)
  - [13.2. Creación de un Proyecto de JavaScript Vanilla](#132-creación-de-un-proyecto-de-javascript-vanilla)
  - [13.3. Uso Básico de npm](#133-uso-básico-de-npm)
  - [13.4. pnpm y Corepack](#134-pnpm-y-corepack)
  - [13.5. Uso de Paquetes en un Proyecto de JavaScript Vanilla](#135-uso-de-paquetes-en-un-proyecto-de-javascript-vanilla)
  - [13.6. Scripts Personalizados](#136-scripts-personalizados)
  - [13.7. Creación de un Proyecto con Vite](#137-creación-de-un-proyecto-con-vite)
    - [13.7.1. Estructura del Proyecto](#1371-estructura-del-proyecto)
    - [13.7.2. Iniciar el Servidor de Desarrollo](#1372-iniciar-el-servidor-de-desarrollo)
    - [13.7.3. Crear un Proyecto de Producción](#1373-crear-un-proyecto-de-producción)
    - [13.7.4. Personalizar Configuraciones](#1374-personalizar-configuraciones)

---

## 13.1. Instalación de Node.js con nvm

Node.js permite ejecutar JavaScript fuera del navegador. En desarrollo frontend se usa para ejecutar herramientas como Vite, npm, pnpm, linters, tests y procesos de build.

Para clase se recomienda usar **Node.js 24 LTS**. Una versión LTS es una versión estable con soporte a largo plazo.

La forma más cómoda de instalar y cambiar versiones de Node es usar `nvm`:

```bash
# Instalar la versión LTS recomendada para el curso
nvm install 24

# Activar esa versión en la terminal actual
nvm use 24

# Dejar Node 24 como versión por defecto
nvm alias default 24
```

Comprobamos la instalación:

```bash
node -v
npm -v
```

También se pueden tener varias versiones instaladas:

```bash
nvm install 22
nvm install 24
nvm use 22
nvm use 24
```

Esto es útil cuando un proyecto antiguo necesita una versión y un proyecto moderno necesita otra.

## 13.2. Creación de un Proyecto de JavaScript Vanilla

Para empezar, creamos un directorio para el proyecto y nos posicionamos sobre él a través de una terminal:

```bash
mkdir mi-proyecto
cd mi-proyecto
```

## 13.3. Uso Básico de npm

Antes de instalar paquetes, puedes iniciar un proyecto npm ejecutando:

```bash
npm init -y
```

Esto creará un archivo `package.json` que almacena información sobre el proyecto y sus dependencias.

## 13.4. pnpm y Corepack

`npm` viene instalado con Node. `pnpm` es otro gestor de paquetes moderno, rápido y eficiente con el espacio en disco. En proyectos actuales es habitual usar `pnpm` para instalar dependencias y ejecutar scripts.

Node incluye Corepack, una herramienta que permite activar gestores como pnpm:

```bash
corepack enable
corepack prepare pnpm@latest --activate
pnpm -v
```

Instalar dependencias en un proyecto:

```bash
pnpm install
```

Instalar un paquete:

```bash
pnpm add nombre-del-paquete
```

Instalar una dependencia solo para desarrollo:

```bash
pnpm add -D nombre-del-paquete
```

Equivalencias básicas:

| npm | pnpm | Uso |
| --- | --- | --- |
| `npm install` | `pnpm install` | Instalar dependencias |
| `npm install paquete` | `pnpm add paquete` | Añadir dependencia |
| `npm run dev` | `pnpm dev` | Ejecutar script |
| `npm run build` | `pnpm build` | Crear build |

## 13.5. Uso de Paquetes en un Proyecto de JavaScript Vanilla

Puedes usar paquetes instalados en tu proyecto JavaScript Vanilla mediante módulos ES. Aquí hay un ejemplo:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplo de uso de paquetes con NPM</title>
  </head>
  <body>
    <button id="paquetes">Haciendo prueba del uso de paquetes</button>

    <script src="app.js" type="module"></script>
  </body>
</html>
```

En tu archivo JavaScript `app.js`, puedes importar y usar el paquete `nombre-del-paquete` de la siguiente manera:

```javascript
// Importamos una funcionalidad desde un paquete instalado.
import utilidad from "nombre-del-paquete";

// Usamos la funcionalidad dentro de nuestro código.
utilidad();
```

## 13.6. Scripts Personalizados

Puedes definir scripts personalizados en tu `package.json` para automatizar tareas comunes. Por ejemplo, puedes agregar un script para ejecutar tu aplicación:

```json
"scripts": {
    "start": "node app.js"
},
```

Luego, puedes ejecutar tu aplicación con:

```bash
npm start
```

## 13.7. Creación de un Proyecto con Vite

[Vite](https://vite.dev/) es una herramienta de desarrollo que facilita la creación de proyectos JavaScript modernos. Puedes crear un nuevo proyecto con Vite usando npm:

```bash
npm create vite@latest nombre-del-proyecto -- --template vanilla
```

O usando pnpm:

```bash
pnpm create vite nombre-del-proyecto --template vanilla
```

Esto creará un proyecto de JavaScript Vanilla con una estructura y configuración predefinidas.

### 13.7.1. Estructura del Proyecto

Una vez que se ha creado el proyecto, la estructura de directorios se verá así:

```
nombre-del-proyecto/
  ├── node_modules/
  ├── public/
  │   ├── index.html
  │   └── favicon.ico
  ├── src/
  │   ├── main.js
  │   └── style.css
  ├── package.json
  ├── README.md
  └── .gitignore
```

- `public/`: Contiene archivos públicos, como `index.html` y `favicon.ico`.
- `src/`: Aquí se encuentra tu código fuente JavaScript, CSS y otros recursos.
- `package.json`: Archivo de configuración del proyecto.
- `src/main.js`: Punto de entrada de la aplicación.

### 13.7.2. Iniciar el Servidor de Desarrollo

Para iniciar el servidor de desarrollo proporcionado por Vite, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo local. Vite suele usar `http://localhost:5173` por defecto si el puerto está libre. Puedes ver los cambios en tiempo real mientras desarrollas.

### 13.7.3. Crear un Proyecto de Producción

Para crear una versión de producción optimizada de tu proyecto, utiliza el siguiente comando:

```bash
npm run build
```

Esto generará una carpeta `dist/` que contiene los archivos optimizados listos para ser desplegados en un servidor web.

### 13.7.4. Personalizar Configuraciones

Puedes personalizar la configuración de un proyecto Vite creando o editando `vite.config.js`. Para proyectos iniciales de JavaScript Vanilla normalmente no hace falta tocarlo.
