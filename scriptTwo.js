function BallTwo() {
    this.x = 100;
    this.y = 100;

    this.speedX = 3;
    this.speedY = 3;
}

function circle(x, y, radius, isFill) {
    ctxTwo.beginPath();

    ctxTwo.arc(x,y, radius, 0, Math.PI * 2, false);

    if(isFill){
        ctxTwo.fill();
    }else{
        ctxTwo.stroke();
    }
}

BallTwo.prototype.getCircle = function(){
    circle(this.x, this.y, 50, true);
}

BallTwo.prototype.move = function(event) {
    console.log(keys[event.keyCode])
    if(keys[event.keyCode] === 'up' || keys[event.keyCode] === 'w'){
        this.y -= this.speedY
    }else if(keys[event.keyCode] === 'down' || keys[event.keyCode] === 's'){
        this.y += this.speedY
    }else if(keys[event.keyCode] === 'right' || keys[event.keyCode] === 'd'){
        this.x += this.speedX
    }else if(keys[event.keyCode] === 'left' || keys[event.keyCode] === 'a'){
        this.x -= this.speedX
    }
}

BallTwo.prototype.checkCoolision = function() {
    if(this.x > 450) {
        this.x = 450
    }else if(this.x < 50) {
        this.x = 50;
    }else if(this.y > 450) {
        this.y = 450;
    }else if(this.y < 50) {
        this.y = 50;
    }
}

let canvasTwo = document.querySelector('.canvasTwo');
let body = document.querySelector('body');

let keys = {
    38: 'up',
    40: 'down',
    39: 'right',
    37: 'left',
    87: 'w',
    68: 'd',
    83: 's',
    65: 'a'
}

let ctxTwo = canvasTwo.getContext('2d');

let ballTwo = new BallTwo();

ballTwo.getCircle();

body.addEventListener('keydown', (event) => {
    ctxTwo.clearRect(0,0, 500, 500);

    ballTwo.move(event);
    
    ballTwo.getCircle();
    ballTwo.checkCoolision();
    ctxTwo.strokeRect(0, 0, 500, 500);
})