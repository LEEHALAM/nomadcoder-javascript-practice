const colors = ["#ff7675", "#6c5ce7", "#55E6C1", "#fffa65"];
const body = document.querySelector("body");

function changeColor() {
  let width = window.innerWidth;
  if (width < 500) {
    body.style.backgroundColor = colors[0];
  } else if (width < 800) {
    body.style.backgroundColor = colors[1];
  } else if (width < 1000) {
    body.style.backgroundColor = colors[2];
  } else {
    body.style.backgroundColor = colors[3];
  }
}

window.addEventListener("resize", changeColor);

function init() {
  window.addEventListener("resize", changeColor);
}

init();
