import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import imageproduct from '../../Utils/Img/imageproduct.png';
import Loading from '../Loading';
import { getFirestore } from '../../Firebase/index';
import { CartContext } from '../../Context/cartContext';
import './Card.css';
import { useContext } from 'react';
import Button from '../Button';


function InProduct() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useContext(CartContext);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const db = getFirestore();
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(id);

        item.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log('Item doesnt exist!');
                }
                setData({ id: doc.id, ...doc.data() });
            })
            .catch((error) => {
                console.log('Error: ', error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);


    // useEffect(() => {
    //     setLoading(true);
    //     fetch(`https://api.mercadolibre.com/items?ids=${id}`)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(res => {
    //             setData(res[0].body)
    //             console.log(res);
    //             setLoading(false);
    //         })

    // }, []);

    const addToCart = () => {
        setCart(currentCart => [...currentCart, data])
    }

    return (
        <>
            { loading ? <Loading /> : <>
                <div className='inProduct'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="gs://ecommerce-coder.appspot.com/celulares2019.jpg"
                                alt='img'
                            />
                            <Carousel.Caption>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Button onClick={addToCart} sign={'Add to Cart'} />
                <NavLink
                    to={'/Cart'}
                    className="toCart"
                >{cart.length} in Cart. Shop Now!</NavLink>
            </>
            }
        </>
    )
}

export default InProduct;

