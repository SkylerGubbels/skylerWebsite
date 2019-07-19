import React from 'react';
import AnimatedLogos from './common/animatedlogos';
import { getLogos } from '../resources/logos';
import Skills from './skills';

class TechnicalSkills extends Skills {

    logoSize = 100;

    render() { 
        const { text } = this.props;
        
        return ( 
        <div>
            <div className="padding50"/>
            <AnimatedLogos logos={getLogos()} logoSize={this.logoSize} displayTime={7000}/>
            <div className="padding50"/>
            {Object.keys(text).map(key => this.createSkillCategory(text[key].title, text[key].text, "categoryTitle skillCategoryTitle whiteText", "smText skillCategoryText whiteText", key))}
        </div>
        );
    }
}
 
export default TechnicalSkills;