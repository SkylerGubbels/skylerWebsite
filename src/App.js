import React, {Component} from 'react';
import './App.css';
import AboutPage from './components/aboutpage';
import {Route} from "react-router-dom";



class App extends Component {

  render() { 
    
    return (
    <React.Fragment>
      <AboutPage/>
    </React.Fragment>
  );
  }
}

export default App;
