const currentDateEl = document.querySelector("#current-date");

// Date on Top Bar
const currentDate = moment().format("dddd, MMMM Do");
currentDateEl.textContent = currentDate;

// click event listener for save button
$(".saveBtn").on("click", function() {

});