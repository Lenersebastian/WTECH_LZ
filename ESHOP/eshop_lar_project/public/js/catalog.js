// Function to fetch products from the backend
function fetchProducts() {
    // Make an AJAX request to fetch products from the backend
    return fetch('/catalog/products')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

let productsData; 
let currentPage = 1;
const productsPerPage = 6;

// Initialize the slider
const priceSlider = document.getElementById('price-slider');
const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');

// Function to open product page with additional information
function openProductPage(productName, productImage, productPrice) {
    // Here you can redirect to product.html and pass the product name as a parameter
    window.location.href = `/product/${productName}?image=${productImage}&price=${productPrice}`;
}

function createFilteredProducts() {
    let filteredProducts = [];
    const minPriceValue = parseFloat(minPrice.textContent.slice(1)); // Extract the minimum price value
    const maxPriceValue = parseFloat(maxPrice.textContent.slice(1)); // Extract the maximum price value
    const saleCheckbox = document.getElementById('ch1'); // Get the sale checkbox element

    productsData.forEach((product) => {
        // Check if the sale checkbox is checked and if the product has a sale greater than 0
        if ((!saleCheckbox.checked || (saleCheckbox.checked && product['sale_%'] > 0)) &&
            product.price >= minPriceValue && product.price <= maxPriceValue) {
            filteredProducts.push(product);
        }
    });

    return filteredProducts;
}


function updatePageCounter(filteredProducts) {
    const totalPages = Math.max(Math.ceil(filteredProducts.length / productsPerPage),1);
    const pageCounter = document.getElementById('page-counter');
    pageCounter.textContent = `Page ${currentPage} of ${totalPages}`;
}

// Function to sort products by price
function sortProductsByPrice(filteredProducts) {
    // Sort the filtered products array by price in ascending order
    filteredProducts.sort((a, b) => a.price - b.price);
    return filteredProducts; // Return the sorted array
}

// Function to sort products alphabetically
function sortProductsByAlphabet(filteredProducts) {
    // Sort the filtered products array alphabetically by product name
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    return filteredProducts; // Return the sorted array
}

// Function to sort products based on the selected filter option
function sortProducts(filteredProducts) {
    const filterOption = document.querySelector('input[name="filterOption"]:checked').value;
    if (filterOption === 'Price') {
        filteredProducts = sortProductsByPrice(filteredProducts);
    } else if (filterOption === 'Alphabet') {
        filteredProducts = sortProductsByAlphabet(filteredProducts);
    }
    return filteredProducts;
}

function generateProductItems() {
    // Clear products before generating new
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // Clear the inner HTML of the products container

    // Filter products by price interval and then sort it
    let filteredProducts = createFilteredProducts();
    filteredProducts = sortProducts(filteredProducts);

    // Calculate the starting and ending index for the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, productsData.length);

    // Generate product items for the current page
    for (let i = startIndex; i < endIndex; i++) {
        if (filteredProducts.length > i) {
            const product = filteredProducts[i];
            const productItem = document.createElement('div');
            productItem.classList.add('product');

            let priceDisplay = `${product.price}$`; // Default price display

            // If the product has a sale, calculate the discounted price and display it along with the original price
            if (product['sale_%'] > 0) {
                const discountedPrice = (product.price - (product.price * product['sale_%'] / 100)).toFixed(2);
                priceDisplay = `<span style="text-decoration: line-through;">${product.price}$</span> <span style="color: orange;">${discountedPrice}$</span>`;
                // Add the sale.png image to the product item
                const saleImage = document.createElement('img');
                saleImage.src = 'icons/sale_icon.png';
                saleImage.alt = 'Sale';
                saleImage.classList.add('sale-image');
                productItem.appendChild(saleImage);
            }

            // Include product name and price display in the product item
            productItem.innerHTML += `
                <a onclick="openProductPage('${product.name}', '${product.image}', ${product.price})">
                    <img src="${product.image}" onerror="this.src='images/error_image.png'" alt="${product.name}">
                </a>
                <p>${product.name}</p>
                <p>${priceDisplay}</p>
                <button onclick="openProductPage('${product.name}', '${product.image}', ${product.price})">Info</button>
            `;
            productsContainer.appendChild(productItem); // Append the product item to the products container
        }
    }
    updatePageCounter(filteredProducts); // Update the page counter after generating product items
}


function showPreviousProducts() {
    currentPage = Math.max(currentPage - 1, 1);
    generateProductItems(); // Regenerate product items for the current page
}

function showNextProducts() {
    currentPage = Math.min(currentPage + 1, Math.ceil(createFilteredProducts().length / productsPerPage));
    generateProductItems(); // Regenerate product items for the current page
}

noUiSlider.create(priceSlider, {
    start: [0, 200], // Initial values for minimum and maximum prices
    connect: true, // Connect the two handles with a line
    range: {
        'min': 0,
        'max': 200 // Adjust the maximum value as per your requirement
    }
});

// Add an event listener to the price slider to trigger the sortAndFilterProducts function when the slider values change
priceSlider.noUiSlider.on('update', function (values) {
    minPrice.textContent = '$' + values[0];
    maxPrice.textContent = '$' + values[1];
});

function updateCartCounter() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCounter = document.getElementById('cartCounter');
    cartCounter.textContent = cart.length; // Update counter with the number of items in the cart
}

window.onload = function () {
    fetchProducts()
        .then(data => {
            productsData = data;
            generateProductItems(); // Generate product items with fetched data
        }); // Fetch products from the backend
    updateCartCounter(); // Update cart counter
};