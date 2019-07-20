import React, { Component } from 'react';
import NavBarDynamic from './navbardynamic';
import ModalMenu from './common/modalmenu';
import NavBar from './navbar';

class PageMenu extends Component {
    state = { modal: false }
    
    // Sets state to modal when menu button clicked on small screens
    handleMobileMenu = () =>{
        this.setState({modal: true})
      }

    // Sets state back to normal when mobile menu is closed
    handleCloseModal = () => {
        this.setState({modal: false})
    }
    
    render() { 
        const { language, onLanguageChange, imageHeight, textFile, isDynamic } = this.props;
        const { modal } = this.state;
        return ( 
            <React.Fragment>
                
                { isDynamic && <NavBarDynamic language={language} onLanguageChange={onLanguageChange} modal={modal} imageHeight={imageHeight} navbarItems={textFile.getNavbarItems()} dropdownItems={textFile.getDropdownItems()} onMobileMenu={this.handleMobileMenu}/>}
                { !isDynamic && <NavBar language={language} onLanguageChange={onLanguageChange} imageHeight={0} navbarItems={textFile.getNavbarItems()} dropdownItems={textFile.getDropdownItems()} onMobileMenu={this.handleMobileMenu}/>}
                
                {modal && <ModalMenu language={language} onLanguageChange={onLanguageChange} onCloseModal={this.handleCloseModal} navbarItems={textFile.getNavbarItems()} dropdownItems={textFile.getDropdownItems()}/>}
            </React.Fragment>
         );
    }
}
 
export default PageMenu;