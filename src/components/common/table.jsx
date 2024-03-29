import React, { Component } from 'react';
import CollapsableText from './collapsabletext';

/** Component: Table
 *  Props: content
 *  Purpose: Creates a table using the data passed in the Content prop */
class Table extends Component{

    cols = 0;

    /** Function: createRows()
     *  In: Data object for the row
     *  Purpose: Checks that the rows are valid then returns the entire row of data*/
    createRows(data, index1){
        if(Object.keys(data).length !== this.cols){
            throw(new Error("Error: Number of data elements must match number of columns in header"));
        }
        
        return(
            <tr key={index1}>
                {Object.keys(data).map((key, index2) => this.createDataItem(data[key], `${index1}-${index2}`))}
            </tr>)
    }

    /** createDataItem() 
     *  In: item to put in one space in the data row
     *  Purpose: Takes the input for that one data point on the table.
     *           Currently supports text, images and links */
    createDataItem(item, index){
        if(item.image){
            // If we don't have a path, grey out the image
            if(item.path === "") {return <td key={index}><img className="tableImageNoLink" src={item.image} alt=""/></td>}
            else { return<td key={index}><a href={item.path} target="_blank" rel="noopener noreferrer"><img className="tableImageWithLink" src={item.image} alt=""/></a></td>}
        }

        // For objects passed that contain a link and a text value. Creates a hyperlink to the dest
        if(item.text){
            return<td key={index}><a href={item.path} target="_blank" rel="noopener noreferrer">{item.text}</a></td>
        }

        if(item.length > 25){return <CollapsableText key={item} text={item} numOfChars={25}/>}

        return<td key={index}>{item}</td>
    }

    render(){
        const { headers, data } = this.props.content;
        this.cols = headers.length;

        return(
            <table className={this.props.className}>
            <thead><tr>
                {headers.map(h => <th key={h}>{h}</th>)}
            </tr>
            </thead>
            <tbody>
                {data.map((d, i) => this.createRows(d,i))}
            </tbody>
            </table>)
    }
}
 
export default Table;