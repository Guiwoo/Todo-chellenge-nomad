const form = document.querySelector(".ask_name"),
  input = form.querySelector(".nameInput");

const USER_N = "currentUser";

function clearName() {
  input.parentNode.removeChild(input);
  input.style.display = "none";
}

function paintName() {
  clearName();
  const hello = document.querySelector(".hello");
  hello.innerText = `Concentrate!! ${localStorage.getItem(USER_N)}`;
}

function saveName(user) {
  localStorage.setItem(USER_N, user);
}

function handleSubmit(event) {
  event.preventDefault();
  const CurrentName = input.value;
  saveName(CurrentName);
  paintName();
}

function askName() {
  form.addEventListener("submit", handleSubmit);
}

function loadedName() {
  const UserName = localStorage.getItem(USER_N);
  if (UserName === null) {
    askName();
  } else {
    paintName();
  }
}

function init() {
  loadedName();
}

init();
