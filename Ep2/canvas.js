var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

/* drawing rectangles */
context.fillStyle = "rgba(255, 0, 0, 0.1)";
context.fillRect(100, 100, 100, 100);
context.fillStyle = "rgba(0, 0, 255, 0.1)";
context.fillRect(100, 300, 100, 100);
context.fillStyle = "rgba(0, 255, 0, 0.1)";
context.fillRect(300, 300, 100, 100);

console.log(canvas);

/*  drawing lines */
context.beginPath();
context.moveTo(50,300);
context.lineTo(300, 100);
context.lineTo(400, 300);
context.strokeStyle = "red";
context.stroke();

/* Drawing arcs - circle */
//context.beginPath();
//context.arc(300, 300, 30, 0, Math.PI * 2, false);
//context.strokeStyle = "blue";
//context.stroke();


for (var i = 0; i < 3; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    context.beginPath();
    context.arc(x , y, 30, 0, Math.PI * 2, false);
    context.strokeStyle = "blue";
    context.stroke();
}