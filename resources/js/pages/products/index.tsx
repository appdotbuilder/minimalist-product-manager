import React, { useState, useEffect } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Heading from '@/components/heading';

interface Product {
    id: number;
    name: string;
    quantity: number;
    color: string;
    created_at: string;
    updated_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedProducts {
    data: Product[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: PaginationLink[];
}

interface Props {
    products: PaginatedProducts;
    search: string;
    [key: string]: unknown;
}

export default function ProductsIndex({ products, search }: Props) {
    const [searchQuery, setSearchQuery] = useState(search || '');

    useEffect(() => {
        const delayedSearch = setTimeout(() => {
            if (searchQuery !== search) {
                router.get(route('products.index'), { search: searchQuery }, {
                    preserveState: true,
                    preserveScroll: true,
                });
            }
        }, 300);

        return () => clearTimeout(delayedSearch);
    }, [searchQuery, search]);

    const handleDelete = (product: Product) => {
        if (confirm(`Are you sure you want to delete ${product.name}?`)) {
            router.delete(route('products.destroy', product.id), {
                preserveState: true,
            });
        }
    };

    return (
        <AppShell>
            <Head title="Products" />
            
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <Heading title="📦 Products" />
                    <Button asChild>
                        <Link href={route('products.create')}>
                            ➕ Add Product
                        </Link>
                    </Button>
                </div>

                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <Input
                            type="text"
                            placeholder="🔍 Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    {searchQuery && (
                        <Button
                            variant="outline"
                            onClick={() => setSearchQuery('')}
                        >
                            Clear
                        </Button>
                    )}
                </div>

                {/* Products Table */}
                <div className="bg-white rounded-lg shadow-sm border dark:bg-gray-800 dark:border-gray-700">
                    {products.data.length > 0 ? (
                        <>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Product Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Quantity
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Color
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Created
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {products.data.map((product) => (
                                            <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="font-medium text-gray-900 dark:text-white">
                                                        {product.name}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                        product.quantity === 0 
                                                            ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                                                            : product.quantity < 10
                                                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                                                            : 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                                                    }`}>
                                                        {product.quantity}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-2">
                                                        <div 
                                                            className="w-4 h-4 rounded-full border"
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
                                                                    : '#6b7280'
                                                            }}
                                                        />
                                                        <span className="text-gray-900 dark:text-white">
                                                            {product.color}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                    {new Date(product.created_at).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Button asChild variant="outline" size="sm">
                                                            <Link href={route('products.show', product.id)}>
                                                                👁️ View
                                                            </Link>
                                                        </Button>
                                                        <Button asChild variant="outline" size="sm">
                                                            <Link href={route('products.edit', product.id)}>
                                                                ✏️ Edit
                                                            </Link>
                                                        </Button>
                                                        <Button asChild variant="outline" size="sm">
                                                            <Link href={route('products.print', product.id)} target="_blank">
                                                                🖨️ Print
                                                            </Link>
                                                        </Button>
                                                        <Button
                                                            variant="destructive"
                                                            size="sm"
                                                            onClick={() => handleDelete(product)}
                                                        >
                                                            🗑️ Delete
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            {products.last_page > 1 && (
                                <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 border-t dark:border-gray-600">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Showing {((products.current_page - 1) * products.per_page) + 1} to{' '}
                                            {Math.min(products.current_page * products.per_page, products.total)} of{' '}
                                            {products.total} results
                                        </div>
                                        <div className="flex gap-1">
                                            {products.links.map((link, index) => (
                                                link.url ? (
                                                    <Button
                                                        key={index}
                                                        variant={link.active ? "default" : "outline"}
                                                        size="sm"
                                                        onClick={() => router.get(link.url!, { search: searchQuery })}
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                ) : (
                                                    <Button
                                                        key={index}
                                                        variant="outline"
                                                        size="sm"
                                                        disabled
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">📦</div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                {searchQuery ? 'No products found' : 'No products yet'}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">
                                {searchQuery 
                                    ? `No products match "${searchQuery}". Try a different search term.`
                                    : 'Start by adding your first product to the inventory.'
                                }
                            </p>
                            {!searchQuery && (
                                <Button asChild>
                                    <Link href={route('products.create')}>
                                        ➕ Add Your First Product
                                    </Link>
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </AppShell>
    );
}