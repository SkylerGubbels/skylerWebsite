import React, { Component } from 'react';
import horizon from "../resources/horizon.jpg"
import "animate.css"

class Summary extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <img className="backgroundImage" src={horizon} alt=""></img>
            <h1 className="animated bounceInRight"><span>Skyler Gubbels</span></h1>
            <h2 className="animated bounceInRight"><span>Software Developer</span></h2>
        </div> );
    }
}
 
export default Summary;