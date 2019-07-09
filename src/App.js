import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import CanvasGame from './components/canvasgame';
import Summary from './components/summary';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Summary/>
    </React.Fragment>
  );
}

export default App;
