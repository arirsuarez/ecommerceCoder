import React from 'react';
import { Card, Button } from 'react-bootstrap';
import productimage from '../Utils/Img/imageproduct.png';
import './Card.css';

function Item(props) {
    return (
        <div className='product'>
            <Card style={{ width: '18rem' }} id={props.id}>
                <Card.Img src={props.thumbnail} variant="top" alt="Product" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>${props.price}
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item;