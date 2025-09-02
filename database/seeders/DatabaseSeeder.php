<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
        ]);

        // Create sample products
        Product::factory()->count(15)->create();
        
        // Create some specific products with known data
        Product::factory()->create([
            'name' => 'MacBook Pro 16"',
            'quantity' => 8,
            'color' => 'Silver',
        ]);
        
        Product::factory()->create([
            'name' => 'iPhone 15 Pro',
            'quantity' => 0,
            'color' => 'Black',
        ]);
        
        Product::factory()->outOfStock()->create([
            'name' => 'AirPods Pro',
            'color' => 'White',
        ]);
    }
}
