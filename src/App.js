import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainNavBar from './Components/mainNavBar';
import Home from './Pages/Home';
import Shipping from './Pages/Shipping';
import Contact from './Pages/Contact';
import Location from './Pages/Location';
import InProduct from './Components/Item/InProduct';
import Cart from './Pages/Cart';



function App() {
  return (
    <>
      <Router>

        <MainNavBar />

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Shipping">
          <Shipping />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Location">
          <Location />
        </Route>
        <Route path='/InProduct/:id'>
          <InProduct />
        </Route>
        <Route path='/Cart'>
          <Cart />
        </Route>
      </Router>
    </>
  );
}

export default App;
