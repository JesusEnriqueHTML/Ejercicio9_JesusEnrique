var cx = 125;
var cy = 100;
var r = 75;
var lados = 10;
var paso = 3;

function points(cx, cy, r, lados, paso){
var a = 360/lados;
var points= (cx+r)+","+cy+" ";

		for(var i=1;i <= lados;i++){
				var aRad=  ((Math.PI / 180) * (a*i))*paso;
				Xp = cx+r * Math.cos(aRad);
				Yp = cy+r * Math.sin(aRad);
				points += Xp+","+Yp+" ";
		}
return points
}
var estrella = document.getElementById("estrella");
estrella.setAttribute("points", points(cx, cy, r, lados,paso));
