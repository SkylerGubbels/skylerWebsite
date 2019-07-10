import React, { Component } from 'react';

class AnimatedLogos extends Component {
    state = { 
        currentLogos: [],
        logoSize: 0
     }

     allLogos = []; // 2D list of all icons that can be displayed
     currentIndex = 0; //Current icons being displayed
     maxIndex = 0; // Index of last list in allLogos
     displayTime = 0; // Miliseconds for how long to display each set of logos
     //interval = null;
    
    componentDidMount(){
        const {logoSize, displayTime} = this.props;
        this.allLogos = this.props.logos;
        this.displayTime = displayTime;
        // Allows for 1d list to be passed
        if (typeof(this.props.logos[0]) === "string") this.allLogos = [this.allLogos];
        this.maxIndex = this.allLogos.length;
        this.setState({logoSize, currentLogos: this.allLogos[0]})
        if(this.maxIndex > 1) setInterval(()=>{this.loadNextLogos()}, this.displayTime);
    }

    /** Function: displayNextIcons()
     *  Purpose: Gets the next set of icons to display. Uses modular arithmetic
     *           to circle through allLogos based on the maxIndex value */
    loadNextLogos(){
        this.currentIndex = this.currentIndex+1;
        this.setState({currentLogos: this.allLogos[this.currentIndex%this.maxIndex]});
    }
    
    render() { 
        const { currentLogos, logoSize } = this.state;
        return ( 
            <div className="row">
                {currentLogos.map(l => <img key={l} className="animated bounceInRight" src={l} alt="" width={logoSize} height={this.logoSize}/>)}
            </div>
         );
    }
}
 
export default AnimatedLogos;