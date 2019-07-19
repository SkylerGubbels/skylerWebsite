import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import AboutPage from './components/aboutpage';
import ProjectsPage from './components/projectspage';
import * as englishFile from './resources/englishText';
import * as frenchFile from './resources/frenchText';


class App extends Component {

  state = {
    language: "english",
    textFile: null
  }

  textFiles = {
    english: englishFile,
    french: frenchFile
  }

  componentWillMount(){
    this.setState({textFile: englishFile});
  }

  handleLanguageChange = newLanguage => {
    this.setState({language: newLanguage, textFile: this.textFiles[newLanguage]});
  }

  render() { 
    
    const {language, textFile} = this.state;

    return (
    <React.Fragment>
      <Switch>
        <Route path="/about" component={() => <AboutPage language={language} onLanguageChange={this.handleLanguageChange} textFile={textFile}/>}/>
        <Route path="/projects" component={() => <ProjectsPage language={language} onLanguageChange={this.handleLanguageChange} textFile={textFile}/>}/>
        <Redirect from="/" exact to="/about"/>
      </Switch>
    </React.Fragment>
  );
  }
}

export default App;
