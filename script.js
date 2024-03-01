var timer = document.getElementById('timer');
var hours = 0;
var minutes = 0;
var seconds = 0;
var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#c0c0c0'];

setInterval(function() {
    seconds++;
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }
    }

    var hourColor = colors[Math.floor(Math.random() * colors.length)];
    var minuteColor = colors[Math.floor(Math.random() * colors.length)];
    var secondColor = colors[Math.floor(Math.random() * colors.length)];

    timer.innerHTML = '<span style="color: ' + hourColor + '">' + (hours < 10 ? '0' + hours : hours) + '</span>:<span style="color: ' + minuteColor + '">' + (minutes < 10 ? '0' + minutes : minutes) + '</span>:<span style="color: ' + secondColor + '">' + (seconds < 10 ? '0' + seconds : seconds) + '</span>';
}, 1000);