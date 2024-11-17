const API_URL = 'https://0296-2405-201-400f-687c-e5ea-d06f-280c-61e9.ngrok-free.app/api/userdata';

document.getElementById('user-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get response message element
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = '';
    responseMessage.className = ''; // Reset CSS classes

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const aboutme = document.getElementById('aboutMe').value.trim();

    try {
        // Make POST request to the API
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, gender, aboutme }),
        });

        const responseData = await response.json();

        if (response.ok) {
            responseMessage.textContent = 'Data submitted successfully!';
            responseMessage.className = 'success';
            document.getElementById('user-form').reset();
        } else {
            responseMessage.textContent = responseData.error || 'An error occurred. Please try again.';
            responseMessage.className = 'error';
        }
    } catch (error) {
        console.error('Network Error:', error);
        responseMessage.textContent = 'Unable to connect to the server. Please check your internet connection.';
        responseMessage.className = 'error';
    }
});
