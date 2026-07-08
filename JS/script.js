const bpmElement = document.getElementById("bpm-number");

function updateHeartRate() {
  const min = 72;
  const max = 79;
  const randomBPM = Math.floor(Math.random() * (max - min + 1)) + min;

  bpmElement.textContent = randomBPM;
}
setInterval(updateHeartRate, 1200);
