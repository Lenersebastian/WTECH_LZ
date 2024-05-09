<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Details</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/product.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/cart_counter.css') }}">
</head>

<body>
    <div class="topnav">
        <a href="{{ route('homepage') }}"><img src="{{ asset('icons/account_icon.png') }}" alt="Icon 1"></a>
        <a href="{{ route('catalog') }}"><img src="{{ asset('icons/home_icon.png') }}" alt="Icon 2"></a>
        <a href="{{ route('shopping_cart') }}"><img src="{{ asset('icons/kosik.png') }}" alt="Icon 3"></a>
        <span id="cartCounter"></span>
    </div>

    <div class="product-info">
        <!-- resources/views/product.blade.php -->
<h1>{{ $product->name }}</h1>
<img id="productImage" src="{{ $product->image }}" alt="{{ $product->name }}" onerror="this.onerror=null; this.src='{{ asset('images/error_image.png') }}';">
<p>Price: ${{ $product->price }}</p>
<p>Description: {{ $product->description }}</p>


        <button onclick="addToCart()">Add to Cart</button>
    </div>

</body>
<script src="{{ asset('js/product.js') }}"></script>

</html>
