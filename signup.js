document.getElementById('signupFormm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Gather form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send data to the server
    try {
        const response = await fetch('http://localhost:5000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to sign up');
        }

        const result = await response.json();

        // Show response message
        const message = result.success ? 'Sign up successful!' : `Error: ${result.message}`;
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = message;
        responseMessage.style.color = result.success ? 'green' : 'red';

        // If successful, you can clear the form or redirect the user
        if (result.success) {
            document.getElementById('signupForm').reset();  // Reset the form
            setTimeout(() => {
                window.location.href = '/login';  // Redirect to login page
            }, 2000);  // Redirect after 2 seconds
        }

    } catch (error) {
        console.error('Error:', error);
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = 'Something went wrong! Please try again.';
        responseMessage.style.color = 'red';
    }
});
