import React from 'react';
import Product from "@/components/Product";

const products = [
    { id: 1, name: 'Laptop', price: 2999.99, image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300', category: 'Laptops' },
    { id: 2, name: 'Smartphone', price: 1999.99, image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Smartphones' },
    { id: 3, name: 'Headphones', price: 299.99, image: 'https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Accessories' },
    { id: 4, name: 'Smartwatch', price: 999.99, image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Wearables' },
    { id: 5, name: 'Camera', price: 3999.99, image: 'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Cameras' },
    { id: 6, name: 'Tablet', price: 1499.99, image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Tablets' },
];

const Page: React.FC = () => {
    return (
        <div className="container mx-auto my-12 p-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
