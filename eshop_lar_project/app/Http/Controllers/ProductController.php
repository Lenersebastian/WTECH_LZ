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

    public function store(Request $request)
{
    // Validate the form data
    $request->validate([
        'name' => 'required',
        'description' => 'required',
        'price' => 'required|numeric',
        'sale_%' => 'nullable|numeric', // Assuming you have a column named sale_percentage in your products table
        'image_url' => 'nullable|url', // Validation for image URL
        // Add more validation rules as needed
    ]);

    // Create a new product instance
    $product = new Product();
    $product->name = $request->input('name');
    $product->description = $request->input('description');
    $product->price = $request->input('price');
    $product->sale_percentage = $request->input('sale_%');

    // Save the product to the database
    $product->save();

    // Redirect back with a success message
    return redirect()->back()->with('success', 'Product added successfully!');
}
}
