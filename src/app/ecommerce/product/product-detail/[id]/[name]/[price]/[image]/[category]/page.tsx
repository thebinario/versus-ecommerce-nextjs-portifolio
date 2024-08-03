import Image from 'next/image';
import React from 'react';

interface ProductDetailProps {
    params: {
        id: string;
        name: string;
        price: number;
        image: string;
        category: string;
    }
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
    const { id, name, price, image, category } = params;

    return (
        <div className="max-w-6xl mx-auto my-12 p-6 bg-white dark:bg-gray-200 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex justify-center items-center">
                    <Image
                        src={atob(image)}
                        alt={name}
                        width={500}
                        height={500}
                        className="object-cover rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-700">{name}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-600 mt-4">${price}</p>
                    <p className="text-gray-600 dark:text-gray-600 mt-2">Category: <span className="font-medium text-gray-700 dark:text-gray-700">{category}</span></p>
                    <button className="mt-6 bg-yellow-500 text-white font-medium py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-yellow-600">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
