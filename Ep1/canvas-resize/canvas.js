var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
context.fillRect(100, 100, 100, 100);
context.fillRect(100, 300, 100, 100);
context.fillRect(300, 300, 100, 100);

console.log(canvas);
