var canvas = document.getElementById("lienzo");
  if (canvas && canvas.getContext) {
  var ctx = canvas.getContext("2d");
    if (ctx) {
        ctx.fillStyle = "#6ab150";
        ctx.lineWidth = 6;
        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var R = 100;

        var L = 12;
        var paso = 5

        var estrella= L / paso
        var rad = (2*Math.PI) / estrella;

        ctx.beginPath();
            for( var i = 0; i < L; i++ ){
            x = X + R * Math.cos( rad*i );
            y = Y + R * Math.sin( rad*i );
            ctx.lineTo(x, y);
            }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
  }
