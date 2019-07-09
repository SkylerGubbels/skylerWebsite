import React, { Component } from 'react';
import {imageLinks} from '../resources/imageLinks'

class LanguageCanvas extends Component {
    state = { 
        btnStatus: "Fun"
     }

    canvasInfo = {
        logos: {
            python: {x: 0, y: 0, img: new Image()},
            java: {x: 0, y: 0, img: new Image()},
            javascript: {x: 0, y: 0, img: new Image()},
            c: {x: 0, y: 0, img: new Image()},
            cpp: {x: 0, y: 0, img: new Image()},
            haskell: {x: 0, y: 0, img: new Image()}
        },
        logoKeys: [],
        logoSize: 100,
        windowSize: 800,
        interval: null,
    }

    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
    }

    /** Function: drawLogos()
     *  Purpose: Takes the logo images loaded in this.state.logos.img and draws
     *           them on the canvas */
    drawLogos() {
        const {logos, logoSize, logoKeys, windowSize} = this.canvasInfo;
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0, windowSize, windowSize)

        ctx.rect(0, 0, windowSize, windowSize);

        for(let key of logoKeys){
            let {x, y, img} = logos[key]
            ctx.drawImage(img, x, y, logoSize, logoSize);
        }

        ctx.stroke();
    }

    /** Function: assignLogos
     *  Purpose: Gets all the logos from the imageLinks() .js file and assigns them
     *           to the relevant object in this.state.logos
     *  Note: For this to work the key in this.state.logos must match they key
     *        in the object returned by imageLinks() */
    assignLogos(){
        this.canvasInfo.logoKeys = Object.keys(this.canvasInfo.logos);
        const {logos, logoKeys, windowSize} = this.canvasInfo;
        let x = windowSize/logoKeys.length;
        for(let key of logoKeys){
            let logo = logos[key]
            logo.img.src = imageLinks()[key];
            logo.x = x;
            x += 100;
        }
    }

    /** Function: unlockLogos 
     *  Purpose: Starts moving the logos along the canvas and changes the button text */
    unlockLogos = () => {
        let btnTest = "Fun"
        if(!this.canvasInfo.interval){
            this.canvasInfo.interval = setInterval(()=>{this.dropLogos()}, 25);
            btnTest="Stop";
        }
        else{ clearInterval(this.canvasInfo.interval); this.canvasInfo.interval = null; }
        this.setState({btnStatus:btnTest})
    }

    dropLogos(){
        const {logos, logoKeys} = this.canvasInfo;
        for(let key of logoKeys){
            logos[key].y += 5;
        }
        this.drawLogos();
    }

    componentDidMount() {
        this.assignLogos();
        this.drawLogos();
    }

    render() { 
        return ( 
            <React.Fragment>
                <canvas ref={this.canvasRef} width="800" height="800"/>
                <div></div>
                <button className="btn btn-primary" onClick={this.unlockLogos}>{this.state.btnStatus}</button>       
            </React.Fragment>);
    }
}
 
export default LanguageCanvas;