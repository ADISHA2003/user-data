const API_URL = 'https://your-ngrok-url.ngrok.io/api/users';

document.getElementById('user-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    try {
        // Send data to backend
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone }),
        });

        if (response.ok) {
            // Display success message
            document.getElementById('response-message').textContent = 'Data submitted successfully!';
            // Clear form
            document.getElementById('user-form').reset();
        } else {
            document.getElementById('response-message').textContent = 'Error submitting data.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('response-message').textContent = 'Error submitting data.';
    }
});
