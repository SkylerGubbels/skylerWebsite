import React, { Component } from 'react';
import Footer from './footer';
import NavBar from './navbar';
import EmailForm from './emailform';

class ContactPage extends Component {
    
    render() { 
        const { language, onLanguageChange } = this.props;
        return ( 
            <div className="page-container">
                <NavBar language={language} onLanguageChange={onLanguageChange} imageHeight={0}/>
                <div className="container">
                    <h1 className="">Contact Me</h1>
                    <EmailForm/>
                </div>
                <Footer className="footerSmall"/>
            </div>
         );
    }
}
 
export default ContactPage;