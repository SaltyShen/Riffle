import React from 'react';
import {Link as Route} from '@material-ui/core';

import logo from '../../logo.svg'
import './navbar.css'
//import RecentlyPlayed from '../../Pages/RecentlyPlayed.js'
//import User from '../../Pages/User.js'
const navstyle = {
    font:"Circular,arial",
    fontWeight: "600",
    color:"#FFFFFF"
};

const Navbar = () => {
    
    return(
        
            <nav className="nav-wrapper"  style={{ background: '#1DB954', left: 0, right:0, top:0 }}>
                
                <img src={logo} className="App-logo left" alt="logo" 
                style={{
                    height:"5vh",
                    width: "5vw",
                    margin: "10px"

                }}></img>

                <div className="container">
                    
                    <ul className="right" >
                        <li style = {navstyle}><Route style={{color:"white"}} to="/Player" >PLAYER</Route></li>
                        <li style = {navstyle}><Route style={{color:"white"}} to="/playlists">PLAYLISTS</Route></li>
                        <li style = {navstyle}><Route style={{color:"white"}} to="/profile">PROFILE</Route></li>
                    </ul>

                </div>
            </nav>
            

    )
}
export default Navbar;