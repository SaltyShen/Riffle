import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './PlayerPane.css';

import Navbar from '../../Component/Navbar'
//import Player from './Component/Player/Player'


import Player from '../../Component/Player'
//import PlayButton from './Component/Buttons/PlayButton';
//import shadows from '@material-ui/core/styles/shadows';

/* 

  To Do:
  Create Launch Page implemented with login button.
  Set up react dom router with nav.

*/

class PlayerPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.token,
    }
  }
  
  render(){
    
    return (
      
        <BrowserRouter>
          <div className="App"
               style = {{
                 background: "#212121",
                 height: "100vh"
               }}>
            <header className="App-header">
            </header>
              <Navbar token={this.state.token}>
                <Route path="/playlists">Player</Route>
                <Route path="/playlists">Playlists</Route>
                <Route path="/about">About</Route>
                <Route path="/profile">Profile</Route>
              </Navbar>
                
                <div>

                <Player token={this.state.token}/>
                {
                  //<Player token={this.state.token}></Player>
                  //<User token={this.state.token}></User>
                  //<RecentlyPlayed token={this.state.token}></RecentlyPlayed>
                  //<Playlists token={this.state.token}></Playlists>
                }

                </div>
          </div>
        </BrowserRouter>
    )
  }
}

export default PlayerPane;