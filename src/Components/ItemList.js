import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';
import Loading from './Loading';
import './Card.css';
import Item from './Item';


const ItemList = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&limit=15')
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
            {data.map((product, i) => (
                <div key={{ i }}>
                    <Item id={product.id} name={product.title} price={product.price} thumbnail={product.thumbnail} />
                </div>))
            }
        </div>
    );
}


export default ItemList;