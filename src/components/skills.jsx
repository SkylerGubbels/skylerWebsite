import React, { Component } from 'react';

class Skills extends Component {
    
    state = { text: null, language: "", paragraph: "" }
    
    componentDidUpdate(){
        if(this.state.language !== this.props.language){
            this.loadText(this.props.language);
        }
    }

    componentDidMount(){
        this.loadText(this.props.language);
    }

    /** Function: createSkillCategory()
     *  Input: Title, text, (optional)classNameTitle, (optional)classNameText, (optional)key
     *  Purpose: Creates a text section with a title and text content. Key param optional but
     *           needed if using .map() function */
    createSkillCategory = (title, text, classNameTitle="", classNameText="", key = "") => {
        return (<React.Fragment key={`${key}container`}>
                    <p key={`${key}title`}className={classNameTitle}>{title}</p>
                    <p key={`${key}text`}className={classNameText}>{text}</p>
                </React.Fragment>)
    }
    
    render() { 
        return ("");
    }
}
 
export default Skills;