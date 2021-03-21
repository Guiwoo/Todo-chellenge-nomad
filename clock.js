const clock = document.querySelector(".clock");
const barDate = document.querySelector(".date-js");
const thisTime = new Date();

function setTime() {
  const clock = document.querySelector(".clock h1");
  const min = thisTime.getMinutes();
  const hour = thisTime.getHours();
  clock.innerText = `${hour < 10 ? `0${hour}` : hour} : ${
    min < 10 ? `0${min}` : min
  }`;
}

function setDate() {
  const month = thisTime.getMonth();
  const day = thisTime.getDate();
  barDate.innerText = `${month + 1}월 ${day}일`;
}
setInterval(setDate, 1000);
setInterval(setTime, 1000);
