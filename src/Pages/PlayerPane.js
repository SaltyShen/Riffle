import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from '../Component/Navbar/Navbar.js'


import Player from '../Component/Player'
import Playlists from './Playlist'
import RecentlyPlayed from './RecentlyPlayed'
import User from './User'


/* 

  To Do:
  Create Launch Page implemented with login button.
  Set up react dom router with nav.

*/

class PlayerPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.token
    }
    console.log(this.props.player)
  }
  
  render(){
    
    return (
      
        <BrowserRouter>
          <div className="App"
               style = {{
                 background: "#212121",
      
               }}>
            <header className="App-header">
            </header>
              <Navbar token={this.state.token}/>
                <div>

                <Player token={this.state.token}/>
                <User token={this.state.token}></User>
                <RecentlyPlayed token={this.state.token}></RecentlyPlayed>
                <Playlists token={this.state.token}></Playlists>
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