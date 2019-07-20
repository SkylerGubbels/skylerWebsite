import React, { Component } from 'react';
import skylerImage from "../resources/images/SkylerImage.png"
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import NavbarDropdown from "./common/navbardropdown";

/** Component: NavBar
 *  Props:  language, onLanguageChange, imageHeight, navbarItems, dropdownItems
 *  Purpose: Creates a navbar based on navbarItems prop. If dropdown menu is included then
 *           it will use dropdownItems prop
 * 
 *           Handles a lot of the general navbar behaviour for child component NavBarDynamic */
class NavBar extends Component {
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
    createNavbarContent = (textColor, dropdownItems, navbarItems, language, onLanguageChange) =>{
      return(
      <React.Fragment>
        <button type="button" className="navbar-toggler" onClick={this.props.onMobileMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse navbar-nav">
          <ul className={`navbar-nav ml-auto`}>

          <NavbarDropdown textColor={textColor} dropdownItems={dropdownItems} path={this.path}/> 
          
          { navbarItems.map(i => 
              { if(i.to) { return (<li key={i.text}><NavLink className="nav-item nav-link navText" to={i.to}> <span style={{"color":textColor}}>{i.text}</span> </NavLink></li>)}
                else {return (<li key={i.text}><a className="nav-item nav-link navText" href={i.href} target="_blank" rel="noopener noreferrer"> <span style={{"color":textColor}}>{i.text}</span> </a></li>)}})
          }
          
          {/** Only one is displayed depending on language prop */}
          <li>{(language === "french") && <button className="nav-item nav-link btn navText" onClick={() => onLanguageChange("english")}><span style={{"color":textColor}}>English</span></button>}</li>
          <li>{(language === "english") && <button className="nav-item nav-link btn navText" onClick={() => onLanguageChange("french")}><span style={{"color":textColor}}>Français </span></button>}</li>
          
          </ul>
        </div>
      </React.Fragment>)
    }

    
    render() { 
      let { className, backgroundColor, language, onLanguageChange, navbarItems, dropdownItems } = this.props
      if(!dropdownItems || !navbarItems) { return <p></p>}

      if(!className) className = "navbar navbar-expand-sm navbar-light bg-light navbar-static-top navbar-background"; // If no custom classname make it the following
      if(!backgroundColor) backgroundColor = "rgb(255,255,255)"; // If no background color passed make it while
      const textColor = (this.props.textColor) || "rgb(0,0,0)"; // If no value for textcolor then we make it black
      
      return(
        <nav className={className} style={{"backgroundColor":backgroundColor}}>
        <div className="container">
          
          {this.createNavbarImage(textColor)}
          {this.createNavbarContent(textColor, dropdownItems, navbarItems, language, onLanguageChange)}
           
        </div>
      </nav>    
         )
    }
}
 
export default NavBar;