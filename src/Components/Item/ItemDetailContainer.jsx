import React from 'react'
import ItemDetail from './ItemDetail';
import './Card.css';

const ItemDetailContainer = ({ product }) => {

    const handleClick = () => {
        console.log("Click in product: ", product.id)
    }

    return (
        <div className='Card'>
            <ItemDetail product={product} handleClick={handleClick} />
        </div>
    );
}


export default ItemDetailContainer;