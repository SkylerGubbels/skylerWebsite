import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

class Footer extends Component {

    online = {title: "Online", links: [{text: "GitHub", to: "https://github.com/"}, {text: "LinkedIn", to: "https://www.linkedin.com/in/skylergubbels/"} ]}

    /** Function: createHeaderColumn()
     *  In: Column information
     *  Purpose: Creates a footer column using the col title and text values */
    createHeaderColumn = (col) => {
      return (
            <div className="col-6">
              <h5 className="text-uppercase whiteText">{col.title}</h5>    
              <ul className="list-unstyled">
              
              {col.links.map(
                l => <li key={`${col.title}-${l.text}`}>
                        { this.getCorrectLink(l) }
                    </li>)}
              </ul>
            </div>
        )
    }

    /** Function: getCorrectLink()
     *  In: Link information
     *  Purpose: Creates a navlink if the destination is somewhere on this page.
     *           Creates a hyperlink with an href value if destination is somewhere else
     */
    getCorrectLink = (item) => {
      if(item.to.charAt(0) === "#") { return (<Link className="whiteText navText" to={"/about" + item.to}><span>{item.text}</span></Link>); }
      else {  return (<a className="whiteText navText" href={item.to} target="_blank" rel="noopener noreferrer"><span>{item.text}</span></a>) }
    }

    render() { 
      const {className, text} = this.props;
      const {  title, links } = text;
      return (
          <div className={className} style={{"backgroundColor":"black"}}>
          
          <footer className="page-footer pt-4">
            {/** Name and email in footer */}
            <div className="container text-center text-md-left">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <p className="whiteText"><b>SKYLER GUBBELS</b></p>
                  <a style={{"color":"white"}} href="https://github.com/SkylerGubbels/skylerWebsite">skylermgubbels@gmail.com</a>
                </div>
              </div>

              <div className="padding25"/>
              <hr style={{"borderColor":"white"}}/>
              <div className="padding25"/>

              {/** About and Online menu selection options */}
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
          
            {/** Bottom bar and source code link */}
            <div className="text-center py-3 whiteText">
              <span>Skyler Gubbels 2019 △ </span>
              <a className="whiteText navText" target="_blank" href="https://github.com/SkylerGubbels/skylerWebsite" rel="noopener noreferrer"><span><u>Source code</u></span></a>
            </div>
          
          </footer></div>)

    }
}
 
export default Footer;