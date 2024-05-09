function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
    const price = parseFloat(urlParams.get('price')); // Parse price as a float
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: price }); // Include price in the cart item
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
}

function updateCartCounter() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCounter = document.getElementById('cartCounter');
    cartCounter.textContent = cart.length; // Update counter with the number of items in the cart
}

window.onload = function () {
    updateCartCounter();
};