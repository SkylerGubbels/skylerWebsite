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

    render(){
        const { text } = this.state;
        const { width } = this.logoDetails;
        const columnClass = "col-md-6 col-sm-12 col-xs-12";
        return(
            <React.Fragment>
                <div className="container-fluid">
                <div className="col-md-6 col-sm-12">
                    <h1 className="whiteText">Summary</h1>
                </div>
                <div style={{"paddingBottom":"25px"}}/>
                
                <div className="col-md-8 col-sm-12">
                    <p className="whiteText text">{text.paragraph}</p>
                </div>
                <div style={{"paddingBottom":"25px"}}/>
                <div className="col-12"><div className="row">
                    <div className={columnClass}>
                        <ImageAndText image={frontendLogo} imageClass="summaryLogo" textClass="whiteText" title={text.frontend.title} text={text.frontend.text} width={this.logoDetails.width}/>
                    </div>
                    <div className={columnClass}>
                        <ImageAndText image={backendLogo} imageClass="summaryLogo" textClass="whiteText" title={text.backend.title} text={text.backend.text} width={this.logoDetails.width}/>
                    </div>
                    </div>
                    <div className="row">
                    <div className={columnClass}>
                        <ImageAndText image={softwareEngineeringLogo} imageClass="summaryLogo" textClass="whiteText" title={text.softwareEngineering.title} text={text.softwareEngineering.text} width={this.logoDetails.width}/>
                    </div>
                    <div className={columnClass}>
                        <ImageAndText image={computerScienceLogo} imageClass="summaryLogo" textClass="whiteText" title={text.computerScience.title} text={text.frontend.text} width={this.logoDetails.width}/>
                    </div>
                    </div></div>
                </div>
                <div style={{"paddingBottom":"25px"}}/>

            </React.Fragment>);
    }
}

export default Summary;