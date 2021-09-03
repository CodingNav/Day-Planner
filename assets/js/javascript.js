const currentDateEl = document.querySelector("#current-date");

// Date on Top Bar
const currentDate = moment().format("dddd, MMMM Do");
currentDateEl.textContent = currentDate;

// click event listener for save button
$(".saveBtn").on("click", function () {
    // finds time on the specific save button row
    const timeTag = $(this).parent().find(".hour");
    const time = timeTag.data("time");

    // finds value of user input on the specific save button row
    const textarea = $(this).parent().find("textarea");
    const text = textarea.val();

    // saves time and text to local storage
    localStorage.setItem(time, text);
});

$(".time-block").each(function () {
    const timeTag = $(this).find(".hour");
    const time = timeTag.data("time");

    const textarea = $(this).find("textarea");
    const text = localStorage.getItem(time);
    textarea.val(text);
});