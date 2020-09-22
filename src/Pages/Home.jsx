import React from 'react';
import { Route } from 'react-router-dom';
import InProduct from '../Components/Item/InProduct';
import ItemList from '../Components/Item/ItemList';

function HomeContainer() {
    return (
        <>
            <ItemList />
        </>
    )
}
export default HomeContainer;