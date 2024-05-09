// Array of product data
const productsData = [
    { name: 'BCAA Olimp', image: 'images/BCAA_olimp.png', price: 30, sale: 0 },
    { name: 'Creatine Olimp', image: 'images/creatine_olimp.png', price: 23, sale: 15 },
    { name: 'Gainer Multipower', image: 'images/gainer_multipower.png', price: 20, sale: 0 },
    { name: 'Protein Scitec red', image: 'images/red_protein.jpg', price: 40, sale: 0 },
    { name: 'Tribulus Greenfood', image: 'images/tribulus.png', price: 20, sale: 10 },
    { name: 'Protein BodyFit', image: 'images/women_protein.png', price: 35, sale: 0 },
    { name: 'Fish oil optimum nutrition', image: 'images/fish_oil.png', price: 21, sale: 5 },
    { name: 'Gymbeam pack', image: 'images/gymbeam_pack.png', price: 89, sale: 0 },
    { name: 'Protein Scitec blue', image: 'images/blue_protein.png', price: 40, sale: 0 }
    // Add more product data as needed
];
let currentPage = 1;
const productsPerPage = 6;

// Function to open product page with additional information
function openEditProductPage(productName, productImage, productPrice) {
    // Here you can redirect to product.html and pass the product name as a parameter
    window.location.href = `edit_product.html?product=${productName}&image=${productImage}&price=${productPrice}`;
}

// Initialize the slider
const priceSlider = document.getElementById('price-slider');
const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');

function createFilteredProducts() {
    let filteredProducts = [];
    const minPriceValue = parseFloat(minPrice.textContent.slice(1)); // Extract the minimum price value
    const maxPriceValue = parseFloat(maxPrice.textContent.slice(1)); // Extract the maximum price value
    const saleCheckbox = document.getElementById('ch1'); // Get the sale checkbox element

    productsData.forEach((product) => {
        // Check if the sale checkbox is checked and if the product has a sale greater than 0
        if ((!saleCheckbox.checked || (saleCheckbox.checked && product.sale > 0)) &&
            product.price >= minPriceValue && product.price <= maxPriceValue) {
            filteredProducts.push(product);
        }
    });

    return filteredProducts;
}


function updatePageCounter(filteredProducts) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
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
            if (product.sale > 0) {
                const discountedPrice = product.price - (product.price * product.sale / 100);
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
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <p>${product.name}</p>
                <p>${priceDisplay}</p>
                <button onclick="openEditProductPage('${product.name}', '${product.image}', ${product.price})">Edit</button>
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
    generateProductItems();
    updateCartCounter();
};


// Add your JavaScript code here
const fileInput = document.getElementById('fileInput');
const slider = document.getElementById('slider');

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    const fileSize = file.size;
    const maxFileSize = 10 * 1024 * 1024; // 10MB

    // Allowed file extensions
    const allowedExtensions = ['png', 'jpeg', 'jpg'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
        alert('Only .png, .jpeg, or .jpg files are allowed.');
        this.value = ''; // Reset the file input
        return;
    }

    if (fileSize > maxFileSize) {
        alert('File size exceeds the limit (10MB). Please choose a smaller file.');
        this.value = ''; // Reset the file input
    } else {
        // Calculate the value for the slider based on file size
        const value = (fileSize / maxFileSize) * 100;
        slider.value = value;
    }
});

document.getElementById('btn').addEventListener('click', function() {
    // Clear the file input by setting its value to null
    document.getElementById('fileInput').value = null;
});
