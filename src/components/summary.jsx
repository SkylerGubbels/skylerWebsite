import React, { Component } from 'react';
import backendLogo from '../resources/images/backendLogo.png';
import frontendLogo from '../resources/images/frontendLogo.png';
import softwareEngineeringLogo from '../resources/images/softwareEngineeringLogo.png';
import computerScienceLogo from '../resources/images/computerScienceLogo.png';
import ImageAndText from './imageandtext';

// Icons from https://www.iconfinder.com/free_icons

class Summary extends Component{
    state = {
        language: "",
        text: { paragraph: "",
                frontend: "",
                backend: "",
                softwareEngineering: "",
                computerScience: ""}
    }

    logoDetails = {
        width: "100",
    }

    componentDidUpdate(){
        // If the language has changed get new text
        if(this.state.language !== this.props.language && this.props.language !== ""){
            this.loadText(this.props.language);
        }
    }

    componentDidMount(){
        if(this.props.language !== "") { this.loadText(this.props.language);}
    }

    /** Function: loadtext()
     *  Input: Language string for the language with which to display the website
     *  Purpose: Gets the language text from the relevant file in the resources/ folder and sets the state */
    loadText = async language => {
        const text = (await import(`../resources/${language}Text`)).getSummaryText();
        this.setState({text, language});
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
        const { text } = this.state;
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