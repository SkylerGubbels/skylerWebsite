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
        text: { frontend: "",
                backend: "",
                softwareEngineering: "",
                computerScience: ""}
    }

    logoDetails = {
        width: "100",
    }

    componentDidUpdate(){
        // If the language has changed get new text
        if(this.state.language !== this.props.language){
            this.loadText(this.props.language);
        }
    }

    componentDidMount(){
        this.loadText(this.props.language);
    }


    /** Function: loadtext()
     *  Input: Language string for the language with which to display the website
     *  Purpose: Gets the language text from the relevant file in the resources/ folder and sets the state */
    loadText = async language => {
        const text = (await import(`../resources/${language}Text`)).getSummaryText();
        this.setState({text, language});
    }

    /** Function: createTextBlock
     *  Input: Source code for the logo and the text beside the logo
     *  Purpose: Creates on image with block of text next to it
     * 
     *  TODO: If language changes then the columns are no longer aligned */
    createTextBlock(imageSrc, text){
        return(
                <React.Fragment>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <img src={imageSrc} width={this.logoDetails.width}/>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 col-10">
                        <span>{text}</span>
                    </div>
                </React.Fragment>
        )
    }

    render(){
        const { frontend: feText, backend: beText, softwareEngineering: seText, computerScience: csText } = this.state.text;
        const { width } = this.logoDetails;
        return(
            <React.Fragment>
                <h1>Summary</h1>
                <ImageAndText image={frontendLogo} text={feText} width={this.logoDetails.width}/>
                <ImageAndText image={backendLogo} text={beText} width={this.logoDetails.width}/>
                <ImageAndText image={softwareEngineeringLogo} text={seText} width={this.logoDetails.width}/>
                <ImageAndText image={computerScienceLogo} text={csText} width={this.logoDetails.width}/>
                
            </React.Fragment>);
    }
}

/**
return(
    <div className="container">
        <div className = "row">
            <div className="row">
                {this.createTextBlock(frontendLogo, feText)}
                {this.createTextBlock(backendLogo, beText)}
            </div>
            <div className="row">
                {this.createTextBlock(softwareEngineeringLogo, seText)}
                {this.createTextBlock(computerScienceLogo, csText)}
            </div>
        </div>
</div>); */

export default Summary;