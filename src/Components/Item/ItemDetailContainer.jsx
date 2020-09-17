import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import Loading from '../Loading';
import './Card.css';

const ItemDetailContainer = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.mercadolibre.com/items/${props.id}`)
        .then(response => {
            return response.json();
        })
        .then(res => {
            setData(res.results);
            setLoading(false);
        })

}, [])

useEffect(() => {
    console.log(data);
}, [data])

if (loading) {
    return <Loading />
}

return (
    <div className='Card'>
                <ItemDetail id={data.id} name={data.title} price={data.price} thumbnail={data.thumbnail} />
    </div>
);
}


export default ItemDetailContainer;