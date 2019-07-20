import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import NavbarCollapse from './navbarcollapse';

class ModalMenu extends Component {

    componentDidMount = () =>{
        $('#myModal').modal('show');
        $('body').css('padding-right', ''); // Prevents modal from adding padding to the page
    }

    componentWillUnmount = () =>{
        $("#myModal").removeClass("in");
        $(".modal-backdrop").remove(); // Needed to remove darkened background
        $('body').removeClass('modal-open'); // Needed to have scrollbar return after closing
        $("#myModal").hide();

    }

    createCollapse(){

    }

    render() { 
        const { navbarItems, dropdownItems, language, onLanguageChange } = this.props;
        return ( 
            <div>
                <div className="modal fade" id="myModal">
                    <div className="container">
                        <div className="d-flex justify-content-end">
                            <button className="modalClose" onClick={this.props.onCloseModal}><i className="fa fa-times fa-5x whiteText" aria-hidden="true"></i></button>
                        </div>
                        
                        <div className="modalMenu">
                        <NavbarCollapse textColor={"white"} dropdownItems={dropdownItems} path={this.path}/>
                        
                        { navbarItems.map(i =>
                            { if(i.to) { return (<NavLink className="nav-item nav-link navText" to={i.to}> <span className="whiteText">{i.text}</span> </NavLink>)}
                            else {return (<a className="nav-item nav-link navText" href={i.href} target="_blank" rel="noopener noreferrer"> <span className="whiteText">{i.text}</span> </a>)}
                        })}
                        
                        {(language === "french") && <span className="navText whiteText" onClick={() => onLanguageChange("english")}><span>English</span></span>}
                        {(language === "english") && <span className="navText whiteText" onClick={() => onLanguageChange("french")}><span>Français</span></span>}
                    </div>
                </div>

                </div>
            </div> );
    }
}
 
export default ModalMenu;