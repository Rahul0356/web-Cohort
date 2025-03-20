

const startButton = document.getElementById('startButton');
const timeInput = document.getElementById('timeInput');
const CountDownDisplay = document.getElementById('CountDownDisplay');

function startTimer() {
    let valueInseconds = parseInt(timeInput.value); 

    if (isNaN(valueInseconds)) {
        CountDownDisplay.innerText = 'Please enter a valid number';
        return;
    }
    if (valueInseconds <= 0) {
        CountDownDisplay.innerText = 'Countdown timer should be greater than 0';
        return;
    }

    const timer = setInterval(function() {
        valueInseconds--;
        CountDownDisplay.innerText = `Time remaining: ${valueInseconds} seconds`;

        if (valueInseconds <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startButton.addEventListener('click', startTimer);
