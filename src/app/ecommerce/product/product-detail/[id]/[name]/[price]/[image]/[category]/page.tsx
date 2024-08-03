'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

interface ProductDetailProps {
    params: {
        id: string;
        name: string;
        price: number;
        image: string;
        category: string;
        description: string;
        rating: number;
        reviews: number;
    }
}

const decodeBase64 = (base64: string): string => {
    try {
        return atob(base64);
    } catch (e) {
        console.error("Failed to decode base64 URL:", e);
        return '';
    }
};

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
    const { id, name, price, image, category, description, rating, reviews } = params;
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    };

    const handleAddToCart = () => {
        addToCart({ id: Number(id), name, price, quantity, image: decodeBase64(image) });
    };

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);

    return (
        <div className="max-w-6xl mx-auto my-12 p-6 bg-background-light dark:bg-background-dark rounded-lg shadow-md min-h-screen">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex justify-center items-center">
                    <Image
                        src={decodeBase64(image)}
                        alt={name}
                        width={500}
                        height={600}
                        className="object-cover rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
                    <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">{name}</h1>
                    <p className="text-xl text-text-light dark:text-text-dark mt-4">{formattedPrice}</p>
                    <p className="text-text-light dark:text-text-dark mt-2">Category: <span className="font-medium text-primary-light dark:text-primary-dark">{category}</span></p>
                    <p className="mt-4 text-text-light dark:text-text-dark">{description}</p>
                    <div className="mt-4 flex items-center">
                        <span className="text-text-light dark:text-text-dark font-medium">{rating}</span>
                        <span className="ml-2 text-sm text-text-light dark:text-text-dark">({reviews} reviews)</span>
                    </div>
                    <div className="mt-4 flex items-center">
                        <label htmlFor="quantity" className="mr-2 text-text-light dark:text-text-dark">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                            className="w-16 p-2 border rounded dark:bg-primary-dark dark:text-text-dark"
                        />
                    </div>
                    <div className="mt-6 flex space-x-4">
                        <button
                            onClick={handleAddToCart}
                            className="bg-primary-light text-white font-medium py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-primary-dark"
                        >
                            Add to Cart
                        </button>
                        <button className="bg-secondary-light text-white font-medium py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-secondary-dark">
                            Share
                        </button>
                        <button className="bg-success-light text-white font-medium py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-success-dark">
                            Buy Now
                        </button>
                        <button className="bg-warning-light text-white font-medium py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-warning-dark">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    );
};

const Comments: React.FC = () => {
    const mockComments = [
        {
            id: 1,
            name: 'John Doe',
            comment: 'Great product! Really satisfied with the quality.',
            date: '2023-07-01'
        },
        {
            id: 2,
            name: 'Jane Smith',
            comment: 'Good value for the price. Highly recommend.',
            date: '2023-07-02'
        },
        {
            id: 3,
            name: 'Bob Johnson',
            comment: 'Fast shipping and excellent customer service.',
            date: '2023-07-03'
        }
    ];

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">Comments</h2>
            <div className="mt-4 space-y-4">
                {mockComments.map(comment => (
                    <div key={comment.id} className="p-4 bg-background-light dark:bg-background-dark rounded-lg shadow-md">
                        <p className="text-text-light dark:text-text-dark font-medium">{comment.name}</p>
                        <p className="text-text-light dark:text-text-dark">{comment.comment}</p>
                        <p className="text-sm text-text-light dark:text-text-dark">{comment.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetail;
