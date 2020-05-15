import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg'

const Navbar = () => {

    return(
        <div>
        <AppBar position="static" style={{ background: '#1DB954' }}>
            <Toolbar className="nav-toolbar">
                <img src={logo} className="App-logo" alt="logo"></img>
                <Typography variant="title"> </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default Navbar;