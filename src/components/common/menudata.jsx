import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

/** Component: MenuData 
 *  Purpose: Contains functions for populating menus with the data passed to functions. */
class MenuData extends Component {
    
    /** Function: createNavbarItems()
     *  In: navbarItems[], textColor, className
     *  Purpose: Creates a link for each item in the list. Depending on if the object has a .to or .href
     *           it will create a link to the same webpage or to an external page */
    createNavbarItems = (navbarItems, textColor="", className="") => { 
        return(
            <React.Fragment>{navbarItems.map(i =>
                {if(i.to) { return (<NavLink key={i.text} className="nav-item nav-link navText" to={i.to}> <span className={className} style={{"color":textColor}}>{i.text}</span> </NavLink>)}
                else {return (<a key={i.text} className="nav-item nav-link navText" href={i.href} target="_blank" rel="noopener noreferrer"> <span className={className} style={{"color":textColor}}>{i.text}</span> </a>)}})}   
            </React.Fragment>
    )}

    /** Function: createLanguageButton()
     *  In: (current)Language, textColor, onLanguageChange, className
     *  Purpose: Creates a button that when clicked calls the onLanguageChange event with the new langauge 
     *           passed as an argument */
    createLanguageButton(language, textColor, onLanguageChange, className=""){
        return (<React.Fragment>
            <React.Fragment>{(language === "french") && <span className="nav-item nav-link btn navText" onClick={() => onLanguageChange("english")}><span className={className} style={{"color":textColor}}>English</span></span>}</React.Fragment>
            <React.Fragment>{(language === "english") && <span className="nav-item nav-link btn navText" onClick={() => onLanguageChange("french")}><span className={className} style={{"color":textColor}}>Français </span></span>}</React.Fragment>
        </React.Fragment>)

    }
}
 
export default MenuData;