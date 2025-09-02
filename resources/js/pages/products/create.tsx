import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';

interface ProductFormData {
    name: string;
    quantity: string;
    color: string;
    [key: string]: string;
}

export default function CreateProduct() {
    const { data, setData, post, processing, errors } = useForm<ProductFormData>({
        name: '',
        quantity: '0',
        color: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('products.store'));
    };

    const commonColors = [
        'Red', 'Blue', 'Green', 'Yellow', 'Black', 'White',
        'Purple', 'Orange', 'Pink', 'Brown', 'Gray', 'Navy'
    ];

    return (
        <AppShell>
            <Head title="Add Product" />
            
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Button asChild variant="outline">
                        <Link href={route('products.index')}>
                            ← Back to Products
                        </Link>
                    </Button>
                    <Heading title="➕ Add New Product" />
                </div>

                <div className="max-w-2xl">
                    <div className="bg-white rounded-lg shadow-sm border p-6 dark:bg-gray-800 dark:border-gray-700">
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
                                    {processing ? '⏳ Creating...' : '💾 Create Product'}
                                </Button>
                                <Button asChild variant="outline" disabled={processing}>
                                    <Link href={route('products.index')}>
                                        Cancel
                                    </Link>
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Preview Card */}
                    {(data.name || data.color) && (
                        <div className="bg-white rounded-lg shadow-sm border p-6 dark:bg-gray-800 dark:border-gray-700">
                            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Preview</h3>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg dark:bg-gray-700">
                                <div className="flex items-center gap-3">
                                    {data.color && (
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
                                    )}
                                    <div>
                                        <div className="font-medium text-gray-900 dark:text-white">
                                            {data.name || 'Product Name'}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Color: {data.color || 'Not specified'}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Quantity</div>
                                    <div className="font-semibold text-gray-900 dark:text-white">
                                        {data.quantity || '0'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppShell>
    );
}