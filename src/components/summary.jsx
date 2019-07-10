import React, { Component } from 'react';
import { getEnglishText } from '../resources/englishText';
import { getFrenchText } from '../resources/frenchText';
import backendLogo from '../resources/images/backendLogo.png';
import frontendLogo from '../resources/images/frontendLogo.png';
import softwareEngineeringLogo from '../resources/images/softwareEngineeringLogo.png';
import computerScienceLogo from '../resources/images/computerScienceLogo.png';

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
        width: "150",
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


    loadText = language => {
        let text;
        if(language === "english"){ text = getEnglishText().summary; }
        else { text = getFrenchText().summary; }
        this.setState({text, language});
    }

    render(){
        const { frontend, backend, softwareEngineering, computerScience } = this.state.text;
        const { width } = this.logoDetails;
        return(
        <div className="container">
            <div className = "row">
            <div className="col-sm">
                <div className="row">
                    <img src={backendLogo} width={width}/>
                    <span>{frontend}</span>
                </div>
                <div className="row">
                    <img src={frontendLogo} width={width}/>
                    <span>{backend}</span>
                </div>
            </div>
            <div className="col-sm">
                <div className="row">
                    <img src={softwareEngineeringLogo} width={width}/><span>{softwareEngineering}</span>
                </div>
                <div className="row">
                    <img src={computerScienceLogo} width={width}/><span>{computerScience}</span>
                </div>
            </div>
            </div>
        </div>);
    }
}

export default Summary;