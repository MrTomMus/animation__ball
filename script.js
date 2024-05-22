function Ball() {
    this.x = 100;
    this.y = 100;

    this.speedX = 2;
    this.speedY = -5;
    
}

function circle(x, y, radius, isFill) {
    ctx.beginPath();

    ctx.arc(x, y, radius, 0, Math.PI * 2, false);

    if(isFill) {
        ctx.fill();
    }else {
        ctx.stroke();
    }
}

Ball.prototype.createBall = function() {
    circle(this.x, this.y, 50, true)
}

Ball.prototype.move = function() {
    this.x += this.speedX;
    this.y += this.speedY;
}

Ball.prototype.collision = function() {
    if(this.x < 50 || this.x > 450) {
        this.speedX = -this.speedX;
    }
    if(this.y < 50 || this.y > 450) {
        this.speedY = -this.speedY;
    }
}

let canvas = document.querySelector('.canvas');

let ctx = canvas.getContext('2d');


let ballOne = new Ball();

setInterval(() => {
    ctx.clearRect(0, 0, 500, 500);

    ballOne.createBall();
    ballOne.move();
    ballOne.collision();

    ctx.strokeRect();

}, 30)




console.log(ctx);