
var currentDate, hours, minutes, seconds, session;

function displayClock() {
  currentDate = new Date();
  hours = currentDate.getHours(); // 0 -23
  minutes = currentDate.getMinutes(); // 0 -59
  seconds = currentDate.getSeconds(); // 0 -59
  session = "AM";

  changeFormat(hours);
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  var formattedTime = hours + " : " + minutes + " : " + seconds + " " + session;
  console.log("formattedTime :", formattedTime);
  document.getElementById("clock").innerText = formattedTime;
}

function changeFormat(h) {
  if (h == 12) {
    session = 'PM';
  }
  else if (h > 12) {
    hours = h - 12;
    session = 'PM';
  } else {
    session = 'AM';
  }
}

var interval;
function startClock() {
  interval = setInterval(function (){
    displayClock();
  }, 1000)
}

function stopClock() {
  clearInterval(interval);
};