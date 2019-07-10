import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import skylerImage from "../resources/images/skylerImage.png"


/** Creates the NavBar at the top of the website */
class NavBar extends Component {

    state = {
      navbarClass: "navbar navbar-expand navbar-light fixed-top"
    }

    componentDidMount(){
      window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
      console.log(this.props.imageHeight)
      if(window.pageYOffset > this.props.imageHeight-100) { this.showNavbarBackground() }
      else { this.hideNavbarBackground(); }
    }

    // TODO: Change navbar transparency depending on height of scrollbar
    showNavbarBackground(){
      const navbarClass = "navbar navbar-expand navbar-light bg-light fixed-top"
      this.setState({navbarClass});
    }

    hideNavbarBackground(){
      const navbarClass = "navbar navbar-expand navbar-light fixed-top"
      this.setState({navbarClass});
    }

    render() {   
        return(
        <nav className={this.state.navbarClass}>
        <img src={skylerImage} className="m-2" alt="" width="50"/>
        <Link className="navbar-brand" to="/">
          Skyler Gubbels
        </Link>
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
                <Link className="dropdown-item" to="#">Summary</Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="../App.js#canvasGame">Technical Skills</a>
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