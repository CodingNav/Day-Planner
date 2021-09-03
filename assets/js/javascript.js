const currentDateEl = document.querySelector("#current-date");

// Date on Top Bar
const currentDate = moment().format("dddd, MMMM Do");
currentDateEl.textContent = currentDate;

// click event listener for save button
$(".saveBtn").on("click", function() {
    // finds value of user input on the specific save button row
    var textarea = $(this).parent().find("textarea");
    var text = textarea.val();

    // finds time on the specific save button row
    var timeTag = $(this).parent().find(".hour");
    var time = timeTag.data("time");

    // saves time and text to local storage
    localStorage.setItem(time, text);
});