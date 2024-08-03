'use client'
import Image from 'next/image';
import React, { useState } from 'react';

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

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
    const { id, name, price, image, category, description, rating, reviews } = params;
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    };

    return (
        <div className="max-w-6xl mx-auto my-12 p-6 bg-white dark:bg-gray-200 rounded-lg shadow-md min-h-screen">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex justify-center items-center">
                    <Image
                        src={atob(image)}
                        alt={name}
                        width={500}
                        height={600} // Ajuste a altura aqui para 20% maior
                        className="object-cover rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-700">{name}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-600 mt-4">${price}</p>
                    <p className="text-gray-600 dark:text-gray-600 mt-2">Category: <span className="font-medium text-gray-700 dark:text-gray-700">{category}</span></p>
                    <p className="mt-4 text-gray-700 dark:text-gray-800">{description}</p>
                    <div className="mt-4 flex items-center">
                        <span className="text-gray-800 dark:text-gray-700 font-medium">{rating}</span>
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-500">({reviews} reviews)</span>
                    </div>
                    <div className="mt-4 flex items-center">
                        <label htmlFor="quantity" className="mr-2 text-gray-600 dark:text-gray-600">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                            className="w-16 p-2 border rounded"
                        />
                    </div>
                    <div className="mt-6 flex space-x-4">
                        <button className="bg-yellow-500 text-white font-medium py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-yellow-600">
                            Add to Cart
                        </button>
                        <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-blue-600">
                            Share
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
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-700">Comments</h2>
            <div className="mt-4 space-y-4">
                {mockComments.map(comment => (
                    <div key={comment.id} className="p-4 bg-gray-100 dark:bg-gray-300 rounded-lg shadow-md">
                        <p className="text-gray-700 dark:text-gray-800 font-medium">{comment.name}</p>
                        <p className="text-gray-600 dark:text-gray-700">{comment.comment}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-600">{comment.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetail;
