import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './../App.css';



function Counter(props) {
    let [counter, setCounter] = useState(parseInt(props.ini));

    let addtoCart = () => {
        if (counter >= parseInt(props.max)) {
            alert('You-ve reached your limit');
        } else {
            setCounter((prevCounter) => {
                return prevCounter + 1;
            });
        };
    };

    let removeItem = () => {
        if (counter == parseInt(props.min)) {
            alert('No items added yet!');
        } else {
            setCounter((prevCounter) => {
                return prevCounter - 1;
            });
        };
    }

    return (
        <div>
            <Button onClick={removeItem}>Remove Item</Button>
            <span className="numberCircle">{counter}</span>
            <Button onClick={addtoCart}>Add To Cart</Button>
        </div>
    );
}

export default Counter;