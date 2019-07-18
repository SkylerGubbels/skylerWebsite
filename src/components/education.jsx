import React, { Component } from 'react';
import carleton from "../resources/images/carleton2.jpg";


class Education extends Component{
    
    state = {
        dimensions: {width: 600, height: 500}
    }

    createDegree(degree, university, gpa)
    {
        return(
            <React.Fragment>
                <p className="text summaryTitle">{degree}</p>
                <p className="smText">{university}</p>
                <p className="smText">{gpa}</p>
            </React.Fragment>
        )
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="padding25"/>
                    {this.createDegree("Honours BA Criminology and Criminal Justice", "Carleton University 2012 - 2016", "3.3 GPA - Deans Honour List 2012")}
                    <div className="padding25"/>
                    {this.createDegree("BS Computer Science", "Carleton University 2018 - 2019", "3.7 GPA - Deans Honour List 2019")}
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={carleton} width="100%" alt=""/>
                </div>
            </div>
        )
    };
}

export default Education;