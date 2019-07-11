import React, { Component } from 'react';
import ImageHover from './common/imagehover';
import carleton1 from "../resources/images/carleton1.jpg";
import carleton2 from "../resources/images/carleton2.jpg";
import monash from "../resources/images/monash.jpg";
import code from "../resources/images/code.png";

class Education extends Component{
    
    state = {
        dimensions: {width: 800, height: 600}
    }

    render(){
        const { dimensions } = this.state;
        return(
            <React.Fragment>
                <h1>Education</h1>
                    <div className="row">
                        <div className="col-4">
                            <ImageHover image={carleton1} imageHover={monash} dimensions={dimensions}/>
                        </div>
                        <div className="col-4">
                            <ImageHover image={carleton2} imageHover={code} dimensions={dimensions}/>
                        </div>
                    </div>
            </React.Fragment>
        )
    };
}

export default Education;