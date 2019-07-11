import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getDropDownItems } from '../resources/navLinks';

class Footer extends Component {
    state = {  }

    aboutLinks = {title: "About", links: [{text: "Summary", to: "#"}, {text: "Education", to:"#"}, {text: "Technical Skills", to: "#"}]}
    aboutLinks2 = {title: "About", links: [{text: "Link 1", to: "#"} ]}

    createHeaderColumn = (col) => {
        return (
            <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase footerText">{col.title}</h5>    
            <ul className="list-unstyled">
            {col.links.map(l => <li key={`${col.title}-${l.text}`}><Link className="footerText" to={l.to}>{l.text}</Link></li>)}
            </ul>
            </div>
        )
    }

    render() { 
        return (
            <div style={{"backgroundColor":"rgb(33,33,33)"}}>
            <footer className="page-footer pt-4">
              <div className="container-fluid text-center text-md-left">
                <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase footerText">Skyler Gubbels</h5>
                    <p className="footerText">Skylermgubbels@gmail.com</p>
                    <p className="footerText">Here you can use rows and columns to organize your footer content.</p>
            
                  </div>
                </div>
                <div className="row">
                  <hr className="clearfix w-100 d-md-none pb-3"/>
                  { this.createHeaderColumn(getDropDownItems()) }
                  { this.createHeaderColumn(this.aboutLinks2) }
                  { this.createHeaderColumn(this.aboutLinks) }
                  { this.createHeaderColumn(this.aboutLinks) }
            
                </div>
            
              </div>
            
              <div className="footer-copyright text-center py-3 footerText">
                Copyright Skyler Gubbels 2019 ©
                <Link className="footerText" to="#"> Source code</Link>
              </div>
            
            </footer></div>)

    }
}
 
export default Footer;