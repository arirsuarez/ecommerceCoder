import React from 'react';
import { Carousel } from 'react-bootstrap';

function ItemDetail(props) {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.thumbnail}
                    alt={props.title}
                />
                <Carousel.Caption>
                    <h3>{props.title}</h3>
                    <p>{props.price}</p>
                    <a href={props.permalink}>{props.title}</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ItemDetail;