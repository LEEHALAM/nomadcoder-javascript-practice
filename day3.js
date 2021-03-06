// <⚠️ DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const h2 = document.querySelector("h2");

const superEventHandler = {
  mouseenter: function (event) {
    h2.style.color = colors[0];
    h2.innerHTML = "The mouse is here!";
  },

  mouseleave: function (event) {
    h2.style.color = colors[1];
    h2.innerHTML = "The mouse is gone!";
  },

  resize: function (event) {
    h2.style.color = colors[2];
    h2.innerHTML = "You just resized!";
  },

  contextmenu: function (event) {
    h2.style.color = colors[3];
    h2.innerHTML = "That was a right click!";
  },

  wheel: function (event) {
    h2.style.color = colors[4];
    h2.innerHTML = "Wheel~~~";
  },
};

h2.addEventListener("mouseenter", superEventHandler.mouseenter);
h2.addEventListener("mouseleave", superEventHandler.mouseleave);
window.addEventListener("resize", superEventHandler.resize);
document.addEventListener("contextmenu", superEventHandler.contextmenu);
document.addEventListener("wheel", superEventHandler.wheel);
