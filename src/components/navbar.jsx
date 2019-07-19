import React, { Component } from 'react';
import skylerImage from "../resources/images/SkylerImage.png"
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import NavbarDropdown from "./common/navbardropdown";

class NavBar extends Component {
    state = { 
      textJustify: "ml-auto",
      navbarItems: null,
      dropdownItems: null
     }
    path = "/about";

    componentWillMount(){
      const {dropdownItems, navbarItems} = this.props;
      window.addEventListener("resize", this.handleResize);
      this.setState({navbarItems, dropdownItems})
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

    
    /** Function: getJustification()
     *  Purpose: Ensures the navbar items are to the right on large windows but the dropdown items from
     *           the button on small windows end up on the right side of the window */
    getJustification = () => {
      if(window.innerWidth < 576){ return "mr-auto"; } //576 is the bootstrap size for col-sm. TODO: Find way to get this value at runtime instead of hardcoding the value
      else { return "ml-auto";}
    }

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

    createNavbarContent = (textColor, dropdownItems, navbarItems, language, onLanguageChange) =>{
      return(
      <React.Fragment>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-nav" id="navCollapse">
          <ul className={`navbar-nav ${this.getJustification()}`}>

          <NavbarDropdown textColor={textColor} dropdownItems={dropdownItems} path={this.path} onClick={this.props.onClick}/> 
          
          { navbarItems.map(i => {return (<li key={i.text}><NavLink className="nav-item nav-link navText" to={i.to}> <span style={{"color":textColor}}>{i.text}</span> </NavLink></li>)})}
          
          <li>{(language === "french") && <button className="nav-item nav-link btn navText" onClick={() => onLanguageChange("english")}><span style={{"color":textColor}}>English</span></button>}</li>
          <li>{(language === "english") && <button className="nav-item nav-link btn navText" onClick={() => onLanguageChange("french")}><span style={{"color":textColor}}>Français </span></button>}</li>
          
          </ul>
        </div>
      </React.Fragment>)
    }

    
    render() { 
      let { className, backgroundColor, language, onLanguageChange } = this.props
      const { navbarItems, dropdownItems } = this.state;
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