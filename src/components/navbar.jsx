import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import skylerImage from "../resources/SkylerImage.png"


/** Creates the NavBar at the top of the website */
class NavBar extends Component {
    
    render() {    
        return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <img src={skylerImage} className="m-2" alt="" width="50"/>
        <Link className="navbar-brand" to="/">
          Skyler Gubbels
        </Link>
        <div className="collapse navbar-collapse navbar-nav flex-row-reverse" id="navbar">
          <div className="navbar-nav"></div>
            <NavLink className="nav-item nav-link" to="/english"> English </NavLink>
            <NavLink className="nav-item nav-link" to="/french">Français</NavLink>
            <NavLink className="nav-item nav-link" to="/contact"> Contact</NavLink>
            <NavLink className="nav-item nav-link" to="/projects"> Projects </NavLink>
          <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">Summary</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">Technical Skills</Link>
                <Link className="dropdown-item" to="#">Other Skills</Link>
                <Link className="dropdown-item" to="#">Specialized Courses</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">Education</Link>
                <Link className="dropdown-item" to="#">Work Experience</Link>
                </div>
            </li>
          </div>
      </nav>    
         );
    }
}
export default NavBar;