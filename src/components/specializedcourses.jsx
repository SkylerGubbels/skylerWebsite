import React, { Component } from 'react';
import ImageHover from './common/imagehover';
import carleton2 from "../resources/images/carleton2.jpg";
import code from "../resources/images/code.png";

class SpecializedCourses extends Component {
    state = { 
        courses:["Open Data Structures",
                "Object-Oritented Software Engineering",
                "Computer Vision",
                "Compiler Constructions",
                "Human-Computer Interaction",
                "Database Management Systems",
                "Fundamentals of Web Applications",
                "Programming Paradigms"] }
        
    dimensions = {width: 600, height: 500};

    render() { 
        return ( 
            <React.Fragment>
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h4>Specialized Courses</h4>
                    <ul>
                        {this.state.courses.map(c => <li className="text" key={c}>{c}</li>)}
                    </ul>
                </div>
                    <div className="col-md-6 col-sm-12">
                        <ImageHover image={carleton2} imageHover={code} dimensions={this.dimensions}/>
                    </div>
                </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default SpecializedCourses;