// This is the Form submission using Node.js 
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from being able to reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form submitted: ', { name, email, message });
    
    // This is the Placeholder for the email submission using Node.js 
    alert('Thanks for your message, ' + name + '! I will get back to you soon.');

    // This Clears form fields after submission
    document.getElementById('contact-form').reset();
});
