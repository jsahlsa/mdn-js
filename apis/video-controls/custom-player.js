const media = document.querySelector('video');
const controls = document.querySelector('.controls');

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const rwd = document.querySelector('.rwd');
const fwd = document.querySelector('.fwd');

const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');

media.removeAttribute('controls');
controls.style.visibility = 'visible';

play.addEventListener('click', playPauseMedia);
stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);

function playPauseMedia() {
    fwd.classList.remove('active');
    rwd.classList.remove('active');
    clearInterval(intervalFwd);
    clearInterval(intervalRwd);

    if (media.paused) {
        play.setAttribute('data-icon', 'u');
        media.play();
    } else {
        play.setAttribute('data-icon', 'P');
        media.pause();
    }
}

function stopMedia() {
    media.pause();
    media.currentTime = 0;
    play.setAttribute('data-icon', 'P');
    fwd.classList.remove('active');
    rwd.classList.remove('active');
    clearInterval(intervalFwd);
    clearInterval(intervalRwd);
}

rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);
media.addEventListener('timeupdate', setTime);

let intervalFwd;
let intervalRwd;

function mediaBackward() {
    clearInterval(intervalFwd);
    fwd.classList.remove('active');

    if (rwd.classList.contains('active')) {
        rwd.classList.remove('active');
        clearInterval(intervalRwd);
        media.play();
    } else {
        rwd.classList.add('active');
        media.pause();
        play.setAttribute('data-icon', 'P');
        intervalRwd = setInterval(windBackward, 200);
    }
}

function mediaForward() {
    clearInterval(intervalRwd);
    rwd.classList.remove('active');

    if (fwd.classList.contains('active')) {
        fwd.classList.remove('active');
        clearInterval(intervalFwd);
        media.play();
    } else {
        fwd.classList.add('active');
        media.pause();
        play.setAttribute('data-icon', 'P');
        intervalFwd = setInterval(windForward, 200);
    }
}

function windBackward() {
    if (media.currentTime <= 3) {
        rwd.classList.remove('active');
        clearInterval(intervalRwd);
        stopMedia();
    } else {
        media.currentTime -= 3;
    }
}

function windForward() {
    if (media.currentTime >= media.duration - 3) {
        fwd.classList.remove('active');
        clearInterval(intervalFwd);
        stopMedia();
    } else {
        media.currentTime += 3;
    }
}

function setTime() {
    console.log(media.currentTime);
    let minutes = Math.floor(media.currentTime / 60);
    console.log(minutes);
    // seconds does minutes * 60 operation first, then subtracts total seconds in minutes variable
    let seconds = Math.floor(media.currentTime - (minutes * 60));
    console.log(seconds);
    let minuteValue;
    let secondValue;

    if (minutes < 10) {
        minuteValue = '0' + minutes;
    } else {
        minuteValue = minutes;
    }

    if (seconds < 10) {
        secondValue = '0' + seconds;
    } else {
        secondValue = seconds;
    }

    let mediaTime = minuteValue + ':' + secondValue;
    timer.textContent = mediaTime;

    let barLength = timerWrapper.clientWidth * (media.currentTime / media.duration);
    timerBar.style.width = barLength + 'px';
}
