import React from 'react';
import Footer from './footer';
import NavBar from './navbar';
import Table from './common/table';
import Page from './common/page';
import ModalMenu from './common/modalmenu';

/** Component: ProjectsPage
 *  Props: language, onLanguageChange, textFile
 *  Purpose: Page component used for the /projects */
class ProjectsPage extends Page{

    render(){
    const { language, onLanguageChange, textFile } = this.props;
    const { modal } = this.state;
    const projects = textFile.getProjects();
    return ( 
        <div>
            <div className="content">
                <NavBar language={language} onLanguageChange={onLanguageChange} imageHeight={0} navbarItems={textFile.getNavbarItems()} dropdownItems={textFile.getDropdownItems()} onMobileMenu={this.handleMobileMenu}/>
                {modal && <ModalMenu language={language} onLanguageChange={onLanguageChange} onCloseModal={this.handleCloseModal} navbarItems={textFile.getNavbarItems()} dropdownItems={textFile.getDropdownItems()} onMobileMenu={this.handleMobileMenu}/>}
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