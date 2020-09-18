import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import Loading from '../Loading';
import './Card.css';
import Counter from '../Counter';

const ItemDetailContainer = ({product}) => {

    const handleClick = () => {
        console.log("Click in product: ", product.id)
      }

return (
    <div className='Card'>
                <ItemDetail product={product} handleClick={handleClick}/>
    </div>
);
}


export default ItemDetailContainer;