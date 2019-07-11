import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { getDropDownItems } from '../resources/navLinks';
import skylerImage from "../resources/images/skylerImage.png"


/** Creates the NavBar at the top of the website */
class NavBar extends Component {

    state = {
      navbarClass: "navbar navbar-expand navbar-light fixed-top",
      opacity: 0
    }

    componentDidMount(){
      window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
      // Checks if our scrolling is in the range of the top image. If it is then we
      // handle fading the navbar in and out
      if(window.pageYOffset < (this.props.imageHeight*1.1) && window.pageYOffset > (this.props.imageHeight/2)) { this.showNavbarBackground() }
      else if (window.pageYOffset < (this.props.imageHeight/2)) { this.hideNavbarBackground(); }
    }

    showNavbarBackground(){
      let navbarClass = "navbar navbar-expand navbar-light fixed-top navbar-background";
      // Need to subtract 0.5 because it starts half way at the photo. This starts us at 0.
      // We then double the total to have a smooth fade in from 0 to 1
      let opacity = ((window.pageYOffset/this.props.imageHeight)-0.5)*2;
      if(opacity < 0.1) opacity = 0;
      this.setState({navbarClass, opacity});
    }

    hideNavbarBackground(){
      const navbarClass = "navbar navbar-expand navbar-light fixed-top"
      this.setState({navbarClass});
    }

    createDropdown(item){
      return (
        <React.Fragment key={`${item.text}-fragment`}>
          <Link className="dropdown-item" to={item.to}>{item.text}</Link>
          { item.divider && <div className="dropdown-divider"/> }
        </React.Fragment>)
    }

    render() {   

        const bg = {backgroundColor: `rgba(255,255,255,${this.state.opacity})`}

        return(
        <nav className={this.state.navbarClass} style={bg}>
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
                  { getDropDownItems().links.map(i => this.createDropdown(i))}
                </div>
            </li>
          </div>
      </nav>    
         );
    }
}

/**
<div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">Summary</Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="../App.js#canvasGame">Technical Skills</a>
                <Link className="dropdown-item" to="#">Other Skills</Link>
                <Link className="dropdown-item" to="#">Specialized Courses</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">Education</Link>
                <Link className="dropdown-item" to="#">Work Experience</Link> */

export default NavBar;