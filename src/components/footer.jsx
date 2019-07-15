import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { getDropDownItems } from '../resources/navLinks';

class Footer extends Component {
    state = {  }

    online = {title: "Online", links: [{text: "GitHub", to: "#"}, {text: "LinkedIn", to: "#"} ]}

    createHeaderColumn = (col) => {
        return (
            <div className="col-6">
            <h5 className="text-uppercase whiteText">{col.title}</h5>    
            <ul className="list-unstyled">
            
            {col.links.map(
              l => <li key={`${col.title}-${l.text}`}>
                    <Link className="whiteText navText" to={l.to}>
                      <span>{l.text}</span>
                    </Link>
                  </li>)}
            </ul>
            </div>
        )
    }

    render() { 
      const {className} = this.props;
      const {  title, links } = getDropDownItems();
        return (
            <div className={className} style={{"backgroundColor":"black"}}>
            <footer className="page-footer pt-4">
              <div className="container text-center text-md-left">
                <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                    <p className="text-uppercase whiteText">Skyler Gubbels</p>
                    <a style={{"color":"white"}} href="https://github.com/SkylerGubbels/skylerWebsite">skylermgubbels@gmail.com</a>
                  </div>
                </div>
                <div className="padding50"></div>
                <div className="row">
                  
                  <div className="col-md-6 col-sm-12"><div className="row">
                    { this.createHeaderColumn({title, links: links.splice(0, links.length/2)}) }
                    { this.createHeaderColumn({title: "___", links: links.splice(links.length/2 - 1, links.length)}) }
                  </div></div>
                  
                  <div className="col-md-6 col-sm-12"><div className="row">
                    <div className="col-md-6 col-sm-0"></div>
                    { this.createHeaderColumn(this.online) }
                  </div></div>
            
                </div>
            
              </div>
            
              <div className="text-center py-3 whiteText">
                <span>Skyler Gubbels 2019 △ </span>
                <a className="whiteText navText" href="https://github.com/SkylerGubbels/skylerWebsite"><span><u>Source code</u></span></a>
              </div>
            
            </footer></div>)

    }
}
 
export default Footer;