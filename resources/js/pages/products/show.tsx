import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import Heading from '@/components/heading';

interface Product {
    id: number;
    name: string;
    quantity: number;
    color: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    product: Product;
    [key: string]: unknown;
}

export default function ShowProduct({ product }: Props) {
    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete ${product.name}?`)) {
            router.delete(route('products.destroy', product.id));
        }
    };

    const getStockStatus = (quantity: number) => {
        if (quantity === 0) return { text: 'Out of Stock', class: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100' };
        if (quantity < 10) return { text: 'Low Stock', class: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' };
        return { text: 'In Stock', class: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' };
    };

    const stockStatus = getStockStatus(product.quantity);

    return (
        <AppShell>
            <Head title={`${product.name} - Product Details`} />
            
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Button asChild variant="outline">
                        <Link href={route('products.index')}>
                            ← Back to Products
                        </Link>
                    </Button>
                    <Heading title="👁️ Product Details" />
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Product Information */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm border p-6 dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div 
                                        className="w-16 h-16 rounded-full border-4 border-gray-200 dark:border-gray-600"
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
                                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {product.name}
                                        </h1>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${stockStatus.class}`}>
                                                {stockStatus.text}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                                        {product.quantity}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Units Available
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                                            Product Name
                                        </label>
                                        <div className="text-lg font-medium text-gray-900 dark:text-white">
                                            {product.name}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                                            Color
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <div 
                                                className="w-4 h-4 rounded-full border border-gray-300"
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
                                            <span className="text-lg font-medium text-gray-900 dark:text-white">
                                                {product.color}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                                            Created Date
                                        </label>
                                        <div className="text-lg font-medium text-gray-900 dark:text-white">
                                            {new Date(product.created_at).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                                            Last Updated
                                        </label>
                                        <div className="text-lg font-medium text-gray-900 dark:text-white">
                                            {new Date(product.updated_at).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions Panel */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-lg shadow-sm border p-6 dark:bg-gray-800 dark:border-gray-700">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Actions</h3>
                            <div className="space-y-3">
                                <Button asChild className="w-full">
                                    <Link href={route('products.edit', product.id)}>
                                        ✏️ Edit Product
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href={route('products.print', product.id)} target="_blank">
                                        🖨️ Print Details
                                    </Link>
                                </Button>
                                <Button
                                    variant="destructive"
                                    onClick={handleDelete}
                                    className="w-full"
                                >
                                    🗑️ Delete Product
                                </Button>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-white rounded-lg shadow-sm border p-6 dark:bg-gray-800 dark:border-gray-700">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Stats</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Product ID</span>
                                    <span className="font-medium text-gray-900 dark:text-white">#{product.id}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Stock Status</span>
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${stockStatus.class}`}>
                                        {stockStatus.text}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Age</span>
                                    <span className="font-medium text-gray-900 dark:text-white">
                                        {Math.floor((Date.now() - new Date(product.created_at).getTime()) / (1000 * 60 * 60 * 24))} days
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Inventory Alert */}
                        {product.quantity < 10 && (
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 dark:bg-yellow-900/20 dark:border-yellow-800">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">⚠️</span>
                                    <div>
                                        <h4 className="font-medium text-yellow-800 dark:text-yellow-200">
                                            {product.quantity === 0 ? 'Out of Stock!' : 'Low Stock Alert!'}
                                        </h4>
                                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                            {product.quantity === 0 
                                                ? 'This product is out of stock and needs restocking.'
                                                : 'This product is running low and may need restocking soon.'
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppShell>
    );
}