import React from 'react';
import carletonPhotoshoot from "../resources/images/carletonPhoto.jpg";

/** Component: SpecializedCourses
 *  Purpose: Creates a bulletpoint list using the strings in the courses variable */
const SpecializedCourses = () => {
    
    const courses = [
            "Open Data Structures",
            "Object-Oritented Software Engineering",
            "Computer Vision",
            "Compiler Constructions",
            "Human-Computer Interaction",
            "Database Management Systems",
            "Fundamentals of Web Applications",
            "Programming Paradigms"]

    return ( 
        <div className="container-fluid">
            <div className="row">
                
                <div className="col-md-6 col-sm-12">
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img src={carletonPhotoshoot} width="100%" alt=""/>
                </div>
            <div className="col-md-6 col-sm-12">
                <div className="padding25"></div>
                <ul>
                    {courses.map(c => <li className="smText" key={c}>{c}</li>)}
                </ul>
            </div>
            </div>
        </div>
        );

}
 
export default SpecializedCourses;