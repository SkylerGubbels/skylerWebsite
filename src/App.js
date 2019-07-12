import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import AboutPage from './components/aboutpage';
import ContactPage from './components/contactpage';
import ProjectsPage from './components/projectspage';


class App extends Component {

  render() { 
    
    return (
    <React.Fragment>
      <Switch>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/projects" component={ProjectsPage}/>
        <Redirect from="/" exact to="/about"/>
      </Switch>
    </React.Fragment>
  );
  }
}

export default App;
