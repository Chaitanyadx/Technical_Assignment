import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        title: 'Title',
        description: 'description',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/150',
        title: 'Title',
        description: 'description',
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/150',
        title: 'Title',
        description: 'description',
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/150',
        title: 'Title',
        description: 'description',
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/150',
        title: 'Title',
        description: 'description',
    },
    {
        id: 6,
        image: 'https://via.placeholder.com/150',
        title: 'Title',
        description: 'description',
    }
];

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;