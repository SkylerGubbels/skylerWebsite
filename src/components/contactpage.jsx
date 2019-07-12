import React, { Component } from 'react';
import Footer from './footer';
import NavBar from './navbar';

class ContactPage extends Component {
    state = {
        language: 'english',
    }

    handleLanguageChange = newLanguage => {
        this.setState({language: newLanguage});
      }

    render() { 
        const { language } = this.state;
        return ( 
            <div className="page-container">
                <NavBar language={language} onLanguageChange={this.handleLanguageChange} imageHeight={0}/>
                <Footer className="footerSmall"/>
            </div>
         );
    }
}
 
export default ContactPage;