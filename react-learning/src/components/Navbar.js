import React from "react";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar-list">
            <NavbarLink link="/" name="Home" isfirst='true'/>
            <NavbarLink link="/profile" name="Profile"/>
            <NavbarLink link="/logout" name="Logout" islast='true'/>
            </ul>
        </div>
    )
}


const NavbarLink = (props) => {
    if(props.isfirst) {
        return (
            <div className="navlink-container">
                <li className="navlink"><a className="navlink-a first" href={props.link}>{props.name}</a></li>
            </div>
        )    
    }
    if(props.islast) {
        return (
            <div className="navlink-container">
                <li className="navlink"><a className="navlink-a last" href={props.link}>{props.name}</a></li>
            </div>
        )
    }

    return (
        <div className="navlink-container">
            <li className="navlink"><a className="navlink-a" href={props.link}>{props.name}</a></li>
        </div>
    )
}

export default Navbar;