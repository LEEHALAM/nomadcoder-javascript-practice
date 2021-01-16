const countryForm = document.querySelector(".js-from"),
  countryOption = countryForm.querySelector("option");

const SELECT_FROM = "Country";

function saveCountry() {
  localStorage.setItem(SELECT_FROM, countryForm.value);
}

function loadCountry() {
  const selectCountry = localStorage.getItem(SELECT_FROM);
  if (selectCountry !== null) {
    countryForm.value = selectCountry;
  }
}

function init() {
  countryForm.addEventListener("change", saveCountry);
  loadCountry();
}

init();
