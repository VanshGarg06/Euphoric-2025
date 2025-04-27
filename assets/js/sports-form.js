document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const sportsEvents = document.querySelectorAll('input[name="sportsEvents"]:checked');
    const teamEvents = document.querySelectorAll('input[name="teamEvents"]:checked');
    if (sportsEvents.length + teamEvents.length > 2) {
        alert('Please select at most two events in total.');
        return;
    }

    const formData = new FormData(this);

    fetch('submit_registration.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});