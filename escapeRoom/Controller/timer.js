import { time } from "./model.js";

function startTimer() {
  time.timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (time.totalSeconds <= 0) {
    window.location.href = "./failure.html";
    clearInterval(time.timerInterval);
    return;
  }
  time.totalSeconds -= 1 + time.tempoPerdido;
  time.tempoPerdido = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  // Check if time.totalSeconds is initialized before using it
  if (time.totalSeconds !== undefined) {
    const hours = Math.floor(time.totalSeconds / 3600);
    const minutes = Math.floor((time.totalSeconds % 3600) / 60);
    const seconds = time.totalSeconds % 60;

    let formattedHours = hours >= 10 ? hours : "0" + hours;
    let formattedMinutes = minutes >= 10 ? minutes : "0" + minutes;
    let formattedSeconds = seconds >= 10 ? seconds : "0" + seconds;

    const formattedTime =
      formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;

    document.getElementById("timer").innerText = formattedTime;
  }
}

startTimer();
