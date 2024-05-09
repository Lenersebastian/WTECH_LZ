<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Product Details</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/edit_product.css') }}">
</head>

<body>
    <div class="topnav">
        <a href="{{ route('homepage') }}"><img src="{{ asset('icons/account_icon.png') }}" alt="Icon 1"></a>
        <a href="{{ route('catalog') }}"><img src="{{ asset('icons/home_icon.png') }}" alt="Icon 2"></a>
        <span id="cartCounter"></span>
    </div>

    <div class="product-info">
        <h2>Edit Product Details</h2>
        <div class="input-group">
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" class="input-admin" required>
        </div>
        <div class="input-group">
            <label for="productDescription">Product Description:</label>
            <textarea id="productDescription" name="productDescription" class="input-admin" rows="4" required></textarea>
        </div>
        <div class="input-group">
            <label for="productImage">Product Image URL:</label>
            <input type="text" id="productImage" name="productImage" class="input-admin" required>
        </div>
        <button onclick="editProduct()">Edit</button>
    </div>

</body>
<script src="{{ asset('js/edit_product.js') }}"></script>
</html>
