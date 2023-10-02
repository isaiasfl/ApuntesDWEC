# <center><p style="color: #A04000; "><B>Ejercicios Destructuring de Objetos</B></p></center>

<center><img src="img_dev.jpeg" width="400" /></center>

---

<Br>

### Ejercicio 1

**Enunciado:** Dado el siguiente objeto, utiliza la desestructuración para extraer las propiedades `nombre` y `edad` en variables separadas. Después crear un objeto con dichas propiedades y los valores obtenidos.

```javascript
const persona = {
  nombre: "Juan",
  edad: 30,
};
```

### Ejercicio 2

**Enunciado:** Dado el siguiente objeto, utiliza la desestructuración para extraer la propiedad `ciudad` en una variable llamada `lugar`.

```javascript
const direccion = {
  calle: "Calle Principal",
  ciudad: "Ciudad Ejemplo",
  codigoPostal: "12345",
};
```

### Ejercicio 3

**Enunciado:** Dado el siguiente objeto, utiliza la desestructuración para extraer las propiedades `primerNumero` y `segundoNumero` en variables separadas. Además a la vez, la variable segundoNumero se debe llamar `secondNumber`

<br>

```javascript
const numeros = {
  data: {
    primerNumero: 10,
    segundoNumero: 20,
  },
};
```

### Ejercicio 4

**Enunciado:** Dado el siguiente objeto, utiliza la desestructuración para extraer la propiedad `nombre` y `apellidos` en una variable llamada `nombre` y `apellidoPersona` respectivamente. Si la propiedad apellidos no existe en el objeto, asigna un valor predeterminado de 'Desconocido'.

```javascript
const persona = {
  id: 23,
  info: {
    nombre: "María",
    apellidos: "Jiménez Téllez",
    edad: 25,
  },
};
```

### Ejercicio 5

**Enunciado:** Dado el siguiente objeto, utiliza la desestructuración para extraer las propiedades `nombre` y `edad`. Luego, crea un nuevo objeto llamado `datosPersona` y asigna las propiedades extraídas a este nuevo objeto.

```javascript
const persona = {
  nombre: "Luis",
  edad: 40,
  ciudad: "Ciudad Ejemplo",
};
```

### Ejercicio 6

**Enunciado:** Dado el siguiente objeto que representa un punto en coordenadas, utiliza la desestructuración para extraer las propiedades `x` y `y` en variables separadas y calcula la distancia euclidiana desde el origen (0,0).

<br>

>

<br>

### Ejercicio 7

**Enunciado:** Dado el siguiente objeto que representa una persona con un nombre y una lista de amigos, utiliza la desestructuración para extraer el nombre de la persona y el primer amigo de la lista.

```javascript
const persona = {
  nombre: "Carlos",
  amigos: ["Ana", "David", "Elena"],
};
```
