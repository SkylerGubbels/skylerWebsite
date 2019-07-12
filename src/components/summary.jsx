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

    render(){
        const { text} = this.state;
        const { width } = this.logoDetails;
        return(
            <React.Fragment>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <ImageAndText image={frontendLogo} imageClass="bwLogo" title={text.frontend.title} text={text.frontend.text} width={this.logoDetails.width}/>
                    </div>
                    <div className="col-6">
                        <ImageAndText image={backendLogo} imageClass="bwLogo" title={text.backend.title} text={text.backend.text} width={this.logoDetails.width}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <ImageAndText image={softwareEngineeringLogo} imageClass="bwLogo" title={text.softwareEngineering.title} text={text.softwareEngineering.text} width={this.logoDetails.width}/>
                    </div>
                    <div className="col-6">
                        <ImageAndText image={computerScienceLogo} imageClass="bwLogo" title={text.computerScience.title} text={text.frontend.text} width={this.logoDetails.width}/>
                    </div>
                </div>
                </div>

            </React.Fragment>);
    }
}

export default Summary;