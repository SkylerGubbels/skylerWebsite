import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    state = {  }

    aboutLinks = {title: "About", links: [{text: "Link 1", to: "#"}, {text: "Link 2", to: "#"}, {text: "Link 3", to: "#"}, {text: "Link 4", to: "#"} ]}

    createHeaderColumn = (links) => {
        return (
        <React.Fragment>
            <h5 className="text-uppercase footerText">{links.title}</h5>    
            <ul className="list-unstyled">
            {links.links.map(l => <li key={`${links.title}-${l.text}`}><Link className="footerText" to={l.to}>{l.text}</Link></li>)}
            </ul>
        </React.Fragment>
        )
    }

    render() { 
        return (
            <div style={{"background-color":"rgb(33,33,33)"}}>
            <footer className="page-footer pt-4">
              <div className="container-fluid text-center text-md-left">
                <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase footerText">Skyler Gubbels</h5>
                    <p className="footerText">Skylermgubbels@gmail.com</p>
                    <p className="footerText">Here you can use rows and columns to organize your footer content.</p>
            
                  </div>
                  <hr className="clearfix w-100 d-md-none pb-3"/>
                  <div className="col-md-3 mb-md-0 mb-3">
                        { this.createHeaderColumn(this.aboutLinks) }
                  </div>
                  <div className="col-md-3 mb-md-0 mb-3">
                        { this.createHeaderColumn(this.aboutLinks) }
            
                  </div>
            
                </div>
            
              </div>
            
              <div className="footer-copyright text-center py-3 footerText">
                Copyright Skyler Gubbels 2019 ©
                <Link className="footerText" href="#"> Source code</Link>
              </div>
            
            </footer></div>)

    }
}
 
export default Footer;