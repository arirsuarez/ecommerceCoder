import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainNavBar from './Components/mainNavBar';
import HomeContainer from './Components/Home';


function App() {
  //Renderizando la app. Sólo se puede renderizar un elemento en este caso <div>
  return (
    <div>
      <MainNavBar />
      <div className="App">
        <HomeContainer />
      </div>
    </div>
  );
}

export default App;
