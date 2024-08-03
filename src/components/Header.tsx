'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const Header = () => {
    const { cartItems } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-background-light dark:bg-background-dark shadow-md transition-colors duration-500">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="block text-primary-light dark:text-primary-dark transition-colors duration-500">
                            <span className="sr-only">Home</span>
                            <Image src="/logo.svg" alt="Logo" width={80} height={80} />
                        </Link>
                        <nav className="hidden md:flex md:items-center md:gap-8">
                            <ul className="flex items-center gap-6 text-sm">
                                {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                                    <li key={item} className="relative group">
                                        <Link href={item === 'Home' || item === 'Shop' ? "/ecommerce/product" : `/${item.toLowerCase()}`} className="text-text-light dark:text-text-dark transition-colors duration-500 hover:text-primary-dark dark:hover:text-primary-light">
                                            {item}
                                        </Link>
                                        {item === 'Shop' && (
                                            <div className="absolute left-0 mt-2 hidden w-40 bg-white dark:bg-gray-800 shadow-lg group-hover:block">
                                                {['Men', 'Women', 'Kids', 'Accessories'].map((subitem) => (
                                                    <Link key={subitem} href={`/shop/${subitem.toLowerCase()}`} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                        {subitem}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <input type="text" placeholder="Search..." className="rounded-md bg-gray-100 dark:bg-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark" />
                            <button className="absolute right-2 top-2 text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.148-5.798a6.375 6.375 0 11-12.75 0 6.375 6.375 0 0112.75 0z" />
                                </svg>
                            </button>
                        </div>
                        <Link href="/ecommerce/cart" className="relative flex items-center text-gray-600 dark:text-gray-400 transition hover:text-gray-700 dark:hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l1.4-6H6.6L7 13zm0 0H5l-1 6h16l-1-6h-2m-9 0h8" />
                            </svg>
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                        <div className="hidden sm:flex sm:gap-4">
                            <Link href="/ecommerce/login" className="rounded-md bg-primary-light dark:bg-primary-dark px-5 py-2.5 text-sm font-medium text-white shadow-md transition-transform transform hover:scale-105 duration-300">
                                Login
                            </Link>
                            <Link href="/ecommerce/register" className="rounded-md bg-secondary-light dark:bg-secondary-dark px-5 py-2.5 text-sm font-medium text-primary-light dark:text-primary-dark shadow-md transition-transform transform hover:scale-105 duration-300">
                                Register
                            </Link>
                        </div>
                        <ThemeToggle />
                        <button className="block md:hidden rounded bg-gray-100 dark:bg-gray-700 p-2 text-gray-600 dark:text-gray-400 transition hover:text-gray-700 dark:hover:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden">
                        <ul className="flex flex-col items-center gap-4 text-sm mt-4">
                            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={item === 'Home' || item === 'Shop' ? "/ecommerce/product" : `/${item.toLowerCase()}`} className="text-text-light dark:text-text-dark transition hover:text-primary-dark dark:hover:text-primary-light">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/ecommerce/login" className="rounded-md bg-primary-light dark:bg-primary-dark px-5 py-2.5 text-sm font-medium text-white shadow-md transition-transform transform hover:scale-105 duration-300">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/ecommerce/register" className="rounded-md bg-secondary-light dark:bg-secondary-dark px-5 py-2.5 text-sm font-medium text-primary-light dark:text-primary-dark shadow-md transition-transform transform hover:scale-105 duration-300">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
