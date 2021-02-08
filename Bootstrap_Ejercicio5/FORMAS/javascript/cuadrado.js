const ALTURA_CANVAS = 200,
	ANCHURA_CANVAS = 400;

// Obtener el elemento del DOM
const canvas = document.querySelector("#canvas");
canvas.width = ANCHURA_CANVAS;
canvas.height = ALTURA_CANVAS;
// Del canvas, obtener el contexto para poder dibujar
const contexto = canvas.getContext("2d");
// Estilo de dibujo
// Grosor de línea
contexto.lineWidth = 5;
// Color de línea
contexto.strokeStyle = "#212121";
// Color de relleno
contexto.fillStyle = "pink";
// Dibujamos un rectángulo con lados iguales
contexto.rect(5, 5, 100, 100);
// Hacemos que se dibuje
contexto.stroke();
// Lo rellenamos
contexto.fill();
