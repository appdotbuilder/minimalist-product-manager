import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';

interface Product {
    id: number;
    name: string;
    quantity: number;
    color: string;
    created_at: string;
    updated_at: string;
}

interface ProductFormData {
    name: string;
    quantity: string;
    color: string;
    [key: string]: string;
}

interface Props {
    product: Product;
    [key: string]: unknown;
}

export default function EditProduct({ product }: Props) {
    const { data, setData, put, processing, errors } = useForm<ProductFormData>({
        name: product.name,
        quantity: product.quantity.toString(),
        color: product.color,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('products.update', product.id));
    };

    const commonColors = [
        'Red', 'Blue', 'Green', 'Yellow', 'Black', 'White',
        'Purple', 'Orange', 'Pink', 'Brown', 'Gray', 'Navy'
    ];

    return (
        <AppShell>
            <Head title={`Edit ${product.name}`} />
            
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Button asChild variant="outline">
                        <Link href={route('products.show', product.id)}>
                            ← Back to Product
                        </Link>
                    </Button>
                    <Heading title="✏️ Edit Product" />
                </div>

                <div className="max-w-2xl">
                    <div className="bg-white rounded-lg shadow-sm border p-6 dark:bg-gray-800 dark:border-gray-700">
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div 
                                    className="w-12 h-12 rounded-full border-2 border-gray-200"
                                    style={{
                                        backgroundColor: product.color.toLowerCase() === 'white' ? '#ffffff' 
                                            : product.color.toLowerCase() === 'black' ? '#000000'
                                            : product.color.toLowerCase() === 'red' ? '#ef4444'
                                            : product.color.toLowerCase() === 'blue' ? '#3b82f6'
                                            : product.color.toLowerCase() === 'green' ? '#10b981'
                                            : product.color.toLowerCase() === 'yellow' ? '#f59e0b'
                                            : product.color.toLowerCase() === 'purple' ? '#8b5cf6'
                                            : product.color.toLowerCase() === 'pink' ? '#ec4899'
                                            : product.color.toLowerCase() === 'gray' ? '#6b7280'
                                            : product.color.toLowerCase() === 'orange' ? '#f97316'
                                            : product.color.toLowerCase() === 'brown' ? '#92400e'
                                            : product.color.toLowerCase() === 'navy' ? '#1e3a8a'
                                            : '#6b7280'
                                    }}
                                />
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Editing: {product.name}
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Product ID: #{product.id}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Product Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Enter product name..."
                                    className={errors.name ? 'border-red-500' : ''}
                                    required
                                />
                                <InputError message={errors.name} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="quantity">Quantity</Label>
                                <Input
                                    id="quantity"
                                    type="number"
                                    min="0"
                                    value={data.quantity}
                                    onChange={(e) => setData('quantity', e.target.value)}
                                    placeholder="Enter quantity..."
                                    className={errors.quantity ? 'border-red-500' : ''}
                                    required
                                />
                                <InputError message={errors.quantity} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="color">Color</Label>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {commonColors.map((color) => (
                                        <button
                                            key={color}
                                            type="button"
                                            onClick={() => setData('color', color)}
                                            className={`px-3 py-1 text-sm rounded-lg border transition-colors ${
                                                data.color === color
                                                    ? 'bg-blue-600 text-white border-blue-600'
                                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600'
                                            }`}
                                        >
                                            <span
                                                className="inline-block w-3 h-3 rounded-full mr-2 border border-gray-300"
                                                style={{
                                                    backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' 
                                                        : color.toLowerCase() === 'black' ? '#000000'
                                                        : color.toLowerCase() === 'red' ? '#ef4444'
                                                        : color.toLowerCase() === 'blue' ? '#3b82f6'
                                                        : color.toLowerCase() === 'green' ? '#10b981'
                                                        : color.toLowerCase() === 'yellow' ? '#f59e0b'
                                                        : color.toLowerCase() === 'purple' ? '#8b5cf6'
                                                        : color.toLowerCase() === 'pink' ? '#ec4899'
                                                        : color.toLowerCase() === 'gray' ? '#6b7280'
                                                        : color.toLowerCase() === 'orange' ? '#f97316'
                                                        : color.toLowerCase() === 'brown' ? '#92400e'
                                                        : color.toLowerCase() === 'navy' ? '#1e3a8a'
                                                        : '#6b7280'
                                                }}
                                            />
                                            {color}
                                        </button>
                                    ))}
                                </div>
                                <Input
                                    id="color"
                                    type="text"
                                    value={data.color}
                                    onChange={(e) => setData('color', e.target.value)}
                                    placeholder="Or enter custom color..."
                                    className={errors.color ? 'border-red-500' : ''}
                                    required
                                />
                                <InputError message={errors.color} />
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <Button type="submit" disabled={processing}>
                                    {processing ? '⏳ Saving...' : '💾 Save Changes'}
                                </Button>
                                <Button asChild variant="outline" disabled={processing}>
                                    <Link href={route('products.show', product.id)}>
                                        Cancel
                                    </Link>
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Preview Card */}
                    <div className="bg-white rounded-lg shadow-sm border p-6 dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Preview Changes</h3>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg dark:bg-gray-700">
                            <div className="flex items-center gap-3">
                                <div 
                                    className="w-6 h-6 rounded-full border-2 border-gray-300"
                                    style={{
                                        backgroundColor: data.color.toLowerCase() === 'white' ? '#ffffff' 
                                            : data.color.toLowerCase() === 'black' ? '#000000'
                                            : data.color.toLowerCase() === 'red' ? '#ef4444'
                                            : data.color.toLowerCase() === 'blue' ? '#3b82f6'
                                            : data.color.toLowerCase() === 'green' ? '#10b981'
                                            : data.color.toLowerCase() === 'yellow' ? '#f59e0b'
                                            : data.color.toLowerCase() === 'purple' ? '#8b5cf6'
                                            : data.color.toLowerCase() === 'pink' ? '#ec4899'
                                            : data.color.toLowerCase() === 'gray' ? '#6b7280'
                                            : data.color.toLowerCase() === 'orange' ? '#f97316'
                                            : data.color.toLowerCase() === 'brown' ? '#92400e'
                                            : data.color.toLowerCase() === 'navy' ? '#1e3a8a'
                                            : '#6b7280'
                                    }}
                                />
                                <div>
                                    <div className="font-medium text-gray-900 dark:text-white">
                                        {data.name}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Color: {data.color}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-gray-500 dark:text-gray-400">Quantity</div>
                                <div className="font-semibold text-gray-900 dark:text-white">
                                    {data.quantity}
                                </div>
                            </div>
                        </div>

                        {/* Show changes */}
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg dark:bg-blue-900/20">
                            <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Changes:</h4>
                            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                                {data.name !== product.name && (
                                    <li>• Name: "{product.name}" → "{data.name}"</li>
                                )}
                                {data.quantity !== product.quantity.toString() && (
                                    <li>• Quantity: {product.quantity} → {data.quantity}</li>
                                )}
                                {data.color !== product.color && (
                                    <li>• Color: {product.color} → {data.color}</li>
                                )}
                                {data.name === product.name && data.quantity === product.quantity.toString() && data.color === product.color && (
                                    <li>• No changes detected</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}