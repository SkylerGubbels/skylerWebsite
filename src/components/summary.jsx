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
        console.log(this.state)
        return(
        <div>
        <img src={backendLogo}/><p>{frontend}</p>
        <img src={frontendLogo}/><p>{backend}</p>
        <img src={softwareEngineeringLogo}/><p>{softwareEngineering}</p>
        <img src={computerScienceLogo}/><p>{computerScience}</p>
        </div>);
    }
}

export default Summary;