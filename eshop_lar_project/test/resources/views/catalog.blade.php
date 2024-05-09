<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Catalog</title>
  <link rel="stylesheet" type="text/css" href="{{ asset('css/cart_counter.css') }}">
  <link rel="stylesheet" type="text/css" href="{{ asset('css/catalog.css') }}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.3/nouislider.min.css">
</head>

<body>
  <div class="topnav">
    <a href="{{ route('homepage') }}"><img src="{{ asset('icons/account_icon.png') }}" alt="Icon 1"></a>
    <a href="{{ route('catalog') }}"><img src="{{ asset('icons/home_icon.png') }}" alt="Icon 2"></a>
    <a href="{{ route('shopping_cart') }}"><img src="{{ asset('icons/kosik.png') }}" alt="Icon 3"></a>
    <span id="cartCounter"></span>
  </div>

  <div class="catalog">
    <h2>Product Catalog</h2>
    <div class="body">
      <button onclick="generateProductItems()">
        <img src="{{ asset('icons/filter.png') }}" alt="Filter Icon" class="negative-img" id="filter-button">
      </button>
      <div class="tabs">
        <input checked="" value="Price" name="filterOption" id="pr" type="radio" class="input" />
        <label for="pr" class="label">Price</label>
        <input value="Alphabet" name="filterOption" id="alpha" type="radio" class="input" />
        <label for="alpha" class="label">Alphabet</label>
      </div>      
      <div id="slider-container">
        <label for="price-slider">Price Interval:</label>
        <!-- Create an empty div for the slider -->
        <div id="price-slider"></div>
        <!-- Display labels for minimum and maximum prices -->
        <span id="min-price">$0</span> - <span id="max-price">$200</span>
      </div>
      <div class="content">
        <label class="checkBox">
          <input id="ch1" type="checkbox">
          <div class="transition"></div>
        </label>
        <span class="checkbox-text">Discounted items</span>
      </div>
    </div>
    <div class="products"></div>

    <div class="navigation">
      <span class="nav-button" onclick="showPreviousProducts()">&#10094;</span>
      <span id="page-counter"></span>
      <span class="nav-button" onclick="showNextProducts()">&#10095;</span>
    </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.3/nouislider.min.js"></script>
  <script src="{{ asset('js/catalog.js') }}"></script>
</body>
</html>
