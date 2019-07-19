import React, { Component } from 'react';
import backendLogo from '../resources/images/backendLogo.png';
import frontendLogo from '../resources/images/frontendLogo.png';
import softwareEngineeringLogo from '../resources/images/softwareEngineeringLogo.png';
import computerScienceLogo from '../resources/images/computerScienceLogo.png';
import ImageAndText from './imageandtext';

// Icons from https://www.iconfinder.com/free_icons

class Summary extends Component{

    logoDetails = {
        width: "100",
    }

    /** Function: createImageAndText()
     *  Purpose: Creates a component where there is a small image on the left and a text paragraph on the right
     */
    createImageAndText(columnClass, imgSrc, title, text){
        return(
        <div className={columnClass}>
            <ImageAndText image={imgSrc} imageClass="summaryLogo" textClass="whiteText smText" title={title} text={text} width={this.logoDetails.width}/>
        </div>);
    }

    render(){
        const { text } = this.props;
        const columnClass = "col-md-6 col-sm-12 col-xs-12";
        return(
            <React.Fragment>
                    <p className="whiteText text">{text.paragraph}</p>
                    <div className="padding50"/>
                    
                    <div className="col-12">
                        <div className="row">
                            {this.createImageAndText(columnClass, frontendLogo, text.frontend.title, text.frontend.text)}
                            {this.createImageAndText(columnClass, backendLogo, text.backend.title, text.backend.text)}
                        </div>

                        <div className="padding25"/>
                        
                        <div className="row">
                            {this.createImageAndText(columnClass, softwareEngineeringLogo, text.softwareEngineering.title, text.softwareEngineering.text)}
                            {this.createImageAndText(columnClass, computerScienceLogo, text.computerScience.title, text.computerScience.text)}
                        </div>
                    </div>

            </React.Fragment>);
    }
}

export default Summary;