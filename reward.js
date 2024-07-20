document.addEventListener('DOMContentLoaded', () => {
    const pointsBalance = document.getElementById('points-balance');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const tripList = document.getElementById('trip-list');
    const logForm = document.getElementById('log-trip-form');

    let points = 120;

    function updatePointsDisplay() {
        pointsBalance.textContent = points;
        const progressPercentage = (points / 200) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `${Math.round(progressPercentage)}% to next reward`;
    }

    function logTrip(event) {
        event.preventDefault();
        const tripType = document.getElementById('trip-type').value;
        const tripDate = document.getElementById('trip-date').value;
        const tripProof = document.getElementById('trip-proof').files[0];

        if (tripType && tripDate) {
            const listItem = document.createElement('li');
            listItem.textContent = `${tripType} trip on ${tripDate}`;
            tripList.appendChild(listItem);

            points += 10; // Assume each trip earns 10 points
            updatePointsDisplay();
        }
    }

    function redeemReward(pointsNeeded) {
        if (points >= pointsNeeded) {
            points -= pointsNeeded;
            updatePointsDisplay();
            alert(`You have redeemed a reward for ${pointsNeeded} points!`);
        } else {
            alert('Not enough points to redeem this reward.');
        }
    }

    logForm.addEventListener('submit', logTrip);

    updatePointsDisplay();
});
