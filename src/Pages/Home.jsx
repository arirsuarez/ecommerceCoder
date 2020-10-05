import React, { useState, useEffect } from 'react';
import Loading from '../Components/Loading';
import Item from '../Components/Item/Item';
import { getFirestore } from '../Firebase/index';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items")
        itemCollection.get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('No data');
                }
                setData(querySnapshot.docs.map(doc => {
                    return ({ id: doc.id, ...doc.data() });
                }));
            })
            .catch((error) => {
                console.log('error: ', error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return (
        <>
            { loading ? <Loading /> : <Item products={data} />}
        </>
    )

}

// const Home = (props) => {

//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         setLoading(true);
//         fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&limit=15')
//             .then(response => {
//                 return response.json();
//             })
//             .then(res => {
//                 setData(res.results);
//                 setLoading(false);
//             })

//     }, [props.data]);

//     return (
//         <>
//             { loading ? <Loading /> : <Item products={data} />}
//         </>
//     )

// }
export default Home;