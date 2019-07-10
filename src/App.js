import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar';
import CanvasGame from './components/canvasgame';
import Education from './components/education';
import Introduction from './components/introduction';
import Summary from './components/summary';
import TechnicalSkills from './components/technicalskills';


class App extends Component {

  state = {
    language: 'english',
    imageHeight: 200
  }

  handleLanguageChange = newLanguage => {
    this.setState({language: newLanguage});
  }

  handleBackgroundImageResize = imageHeight =>{
    this.setState({imageHeight});
  }

  handleLoadImage = image =>{
    console.log(image)
    this.setState({imageHeight: image})
  }

  render() { 
    const { language } = this.state;
    
    return (
    <React.Fragment>
      <NavBar language={language} onLanguageChange={this.handleLanguageChange} imageHeight={this.state.imageHeight}/>
      <Introduction language={language} onImageSizeChange={this.handleBackgroundImageResize} onImageLoad={this.handleLoadImage}/>
      <Summary language={language}/>
      <a className="anchor" href="#" id="education">a</a>
      <Education/>
      <TechnicalSkills/>
    </React.Fragment>
  );
  }
}

export default App;
