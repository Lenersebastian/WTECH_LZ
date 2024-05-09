<?php

namespace App\Http\Controllers;

use App\Models\Product; // Import the Product model
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Get all products from the database.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($productName)
{
    // Retrieve the product details based on the provided name
    // You can fetch the product from the database or any other source
    $product = Product::where('name', $productName)->first();

    // Check if the product exists
    if (!$product) {
        abort(404); // Product not found, return 404 error
    }

    // Pass the product data to the product detail view
    return view('product', compact('product'));
}

    
    public function getAllProducts(): JsonResponse
    {
        try {
            // Fetch all products from the database
            $products = Product::all();
    
            // Check if products exist
            if ($products instanceof Collection && $products->isEmpty()) {
                return response()->json(['message' => 'No products found'], 404);
            }
    
            // Return products data in JSON format
            return response()->json($products);
        } catch (\Exception $e) {
            // Handle any exceptions
            return response()->json(['error' => 'Failed to fetch products: ' . $e->getMessage()], 500);
        }
    }

    
}

