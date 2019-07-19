import React, { Component } from 'react';
import Footer from './footer';
import NavBar from './navbar';
import EmailForm from './emailform';

class ContactPage extends Component {
    
    render() { 
        const { language, onLanguageChange, textFile } = this.props;
        return ( 
            <div className="page-container">
                <div className="content">
                    <NavBar language={language} onLanguageChange={onLanguageChange} imageHeight={0} navbarItems={textFile.getNavbarItems()} dropdownItems={textFile.getDropdownItems()}/>
                    <div className="container">
                    <h1 className="">Contact Me</h1>
                    <EmailForm/>
                </div></div>
                <Footer className="footer" text={textFile.getDropdownItems()}/>
            </div>
         );
    }
}
 
export default ContactPage;