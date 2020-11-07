const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = 'rgb(222, 0, 0)';
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = 'rgb(0, 255, 0)';
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = 'rgba(255, 0, 255, .75)';
ctx.fillRect(25, 100, 175, 50);

ctx.fillStyle = 'rgba(23, 177, 83, .5)';
// ctx.fillRect(10, 10, 200, 150);

ctx.fillStyle = 'rgba(199, 24, 103, .6)';
// ctx.fillRect((width * .1), (height * .1), (width * .8), (height * .8));

ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.lineWidth = 5;
//ctx.strokeRect(25, 25, 175, 200);


ctx.fillStyle = 'rgb(255, 255, 0)';
ctx.beginPath();
ctx.lineTo(50, 50);
ctx.lineTo(0, 50);
ctx.lineTo(0, 0);
ctx.fill();


function degToRad(degrees) {
    return degrees * Math.PI / 180;
};

ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
let triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();

ctx.fillStyle = 'rgb(0, 0, 255)';
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill();