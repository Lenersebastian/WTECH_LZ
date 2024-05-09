<!DOCTYPE html>
<html>

<head>
  <title>Login</title>
  <link rel="stylesheet" type="text/css" href="{{ asset('css/login_page.css') }}">
  <link rel="stylesheet" type="text/css" href="{{ asset('css/cart_counter.css') }}">
</head>

<body>
  <div class="topnav">
    <a href="{{ route('login_page') }}"><img src="{{ asset('icons/account_icon.png') }}" alt="Icon 1"></a>
    <a href="{{ route('catalog') }}"><img src="{{ asset('icons/home_icon.png') }}" alt="Icon 2"></a>
    <a href="{{ route('shopping_cart') }}"><img src="{{ asset('icons/kosik.png') }}" alt="Icon 3"></a>
    <span id="cartCounter"></span>
  </div>
  <h1>Login</h1>
  <div class="input-group">
    <label class="label">Username</label>
    <input autocomplete="off" name="Username" id="Username" class="input" type="username">
    <label class="label">Password</label>
    <input autocomplete="off" name="Password" id="Password" class="input" type="password">
    <button id="loginButton"> Sign in </button>
    <p>Do not have an account yet? <a href="{{ route('account') }}">Register</a></p>
  </div>
  <script src="{{ asset('js/login_page.js') }}"></script>
</body>

</html>
