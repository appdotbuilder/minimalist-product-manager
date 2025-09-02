import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Product Manager - Inventory Management System">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6 text-gray-900 lg:justify-center lg:p-8 dark:from-gray-900 dark:to-gray-800 dark:text-white">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-6xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <>
                                <Link
                                    href={route('products.index')}
                                    className="inline-block rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                                >
                                    Manage Products
                                </Link>
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-lg border border-blue-200 px-6 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-900"
                                >
                                    Dashboard
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-lg border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col lg:max-w-6xl">
                        {/* Hero Section */}
                        <div className="text-center mb-12">
                            <div className="text-6xl mb-6">📦</div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Product Manager
                            </h1>
                            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                                Streamline your inventory management with our simple yet powerful product management system. Track, organize, and manage your products effortlessly.
                            </p>
                            
                            {auth.user ? (
                                <div className="space-y-4">
                                    <p className="text-lg text-gray-700 dark:text-gray-300">
                                        Welcome back, <span className="font-semibold text-blue-600">{auth.user.name}</span>!
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href={route('products.index')}
                                            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                                        >
                                            🚀 Start Managing Products
                                        </Link>
                                        <Link
                                            href={route('products.create')}
                                            className="inline-block rounded-lg border border-blue-600 px-8 py-3 text-lg font-medium text-blue-600 hover:bg-blue-50 transition-colors dark:hover:bg-blue-900"
                                        >
                                            ➕ Add New Product
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <p className="text-lg text-gray-700 dark:text-gray-300">
                                        Ready to take control of your inventory?
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href={route('login')}
                                            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                                        >
                                            🔐 Login to Start
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="inline-block rounded-lg border border-blue-600 px-8 py-3 text-lg font-medium text-blue-600 hover:bg-blue-50 transition-colors dark:hover:bg-blue-900"
                                        >
                                            📝 Create Account
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
                                <div className="text-3xl mb-4">📋</div>
                                <h3 className="text-xl font-semibold mb-3">Complete CRUD Operations</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Create, read, update, and delete products with ease. Manage product names, quantities, and colors in one simple interface.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
                                <div className="text-3xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold mb-3">Smart Search</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Quickly find products with our built-in search functionality. Filter through your inventory instantly by product name.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
                                <div className="text-3xl mb-4">🖨️</div>
                                <h3 className="text-xl font-semibold mb-3">Print Ready Reports</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Generate clean, printable product details for inventory reports and documentation with one click.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
                                <div className="text-3xl mb-4">🔐</div>
                                <h3 className="text-xl font-semibold mb-3">Secure Access</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Full administrative access with secure authentication. Your data is protected and accessible only to authorized users.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
                                <div className="text-3xl mb-4">📊</div>
                                <h3 className="text-xl font-semibold mb-3">Clean Interface</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Minimalist design focused on productivity. Simple tables, intuitive forms, and streamlined workflows.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
                                <div className="text-3xl mb-4">⚡</div>
                                <h3 className="text-xl font-semibold mb-3">Fast & Responsive</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Lightning-fast performance with modern web technologies. Works perfectly on desktop and mobile devices.
                                </p>
                            </div>
                        </div>

                        {/* Demo Preview */}
                        <div className="bg-white rounded-xl p-6 shadow-md dark:bg-gray-800 mb-8">
                            <h3 className="text-2xl font-semibold mb-4 text-center">📸 Product Management Preview</h3>
                            <div className="bg-gray-50 rounded-lg p-6 dark:bg-gray-700">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-white rounded border dark:bg-gray-600">
                                        <span className="font-medium">Laptop Pro</span>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">Qty: 15</span>
                                            <span className="inline-block w-4 h-4 bg-gray-800 rounded-full"></span>
                                            <span className="text-sm">Black</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded border dark:bg-gray-600">
                                        <span className="font-medium">Wireless Mouse</span>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">Qty: 8</span>
                                            <span className="inline-block w-4 h-4 bg-blue-500 rounded-full"></span>
                                            <span className="text-sm">Blue</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded border dark:bg-gray-600">
                                        <span className="font-medium">Gaming Headset</span>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm text-gray-600 dark:text-gray-300">Qty: 3</span>
                                            <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                                            <span className="text-sm">Red</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer className="text-center text-sm text-gray-500 dark:text-gray-400">
                            <p>Built with Laravel, React & TypeScript</p>
                        </footer>
                    </main>
                </div>
            </div>
        </>
    );
}