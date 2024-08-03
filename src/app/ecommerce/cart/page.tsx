import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
    const cartItems = [
        { id: 1, name: 'Produto 1', price: 29.99, quantity: 1, image: '/path/to/image1.jpg' },
        { id: 2, name: 'Produto 2', price: 49.99, quantity: 2, image: '/path/to/image2.jpg' },
        { id: 3, name: 'Produto 3', price: 19.99, quantity: 1, image: '/path/to/image3.jpg' },
    ];

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-6 bg-background-light dark:bg-background-dark min-h-screen">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 text-center">Carrinho de Compras</h1>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                {cartItems.length === 0 ? (
                    <p className="text-gray-700 dark:text-gray-300">Seu carrinho está vazio.</p>
                ) : (
                    <div>
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center">
                                        <Image src={item.image} alt={item.name} width={64} height={64} className="object-cover rounded" />
                                        <div className="ml-4">
                                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.name}</h2>
                                            <p className="text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</p>
                                            <div className="flex items-center mt-2">
                                                <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-l">-</button>
                                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100">{item.quantity}</span>
                                                <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-r">+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-900 dark:text-gray-100">${(item.price * item.quantity).toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex justify-between items-center">
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">Total: ${total.toFixed(2)}</p>
                            <div className="flex space-x-4">
                                <Link href="/ecommerce/shop" className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                                    Continuar Comprando
                                </Link>
                                <Link href="/ecommerce/checkout" className="px-5 py-2 bg-primary-light dark:bg-primary-dark text-white rounded hover:bg-primary-dark dark:hover:bg-primary-light transition">
                                    Finalizar Compra
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
