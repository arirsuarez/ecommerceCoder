import React from 'react';
import './Card.css';
import ItemDetail from './ItemDetail';

function Item({ products }) {
    return (
        products.map((product) => (
            <ItemDetail key={product.id} product={product} />
        ))

    )
}

export default Item;