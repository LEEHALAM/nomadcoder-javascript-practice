const timeTitle = document.querySelector("h3");
timeTitle.innerText = "hi";
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const today = new Date();
  const gapMSec = xmasDay - today;
  const howDays = parseInt(gapMSec / (1000 * 60 * 60 * 24));
  const howHours = parseInt((gapMSec / (1000 * 60 * 60)) % 24);
  const howMinutes = parseInt((gapMSec / (1000 * 60)) % 60);
  const howSeconds = parseInt((gapMSec / 1000) % 60);
  timeTitle.innerText = `${howDays < 10 ? `0${howDays}` : howDays}d ${
    howHours < 10 ? `0${howHours}` : howHours
  }h ${howMinutes < 10 ? `0${howMinutes}` : howMinutes}m ${
    howSeconds < 10 ? `0${howSeconds}` : howSeconds
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
