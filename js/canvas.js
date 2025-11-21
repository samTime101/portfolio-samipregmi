let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")

class Box{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.vx = 1;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(){
        this.x += this.vx;
        if (this.x + this.width > canvas.width || this.x < 0) {
            this.vx *= -1;
        }
    }

    animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.update();
        this.draw();
    }
}

let box = new Box(0, canvas.height/2, 10, 10, 'blue');

function animateLoop(){
    requestAnimationFrame(animateLoop);
    box.animate();
}
animateLoop();
