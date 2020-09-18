import React, { useState, useEffect } from "react";
import Loading from '../Loading';
import './Card.css';
import Item from './Item';


const ItemList = () => {
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
            <Item products={data} />
        </div>
    );
}


export default ItemList;