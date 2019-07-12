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

     interval;
    
    componentDidMount(){
        const {logoSize, displayTime} = this.props;
        this.allLogos = this.props.logos;
        this.displayTime = displayTime;
        // Allows for 1d list to be passed
        if (typeof(this.props.logos[0]) === "string") this.allLogos = [this.allLogos];
        this.maxIndex = this.allLogos.length;
        this.setState({logoSize, currentLogos: this.allLogos[0]})
        if(this.maxIndex > 1){
            this.interval = setInterval(()=>{this.loadNextLogos()}, this.displayTime);
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    /** Function: displayNextIcons()
     *  Purpose: Gets the next set of icons to display. Uses modular arithmetic
     *           to circle through allLogos based on the maxIndex value */
    loadNextLogos(){
        this.currentIndex = this.currentIndex+1;
        this.setState({currentLogos: this.allLogos[this.currentIndex%this.maxIndex]});
    }

    /** Function: displayLogo()
     *  In: Logo image variable, index of logo in list
     *  Purpose: Displays logos with starting and ending animations based off
     *           how many logos there are and the display time passed as a prop */
    displayLogo(logo, index){
        const { logoSize } = this.state;
        if(this.maxIndex < 2) { return this.displayStaticLogo(logo); }
        return (<img 
                    key={logo} 
                    src={logo} 
                    alt="" 
                    width={logoSize} 
                    height={logoSize}
                    style={{"animation":
                                `fadeIn 1s ${this.calculateAnimationDelayEntrance(index)}s both,
                                fadeOut 1s ${this.calculateAnimationDelayLeave()}s`,
                "minHeight":`${logoSize}`}}/>);
    }

    /** Function: displayStaticLogo()
     *  In: Logo image variable
     *  Purpose: To be called when there is only one list of elements. Doesn't bother fading
     *           logos in and out */
    displayStaticLogo(logo){
        const { logoSize } = this.state;
        return (<img 
                    key={logo} 
                    className="animated fadeIn" 
                    src={logo} 
                    alt="" 
                    width={logoSize} 
                    height={this.logoSize}/>);
    }

    calculateAnimationDelayEntrance(index){
        const { currentLogos } = this.state;
        // Divides display time in half so it has time to display then animate leaving
        // Divides that by 1000 to convert miliseconds to seconds
        // Divides that by the length of elements in currentLogos so each logo gets an equal chunk of time
        return index * ((this.displayTime/2)/1000)/currentLogos.length;   
    }

    calculateAnimationDelayLeave(index){
        return this.displayTime/1000-1;
    }
    
    render() { 
        const { currentLogos } = this.state;
        return ( 
            <div className="row">
                {currentLogos.map((l,index) => this.displayLogo(l,index))}
            </div>
         );
    }
}
 
export default AnimatedLogos;