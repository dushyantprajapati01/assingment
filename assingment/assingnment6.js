window.onload = function () {
    let startTime, updatedTime, difference, tInterval, running = false;
    const display = document.getElementById('display');
    const startStopBtn = document.getElementById('startStop');
    const resetBtn = document.getElementById('reset');

    function startStopwatch() {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        startStopBtn.innerHTML = 'Stop';
        running = true;
    }

    function stopStopwatch() {
        clearInterval(tInterval);
        startStopBtn.innerHTML = 'Start';
        running = false;
    }

    function resetStopwatch() {
        clearInterval(tInterval);
        display.innerHTML = '00:00:00';
        startStopBtn.innerHTML = 'Start';
        running = false;
    }

    function getShowTime() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;

        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        display.innerHTML = hours + ':' + minutes + ':' + seconds;
    }

    startStopBtn.addEventListener('click', function () {
        if (!running) {
            startStopwatch();
        } else {
            stopStopwatch();
        }
    });

    resetBtn.addEventListener('click', resetStopwatch);
};
