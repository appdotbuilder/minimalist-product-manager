<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $colors = [
            'Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 
            'Purple', 'Orange', 'Pink', 'Brown', 'Gray', 'Navy'
        ];

        $productNames = [
            'Laptop', 'Smartphone', 'Tablet', 'Monitor', 'Keyboard',
            'Mouse', 'Headphones', 'Speaker', 'Camera', 'Printer',
            'Router', 'Cable', 'Charger', 'Battery', 'Stand'
        ];

        return [
            'name' => fake()->randomElement($productNames) . ' ' . fake()->word(),
            'quantity' => fake()->numberBetween(0, 100),
            'color' => fake()->randomElement($colors),
        ];
    }

    /**
     * Indicate that the product is out of stock.
     */
    public function outOfStock(): static
    {
        return $this->state(fn (array $attributes) => [
            'quantity' => 0,
        ]);
    }

    /**
     * Indicate that the product is in high stock.
     */
    public function highStock(): static
    {
        return $this->state(fn (array $attributes) => [
            'quantity' => fake()->numberBetween(50, 200),
        ]);
    }
}