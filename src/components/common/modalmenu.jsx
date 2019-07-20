import React, { Component } from 'react';
import $ from 'jquery';

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

    render() { 
        return ( 
            <div>
                <div className="modal fade" id="myModal">
                    <button className="btn btn-primary" onClick={this.props.onCloseModal}>X</button>
                    <h1 className="whiteText">Hello</h1>
                </div>
            </div> );
    }
}
 
export default ModalMenu;