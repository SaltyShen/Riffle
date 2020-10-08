import React from 'react';
import {Link} from '@material-ui/core';

import logo from '../logo.svg'

const Navbar = () => {
    
    

    return(

        
            <nav className="nav-wrapper"  style={{ background: '#1DB954' }}>
            <img src={logo} className="App-logo left" alt="logo"></img>
                <div className="container">
                    
                    <ul className="right">
                        <li><Link className="nav-tabs" to="/playlists">Playlists</Link></li>
                        <li><Link className="nav-tabs" to="/about">About</Link></li>
                        <li><Link className="nav-tabs" to="/profile">Profile</Link></li>
                    </ul>

                </div>
            </nav>
            

    )
}
export default Navbar;