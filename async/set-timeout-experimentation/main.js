const para = document.querySelector('p');
let count = 0;
/*
let myGreeting = setTimeout(function () {
    para.textContent = 'Hello World!';
}, 3000);
*/
function sayHi(who, who2) {
    para.textContent = `Hello World, ${who} and ${who2}!`;
}

function works() {
    para.textContent = 'Does this work?';
}

setTimeout(works, 4000);
setTimeout(sayHi, 2000, 'Jo-Jo', 'Ricky');

function displayTime() {
    let date = new Date;
    let time = date.toLocaleTimeString();
    document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);