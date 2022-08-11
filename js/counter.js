// The data/time we want to countdown to
    let countDownDate = new Date("Nov 5, 2022 16:37:52").getTime();

    // Run myfunc every second
    let myfunc = setInterval(function() {

    let now = new Date().getTime();
    let timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + "d"
    document.getElementById("hours").innerHTML = hours + "h" 
    document.getElementById("mins").innerHTML = minutes + "m" 
    document.getElementById("secs").innerHTML = seconds + "s" 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);