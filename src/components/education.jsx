import React, { Component } from 'react';
import carletonPhoto from "../resources/images/carletonPhoto.jpg";


class Education extends Component{
    
    state = {
        dimensions: {width: 600, height: 500}
    }

    createDegree(degree, university, gpa)
    {
        return(
            <React.Fragment>
                <p className="text summaryTitle">Honours BA Criminology and Criminal Justice</p>
                <p>Carleton University 2012 - 2016</p>
                <p>3.3 GPA - Deans Honour List 2012</p>
            </React.Fragment>
        )
    }

    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <h1 className="componentTitle">Education</h1>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <img src={carletonPhoto} width="100%"/>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            {this.createDegree("Honours BA Criminology and Criminal Justice", "Carleton University 2012 - 2016", "3.3 GPA - Deans Honour List 2012")}
                            {this.createDegree("BS Computer Science", "Carleton University 2018 - 2019", "3.7 GPA - Deans Honour List 2019")}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default Education;