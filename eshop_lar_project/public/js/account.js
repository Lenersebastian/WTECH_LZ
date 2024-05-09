function register() {
    // Clear input fields
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('state').value = '';
    document.getElementById('city').value = '';
    document.getElementById('street').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('password').value = '';
    document.getElementById('repeatPassword').value = '';

    // Display success message
    document.querySelector('.success').style.display = 'flex';
    document.getElementById('successMessage').innerText = 'You have been successfully registered!';
}
function closeSuccessMessage() {
    // Hide success message
    document.querySelector('.success').style.display = 'none';
}

function updateCartCounter() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCounter = document.getElementById('cartCounter');
    cartCounter.textContent = cart.length; // Update counter with the number of items in the cart
}
window.onload = function () {
    updateCartCounter();
};