let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

const padZero = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};

const startTimer = () => {
  timerInterval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    const timerText = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    document.getElementById("timer").textContent = timerText;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("timer").textContent = "00:00:00";
  document.getElementById("start-btn").disabled = false;
  document.getElementById("pause-btn").disabled = true;
  document.getElementById("pause-btn").textContent = "Pause";
  document.getElementById("stop-btn").disabled = true;
};

const pauseTimer = () => {
  clearInterval(timerInterval);
  document.getElementById("start-btn").disabled = false;
  document.getElementById("pause-btn").textContent = "Continue";
};

document.getElementById("start-btn").addEventListener("click", () => {
  startTimer();
  document.getElementById("start-btn").disabled = true;
  document.getElementById("pause-btn").disabled = false;
  document.getElementById("stop-btn").disabled = false;
});

document.getElementById("pause-btn").addEventListener("click", () => {
  if (document.getElementById("pause-btn").textContent === "Pause") {
    pauseTimer();
  } else {
    startTimer();
    document.getElementById("pause-btn").textContent = "Pause";
  }
});

document.getElementById("stop-btn").addEventListener("click", () => {
  stopTimer();
});
