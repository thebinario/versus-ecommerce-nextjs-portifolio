import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'Laptop', price: 2999.99, image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300', category: 'Laptops' },
    { id: 2, name: 'Smartphone', price: 1999.99, image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Smartphones' },
    { id: 3, name: 'Headphones', price: 299.99, image: 'https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Accessories' },
    { id: 4, name: 'Smartwatch', price: 999.99, image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Wearables' },
    { id: 5, name: 'Camera', price: 3999.99, image: 'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Cameras' },
    { id: 6, name: 'Tablet', price: 1499.99, image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=300', category: 'Tablets' },
];

const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredProducts = products.filter((product) => {
        return (
            (selectedCategory === 'All' || product.category === selectedCategory) &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Produtos de Tecnologia</h1>
                <div className="mb-6 flex flex-col md:flex-row md:space-x-4">
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0"
                    />
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="All">Todas as Categorias</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Smartphones">Smartphones</option>
                        <option value="Accessories">Acessórios</option>
                        <option value="Wearables">Wearables</option>
                        <option value="Cameras">Câmeras</option>
                        <option value="Tablets">Tablets</option>
                    </select>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
                                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                                <p className="text-gray-700 mb-4">R${product.price.toFixed(2)}</p>
                                <Link
                                    to={{
                                        pathname: `/product/${product.id}`,
                                        state: { product }
                                    }}
                                    className="text-blue-500 hover:underline"
                                >
                                    Ver detalhes
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
