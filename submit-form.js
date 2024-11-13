// Event listener to process form submission
document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Collect data from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Use fetch to send the form data to the server
    try {
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
        });

        // Display server response to the user
        const result = await response.text();
        alert(result); // Show thank-you message
        document.getElementById('contact-form').reset(); // Clear the form
    } catch (error) {
        console.error('Error sending form data:', error); // Log any errors
    }
});
