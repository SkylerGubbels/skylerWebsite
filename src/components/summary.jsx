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


    loadText = language => {
        let text;
        if(language === "english"){ text = getEnglishText().summary; }
        else { text = getFrenchText().summary; }
        this.setState({text, language});
    }

    createTextBlock(imageSrc, text){
        return(
                <React.Fragment>
                    <div className="col-md-2 col-sm-2 col-2 my-col">
                        <img src={imageSrc} width={this.logoDetails.width}/>
                    </div>
                    <div className="col-md-4 col-sm-10 col-10 my-col">
                        <span>{text}</span>
                    </div>
                </React.Fragment>
        )
    }

    render(){
        const { frontend: feText, backend: beText, softwareEngineering: seText, computerScience: csText } = this.state.text;
        const { width } = this.logoDetails;
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
        </div>);
    }
}

export default Summary;