import React, { Component } from 'react';
import skylerImage from "../resources/images/SkylerImage.png"
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { getDropDownItems } from '../resources/navLinks';

class NavBar extends Component {
    state = { 
      textJustify: "ml-auto",
      navbarItems: null,
      dropdownItems: null
     }
    path = "/about";

    createDropdown(item){
      
      const { onClick } = this.props;
      let clickEvent;
      if(!onClick){ clickEvent = () => {}}
      else {clickEvent = onClick;}

        return (
          <React.Fragment key={`${item.text}-fragment`}>
            <Link className="dropdown-item" to={this.path + item.to} onClick={() => clickEvent(item.to)}>{item.text}</Link>
            { item.divider && <div className="dropdown-divider"/> }
          </React.Fragment>)
      }

    componentDidMount(){
      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.handleResize);
    }

    loadText = async language => {
      const dropdownItems = (await import(`../resources/${language}Text`)).getDropDownItems();
      this.setState({dropdownItems});
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
    getJustification(){
      if(window.innerWidth < 576){ return "mr-auto"; } //576 is the bootstrap size for col-sm. TODO: Find way to get this value at runtime instead of hardcoding the value
      else { return "ml-auto";}
    }
    
    render() { 
      let { className, backgroundColor,language, onLanguageChange } = this.props
      if(!className) className = "navbar navbar-expand-sm navbar-light bg-light navbar-static-top navbar-background";
      if(!backgroundColor) backgroundColor = "rgb(255,255,255)";
      const textColor = (this.props.textColor) || "rgb(0,0,0)"; // If no value for textcolor then we make it black
      return(
        <nav className={className} style={{"backgroundColor":backgroundColor}}>
        <div className="container">
          <img src={skylerImage} style={{"paddingBottom":"15px"}} className="m-2" alt="" width="50"/>
        
          <Link className="navbar-brand navText" to="/about#introduction">
          <span className="navText" style={{"color":textColor, "fontWeight":"bold"}}>Skyler Gubbels</span>
          <br/>
          <p style={{"color":textColor}}>Software Developer</p>
          </Link>
          
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse navbar-nav" id="navCollapse">
            <ul className={`navbar-nav ${this.getJustification()}`}>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle navText" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{"color":textColor}}>
              <span style={{"color":textColor}}>About</span>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              { getDropDownItems().links.map((item) => this.createDropdown(item))}
              </div>
            </li>
            
            <li>
              <NavLink className="nav-item nav-link navText" to="/projects"> <span style={{"color":textColor}}>Projects</span> </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link navText" to="/contact"> <span style={{"color":textColor}}>Contact</span></NavLink>
            </li>
            
            <li>
              {(language === "french") && <button className="nav-item nav-link btn navText" onClick={() => onLanguageChange("english")}><span style={{"color":textColor}}>English</span></button>}
            </li>
            <li>
              {(language === "english") && <button className="nav-item nav-link btn navText" onClick={() => onLanguageChange("french")}><span style={{"color":textColor}}>Français </span></button>}
            </li>
            
            </ul>
          </div>
        </div>
      </nav>    
         )
    }
}
 
export default NavBar;