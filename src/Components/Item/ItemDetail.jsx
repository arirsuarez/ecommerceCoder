import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ItemDetail({ product, handleClick }) {
    return (
        <div className='product'> 
          <Card style={{ width: '18rem' }} id={product.id}>
              <Card.Img src={product.thumbnail} variant="top" alt="Product" />
              <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>${product.price}
                  </Card.Text>
                  <Button variant="primary" onClick={handleClick}>Add To Cart</Button>
              </Card.Body>
          </Card>
        </div>
    )
}

export default ItemDetail;