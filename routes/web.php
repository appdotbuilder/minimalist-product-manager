<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductPrintController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    // Product management routes
    Route::resource('products', ProductController::class);
    Route::get('products/{product}/print', ProductPrintController::class)
        ->name('products.print');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
