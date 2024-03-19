import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        title: 'Product 1',
        description: 'This is product 1.',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/150',
        title: 'Product 2',
        description: 'This is product 2.',
    }
];

const Dashboard = () => {
    return (
        <div className="container">
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