import React, { Component } from 'react';
import Footer from './footer';
import NavBar from './navbar';
import Table from './common/table';
import github from "../resources/languageLogos/github.svg"

class ProjectsPage extends Component {
    state = {
        language: 'english',
    }

    projects = {
        headers: ["Name", "Description", "Github", "Link"],
        data: [
            {name: "Drum Metronome", description: "Text", github: {image: github, path: "https://github.com/SkylerGubbels/DrumMetronome"}, link: {text: "Link", path: ""}},
            {name: "Portfolio Website", description: "Text", github: {image: github, path: "https://github.com/SkylerGubbels/skylerWebsite"}, link: {text: "Link", path: ""}},
            {name: "Curling Game", description: "Text", github: {image: github, path: ""}, link: {text: "Link", path: ""}}
            
        ]
    }

    handleLanguageChange = newLanguage => {
        this.setState({language: newLanguage});
      }

    render() { 
        const { language } = this.state;
        return ( 
            <div className="page-container">
                <NavBar language={language} onLanguageChange={this.handleLanguageChange} imageHeight={0}/>
                <div className="container">
                    <Table className="table table-striped" content={this.projects}/>
                </div>
                <Footer className="footerSmall"/>
            </div>
         );
    }
}
 
export default ProjectsPage;