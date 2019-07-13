import React, { Component } from 'react';
import NavBar from './navbar';
import { O_NONBLOCK } from 'constants';


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
      
      this.handleMove();
    }

    componentWillUnmount(){
      clearInterval(this.interval);
      window.removeEventListener("scroll", this.handleScroll);
    }

    /** Function: handleScroll()
     *  Purpose: Gets the location of the users window on the webpage. Compares this to
     *           the image height for the introduction background image and uses this to
     *           decide if we should fade the navbar background in or out */
    handleScroll = () => {
      const {imageHeight} = this.props;
      const {pageYOffset} = window;
      if(pageYOffset < imageHeight/1.5){this.setState({opacity: 0})} // For edge case where user scrolls up too fast

      // Checks if our scrolling is in the range of the top image. If it is then we
      // handle fading the navbar in and out
      if(pageYOffset < imageHeight*1.1 && pageYOffset > imageHeight/2) { this.showNavbarBackground() }
      else if (pageYOffset < imageHeight) { this.hideNavbarBackground(); }
    }

    /** Function: handleMove()
     *  In: destination in the form "#introduction" passed from navbar.jsx
     *  Purpose: Checks if a destination is being passed by the parent function.
     *           If yes we use that. Otherwise we use the hash from the url */
    handleMove = (dest) =>{
      const hash = dest || window.location.hash;
      if(hash !== "" && hash !== "#introduction"){
        this.setState({opacity:1});
      }
      else {this.setState({opacity:0})}
    }

    /** Function: showNavbarBackground()
     *  Purpose: Uses the user window location and image height to figure out
     *           the opacity of the navbar background when fading in */
    showNavbarBackground(){
      let navbarClass = "navbar navbar-expand navbar-light fixed-top navbar-background";
      // Need to subtract 0.5 because it starts half way at the photo. This starts us at 0.
      // We then double the total to have a smooth fade in from 0 to 1
      let opacity = ((window.pageYOffset/this.props.imageHeight)-0.5)*2;
      if(opacity < 0.1) opacity = 0;
      this.setState({navbarClass, opacity});
    }

    /** Function: hideNavbarBackground()
     *  Purpose: Uses the user window location and image height to figure out
     *           the opacity of the navbar background when fading out */
    hideNavbarBackground(){
      const navbarClass = "navbar navbar-expand navbar-light fixed-top"
      this.setState({navbarClass});
    }

    render() {   
      const { navbarClass } = this.state;
      const bgColor = `rgba(255,255,255,${this.state.opacity})`
      return <NavBar className={navbarClass} backgroundColor={bgColor} onClick={this.handleMove}/>
  }
}

export default NavBarDynamic;