import React, { Component } from 'react';

/** Component: CollapsableText 
 *  Props: text, numOfChars
 *  Purpose: Takes a string and the number of characters wanted in the collapsed text.
 *           It will display the collapsed text until the user clicks the [...] button
 *           and will then display the full length text */
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

    // Handles text expansion and collapse when [...] is clicked
    handleClick = () => {
        const { currentText, collapsedText, completeText } = this.state;
        if(currentText === collapsedText){ this.setState({currentText: completeText})}
        else { this.setState({currentText: collapsedText})};
    }
    
    render() { 
        return ( <td>
                    {this.state.currentText}
                    <span style={{"cursor":"pointer"}} onClick={() => {this.handleClick()}}>[...]</span>
                    <p/>
                </td> );
    }
}
 
export default CollapsableText;