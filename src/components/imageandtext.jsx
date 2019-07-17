import React, { Component } from 'react';

class ImageAndText extends Component {
    state = { image: null, width: null, height: null, text: "", title: "", imageClass:"" }
    
    componentDidMount(){
        this.setState(this.props);
    }

    componentDidUpdate(){
        //If there was a text change then re-render the component
        const {text, title} = this.props;
        if(text !== this.state.text || title !== this.state.title) { this.setState({text, title})}
    }

    render() { 
        const {image, width, height, text, title, imageClass, textClass} = this.state;
        return ( 
        <div className="row">
            <div className="col-4">
                <img className={imageClass} src={image} width={width} height={height} alt=""/>
            </div>
            <div className="col-8">
                <p className="categoryTitle summaryTitle whiteText">{title}</p>
                <p className={textClass}>{text}</p>
            </div>
        </div>);
    }
}
 
export default ImageAndText;