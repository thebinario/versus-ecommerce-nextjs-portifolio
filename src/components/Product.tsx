'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
    id: any;
    name: string;
    price: number;
    image: string;
    category: string;
}

const Product: React.FC<ProductProps> = ({ id, name, price, image, category }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    };

    const handleQuickView = () => {
        // Implement quick view functionality here
        alert(`Quick view for ${name}`);
    };

    const handleAddToCart = () => {
        // Implement add to cart animation here
        alert(`Added ${quantity} of ${name} to cart`);
    };

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);

    return (
        <div className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <button
                className="absolute right-4 top-4 z-10 rounded-full bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-gray-100 transition hover:text-gray-900/75 dark:hover:text-gray-300"
                onClick={handleQuickView}
            >
                <span className="sr-only">Quick View</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10l4.553-4.553a2.25 2.25 0 00-3.182-3.182L12 6.818 9.629 4.447a2.25 2.25 0 00-3.182 3.182L10 10m5 0v9m-5-9l4.553 4.553a2.25 2.25 0 01-3.182 3.182L12 13.182l-2.371 2.371a2.25 2.25 0 01-3.182-3.182L10 10m5 0H9"
                    />
                </svg>
            </button>
            <Link href={`/ecommerce/product/product-detail/${id}/${name}/${price}/${btoa(image)}/${category}`}>
                <Image
                    src={image}
                    alt={name}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 rounded-t-lg"
                    layout="responsive"
                    width={2664}
                    height={1592}
                />
            </Link>
            <div className="relative border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-b-lg">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium rounded"> New </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
                <p className="mt-1.5 text-sm text-gray-700 dark:text-gray-300">{formattedPrice}</p>
                <div className="mt-4 flex items-center">
                    <label htmlFor="quantity" className="mr-2 text-sm text-gray-700 dark:text-gray-300">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                        className="w-16 p-2 border border-gray-300 rounded dark:bg-primary-dark dark:text-text-dark"
                    />
                </div>
                <form className="mt-4">
                    <button
                        type="button"
                        className="flex items-center justify-center w-full rounded bg-primary-light text-white py-2 px-4 text-sm font-medium transition-transform hover:scale-105 hover:bg-primary-dark"
                        onClick={handleAddToCart}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 3h2l.4 2M7 13h10l1.4-6H6.6L7 13zm0 0H5l-1 6h16l-1-6h-2m-9 0h8"
                            />
                        </svg>
                        Add to Cart
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Product;
