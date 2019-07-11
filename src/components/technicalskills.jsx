import React, { Component } from 'react';
import AnimatedLogos from './common/animatedlogos';
import { getLogos } from '../resources/logos';

class TechnicalSkills extends Component {
    
    state = { }

    logoSize = 100;
    
    render() { 
        const { languages } = this.state;
        return ( 
        <React.Fragment>
            <h1>Technical Skills</h1>
            <AnimatedLogos logos={getLogos()} logoSize={this.logoSize} displayTime={8000}/>
        </React.Fragment>
        );
    }
}
 
export default TechnicalSkills;