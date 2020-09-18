import React from 'react';
import './Card.css';
import ItemDetailContainer from './ItemDetailContainer';

function Item({ products }) {
    return (
        products.map((product) => (
            <ItemDetailContainer key={product.id} product={product} />
        ))

    )
}

export default Item;