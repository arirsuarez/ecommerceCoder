import React from 'react';
import Cart from '../Pages/Cart';


function CartMap() {
    const [cart] = useContext(CartContext);

    return (
        cart.map((product) => (
            <Cart key={product.id} product={product} />
        ))

    )
}

export default CartMap;