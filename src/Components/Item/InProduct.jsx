import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Counter from '../Counter';
import imageproduct from '../../Utils/Img/imageproduct.png';



function InProduct() {

    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        //   setLoading(true);
        fetch(`https://api.mercadolibre.com/items?ids=${id}`)
            .then(response => {
                return response.json();
            })
            .then(res => {
                setData(res[0].body)
                //            setLoading(false);
                    })

            }, []);

        return (
            <div className='product'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imageproduct}
                            alt='img'
                        />
                        <Carousel.Caption>
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Counter ini='0' max='15' min='0'/>
            </div>
        )
    }

export default InProduct;

