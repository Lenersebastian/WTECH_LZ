<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shopping Cart</title>
  <link rel="stylesheet" type="text/css" href="{{ asset('css/shopping_cart.css') }}">
</head>
<body>
<div class="topnav">
  <a href="{{ route('homepage') }}"><img src="{{ asset('icons/account_icon.png') }}" alt="Icon 1"></a>
  <a href="{{ route('catalog') }}"><img src="{{ asset('icons/home_icon.png') }}" alt="Icon 2"></a>
  <a href="{{ route('shopping_cart') }}"><img src="{{ asset('icons/kosik.png') }}" alt="Icon 3"></a>
</div>
<div class="shopping-cart">
  <h2>Shopping Cart</h2>
  <div id="cartItems">
    <!-- Cart items will be displayed here -->
  </div>
  <div class="total-price">
    Total price: <span id="totalPrice"></span>
  </div>

  <!-- Payment Form -->
  <div class="payment-form">
    <strong>Payment form:</strong><br>
    <ol>
      <li><input type="radio" id="crypto-payment" name="payment" value="crypto-payment" checked>
        <label for="crypto-payment">via Crypto</label></li>
      <li><input type="radio" id="payment-on-delivery" name="payment" value="payment-on-delivery">
        <label for="payment-on-delivery">Payment on delivery</label></li>
    </ol>
  </div>

  <!-- Shipping -->
  <div class="shipping">
    <strong>Shipping:</strong><br>
    <ol>
      <li><input type="radio" id="musclehustle-account-address" name="shipping" value="musclehustle-account-address" checked>
        <label for="musclehustle-account-address">MuscleHustle account address</label></li>
      <li><input type="radio" id="custom-address" name="shipping" value="custom-address">
        <label for="custom-address">Custom address</label></li>
    </ol>
  </div>

  <!-- Checkout Button -->
  <a href="#" class="checkout">Checkout</a>
  <!-- Clear Cart Button -->
  <a href="#" class="clearcart" onclick="clearCart()">Clear Cart</a>
</div>
</body>
<script src="{{ asset('js/shopping_cart.js') }}"></script>
</html>
