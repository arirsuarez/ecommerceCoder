import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import InProduct from './InProduct';

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
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </NavLink>               
            </div >
       
    )
}

export default ItemDetail;