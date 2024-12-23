document.getElementById('productForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Gather form data manually
    const data = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        img: document.getElementById('img').value,
        category: document.getElementById('category').value,
        rating: parseFloat(document.getElementById('rating').value) || 0,
        productId: document.getElementById('productId').value,
        inStockValue: parseInt(document.getElementById('inStockValue').value) || 0,
        soldStockValue: parseInt(document.getElementById('soldStockValue').value) || 0,
        visibility: document.getElementById('visibility').value,
    };

    try {
        // Send product data to the server
        const response = await fetch('http://localhost:5000/create-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        // Show response message
        const message = result.success ? 'Product added successfully!' : `Error: ${result.message}`;
        document.getElementById('responseMessage').textContent = message;
        document.getElementById('responseMessage').style.color = result.success ? 'green' : 'red';

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').textContent = 'Something went wrong!';
        document.getElementById('responseMessage').style.color = 'red';
    }
});
