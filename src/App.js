import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import CanvasGame from './components/canvasgame';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <CanvasGame/>
    </React.Fragment>
  );
}

export default App;
