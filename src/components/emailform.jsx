import React, { Component } from 'react';

class EmailForm extends Component {
    
    // TODO: Validate email
    state = {
        email: {name: "", emailAddress: "", emailText: ""}
    };

    handleSubmit = data =>{
        data.preventDefault();
        console.log("Submitted")
    }

    handleChange = e =>{
        const email = {...this.state.email};
        email[e.currentTarget.name] = e.currentTarget.value;
        this.setState({email})
    }
    
    render() { 

        const {name, emailAddress, emailText} = this.state.email;

        return ( 
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="nameInput">Name/Company</label>
                <input id="nameInput" name="name" value={name} onChange={this.handleChange} type="name" className="form-control"/>
                <label htmlFor="emailAddressInput">Email address</label>
                <input id="emailAddressInput" name="emailAddress" value={emailAddress} onChange={this.handleChange} type="email" className="form-control" placeholder="name@example.com"/>
            </div>
            <div className="form-group">
              <label htmlFor="EmailTextInput">Email</label>
              <textarea id="EmailTextInput" name="emailText" value={emailText} onChange={this.handleChange} className="form-control" rows="7"></textarea>
            </div>
            <div>
                <button className="btn btn-primary">Send Email</button>
            </div>
          </form> );
    }
}
 
export default EmailForm;