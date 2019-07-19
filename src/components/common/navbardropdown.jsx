import React, {Component} from 'react';
import { HashLink as Link } from "react-router-hash-link";

class NavbarDropdown extends Component{
    
    createDropdown = (item, path) => {

        return (
            <React.Fragment key={`${item.text}-fragment`}>
                <Link className="dropdown-item" to={path + item.to} onClick={this.props.onClick}>{item.text}</Link>
                { item.divider && <div className="dropdown-divider"/> }
            </React.Fragment>)
        }
    
    render(){
        const { textColor, dropdownItems, path} = this.props;
        
        return ( 
            <React.Fragment>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle navText" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{"color":textColor}}>
                        <span style={{"color":textColor}}>{dropdownItems.title}</span>
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    { dropdownItems.links.map((item) => this.createDropdown(item, path))}
                    </div>
                </li>
            </React.Fragment>
     );}
}
 
export default NavbarDropdown;