import React, { Component } from 'react';
import horizon from "../resources/images/horizon.jpg"
import "animate.css"

class Introduction extends Component {
    state = {  }

    constructor(props){
        super(props);
        this.imgRef = React.createRef();
        console.log(this.imgRef)
    }

    componentDidMount(){
        window.addEventListener("resize", ()=>{this.props.onImageSizeChange(this.imgRef.current.height)})
    }

    render() { 
        return ( 
        <div>
            <img className="backgroundImage" ref={this.imgRef} src={horizon} alt=""></img>
            <span className="">Photo taken by: https://www.instagram.com/shangerdanger/</span>
            <div className="imageText">
            <h1 className="animated bounceInRight summaryTitle"><span className="imageSpan">Skyler Gubbels</span></h1>
            <h2 className="animated bounceInRight summarySubtitle"><span className="imageSpan">Software Developer</span></h2>
            </div>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div> );
    }
}
 
export default Introduction;