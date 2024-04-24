const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const timerDisplay = document.getElementById('timer');
let countdown;
let alarmsound = new Audio('bai2/amthanhbaothuc.mp3.mp3'); 

function startTimer() {
    const minutess = parseInt(minutes.value);
    const secondss = parseInt(seconds.value);
    let totalSeconds = minutess * 60 + secondss;

    countdown = setInterval(() => {
        totalSeconds--;
        const displayMinutes = Math.floor(totalSeconds / 60);
        const displaySeconds = totalSeconds % 60;
        
        timerDisplay.textContent = `${displayMinutes < 10 ? '0' : ''}${displayMinutes}:${displaySeconds < 10 ? '0' : ''}${displaySeconds}`;

        if (totalSeconds === 0) {
            clearInterval(countdown);
            timerDisplay.textContent = '00:00';
            alert('Time is up!');
            alarmsound.play();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    minutes.value = '';
    seconds.value = '';
    timerDisplay.textContent = '';
    alarmsound.pause();
}

start.addEventListener('click', startTimer);
reset.addEventListener('click', resetTimer);
