var targetMinute = 1;

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('startButton').addEventListener('click', startCountdown);
})

function startCountdown() {
    var endTime = new Date(new Date().getTime() + targetMinute * 60000);
    var timer = document.getElementById("timer");

    // Update the count down every 10 milliseconds
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = endTime - now;

        // Calculate total seconds remaining
        var totalSeconds = Math.floor(distance / 1000);

        // Time calculations for minutes and seconds
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = Math.floor(totalSeconds % 60);

        // Format seconds to have leading zero if less than 10
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timer.innerHTML = minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            timer.innerHTML = "EXPIRED";
        }
    }, 100); 
}