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

    handleLinkClick = index =>{
      // Index 0 is top of page. Make navbar invisible
      if(index === 0){
        this.setState({opacity: 0})
      }
      // Any other index is not the picture so make a solid background
      else{
        this.setState({opacity: 1})
      }
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
      const { navbarClass } = this.state;
      const bgColor = `rgba(255,255,255,${this.state.opacity})`
      return <NavBar className={navbarClass} backgroundColor={bgColor} onClick={this.handleLinkClick}/>
  }
}

export default NavBarDynamic;