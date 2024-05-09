function updateProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
    const productImage = urlParams.get('image');
    const productDescription = "Description of " + productName + ". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend fringilla diam, non condimentum mi congue ut. Morbi vel felis quis est ultrices eleifend nec nec tellus. Nam ac fringilla libero. Phasellus consectetur arcu vel pretium lobortis. Proin consequat dui et ligula ultricies, vel aliquet dolor gravida. Sed ullamcorper velit sapien, nec malesuada ligula consectetur sit amet.";

    document.getElementById('productName').textContent = productName;
    document.getElementById('productImage').src = productImage;
    document.getElementById('productDescription').textContent = productDescription;
}


window.onload = function () {
    updateProductDetails();
};