const clock = document.querySelector(".clock");

function setTime() {
  const thisTime = new Date();
  const clock = document.querySelector(".clock h1");
  const min = thisTime.getMinutes();
  const hour = thisTime.getHours();
  clock.innerText = `${hour < 10 ? `0${hour}` : hour} : ${
    min < 10 ? `0${min}` : min
  }`;
}

setInterval(setTime, 1000);
