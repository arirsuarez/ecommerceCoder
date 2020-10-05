import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function ItemDetail({ product }) {
    return (
      
            <div className='product'>
                <NavLink to={`/InProduct/${product.id}`}>
                    <Card style={{ width: '18rem' }} id={product.id}>
                        <Card.Img src={product.thumbnail} variant="top" alt="Product" />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>${product.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </NavLink>               
            </div >
       
    )
}

export default ItemDetail;