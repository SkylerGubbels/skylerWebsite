import React, { Component } from 'react';
import skylerImage from "../resources/images/skylerImage.png"
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { getDropDownItems } from '../resources/navLinks';

class NavBar extends Component {
    state = {  }
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
    
    render() { 
      let { className, backgroundColor } = this.props
      if(!className) className = "navbar navbar-expand navbar-light bg-light navbar-static-top navbar-background";
      if(!backgroundColor) backgroundColor = "rgb(255,255,255)";
      
      return(
        <nav className={className} style={{"backgroundColor":backgroundColor}}>
        <img src={skylerImage} className="m-2" alt="" width="50"/>
        <Link className="navbar-brand" to="/"> Skyler Gubbels </Link>
        <div className="collapse navbar-collapse navbar-nav flex-row-reverse" id="navbar">
          <div className="navbar-nav"></div>
            {(this.props.language === "french") && <button className="nav-item nav-link" onClick={() => this.props.onLanguageChange("english")}>English</button>}
            {(this.props.language === "english") && <button className="nav-item nav-link" onClick={() => this.props.onLanguageChange("french")}>Français</button>}
            <NavLink className="nav-item nav-link" to="/contact"> Contact</NavLink>
            <NavLink className="nav-item nav-link" to="/projects"> Projects </NavLink>
          <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  { getDropDownItems().links.map((item) => this.createDropdown(item))}
                </div>
            </li>
          </div>
      </nav>    
         )
    }
}
 
export default NavBar;