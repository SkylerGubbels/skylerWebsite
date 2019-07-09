import React, { Component } from 'react';
import horizon from "../resources/horizon.jpg"
import { getSummaryText } from "../resources/englishText";
import "animate.css"

class Summary extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <img className="backgroundImage" src={horizon} alt=""></img>
            <span className="">Photo taken by: https://www.instagram.com/shangerdanger/</span>
            <div className="imageText">
            <h1 className="animated bounceInRight summaryTitle"><span className="imageSpan">Skyler Gubbels</span></h1>
            <h2 className="animated bounceInRight summarySubtitle"><span className="imageSpan">Software Developer</span></h2>
            <span className="summaryText animated bounceInRight">{getSummaryText().summary}</span>
            </div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div> );
    }
}
 
export default Summary;