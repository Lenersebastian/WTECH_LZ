function updateCartCounter() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCounter = document.getElementById('cartCounter');
    cartCounter.textContent = cart.length; // Update counter with the number of items in the cart
}
window.onload = function () {
    updateCartCounter();
};
// Get the button element
var loginButton = document.getElementById("loginButton");

// Add click event listener to the button
loginButton.addEventListener("click", function() {
    // Redirect to catalog.html
    window.location.href = "catalog.html";
});