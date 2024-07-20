document.addEventListener('DOMContentLoaded', function() {
    let points = 0;
    const pointsDisplay = document.getElementById('points');
    const simulateTripButton = document.getElementById('simulate-trip');
    const userCountDisplay = document.getElementById('users');
    let userCount = 10000;

    simulateTripButton.addEventListener('click', function() {
        const earnedPoints = Math.floor(Math.random() * 50) + 10;
        points += earnedPoints;
        pointsDisplay.textContent = points;
        
        userCount += Math.floor(Math.random() * 5) + 1;
        userCountDisplay.textContent = userCount.toLocaleString();

        showNotification(`Congratulations! You earned ${earnedPoints} EcoPoints for your eco-friendly trip!`);
    });

    document.getElementById('download-app').addEventListener('click', function() {
        showNotification('Thank you for your interest! The EcoCommute app would be available for download here.');
    });

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#4CAF50';
        notification.style.color = 'white';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transition = 'opacity 0.5s ease';
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
    }
});