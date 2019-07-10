import React, { Component } from 'react';
import java from "../resources/languageLogos/java.svg"
import python from "../resources/languageLogos/python.svg"
import javascript from "../resources/languageLogos/javascript.svg"
import c from "../resources/languageLogos/c.svg"
import cpp from "../resources/languageLogos/cpp.svg"
import haskell from "../resources/languageLogos/haskell.png"
import AnimatedLogos from './common/animatedlogos';

class TechnicalSkills extends Component {
    
    state = { 
        languages: [[java, python, javascript], [c, cpp, haskell]],
    }

    logoSize = 100;
    
    render() { 
        const { languages } = this.state;
        return ( 
        <React.Fragment>
            <h1>Technical Skills</h1>
            <AnimatedLogos logos={languages} logoSize={this.logoSize} displayTime={5000}/>
        </React.Fragment>
        );
    }
}
 
export default TechnicalSkills;