let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

function drawTriangle() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  let height = 200 * Math.cos(Math.PI / 6);

  context.beginPath();
  context.moveTo(100, 300);
  context.lineTo(300, 300);
  context.lineTo(200, 300 - height);
  context.closePath();


  context.lineWidth = 10;
  context.strokeStyle = '';
  context.stroke();

  context.fillStyle = "#008f39";
  context.fill();
}
drawTriangle();
