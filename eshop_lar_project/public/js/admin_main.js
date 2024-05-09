// Function to validate input fields before submitting
function validateForm() {
    // Get input field values
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productSale = document.getElementById('productSale').value;
    var productImage = document.getElementById('productImage').value;

    // Validate image URL format
    if (!isValidURL(productImage)) {
        alert('Please enter a valid image URL.');
        return false; // Prevent form submission
    }

    // Form is valid, allow submission
    return true;
}

// Function to validate URL format
function isValidURL(url) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(url);
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the "Add Product" button
    var addProductButton = document.getElementById('addProductButton');

    // Attach an event listener to the button
    addProductButton.addEventListener('click', function(event) {
        // Prevent the default button click behavior
        event.preventDefault();

        // Serialize form data
        var formData = new FormData(document.getElementById('productForm'));

        // Send a POST request to the custom route
        fetch('{{ route('admin.products.store') }}', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle response data as needed
            console.log(data);
            // Optionally, show a success message or update the UI
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    });
});

function checkProductExists(productName) {
    // Perform a database query to check if the product exists
    // This could be an AJAX request to a backend API or a server-side function call
    // Return the existing product if found, or null if not found
    // For demonstration purposes, let's assume we have a global variable "products" containing product data

    // Example:
    for (var i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            return products[i];
        }
    }

    return null;
}

function createProduct(productName, productPrice, productSale, productImage) {
    // Perform the create operation in the database
    // This could be an AJAX request to a backend API or a server-side function call
    console.log("Creating new product:", productName, productPrice, productSale, productImage);
}
