import React, { Component } from 'react';
import Footer from './footer';
import Table from './common/table';
import PageMenu from './pagemenu';

/** Component: ProjectsPage
 *  Props: language, onLanguageChange, textFile
 *  Purpose: Page component used for the /projects */
class ProjectsPage extends Component{

    render(){
    const { language, onLanguageChange, textFile } = this.props;
    const projects = textFile.getProjects();
    return ( 
        <div>
            <div className="content">
            <PageMenu language={language} onLanguageChange={onLanguageChange} textFile={textFile} isDynamic={false}/>
                <div className="container">
                    <Table className="table table-striped" content={projects}/>
                </div>
            </div>
            <Footer className="" text={textFile.getDropdownItems()}/>
        </div>
    );
    }
}
 
export default ProjectsPage;