var c = document.getElementById('corazon');
var ct = c.getContext('2d');

ct.beginPath();
ct.fillStyle = "rgba(200,0,0,0.5)"; //color en fomato RGB + opacidad
ct.moveTo(90,250);
ct.bezierCurveTo(75,247,70,235,50,235);
ct.bezierCurveTo(20,235,20,272.5,20,272);
ct.bezierCurveTo(20,290,40,312,75,330);
ct.bezierCurveTo(110,312,130,290,130,272);
ct.bezierCurveTo(130,272.5,130,235,100,235);
ct.bezierCurveTo(85,235,75,247,75,250);
ct.closePath();
ct.fill();
