import React, { Component } from 'react';

class ImageAndText extends Component {
    state = { image: null, width: null, height: null, text: "" }
    
    componentDidMount(){
        const {image, width, height, text} = this.props;
        console.log(text)
        this.setState({image, width, height, text});
    }

    componentDidUpdate(){
        //If there was a text change then re-render the component
        const {text} = this.props;
        if(text !== this.state.text) { this.setState({text})}
    }

    render() { 
        const {image, width, height, text} = this.state;
        return ( 
        <div className="row">
            <img src={image} width={width} height={height}/>
            <p>{text}</p>
        </div>);
    }
}
 
export default ImageAndText;