import React, { Component } from 'react';

class ImageHover extends Component {
    state = { 
        currentImage: null,
        image: null,
        imageHover: null,
        text: "",
        textHover: "",
        dimensions: {width: 0, height: 0}
     }

    componentDidMount(){
        const { image, imageHover, text, textHover, dimensions} = this.props;
        this.setState({image, currentImage: image, imageHover, dimensions})
    }

    handleMouseHover = () => {
        const { imageHover } = this.state;
        this.setState({currentImage: imageHover});
    }

    handleMouseLeave = () => {
        const { image } = this.state;
        this.setState({currentImage: image});
    }

    render() { 
        const { currentImage, dimensions } = this.state;
        return ( <img src={currentImage} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseLeave} height={dimensions.height} width={dimensions.width} alt=""/> );
    }
}
 
export default ImageHover;