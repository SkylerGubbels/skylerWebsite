import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { getDropDownItems } from '../resources/navLinks';

class Footer extends Component {
    state = {  }

    contact = {title: "Contact", links: [{text: "skylermgubbels@gmail.com", to: "#"}, {text: "Email Form", to:"#"}]}
    online = {title: "Online", links: [{text: "GitHub", to: "#"}, {text: "LinkedIn", to: "#"} ]}

    createHeaderColumn = (col) => {
        return (
            <div className="col-6">
            <h5 className="text-uppercase whiteText">{col.title}</h5>    
            <ul className="list-unstyled">
            {col.links.map(l => <li key={`${col.title}-${l.text}`}><Link className="whiteText" to={l.to}>{l.text}</Link></li>)}
            </ul>
            </div>
        )
    }

    render() { 
      const {className} = this.props;
      const {  title, links } = getDropDownItems();
        return (
            <div className={className} style={{"backgroundColor":"rgb(33,33,33)"}}>
            <footer className="page-footer pt-4">
              <div className="container text-center text-md-left">
                <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase whiteText">Skyler Gubbels</h5>
                    <p className="whiteText">Skylermgubbels@gmail.com</p>
                    <p className="whiteText">Here is where I will write stuff about wanting to be hired.</p>
            
                  </div>
                </div>
                <div className="row">
                  <hr className="clearfix w-100 d-md-none pb-3"/>
                  
                  <div className="col-md-6 col-sm-12"><div className="row">
                    { this.createHeaderColumn({title, links: links.splice(0, links.length/2)}) }
                    { this.createHeaderColumn({title: "___", links: links.splice(links.length/2 - 1, links.length)}) }
                  </div></div>
                  
                  <div className="col-md-6 col-sm-12"><div className="row">
                    { this.createHeaderColumn(this.contact) }
                    { this.createHeaderColumn(this.online) }
                  </div></div>
            
                </div>
            
              </div>
            
              <div className="footer-copyright text-center py-3 whiteText">
                <span>Copyright Skyler Gubbels 2019 © </span>
                <a className="whiteText" href="https://github.com/SkylerGubbels/skylerWebsite"><span style={{"textDecoration":"underline"}}>Source code</span></a>
              </div>
            
            </footer></div>)

    }
}
 
export default Footer;