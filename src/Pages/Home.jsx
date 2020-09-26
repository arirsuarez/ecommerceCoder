import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Loading from '../Components/Loading';
import Item from '../Components/Item/Item';

const Home = (props) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

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

    }, [props.data]);

    return (
        <>
        { loading ? <Loading /> : <Item products={data} /> }
        </>
    )
    // return (
    //     <>
    //         <ItemList />
    //     </>
    // )
}
export default Home;