const title = document.querySelector(".title");
title.innerHTML = "Hi From Js";
title.style.color = "red";
document.title = "2-3 javascript";
const body = document.querySelector("body");
body.style.backgroundColor = "green";

function handleResize(event) {
  title.style.color = "#0096C7";
  title.innerHTML = "Resize!";
}

function handleClick(event) {
  title.style.color = "#a5a58d";
  title.innerHTML = "Click!";
}

window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);
