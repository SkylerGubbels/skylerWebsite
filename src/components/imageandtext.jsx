import React, { Component } from 'react';

/** Component: ImageAndText
 *  Props: image, width, height, text, title, imageClass, textClass
 *  Purpose: Creates an image with the text to the right of it that
 *           handles window resizes properly */
const ImageAndText = (props) => {

        const {image, width, height, text, title, imageClass, textClass} = props;
        return ( 
        <div className="row">
            <div className="col-4">
                <img className={imageClass} src={image} width={width} height={height} alt=""/>
            </div>
            <div className="col-sm-0 col-xs-1"></div>
            <div className="col-8 col-xs-7">
                <p className="categoryTitle summaryTitle whiteText">{title}</p>
                <p className={textClass}>{text}</p>
            </div>
        </div>);
    }

 
export default ImageAndText;