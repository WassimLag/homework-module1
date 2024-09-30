function currentTime() {
    let now = new Date(); // Get current date and time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM

    // Format time
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    // Convert military time to standard time
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12; // Convert 0 to 12 AM
    }

    let clockDisplay = hours + ':' + minutes + ':' + seconds + ' ' + amPm;
    document.getElementById('digital-clock').innerHTML = clockDisplay; // Display the clock
}

currentTime(); // Initial call to display immediately
setInterval(currentTime, 1000); // Update every second
