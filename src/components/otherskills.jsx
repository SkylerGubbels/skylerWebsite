import React from 'react';
import Skills from './skills';

class OtherSkills extends Skills {
    
    render() { 
        const {text, paragraph} = this.props;

        return ( 
        <React.Fragment>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <p className="text">{paragraph}</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    {Object.keys(text).map(key => this.createSkillCategory(text[key].title, text[key].text, "categoryTitle skillCategoryTitle", "smText skillCategoryText", key))}
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default OtherSkills;