import React, { Component } from 'react';
import Footer from './footer';
import NavBar from './navbar';
import EmailForm from './emailform';

class ContactPage extends Component {
    state = {
        language: 'english',
    }

    componentDidMount(){
        this.setState({language: this.props.language});
    }

    handleLanguageChange = newLanguage => {
        this.setState({language: newLanguage});
      }

    render() { 
        const { language } = this.state;
        return ( 
            <div className="page-container">
                <NavBar language={language} onLanguageChange={this.props.handleLanguageChange} imageHeight={0}/>
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