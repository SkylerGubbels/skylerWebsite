import React from 'react';
import NavBar from './navbar';


/** Component: NavBarDynamic
 *  Props: language, onLanguageChange, imageHeight, navbarItems, dropdownItems
 *  Purpose: Creates a navbar that changes opacity and colour based on the location of the
 *           user on the webpage.
 *           Currently it is written to support having an image at the top of the page and
 *           when the user scrolls below the image the navbar background becomes solid to make
 *           it visible over page content */
class NavBarDynamic extends NavBar {

    state = {
      navbarClass: "navbar navbar-expand-sm navbar-light fixed-top navbar-background",
      opacity: 0
    }

    interval;

    componentWillReceiveProps(){
      if(this.props.modal) { this.handleMove("#modal"); } // Sets opacity when this.props.modal changes. Needs a string passed
    }                                                     // for opacity to be set correctly at top of page
    

    componentDidMount(){
      window.addEventListener("scroll", this.handleScroll);
      
      //componentDidMount happens before we window.pageYOffset and this.props.imageHeight
      //are loaded. Therefore, we have to poll both values to see if they have loaded their values
      //once they have we can calculate the navbar opacity
      this.interval = setInterval(()=>{
        if(window.pageYOffset !== 0 && this.props.imageHeight !== 0) { 
          this.changeNavbarOpacity(); clearInterval(this.interval) }
          
        // Handles case where everything is loaded but user is just sitting at top of page
        else if(window.pageYOffset === 0 && this.props.imageHeight !== 0) { clearInterval(this.interval); }
        }, 100)
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
      if(pageYOffset < imageHeight/8){this.setState({opacity: 0})} // For edge case where user scrolls up too fast

      // Checks if our scrolling is in the range of the top image. If it is then we
      // handle fading the navbar in and out

      if(pageYOffset < imageHeight*1.1 && pageYOffset > imageHeight/2) { this.changeNavbarOpacity() }
    }

    /** Function: handleMove()
     *  In: destination in the form "#introduction" passed from navbar.jsx
     *  Purpose: Checks if the location passed should have solid or transparent navbar */
    handleMove = (dest) =>{
      if((dest === "" || dest === "#introduction") && window.pageYOffset === 0){
        this.setState({opacity:0});
      }
      else {this.setState({opacity:1})}
    }

    /** Function: changeNavbarOpacity()
     *  Purpose: Uses the user window location and image height to figure out
     *           the opacity of the navbar background */
    changeNavbarOpacity(){
      // Need to subtract 0.5 because it starts half way at the photo. This starts us at 0.
      // We then double the total to have a smooth fade in from 0 to 1
      let opacity = ((window.pageYOffset/this.props.imageHeight)-0.5)*2;
      if(opacity < 0.1) opacity = 0;
      this.setState({opacity});
    }

    render() {   
      const {language, onLanguageChange, navbarItems, dropdownItems, onMobileMenu} = this.props;
      const { navbarClass } = this.state;
      const bgColor = `rgba(255,255,255,${this.state.opacity})`
      const colorValue = 255 - (255 * this.state.opacity)
      const textColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
      return <NavBar className={navbarClass} 
                     backgroundColor={bgColor} 
                     onClick={this.handleMove} 
                     language={language} 
                     onLanguageChange={onLanguageChange} 
                     textColor={textColor}
                     navbarItems={navbarItems}
                     dropdownItems={dropdownItems}
                     onMobileMenu={onMobileMenu}/>
  }
}

export default NavBarDynamic;