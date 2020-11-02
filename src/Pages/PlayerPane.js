import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'

import Navbar from '../Component/Navbar/Navbar.js'


import Player from '../Component/Player/Player'
import Playlists from './Playlist'
import RecentlyPlayed from './RecentlyPlayed'


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
    this.initPlayer();

  }
  
  initPlayer(){
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = this.state.token;
      const player = new window.Spotify.Player({
        name: 'Riffle Player',
        getOAuthToken: cb => { cb(token); }
      });
    
      // Error handling
      player.addListener('initialization_error', ({ message }) => { console.error(message); });
      player.addListener('authentication_error', ({ message }) => { console.error(message); });
      player.addListener('playback_error', ({ message }) => { console.error(message); });
    
      // Playback status updates
      player.addListener('player_state_changed', state => { console.log(state); });
    
      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        this.setState = {deviceid: device_id};
      });
    
      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
    
      // Connect to the player!
      player.connect().then(success =>{
        if(success) {
          console.log("Player connected!")
        }
      });
      return player;
    };
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