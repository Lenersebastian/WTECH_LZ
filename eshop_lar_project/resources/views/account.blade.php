<!DOCTYPE html>
<html lang="en">

<head>
  <title>MuscleHustle</title>
  <link rel="stylesheet" type="text/css" href="{{ asset('css/account.css') }}">
  <link rel="stylesheet" type="text/css" href="{{ asset('css/cart_counter.css') }}">
</head>

<body>
  <div class="topnav">
    <a href="{{ route('login_page') }}"><img src="{{ asset('icons/account_icon.png') }}" alt="Icon 1"></a>
    <a href="{{ route('catalog') }}"><img src="{{ asset('icons/home_icon.png') }}" alt="Icon 2"></a>
    <a href="{{ route('shopping_cart') }}"><img src="{{ asset('icons/kosik.png') }}" alt="Icon 3"></a>
    <span id="cartCounter"></span>
  </div>
  <h1>MuscleHustle account</h1>
  <div class="input-container">
    <div class="input-group-left">
      <label class="label">Username:</label>
      <input autocomplete="off" class="input" id="username">
      <label class="label">Email:</label>
      <input autocomplete="off" class="input" id="email">
      <label class="label">State:</label>
      <input autocomplete="off" class="input" id="state">
      <label class="label">City:</label>
      <input autocomplete="off" class="input" id="city">
    </div>
    <div class="input-group-right">
      <label class="label">Street:</label>
      <input autocomplete="off" class="input" id="street">
      <label class="label">Phone number:</label>
      <input autocomplete="off" class="input" id="phone">
      <label class="label">Password:</label>
      <input autocomplete="off" class="input" type="password" id="password">
      <label class="label">Repeat Password:</label>
      <input autocomplete="off" class="input" type="password" id="repeatPassword">
    </div>
  </div>
  <button onclick="register()">Register</button>

  <!-- Success message -->
  <div class="success" style="display: none;">
    <div class="success__icon">
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <!-- SVG path for success icon -->
      </svg>
    </div>
    <div class="success__title" id="successMessage"></div>
    <div class="success__close" onclick="closeSuccessMessage()">
      <img src="{{ asset('icons/cross_icon.png') }}" alt="Close" width="20px" height="20px">
    </div>
  </div>
  <script src="{{ asset('js/account.js') }}"></script>
</body>

</html>
