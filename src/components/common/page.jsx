import React, { Component } from 'react';

class Page extends Component {
    state = { modal: false, imageHeight: 0 }
    
    // Sets state to modal when menu button clicked on small screens
    handleMobileMenu = () =>{
        this.setState({modal: true})
      }

    // Sets state back to normal when mobile menu is closed
    handleCloseModal = () => {
        this.setState({modal: false})
    }
}
 
export default Page;