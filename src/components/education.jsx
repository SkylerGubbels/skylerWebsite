import React, { Component } from 'react';
import carletonPhoto from "../resources/images/carletonPhoto.jpg";


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
                        <div className="col-md-6 col-sm-12">
                            <img src={carletonPhoto} width="100%"/>
                        </div>
                        <div className="col-md-6 col-sm-12">

                            <div className="crimDegree"><p className="text summaryTitle">Honours BA Criminology and Criminal Justice</p>
                            <p>Carleton University 2012 - 2016</p>
                            <p>3.3 GPA - Deans Honour List 2012</p></div>

                            <div className="csDegree"><p className="text summaryTitle">BS Computer Science</p>
                            <p>Carleton University 2018 - 2019</p>
                            <p>3.7 GPA - Deans Honour List 2019</p></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default Education;