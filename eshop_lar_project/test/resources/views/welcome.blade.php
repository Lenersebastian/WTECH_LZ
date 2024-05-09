<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <style>
        a {
            text-decoration: none;
        }

        /* Add your other CSS styles here */
        .main-content {
            text-align: center;
            margin-top: 20vh; /* Adjust this value as needed for vertical centering */
        }

        /* Add other styles as needed */
    </style>
</head>
<body class="font-sans antialiased dark:bg-black dark:text-white/50">
<header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
    @if (Route::has('login'))
        <nav class="-mx-3 flex flex-1 justify-end">
            @auth
                <a href="{{ url('/dashboard') }}"
                   class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
                    Dashboard
                </a>
            @else
                <a href="{{ route('login') }}"
                   class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
                    Log in
                </a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}"
                       class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
                        Register
                    </a>
                @endif
            @endauth
        </nav>
    @endif
</header>

<main class="mt-6 flex justify-center">
    <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <a href="{{ route('catalog') }}" class="hover:text-[#FF2D20]">
            <div class="relative flex justify-center items-center p-6 bg-white rounded-lg shadow-[0px_14px_34px_0px_rgba(0_2c_0_2c_0_2c_0_08)] hover:shadow-[0px_4px_34px_rgba(0_2c_0_2c_0_2c_0_25)] dark:bg-zinc-900 dark:hover:shadow-[0px_4px_34px_rgba(0_2c_0_2c_0_2c_0_25)]">
                <h2 class="text-xl font-semibold text-black dark:text-white">CATALOG</h2>
            </div>
        </a>
    </div>
</main>

<footer class="py-16 text-center text-sm text-black dark:text-white/70">
    Created by: Sebastián Lener, Dominik Zaťovič
</footer>

</body>
</html>