import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React from 'react';

interface ProductProps {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

const ProductDetail: React.FC<ProductProps> = ({ id, name, price, image, category }) => {
    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <Image src={image} alt={name} width={500} height={500} className="object-cover"/>
                </div>
                <div className="md:w-1/2 md:pl-10">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="text-xl mt-4">${price.toFixed(2)}</p>
                    <p className="mt-4">Category: {category}</p>
                    <button className="mt-4 rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const products = [
        { id: 1, name: 'Laptop', price: 2999.99, image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300', category: 'Laptops' },
        { id: 2, name: 'Smartphone', price: 1999.99, image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Smartphones' },
        { id: 3, name: 'Headphones', price: 299.99, image: 'https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Accessories' },
        { id: 4, name: 'Smartwatch', price: 999.99, image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Wearables' },
        { id: 5, name: 'Camera', price: 3999.99, image: 'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Cameras' },
        { id: 6, name: 'Tablet', price: 1499.99, image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Tablets' },
    ];

    const paths = products.map(product => ({
        params: { id: product.id.toString() }
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const products = [
        { id: 1, name: 'Laptop', price: 2999.99, image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300', category: 'Laptops' },
        { id: 2, name: 'Smartphone', price: 1999.99, image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Smartphones' },
        { id: 3, name: 'Headphones', price: 299.99, image: 'https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Accessories' },
        { id: 4, name: 'Smartwatch', price: 999.99, image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Wearables' },
        { id: 5, name: 'Camera', price: 3999.99, image: 'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Cameras' },
        { id: 6, name: 'Tablet', price: 1499.99, image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Tablets' },
    ];

    const product = products.find(product => product.id.toString() === params?.id);

    return { props: { ...product } };
};

export default ProductDetail;
