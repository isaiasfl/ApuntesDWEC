# Diagramas explicativos

Colección de diagramas Mermaid para reforzar conceptos clave de JavaScript antes de pasar a React o Angular.

> [!NOTE]
> Estos diagramas están pensados para clase: primero se explica el flujo, después se mira el código.

---

## 1. Del dato a la interfaz

```mermaid
flowchart LR
  A["Datos<br/>arrays, objetos, JSON"] --> B["Lógica<br/>map, filter, reduce"]
  B --> C["Render<br/>HTML / DOM"]
  C --> D["Usuario<br/>click, input, submit"]
  D --> E["Evento"]
  E --> F["Nuevo estado"]
  F --> B
```

Idea principal: la interfaz debe salir de los datos. Cuando el usuario interactúa, cambia el estado y se vuelve a pintar.

---

## 2. Flujo DOM clásico

```mermaid
sequenceDiagram
  participant JS as JavaScript
  participant DOM
  participant Usuario

  JS->>DOM: querySelector()
  JS->>DOM: addEventListener()
  Usuario->>DOM: click / input / submit
  DOM-->>JS: evento
  JS->>JS: validar datos
  JS->>DOM: actualizar nodos/clases
```

Este flujo ayuda a entender por qué en React y Angular se intenta evitar tocar el DOM manualmente en cada paso.

---

## 3. Estados de una petición fetch

```mermaid
stateDiagram-v2
  [*] --> idle
  idle --> loading: iniciar fetch
  loading --> success: respuesta ok
  loading --> error: fallo red / HTTP
  success --> idle: nueva búsqueda
  error --> loading: reintentar
```

Toda petición real necesita pensar en:

- Estado inicial.
- Carga.
- Éxito.
- Error.
- Reintento o nueva acción.

---

## 4. Event loop simplificado

```mermaid
flowchart TD
  A["Call Stack"] --> B{"¿Stack vacío?"}
  B -- "no" --> A
  B -- "sí" --> C["Microtasks<br/>promesas"]
  C --> D["Macrotasks<br/>setTimeout, eventos"]
  D --> E["Render del navegador"]
  E --> A
```

Este diagrama sirve para explicar por qué una promesa se resuelve antes que un `setTimeout(..., 0)`.

---

## 5. Arquitectura vanilla recomendada

```mermaid
flowchart TB
  UI["UI / DOM"] --> EVENTS["events.js"]
  EVENTS --> STATE["state.js"]
  STATE --> RENDER["render.js"]
  RENDER --> UI
  STATE <--> STORAGE["storage.js"]
  STATE <--> API["api.js"]
```

Separar archivos evita que una práctica pequeña se convierta en un único `main.js` difícil de mantener.

---

## 6. Puente mental a React

```mermaid
flowchart LR
  A["Objeto estado"] --> B["useState / useReducer"]
  C["Función render()"] --> D["Componente React"]
  E["addEventListener"] --> F["onClick / onSubmit"]
  G["FormData"] --> H["Actions / useActionState"]
  I["fetch + loading/error"] --> J["effects / loaders / actions"]
```

React no cambia los problemas: cambia la forma de organizarlos.

---

## 7. Puente mental a Angular

```mermaid
flowchart LR
  A["Objeto estado"] --> B["signals / propiedades"]
  C["HTML generado"] --> D["template Angular"]
  E["Eventos DOM"] --> F["(click), (submit), (input)"]
  G["Módulo API"] --> H["servicio Angular"]
  I["Validación manual"] --> J["Reactive Forms"]
```

Angular tiende a separar más la arquitectura: componente, template, servicios y formularios.

---

[Volver al índice general](../INDICE_GENERAL.md)
