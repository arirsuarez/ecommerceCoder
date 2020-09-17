import React, { useState, useEffect } from "react";
import { Card, Button, NavLink } from 'react-bootstrap';
import Loading from '../Loading';
import './Card.css';
import Item from './Item';
import ItemDetailContainer from './ItemDetailContainer';


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
                <div id={product.id}>
                    <ItemDetailContainer id={product.id}><Item id={product.id} name={product.title} price={product.price} thumbnail={product.thumbnail} /></ItemDetailContainer>    
                </div>))
            }
        </div>
    );
}


export default ItemList;