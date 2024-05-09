function updateProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
    const productImage = urlParams.get('image');
    const productDescription = "Description of " + productName + ". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend fringilla diam, non condimentum mi congue ut. Morbi vel felis quis est ultrices eleifend nec nec tellus. Nam ac fringilla libero. Phasellus consectetur arcu vel pretium lobortis. Proin consequat dui et ligula ultricies, vel aliquet dolor gravida. Sed ullamcorper velit sapien, nec malesuada ligula consectetur sit amet.";

    document.getElementById('productName').textContent = productName;
    document.getElementById('productImage').src = productImage;
    document.getElementById('productDescription').textContent = productDescription;
}

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
    updateProductDetails();
    updateCartCounter();
};