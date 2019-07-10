import React, { Component } from 'react';
import horizon from "../resources/images/horizon.jpg"
import "animate.css"

class Introduction extends Component {
    state = {  }

    constructor(props){
        super(props);
        this.imgRef = React.createRef();
    }

    componentDidMount(){
        window.addEventListener("resize", ()=>{this.props.onImageSizeChange(this.imgRef.current.height)})
        this.handleImageLoad();
    }

    /** Function: handleImageLoad()
     *  Purpose: Gets the image height once it is loaded and signals an event to App.js
     *           Because the background image is resizeable it is important to know it's
     *           size when deciding when the navbar should have a solid background
     *  TODO: Figure out how to do this using events when the image is loaded. onLoad fires too early  */
    handleImageLoad(){
        let interval;
        interval = setInterval(() => {
            if(this.imgRef.current.height) {
                this.props.onImageLoad(this.imgRef.current.height);
                clearInterval(interval)}}, 100);
    }

    render() { 
        return ( 
        <div>
            <img className="backgroundImage" ref={this.imgRef} src={horizon} alt=""></img>
            <div className="imageText">
            <h1 className="animated bounceInRight summaryTitle"><span className="imageSpan">Skyler Gubbels</span></h1>
            <h2 className="animated bounceInRight summarySubtitle"><span className="imageSpan">Software Developer</span></h2>
            </div>
        </div> );
    }
}
 
export default Introduction;