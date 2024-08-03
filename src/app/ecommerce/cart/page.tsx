'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Page = () => {
    const { cartItems, removeFromCart, updateQuantity, total, discount, applyDiscount } = useCart();
    const [coupon, setCoupon] = useState('');
    const [loading, setLoading] = useState(false);

    const totalWithDiscount = total - discount;

    const handleApplyCoupon = () => {
        setLoading(true);
        setTimeout(() => {
            applyDiscount(coupon);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="container mx-auto p-6 bg-background-light dark:bg-background-dark min-h-screen">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 text-center">Carrinho de Compras</h1>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                {cartItems.length === 0 ? (
                    <p className="text-gray-700 dark:text-gray-300">Seu carrinho está vazio.</p>
                ) : (
                    <div>
                        {loading && <div className="loader">Carregando...</div>}
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center">
                                        <Image src={item.image} alt={item.name} width={64} height={64} className="object-cover rounded" />
                                        <div className="ml-4">
                                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.name}</h2>
                                            <p className="text-gray-600 dark:text-gray-400">${item.price}</p>
                                            <div className="flex items-center mt-2">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-l" disabled={item.quantity === 1}>-</button>
                                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-r">+</button>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)} className="mt-2 text-red-500 dark:text-red-400">Remover</button>
                                        </div>
                                    </div>
                                    <p className="text-gray-900 dark:text-gray-100">${(item.price * item.quantity).toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <input
                                type="text"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                placeholder="Código do cupom"
                                className="w-full px-4 py-2 mb-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                            />
                            <button onClick={handleApplyCoupon} className="w-full px-4 py-2 mb-4 bg-primary-light dark:bg-primary-dark text-white rounded hover:bg-primary-dark dark:hover:bg-primary-light transition">Aplicar Cupom</button>
                        </div>
                        <div className="mt-6 flex justify-between items-center">
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">Total: ${totalWithDiscount.toFixed(2)}</p>
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
