import React, { Component } from 'react';

class CollapsableText extends Component {
    
    state = {
        currentText: null,
        collapsedText: null,
        completeText: null
    }

    componentWillMount(){
        const {text, numOfChars} = this.props;
        const collapsedText = (text.slice(0, numOfChars));
        this.setState({collapsedText, currentText: collapsedText, completeText: text});
    }

    handleClick = () => {
        const { currentText, collapsedText, completeText } = this.state;
        if(currentText === collapsedText){ this.setState({currentText: completeText})}
        else { this.setState({currentText: collapsedText})};
    }
    
    render() { 
        return ( <div>
                    {this.state.currentText}
                    <span style={{"cursor":"pointer"}} onClick={() => {this.handleClick()}}> [...]</span>
                    <p/>
                </div> );
    }
}
 
export default CollapsableText;