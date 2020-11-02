import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

import logo from '../../logo.svg'
import './navbar.css'
import User from '../User/User'

const Navbar = (props) => {

    return(
        
            <nav className="nav-wrapper">
                
                <img src={logo} className="nav-logo" alt="logo"></img>
                <SearchBar/>
                <User token={props.token}/>
            </nav>
            

    )
}
export default Navbar;