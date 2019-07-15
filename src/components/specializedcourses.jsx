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
            <div className="container-fluid">
                <h1 className="componentTitle">Specialized Courses</h1>
                <div className="row">
                <div className="col-md-6 col-sm-12">
                    <ul>
                        {this.state.courses.map(c => <li className="text" key={c}>{c}</li>)}
                    </ul>
                </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={carleton2} width="100%"/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SpecializedCourses;