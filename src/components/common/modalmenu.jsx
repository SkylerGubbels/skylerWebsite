import React from 'react';
import $ from 'jquery';
import NavbarCollapse from './navbarcollapse';
import MenuData from './menudata';

/** Component: ModalMenu
 *  Props: navbarItems: All items to be displayed in the menu
 *         dropdownItems: If the menu contains a dropdown, these are the items in the dropdown
 *         language, onLanguageChange, onCloseModal
 * 
 *  Purpose: Creates the modal menu that happens when the menu button is clicked on a small screen
 *           This makes elements easier to click and makes it so we don't have to worry about overlapping text */
class ModalMenu extends MenuData {

    //Component is mounted every time the menu is opened
    componentDidMount = () =>{
        $('#myModal').modal('show');
        $('body').css('padding-right', ''); // Prevents modal from adding padding to the page
    }

    // Component is unmounted every time the menu is closed
    componentWillUnmount = () =>{
        $("#myModal").removeClass("in");
        $(".modal-backdrop").remove(); // Needed to remove darkened background
        $('body').removeClass('modal-open'); // Needed to have scrollbar return after closing
        $("#myModal").hide();
    }

    render() { 
        const { navbarItems, dropdownItems, language, onLanguageChange, onCloseModal } = this.props;
        return ( 
            <div>
                <div className="modal fade" id="myModal">
                    <div className="container">
                        <div className="d-flex justify-content-end">
                            <button className="modalClose" onClick={onCloseModal}><i className="fa fa-times fa-5x whiteText" aria-hidden="true"></i></button>
                        </div>
                        
                        <div className="modalMenu">
                            <NavbarCollapse classNameTitle="modalText" classCollapseText="collapseText" textColor={"white"} dropdownItems={dropdownItems} path="/about" onClick={onCloseModal}/>
                            
                            {this.createNavbarItems(navbarItems, "white", "modalText")}
                            {this.createLanguageButton(language, "white", onLanguageChange, "modalText")}
                        </div>
                </div>

                </div>
            </div> );
    }
}
 
export default ModalMenu;