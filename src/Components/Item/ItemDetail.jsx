import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import InProduct from './InProduct';

function ItemDetail({ product, handleClick }) {
    return (
        <BrowserRouter>
            <div className='product'>
                <NavLink to='/InProduct'>
                    <Card style={{ width: '18rem' }} id={product.id}>
                        <Card.Img src={product.thumbnail} variant="top" alt="Product" />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>${product.price}
                            </Card.Text>
                            <Button variant="primary" onClick={handleClick}>Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </NavLink>
                <Switch>
                    <Route path='/InProduct'>
                        <InProduct product={product} />
                    </Route>
                </Switch>
            </div >
        </BrowserRouter>

    )
}

export default ItemDetail;