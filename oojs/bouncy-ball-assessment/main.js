const para = document.querySelector('p');
let count = 0;

// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

// shape class creation

function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}

// ball constructor properties

function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(this, x, y, velX, velY, exists);

    this.color = color;
    this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;


// EvilCircle constructor

function EvilCircle(x, y, exists) {
    Shape.call(this, x, y, 20, 20, exists);

    this.color = 'white';
    this.size = 10;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;


// Ball methods:
// method for drawing the balls
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

// update method
Ball.prototype.update = function () {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
        // for EvilCircle: this.x = width - this.size;
    }
    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }
    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}

// collision detect
// loop, first checks that it doesn't collide with itself
// then sets constants and if statement that test for a collision
// if there is a collision, both balls change color
Ball.prototype.collisionDetect = function () {
    for (let j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
            }
        }
    }
}

// EvilCircle methods:
// draw method

EvilCircle.prototype.draw = function () {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
}

EvilCircle.prototype.checkBounds = function () {
    if ((this.x + this.size) >= width) {
        this.x = width - this.size;
        // for EvilCircle: this.x = width - this.size;
    }
    if ((this.x - this.size) <= 0) {
        this.x = 0 + this.size;
    }
    if ((this.y + this.size) >= height) {
        this.y = height - this.size;
    }
    if ((this.y - this.size) <= 0) {
        this.y = 0 + this.size;
    }
}

// EvilCircle method that adds keydown event for user control
// learn more about scope (_this = this)

EvilCircle.prototype.setControls = function () {
    let _this = this;
    window.onkeydown = function (e) {
        if (e.key === 'a') {
            _this.x -= _this.velX;
        } else if (e.key === 'd') {
            _this.x += _this.velX;
        } else if (e.key === 'w') {
            _this.y -= _this.velY;
        } else if (e.key === 's') {
            _this.y += _this.velY;
        }
    }
}

// EvilCirle collisionDetect method

EvilCircle.prototype.collisionDetect = function () {
    for (let j = 0; j < balls.length; j++) {
        if (balls[j].exists) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                // might need to fix this part
                balls[j].exists = false;
                count--;
                para.textContent = 'Balls left: ' + count;
            }
        }
    }
}

// builds balls 
// const numberOfBalls = 30;

let balls = [];

while (balls.length < 25) {
    let size = random(10, 20);
    let ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        true,
        `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,
        size
    );

    balls.push(ball);
    count++;
    para.textContent = 'Balls left: ' + count;
}

let evilCircle = new EvilCircle(
    random(0 + 10, width - 10),
    random(0 + 10, height - 10),
    true
);

evilCircle.setControls();



function loop() {
    ctx.fillStyle = 'rgb(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, width, height);
    // evilCircle.setControls();

    for (let i = 0; i < balls.length; i++) {

        // only draw if exists = true
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        }


    }

    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();

    requestAnimationFrame(loop);
}

loop();