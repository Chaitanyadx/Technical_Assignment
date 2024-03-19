import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ product }) => {
    return (
        <Card className="h-100">
            <img src={product.image} className="card-img-top" alt={product.title} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;