import React, { Component } from 'react';

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
    render() { 
        return ( 
            <React.Fragment>
                <h4>Specialized Courses</h4>
                <ul>
                    {this.state.courses.map(c => <li key={c}>{c}</li>)}
                </ul>
            </React.Fragment>
         );
    }
}
 
export default SpecializedCourses;