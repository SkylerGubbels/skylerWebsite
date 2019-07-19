import React, { Component } from 'react';
import Footer from './footer';
import NavBar from './navbar';
import Table from './common/table';
import github from "../resources/languageLogos/github-dark.svg"

class ProjectsPage extends Component {


    render() { 
        const { language, onLanguageChange, textFile } = this.props;
        const projects = textFile.getProjects();
        return ( 
            <div>
                <div className="content"><NavBar language={language} onLanguageChange={onLanguageChange} imageHeight={0} navbarItems={textFile.getNavbarItems()} dropdownItems={textFile.getDropdownItems()}/>
                <div className="container">
                <Table className="table table-striped" content={projects}/>
                </div></div>
                <Footer className="" text={textFile.getDropdownItems()}/>
            </div>
         );
    }
}
 
export default ProjectsPage;