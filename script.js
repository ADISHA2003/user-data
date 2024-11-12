const API_URL = 'https://7b1f-2405-201-400f-687c-70e4-356e-57df-e86a.ngrok-free.app/api/userdata';

document.getElementById('user-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const aboutme = document.getElementById('aboutMe').value;

    try {
        // Send data to backend
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, gender, aboutme }),
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
