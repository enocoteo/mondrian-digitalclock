$(document).ready(function() {

    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();



        var meridiem = "AM";

        if (hours < 10){
            hours = "0" + hours;
        }
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (hours > 12){
            hours = hours - 12;
            meridiem = "PM";
        }
        if (hours === 0){
            hours = 12;
        }


    var clockDiv = document.getElementById("clock");
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    }

    function displayDay(){
        var currentDay = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        var dayDiv = document.getElementById("day");
            dayDiv.innerText = document.getElementById("day").innerHTML = days[currentDay.getDay()];

    }

    function displayDate() {
        var currentDate = new Date();
        var date = currentDate.getDate();
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January"];
        var year = currentDate.getFullYear();

        var calendarDiv = document.getElementById("calendar");
            calendarDiv.innerText = document.getElementById("calendar").innerHTML = month[currentDate.getMonth()] + " " + date + " " + year;
    }


    

    displayTime();
    setInterval(displayTime, 1000);
    displayDay();
    displayDate();


});

