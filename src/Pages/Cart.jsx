import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import productImg from '../Utils/Img/imageproduct.png';
import '../App.css';
import { CartContext } from '../Context/cartContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CheckOutForm from '../Components/CheckOutForm';

function Cart() {
    const [cart] = useContext(CartContext);
    const product = cart[0];

    
    return (
        <>
            <h2>Cart</h2>
            { cart.length === 0 ? <div>No hay items en el carrito. <NavLink to='/'>Home</NavLink></div> : <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={productImg} rounded />
                        <p>Items in cart: {cart.length}</p>
                        <p>Product: {product.title}</p>
                    </Col>
                </Row>
            </Container>}

            <CheckOutForm />


        </>
    )
}
export default Cart;