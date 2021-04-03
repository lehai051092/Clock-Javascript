function showTime() {
    let date = new Date();
    let showHours = document.getElementById('hours');
    let showMinutes = document.getElementById('minutes');
    let showSeconds = document.getElementById('seconds');
    let sessionTime = document.getElementById('session-time');
    let getHours = date.getHours();
    let getMinutes = date.getMinutes();
    let getSeconds = date.getSeconds();

    showHours.innerHTML = (getHours < 10) ? "0" + getHours : getHours;
    showMinutes.innerHTML = (getMinutes < 10) ? "0" + getMinutes : getMinutes;
    showSeconds.innerHTML = (getSeconds < 10) ? "0" + getSeconds : getSeconds;
    sessionTime.innerHTML = (getHours > 12) ? "PM" : "AM";

    setTimeout(showTime, 1000);
}

showTime();

function calcTime(city, offset) {
    let date = new Date();
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    let newDate = new Date(utc + (3600000 * offset));
    let localTime = document.getElementById('local-time');

    localTime.innerHTML = "The local time in " + city + " is " + newDate.toLocaleString();
}

setInterval(function () {
    calcTime("Ha Noi", "+7")
}, 1000);



