import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar';
import CanvasGame from './components/canvasgame';
import Education from './components/education';
import Introduction from './components/introduction';
import Summary from './components/summary';


class App extends Component {

  state = {
    language: 'english'
  }

  handleLanguageChange = newLanguage => {
    this.setState({language: newLanguage});
  }

  render() { 
    const { language } = this.state;
    
    return (
    <React.Fragment>
      <NavBar language={language} onLanguageChange={this.handleLanguageChange}/>
      <Introduction language={language}/>
      <Summary language={language}/>
      <a className="anchor" href="#" id="education">a</a>
      <Education/>
    </React.Fragment>
  );
  }
}

export default App;
