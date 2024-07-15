import Image from 'next/image';
import React from 'react';


const ProductDetail: React.FC = async ({params}: any) => {
    const {id, name, price, image, category} = params;
    console.log("Paramns", id, name, price, image, category)
    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <Image src={atob(image)} alt={name} width={500} height={500} className="object-cover"/>
                </div>
                <div className="md:w-1/2 md:pl-10">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="text-xl mt-4">${price}</p>
                    <p className="mt-4">Category: {category}</p>
                    <button className="mt-4 rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ProductDetail;
