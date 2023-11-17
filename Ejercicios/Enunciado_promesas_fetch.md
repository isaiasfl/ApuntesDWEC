# <center><p style="color: #A04000; "><B>Ejercicios Promesas y Fetch APIS</B></p></center>

<center><img src="img_dev.jpeg" width="400" /></center>

---

### Ejercicio 1: Cargar Imagen Asíncronamente

Crea una función que cargue una imagen de forma asíncrona y la añada al cuerpo del documento. La función loadAsync se le pasará una `src` como parámetro.
La función debe devolver una promesa que se resuelva con la imagen cargada o se rechace si hay algún error.
Para simular asincronía, la imagen se cargará transcurridos 2 segundos. Mientras tanto debe de aparecer por pantalla `loading...``

### Ejercicio 2: Operaciones Aritméticas

Crea una función que realice operaciones matemáticas de forma asíncrona. Debe aceptar dos números y una cadena que indique la operación ('sumar', 'restar', 'multiplicar', 'dividir'). La función debe devolver una promesa que se resuelva con el resultado de la operación o se rechace si ocurre un error, como la división por cero.

### Ejercicio 3: Animación con Promesas

Crea una función que realice una animación de desvanecimiento de un elemento HTML. La función debe aceptar el elemento y la duración de la animación, y devolver una promesa que se resuelva cuando la animación haya terminado.


### Ejercicio 4: Llamadas Asíncronas

Crea una secuencia de tres funciones asíncronas de 1 segundo cada una(paso1, paso2, paso3) que deben ejecutarse en orden. La primera función crea una etiqueta spam, la segunda le cambia el color al texto de dicho spam y la tercera muestra un Hola mundo dentro de dicho spam.

### Ejercicio 5: Simulación de Autenticación

Crea una función que simule un proceso de inicio de sesión. A través de un formulario debe de aceptar un nombre de usuario y una contraseña(aparece no visible), y devolver una promesa que se resuelva si las credenciales son correctas y se rechace si son incorrectas.

Es necesario validar las credenciales en el EndPoint users de [JsonPlaceHolder](https://jsonplaceholder.org/users).

Si la validación es correcta no se visualizará el formulario de inicio de sesión y se sustituirá por una tarjeta centrada con los siguientes datos del usuario:

+ Nombre del usuario y apellidos.
+ Correo electrónico.
+ Mapa de la ubicación donde se encuentra el usuario. Para ello a través de la latitud y la longitud generaremos un mapa de Google usando la [api de google maps](https://console.cloud.google.com/) por ejemplo.
+ Hay que utilizar promesas y fetch api siempre que sea posible.

_Ampliación:
Crear una función que genere una cookie persistente, con el inicio de sesión y que posibilite no tener que introducir de nuevo las credenciales mientras la cookie esté guardada en el navegador._

### Ejercicio 6: Gestión del tiempo en una ciudad

Crear un proyecto en vite que permita gestionar el estado meteorológico de una ciudad a través de la api [OpenWeatherMap](https://openweathermap.org/api)

El proyecto debe de cumplir las siguientes características:

1. Dispondremos de un input en la pantalla centrado horizontalmente y un botón de buscar ciudad. Al introducir el nombre de una ciudad, si existe, mostrará los siguientes datos en una tarjeta o "card":
   - El icono del tiempo(sol, nublado, lluvia…)
   - nombre de la Ciudad y pais.
   - Los iconos más relevantes(viento, presión atmosfética,...).
2. La búsqueda de la ciudad se realizará por la tecla enter o haciendo click en el botón de buscar.
3. Los iconos del tiempo han de estar almacenados en nuestra carpeta `assets/images/`
4. El icono del tiempo aparece con un retardo de 1,5 segundos y con transición en la `opacity`.
5. Es necesario el uso de promesas y `Fetch api`.

_Nota: Mirar documentación y no usar versión 3.0(es de pago). Mejor usar versión 2.0 o 2.5._
