import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { getDropDownItems } from '../resources/navLinks';
import skylerImage from "../resources/images/skylerImage.png"
import NavBar from './navbar';


/** Creates the NavBar at the top of the website */
class NavBarDynamic extends NavBar {

    state = {
      navbarClass: "navbar navbar-expand navbar-light fixed-top",
      opacity: 0
    }

    interval;

    componentDidMount(){
      window.addEventListener("scroll", this.handleScroll);
      
      // On page load we check where the user is scrolled. If they are passed the point where the image ends
      // then we need to bring in the background
      // TODO: Find better solution to the problem of the image size and pageYOffset loading after
      //       this componentDidMount() function fires.
      this.interval = setInterval(()=>{
        if(window.pageYOffset > (this.props.imageHeight)) { 
          this.showNavbarBackground(); clearInterval(this.interval) 
      }}, 100)
    }

    componentWillUnmount(){
      clearInterval(this.interval);
      window.removeEventListener("scroll", this.handleScroll);
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

    render() {   

        const bg = {backgroundColor: `rgba(255,255,255,${this.state.opacity})`}

        return(
        <nav className={this.state.navbarClass} style={bg}>
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
                  { getDropDownItems().links.map(i => this.createDropdown(i))}
                </div>
            </li>
          </div>
      </nav>    
         );
    }
}

export default NavBarDynamic;