let time = document.getElementById("timeRemaining").innerHTML;
let countDown = 0;
var interval;

function displayTime() {
  let timeRemainingValue = time.split(":")[0] + ":" + countDown;
  document.getElementById("timeRemaining").innerHTML = timeRemainingValue;
}

function setAlarm() {
  countDown = document.getElementById("alarmTime").value;
  displayTime();
  interval = setInterval(function () {
    if (countDown === 0) {
      playAlarm();
      clearInterval();
    } else {
      countDown--;
    }
    displayTime();
  }, 1000);
  // document.getElementById("alarmTime").value = 0;
  // parseInt(document.querySelector('#'), 10);
}
// const pauseAlarm = document.getElementById('pause');
// console.log(pauseAlarm);
// pauseAlarm.addEventListener('click', ()=>{
//   if(pauseAlarm.textContent === 'Pause Alarm'){
//     clearInterval ()
//   }
// })
const stopAlarm = () => {
  clearInterval(interval);
};
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
