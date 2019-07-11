import React, { Component } from 'react';
import AnimatedLogos from './common/animatedlogos';
import { getLogos } from '../resources/logos';
import Skills from './skills';

class TechnicalSkills extends Skills {

    logoSize = 100;

    /** Function: loadtext()
     *  Input: Language string for the language with which to display the website
     *  Purpose: Gets the language text from the relevant file in the resources/ folder and sets the state */
     loadText = async language => {
        const text = (await import(`../resources/${language}Text`)).getTechSkillsText();
        this.setState({text, language});
    }

    render() { 
        const { text } = this.state;
        
        // Because text is loaded asynchronously, render might be called before
        // the text is loaded. If this happens we don't load the text. Once the
        // async function returns the new text then it will be rendered
        if(text === null) return "";
        
        return ( 
        <React.Fragment>
            <h1>Technical Skills</h1>
            <AnimatedLogos logos={getLogos()} logoSize={this.logoSize} displayTime={7000}/>
            {Object.keys(text).map(key => this.createSkillCategory(text[key].title, text[key].text, "skillCategoryTitle", "skillCategoryText", key))}
        </React.Fragment>
        );
    }
}
 
export default TechnicalSkills;