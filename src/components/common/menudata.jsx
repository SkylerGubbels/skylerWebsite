import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

class MenuData extends Component {
    
    createNavbarItems = (navbarItems, textColor="", className="") => { 
        return(
            <React.Fragment>{navbarItems.map(i =>
                {if(i.to) { return (<NavLink key={i.text} className="nav-item nav-link navText" to={i.to}> <span className={className} style={{"color":textColor}}>{i.text}</span> </NavLink>)}
                else {return (<a key={i.text} className="nav-item nav-link navText" href={i.href} target="_blank" rel="noopener noreferrer"> <span className={className} style={{"color":textColor}}>{i.text}</span> </a>)}})}   
            </React.Fragment>
    )}

    createLanguageButton(language, textColor, onLanguageChange, className=""){
        return (<React.Fragment>
            <React.Fragment>{(language === "french") && <span className="nav-item nav-link btn navText" onClick={() => onLanguageChange("english")}><span className={className} style={{"color":textColor}}>English</span></span>}</React.Fragment>
            <React.Fragment>{(language === "english") && <span className="nav-item nav-link btn navText" onClick={() => onLanguageChange("french")}><span className={className} style={{"color":textColor}}>Français </span></span>}</React.Fragment>
        </React.Fragment>)

    }
}
 
export default MenuData;