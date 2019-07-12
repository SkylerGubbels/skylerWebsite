import React, { Component } from 'react';

class Table extends Component{

    cols = 0;
    //TODO: Throw exception if headers and content don't line up

    createRows(data){
        if(Object.keys(data).length !== this.cols){
            throw(new Error("Error: Number of data elements must match number of columns in header"));
        }
        
        return(
        <tr>
            {Object.keys(data).map(key => this.createDataItem(data[key]))}
        </tr>)
    }

    createDataItem(item){
        if(item.image){
            // If we don't have a path, grey out the image
            const className = item.path === "" ? "tableImageNoLink" : "tableImageWithLink";
            return<td><img className={className} src={item.image} href={item.path}></img></td>
        }

        if(item.text){
            return<td><a href={item.path}>{item.text}</a></td>
        }

        return<td>{item}</td>
    }

    render(){
    const { headers, data } = this.props.content;
    this.cols = headers.length;

    return(
        <table className={this.props.className}>
        <thead>
            <tr>
                {headers.map(h => <th key={h}>{h}</th>)}
            </tr>
        </thead>
        <tbody>
                {data.map(d => this.createRows(d))}
        </tbody>
        </table>)
    }
}
 
export default Table;