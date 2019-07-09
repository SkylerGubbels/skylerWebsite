import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import LanguageCanvas from './components/languagecanvas';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <LanguageCanvas/>
    </React.Fragment>
  );
}

export default App;
