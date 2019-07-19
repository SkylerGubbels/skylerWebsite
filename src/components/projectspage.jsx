import React from 'react';
import Footer from './footer';
import NavBar from './navbar';
import Table from './common/table';

/** Component: ProjectsPage
 *  Props: language, onLanguageChange, textFile
 *  Purpose: Page component used for the /projects */
const ProjectsPage = (props) => {

    const { language, onLanguageChange, textFile } = props;
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
 
export default ProjectsPage;