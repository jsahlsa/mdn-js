const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0, 0, width, height);

ctx.translate(width / 2, height / 2);

function degToRad(degrees) {
    return degrees * Math.PI / 180;
};

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + (min);
}

let length = 250;
let moveOffset = 20;

for (let i = 0; i < length; i++) {
    ctx.fillStyle = `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, .5)`;
    ctx.beginPath();
    ctx.lineTo(moveOffset, moveOffset);
    ctx.arc(moveOffset, moveOffset, length / 5, degToRad(0), degToRad(300), false);
    ctx.lineTo(moveOffset, moveOffset);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fill();

    length--;
    moveOffset += 2;
    ctx.rotate(degToRad(4 % 60));
}

