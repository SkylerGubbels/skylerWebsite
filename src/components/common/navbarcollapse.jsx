import React, {Component} from 'react';
import { HashLink as Link } from "react-router-hash-link";

/** Component: NavbarCollapse 
 *  Props: textColor, dropdownItems{title, text, to}, path
 *  Purpose: Creates a collapse menu for a navbar. dropdownItems needs a title
 *           for the navbar menu and an array of all the options that will appear
 *           once the dropdown has been opened. */
class NavbarCollapse extends Component{
    
    // Creates a singular dropdown item using the data supplied in the items param
    createDropdown = (item, path) => {
        return (
            <React.Fragment key={`${item.text}-fragment`}>
                <Link className="dropdown-item" to={path + item.to} onClick={this.props.onClick}><span className="whiteText">{item.text}</span></Link>
            </React.Fragment>)
    }
    
    render(){
        const { textColor, dropdownItems, path} = this.props;  
        return ( 
            <React.Fragment>

                    <Link className="nav-link dropdown-toggle navText" to="#" id="navbarDropdown" role="button" data-toggle="collapse" data-target="#myCollapse" style={{"color":textColor}}>
                        <span style={{"color":textColor}}>{dropdownItems.title}</span>
                    </Link>

                    <div className="collapse" id="myCollapse">
                        { dropdownItems.links.map((item) => this.createDropdown(item, path))}
                    </div>
                    
            </React.Fragment>
     );}
}
 
export default NavbarCollapse;