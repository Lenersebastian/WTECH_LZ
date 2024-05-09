window.onload = function() {
    displayCart();
    calculateTotalPrice(); // Calculate and display total price when the page loads
}

function updateCartCounter() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCounter = document.getElementById('cartCounter');
    cartCounter.textContent = cart.length; // Update counter with the number of items in the cart
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = ''; // Clear previous content

    cart.forEach(function(item) {
        let cartItemDiv = document.createElement('div');
        cartItemDiv.textContent = item.name + ' - ' + item.price + '$'; // Display both name and price
        cartItemsDiv.appendChild(cartItemDiv);
    });
}
function clearCart() {
    localStorage.removeItem('cart');
    displayCart(); // Update displayed cart items after clearing
    calculateTotalPrice(); // Update total price after clearing cart
}
function calculateTotalPrice() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;
    cart.forEach(function(item) {
        // Extract price from each item and add to totalPrice
        totalPrice += parseFloat(item.price);
    });
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2) + '$'; // Display total price
}