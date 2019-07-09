import React, { Component } from 'react';
import { getEnglishText } from '../resources/englishText';
import { getFrenchText } from '../resources/frenchText';

class Summary extends Component{
    state = {
        language: "",
        text: { frontEnd: "",
                backEnd: "",
                softwareEngineering: "",
                computerScience: ""}
    }

    componentDidUpdate(){
        if(this.state.language !== this.props.language){
            this.loadText(this.props.language);
        }
    }


    loadText = language => {
        let text;
        this.state.language = language;
        if(language === "english"){ text = getEnglishText().summary; }
        else { text = getFrenchText().summary; }
        this.setState({text});
    }

    render(){
        const { frontEnd, backEnd, softwareEngineering, computerScience } = this.state.text;
        return(<p>{frontEnd}</p>);
    }
}

export default Summary;