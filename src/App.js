import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import AboutPage from './components/aboutpage';
import ContactPage from './components/contactpage';
import ProjectsPage from './components/projectspage';


class App extends Component {

  state = {
    language: "english"
  }

  handleLanguageChange = newLanguage => {
    this.setState({language: newLanguage});
  }

  render() { 
    
    const {language} = this.state;

    return (
    <React.Fragment>
      <Switch>
        <Route path="/about" component={() => <AboutPage language={language} onLanguageChange={this.handleLanguageChange}/>}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/projects" component={ProjectsPage}/>
        <Redirect from="/" exact to="/about"/>
      </Switch>
    </React.Fragment>
  );
  }
}

export default App;
