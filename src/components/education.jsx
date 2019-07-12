import React, { Component } from 'react';
import ImageHover from './common/imagehover';
import carleton1 from "../resources/images/carleton1.jpg";
import monash from "../resources/images/monash.jpg";


class Education extends Component{
    
    state = {
        dimensions: {width: 600, height: 500}
    }

    render(){
        const { dimensions } = this.state;
        return(
            <React.Fragment>
                <h1>Education</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <ImageHover image={carleton1} imageHover={monash} dimensions={dimensions}/>
                            </div>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default Education;