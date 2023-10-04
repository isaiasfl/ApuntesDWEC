# 13. Uso de npm e Instalación de Elementos en JavaScript Vanilla 📝 🖥️

- [13. Uso de npm e Instalación de Elementos en JavaScript Vanilla 📝 🖥️](#13-uso-de-npm-e-instalación-de-elementos-en-javascript-vanilla--️)
  - [13.1. Instalación de Node.js y npm](#131-instalación-de-nodejs-y-npm)
  - [13.2. Creación de un Proyecto de JavaScript Vanilla](#132-creación-de-un-proyecto-de-javascript-vanilla)
  - [13.3. Uso Básico de npm](#133-uso-básico-de-npm)
  - [13.4. Instalación de Paquetes con npm](#134-instalación-de-paquetes-con-npm)
  - [13.5. Uso de Paquetes en un Proyecto de JavaScript Vanilla](#135-uso-de-paquetes-en-un-proyecto-de-javascript-vanilla)
  - [13.6. Scripts Personalizados](#136-scripts-personalizados)
  - [13.7. Creación de un Proyecto con Vite](#137-creación-de-un-proyecto-con-vite)
    - [13.7.1. Estructura del Proyecto](#1371-estructura-del-proyecto)
    - [13.7.2. Iniciar el Servidor de Desarrollo](#1372-iniciar-el-servidor-de-desarrollo)
    - [13.7.3. Crear un Proyecto de Producción](#1373-crear-un-proyecto-de-producción)
    - [13.7.4. Personalizar Configuraciones](#1374-personalizar-configuraciones)

---

## 13.1. Instalación de Node.js y npm

npm (Node Package Manager) es una herramienta esencial en el mundo de JavaScript que permite gestionar paquetes y dependencias de proyectos.
Antes de comenzar, debemos de tener Node.js y [npm](https://www.npmjs.com/) instalados en tu sistema. Se puede descargar desde el sitio web oficial de Node.js [https://nodejs.org/](https://nodejs.org/).

Verificamos la instalación ejecutando los siguientes comandos en tu terminal:

```bash
node -v
npm -v
```

Estos comandos deberían mostrar las versiones instaladas de Node.js y npm.

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

## 13.4. Instalación de Paquetes con npm

Para instalar un paquete, utiliza el siguiente comando:

```bash
npm install nombre-del-paquete
// si lo hacemos así, el paquete se instalará para el proyecto que estamos trabajando.
npm install -g nombre-del-paquete
// si lo hacemos así, el paquete estará disponible para cualquier proyecto que creemos
```

Esto descargará el paquete y lo agregará como una dependencia en tu `package.json`.

## 13.5. Uso de Paquetes en un Proyecto de JavaScript Vanilla

Puedes usar paquetes instalados en tu proyecto JavaScript Vanilla incluyéndolos en tu archivo HTML. Aquí hay un ejemplo:

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

    <script src="app.js"></script>
  </body>
</html>
```

En tu archivo JavaScript `app.js`, puedes importar y usar el paquete `nombre-del-paquete` de la siguiente manera:

```javascript
// Importamos el paquete nombre-del-paquete
import funcionalidad_que_deseo_del_paquete from 'nombre-del-paquete';
....

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

[Vite](https://www.npmjs.com/package/vite) es una herramienta de desarrollo que facilita la creación de proyectos JavaScript modernos. Puedes crear un nuevo proyecto con Vite usando el siguiente comando:

```bash
npm init vite@latest nombre_del_proyecto -- --template vanilla
```

Esto creará un proyecto de JavaScript Vanilla llamado `nombre_del_proyecto` con una estructura y configuración predefinidas.

### 13.7.1. Estructura del Proyecto

Una vez que se ha creado el proyecto, la estructura de directorios se verá así:

```
nombre_del_proyecto/
  ├── node_modules/
  ├── public/
  │   ├── index.html
  │   └── favicon.ico
  ├── src/
  │   ├── main.js
  │   ├── App.css
  │   └── App.js
  ├── package.json
  ├── README.md
  ├── vite.config.js
  └── .gitignore
```

- `public/`: Contiene archivos públicos, como `index.html` y `favicon.ico`.
- `src/`: Aquí se encuentra tu código fuente JavaScript, CSS y otros recursos.
- `package.json`: Archivo de configuración del proyecto.
- `vite.config.js`: Archivo de configuración de Vite.

### 13.7.2. Iniciar el Servidor de Desarrollo

Para iniciar el servidor de desarrollo proporcionado por Vite, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo en `http://localhost:3000` por defecto. Puedes ver los cambios en tiempo real en tu aplicación mientras desarrollas.

### 13.7.3. Crear un Proyecto de Producción

Para crear una versión de producción optimizada de tu proyecto, utiliza el siguiente comando:

```bash
npm run build
```

Esto generará una carpeta `dist/` que contiene los archivos optimizados listos para ser desplegados en un servidor web.

### 13.7.4. Personalizar Configuraciones

Puedes personalizar la configuración de tu proyecto Vite editando el archivo `vite.config.js`. Este archivo te permite ajustar diversas opciones, como configuraciones de rutas, configuración de Babel y más.
