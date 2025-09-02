<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductPrintController extends Controller
{
    /**
     * Display the print view for the specified product.
     */
    public function __invoke(Product $product)
    {
        return view('products.print', compact('product'));
    }
}