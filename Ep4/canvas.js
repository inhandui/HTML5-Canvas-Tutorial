var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

/* drawing rectangles */
//context.fillStyle = "rgba(255, 0, 0, 0.1)";
//context.fillRect(100, 100, 100, 100);
//context.fillStyle = "rgba(0, 0, 255, 0.1)";
//context.fillRect(100, 300, 100, 100);
//context.fillStyle = "rgba(0, 255, 0, 0.1)";
//context.fillRect(300, 300, 100, 100);
//
//console.log(canvas);

/*  drawing lines */
//context.beginPath();
//context.moveTo(50,300);
//context.lineTo(300, 100);
//context.lineTo(400, 300);
//context.strokeStyle = "red";
//context.stroke();

/* Drawing arcs - circle */
//context.beginPath();
//context.arc(300, 300, 30, 0, Math.PI * 2, false);
//context.strokeStyle = "blue";
//context.stroke();


//for (var i = 0; i < 3; i++) {
//    var x = Math.random() * window.innerWidth;
//    var y = Math.random() * window.innerHeight;
//    context.beginPath();
//    context.arc(x , y, 30, 0, Math.PI * 2, false);
//    context.strokeStyle = "blue";
//    context.stroke();
//}

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    
    this.draw = function () {
        context.beginPath();
        context.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
        context.strokeStyle = "blue";
        context.stroke();
        context.fill();
    }
    
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
    
}

var circleArray = [];

for (var i = 0; i < 100; i++){
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius ;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    circleArray.push(new Circle(x, y, dx, dy, radius));   
}

function updateAll(element, index, array){
    element.update();
}

function animate() {
    requestAnimationFrame(animate);
    
    context.clearRect(0, 0, innerWidth, innerHeight);
    
    circleArray.forEach(updateAll);
    
}

animate();