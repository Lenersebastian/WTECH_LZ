<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return view('welcome');
})->name('homepage');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/catalog', function () {
    return view('catalog');
})->name('catalog');

Route::get('/shopping_cart', function () {
    return view('shopping_cart');
})->name('shopping_cart');

Route::get('/edit_product', function () {
    return view('edit_product');
})->name('edit_product');

Route::get('/admin_main', function () {
    return view('admin_main');
})->name('admin_page');

 Route::get('/product', function () {
     return view('product');
 })->name('product');

 Route::get('/product/{productName}', [ProductController::class, 'show'])->name('product.show');


Route::get('/catalog/products', [ProductController::class, 'getAllProducts']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
