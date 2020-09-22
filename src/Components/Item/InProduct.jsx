import React from 'react';
import { Carousel } from 'react-bootstrap';
import Counter from '../Counter';
import imageproduct from '../../Utils/Img/imageproduct.png';


function InProduct({ product }) {
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
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Counter />
        </div>
    )
}

export default InProduct;

