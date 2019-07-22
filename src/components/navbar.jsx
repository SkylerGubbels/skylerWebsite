import React from 'react';
import skylerImage from "../resources/images/SkylerImage.png"
import { HashLink as Link } from "react-router-hash-link";
import NavbarDropdown from "./common/navbardropdown";
import MenuData from './common/menudata';

/** Component: NavBar
 *  Props:  language, onLanguageChange, imageHeight, navbarItems, dropdownItems
 *  Purpose: Creates a navbar based on navbarItems prop. If dropdown menu is included then
 *           it will use dropdownItems prop
 * 
 *           Handles a lot of the general navbar behaviour for child component NavBarDynamic */
class NavBar extends MenuData {
    state = { 
      textJustify: "ml-auto",
     }
    path = "/about";

    componentWillMount(){
      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.handleResize);
    }

    /** Function: handleResize()
     *  Purpose: Calls render() when the render is resized so we can check whether navbar options
     *           should be positioned right or center */
    handleResize = () => {
      this.render();
    }

    /** Function: createNavbarImage()
     *  In: textColor
     *  Purpose: Creates navbar images with text link to the right of it */
    createNavbarImage = (textColor) => {
      return(
      <React.Fragment>
      <img src={skylerImage} style={{"paddingBottom":"15px"}} className="m-2" alt="" width="50"/>
        
      <Link className="navbar-brand navText" to="/about#introduction">
        <span className="navText" style={{"color":textColor, "fontWeight":"bold"}}>Skyler Gubbels</span>
        <br/>
        <p style={{"color":textColor}}>Software Developer</p>
      </Link>
      </React.Fragment>
      )
    }

    /** Function: createNavbarContent()
     *  In: textColor, dropdownItems, navbarItems, language, onLanguageChange
     *  Purpose: Creates navbar clickable options. */
    createNavbarContent = (textColor, dropdownItems, navbarItems, language, onLanguageChange, clickEvent) =>{
      let onClick = clickEvent ? clickEvent : () => {}; // Makes on click a blank function if one hasn't been passed
      return(
      <React.Fragment>
        <button type="button" className="navbar-toggler" onClick={() => this.props.onMobileMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse navbar-nav">
          <ul className={`navbar-nav ml-auto`}>

          <NavbarDropdown textColor={textColor} dropdownItems={dropdownItems} path={this.path} onClick={onClick}/> 
          
          {this.createNavbarItems(navbarItems, textColor)}
          <li>{this.createLanguageButton(language, textColor, onLanguageChange)}</li>
          
          </ul>
        </div>
      </React.Fragment>)
    }

    
    render() { 
      let { className, backgroundColor, language, onLanguageChange, navbarItems, dropdownItems, onClick } = this.props
      if(!dropdownItems || !navbarItems) { return <p></p>}

      if(!className) className = "navbar navbar-expand-sm navbar-light bg-light navbar-static-top navbar-background"; // If no custom classname make it the following
      if(!backgroundColor) backgroundColor = "rgb(255,255,255)"; // If no background color passed make it while
      const textColor = (this.props.textColor) || "rgb(0,0,0)"; // If no value for textcolor then we make it black
      
      return(
        <nav className={className} style={{"backgroundColor":backgroundColor}}>
        <div className="container">
          
          {this.createNavbarImage(textColor)}
          {this.createNavbarContent(textColor, dropdownItems, navbarItems, language, onLanguageChange, onClick)}
           
        </div>
      </nav>    
         )
    }
}
 
export default NavBar;