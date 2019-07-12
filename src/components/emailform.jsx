import React, { Component } from 'react';

class EmailForm extends Component {
    state = {  }
    render() { 
        return ( 
        <form>
            <div className="form-group">
                <p>Name</p>
                <input type="email" className="form-control"/>
                <p>Email address</p>
                <input type="email" className="form-control" placeholder="name@example.com"/>
            </div>
            <div className="form-group">
              <p>Email</p>
              <textarea className="form-control" rows="7"></textarea>
            </div>
            <div>
                <button className="btn btn-primary">Send Email</button>
            </div>
          </form> );
    }
}
 
export default EmailForm;