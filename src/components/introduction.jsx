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
        window.addEventListener("resize", this.imageSizeChange);
        this.handleImageLoad();
    }

    // Changed from anonymous function because removeEventListener needs a function to pass
    // as the argument
    imageSizeChange = () => {this.props.onImageSizeChange(this.imgRef.current.height)}

    componentWillUnmount(){
        window.removeEventListener("resize", this.imageSizeChange);
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
            <h1 className="introTitle imageSpan">Skyler Gubbels</h1>
            <h2 className="introSubtitle imageSpan">Software Developer</h2>
            <img className="backgroundImage" ref={this.imgRef} src={horizon} alt=""></img>
            <div className="imageTextContainer">
            </div>
        </div> );
    }
}
 
export default Introduction;