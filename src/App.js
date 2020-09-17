import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainNavBar from './Components/mainNavBar';
import HomeContainer from './Pages/Home';


function App() {
  return (
    <div>
      <MainNavBar />
      <div className="App">
        <HomeContainer name='Ariel Suarez'/>
      </div>
    </div>
  );
}

export default App;
