const currentDateEl = document.querySelector("#current-date");

// Date on Top Bar
const currentDate = moment().format("dddd, MMMM Do");
currentDateEl.textContent = currentDate;

// click event listener for save button
$(".saveBtn").on("click", function() {
    var textarea = $(this).parent().find("textarea");
    var text = textarea.val();

    console.log(textarea);
    console.log(text);

    var timeTag = $(this).parent().find(".hour");
    var time = timeTag.data("time");

    localStorage.setItem(time, text);
});