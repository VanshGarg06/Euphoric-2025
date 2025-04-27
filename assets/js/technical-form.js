document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const technicalEvents = document.querySelectorAll('input[name="technicalEvents"]:checked');
    if (technicalEvents.length > 2) {
        alert('Please select at most two cultural events.');
        return;
    }

    const formData = new FormData(this);

    fetch('submit_registration.php', { // Replace with your server-side script
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Display server response
    })
    .catch(error => {
        console.error('Error:', error);
    });
});