import React from 'react';
import {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import productimage from '../Utils/Img/imageproduct.png';
import './Card.css';
import Data from './ItemList';
import Counter from './Counter'

function getProducts() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(Data);
        }, 2000);
    });
}

function Item() {
    const [products, setProducts] = useState([]);

    getProducts()
        .then((products) => {
            setProducts(products);
        });

        
    if (products) {
        return (
         <div>
         {products.map((product) => (
            <Card style={{ width: '18rem' }}>
                 <Card.Img src={productimage} variant="top" alt="Acá va la foto"/>
                 <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                     <Card.Text>{product.description}
                         </Card.Text>
                     <Button variant="primary" onClick={Counter.addtoCart} >Add To Cart</Button>
                 </Card.Body>
             </Card>
         ))
     }
             </div>
        );
    }
}

export default Item;
