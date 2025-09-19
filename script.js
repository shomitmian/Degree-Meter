// --- CONFIGURATION ---
const semesterStart = new Date('2025-08-25'); // Format: YYYY-MM-DD
const semesterEnd = new Date('2025-12-05');   // Format: YYYY-MM-DD
// --------------------

function updateProgressBar() {
    const today = new Date();
    
    // Set hours to 0 to compare dates only, not times
    today.setHours(0, 0, 0, 0);
    semesterStart.setHours(0, 0, 0, 0);
    semesterEnd.setHours(0, 0, 0, 0);

    // Calculate total duration of the semester in milliseconds
    const totalDuration = semesterEnd.getTime() - semesterStart.getTime();

    // Calculate elapsed time since the semester started in milliseconds
    const elapsedTime = today.getTime() - semesterStart.getTime();

    // Calculate the percentage of the semester that has passed
    let percentagePassed = (elapsedTime / totalDuration) * 100;

    // Clamp the percentage between 0 and 100
    percentagePassed = Math.max(0, Math.min(100, percentagePassed));

    // Calculate days remaining
    const oneDay = 1000 * 60 * 60 * 24; // milliseconds in one day
    const daysRemaining = Math.max(0, Math.ceil((semesterEnd - today) / oneDay));

    // Get the HTML elements to update
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const daysRemainingText = document.getElementById('daysRemainingText');

    // Update the progress bar's width and the text content
    progressBar.style.width = percentagePassed + '%';
    progressText.textContent = `${percentagePassed.toFixed(2)}% Complete`;
    daysRemainingText.textContent = `Only ${daysRemaining} days to go!`;

    // Special message for when it's over!
    if (percentagePassed >= 100) {
        daysRemainingText.textContent = "Congratulations, the semester is over! 🎉";
    }
}

// Run the function when the page loads
window.onload = updateProgressBar;