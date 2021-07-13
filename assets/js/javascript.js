var currentDateEl = document.querySelector("#current-date");

// Date on Top Bar
var currentDate = moment().format("dddd, MMMM Do");
currentDateEl.textContent = currentDate;