# Consumo de APIs - High Card

En este proyecto se trabajó el desarrollo de una página web interactiva mediante el uso de HTML, CSS y JavaScript. El enfoque principal fue la creación de un juego de cartas tipo "High Card", en el que dos jugadores compiten con cartas aleatorias, incorporando mecánicas de "cambio" y revelación de cartas.

|Tabla de contenidos|
|--|
|[¿Cómo ejecutar este archivo?](#Ejecucion)|
|[Estructura del proyecto](#Estructura)|
|[Funcionamiento del programa](#Funcionamiento)|

<a name="Ejecucion"></a>

## ¿Cómo ejecutar este archivo?

Para poder utilizar correctamente esta página web se puede acceder de dos formas principales:

1. Accediendo directamente a través de este link: https://dante-sal.github.io/Javascript_S1_SalamancaDante/Dia7/
2. Clonando el repositorio mediante el siguiente comando en la terminal:

```bash
git clone https://github.com/Dante-Sal/Javascript_S1_SalamancaDante
```

Posteriormente, ingresar al directorio `Dia7/` y abrir el archivo `index.html` en el navegador web de preferencia.

<a name="Estructura"></a>

## Estructura del proyecto

```plaintext
Dia7/
├── index.html
├── js/
│   └── main.js
├── pages/
│   ├── game.html
│   └── help.html
├── style/
│   ├── style-game.css
│   ├── style-help.css
│   └── style-main.css
```

Cada archivo tiene un rol específico en la construcción del juego, desde la interfaz inicial hasta el manejo lógico del comportamiento de las cartas. Este proyecto representa una integración de HTML, CSS, JavaScript y APIs externas para desarrollar una experiencia interactiva funcional y adaptable.

<a name="Funcionamiento"></a>

## Funcionamiento del programa

### index.html
Este archivo representa la pantalla principal o "landing page" del juego. Su estructura presenta una interfaz centrada con el título del juego y dos botones principales: uno para empezar el juego y otro para acceder a la sección de ayuda. Se trata de una página sencilla que distribuye sus elementos usando `display: flex` y presenta un diseño visual atractivo basado en colores oscuros, acorde con el tono elegante y misterioso del juego.

### pages/game.html
En esta página se ejecuta el juego como tal. El layout está dividido en diferentes secciones:
- Un contenedor principal con las cartas de ambos jugadores.
- Dos botones de cambio de carta ubicados en una misma zona.
- Botones de **Mostrar cartas** y **Cerrar (X)** ubicados en otras posiciones dentro del tablero.

Se hace uso de medidas relativas para que la página sea responsiva y se adapte a diferentes dispositivos. Las cartas se obtienen mediante la API [Deck of Cards](https://deckofcardsapi.com) usando `XMLHttpRequest`, lo que permite aleatoriedad real en cada ronda.

Una vez comparadas las cartas reveladas, se determina el jugador ganador de la ronda. La carta ganadora y la perdedora son añadidas a un costado correspondiente al jugador ganador, lo cual también permite llevar un conteo visual de las cartas ganadas.

### pages/help.html
La página de ayuda está diseñada con un enfoque claro y accesible. Presenta las instrucciones del juego en inglés, explicando la mecánica de puntuación (J, Q, K = 10 pts, As = 11 pts, y números normales), así como el funcionamiento de los botones y el sistema de rondas. La estructura está optimizada para una lectura rápida y está organizada visualmente con `display: flex` para centrar y alinear los elementos.

### js/main.js
Este archivo contiene la lógica principal del juego. Las funciones se encargan de:
- Inicializar una partida solicitando dos cartas de la API.
- Controlar los cambios de carta del jugador.
- Comparar las cartas mostradas para determinar al ganador de la ronda.
- Añadir las cartas ganadas al lado correspondiente del jugador y mantener un conteo visual.

Se utiliza `XMLHttpRequest` para el consumo de la API, lo que permite manejar las respuestas de forma directa. Además, el archivo hace uso de `innerHTML` para modificar dinámicamente el contenido de los elementos HTML, como actualizar los contenedores de cartas, mostrar resultados de la ronda y actualizar los contadores de cartas ganadas. Este método facilita una experiencia de usuario más fluida sin necesidad de recargar la página.

### style/style-main.css
Estilo principal para la landing page. Usa `display: flex` para centrar el contenido y presenta un diseño limpio con botones estilizados. Los colores predominantes son oscuros, transmitiendo una estética misteriosa y elegante.

### style/style-game.css
Define la apariencia del tablero de juego. Se organizan los elementos con `display: flex`, y se hace uso exclusivo de medidas relativas para asegurar que la interfaz se adapte correctamente a distintos dispositivos. Cada sección está claramente distribuida y estilizada según su propósito.

### style/style-help.css
Define el estilo para la página de ayuda. El diseño es responsivo y centrado, pensado para ser legible en todo tipo de pantallas. Utiliza un fondo oscuro con texto claro, alineado mediante `display: flex`, garantizando orden visual y accesibilidad.