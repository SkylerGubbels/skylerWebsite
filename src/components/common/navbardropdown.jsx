import React, {Component} from 'react';
import { HashLink as Link } from "react-router-hash-link";

/** Component: NavbarDropdown 
 *  Props: textColor, dropdownItems{title, text, to}, path
 *  Purpose: Creates a dropdown menu for a navbar. dropdownItems needs a title
 *           for the navbar menu and an array of all the options that will appear
 *           once the dropdown has been opened.
*/
class NavbarDropdown extends Component{
    
    // Creates a singular dropdown item using the data supplied in the items param
    createDropdown = (item, path) => {
        
        return (
            <React.Fragment key={`${item.text}-fragment`}>
                <Link className="dropdown-item" to={path + item.to} onClick={() => this.props.onClick(item.to)}>{item.text}</Link>
                { item.divider && <div className="dropdown-divider"/> }
            </React.Fragment>)
    }
    
    render(){
        const { textColor, dropdownItems, path} = this.props;  
        return ( 
            <React.Fragment>
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