function checkStatus() {
    const acknowledgementNumber = document.getElementById('acknowledgement').value;
    const statusMessage = document.getElementById('statusMessage');

    // Reset message style
    statusMessage.classList.remove('show');

    // Example logic to check subscription status
    if (acknowledgementNumber === '') {
        alert('Please enter a valid Acknowledgement Number');
    } else {
        // This is just an example. Replace this with actual logic.
        statusMessage.textContent = 'Not Subscribed. Explore Subscription Plans Here';
        statusMessage.style.color = 'red';
        statusMessage.classList.add('show');
    }
}

// Download link action (placeholder for actual download functionality)
document.getElementById('downloadLink').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Download functionality will be available soon.');
});
