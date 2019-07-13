import React, { Component } from 'react';
import Skills from './skills';

class OtherSkills extends Skills {
    


    /** Function: loadtext()
     *  Input: Language string for the language with which to display the website
     *  Purpose: Gets the language text from the relevant file in the resources/ folder and sets the state */
     loadText = async language => {
        const lang = (await import(`../resources/${language}Text`));
        const text = lang.getOtherSkillsText();
        const paragraph = lang.getParagraphText();
        this.setState({text, language, paragraph});
    }
    
    render() { 
        const {text, paragraph} = this.state;

        // Because text is loaded asynchronously, render might be called before
        // the text is loaded. If this happens we don't load the text. Once the
        // async function returns the new text then it will be rendered
        if(text === null) return "";

        return ( 
        <React.Fragment>
            <h1>Other Skills</h1>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <p>{paragraph}</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    {Object.keys(text).map(key => this.createSkillCategory(text[key].title, text[key].text, "skillCategoryTitle", "skillCategoryText", key))}
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default OtherSkills;