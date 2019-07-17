import React, { Component } from 'react';
import carletonPhotoshoot from "../resources/images/carletonPhoto.jpg";

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
                <div className="row">
                    <div className="col-md-6 col-sm-12"/>
                    <div className="col-md-6 col-sm-12">
                        <h1 className="componentTitle">Specialized Courses</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src={carletonPhotoshoot} width="100%" alt=""/>
                    </div>
                <div className="col-md-6 col-sm-12">
                    <div className="padding25"></div>
                    <ul>
                        {this.state.courses.map(c => <li className="smText" key={c}>{c}</li>)}
                    </ul>
                </div>
                </div>
            </div>
         );
    }
}
 
export default SpecializedCourses;