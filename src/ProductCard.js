import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const ProductCard = ({ product }) => {
  return (
    <Card className="h-100">
      <Card.Body className="p-3">
      <Card.Title className="mt-3">{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Image
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ objectFit: 'cover', padding: '0.5rem' }}
        />
      </Card.Body>
    </Card>
  );
};

export default ProductCard;