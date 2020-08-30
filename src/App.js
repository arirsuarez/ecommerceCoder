import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainNavBar from './Components/mainNavBar';
import HomeContainer from './Components/Home';
import Counter from './Components/Counter';


function App() {
  return (
    <div>
      <MainNavBar />
      <div className="App">
        <HomeContainer name='Ariel Suarez'/>
        <Counter ini='0' min='0' max='15'/>
      </div>
    </div>
  );
}

export default App;
