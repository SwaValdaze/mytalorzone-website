async function login(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Login successful! Redirecting to dashboard...');
            localStorage.setItem('userId', data.userId); // Save userId for session
            window.location.href = 'dashboard.html';
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (error) {
        console.error('Login Error:', error);
        alert('An error occurred. Please try again.');
    }
}