import React, { Component } from 'react';
import PlayerPane from './Pages/PlayerPane/PlayerPane.js'

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = "9110bb9fbfc4422c85e722040cf63bc8";
//const redirectUri = "https://shen-ui.github.io/Riffle/";
const redirectUri = "http://localhost:3000/Riffle";

const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-recently-played",
  "user-read-private",
  "user-read-email",
  "streaming"
];

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

export default class App extends Component {
    constructor(){
      super();
        this.state = {
            token: null
        }
    }
    componentDidMount() {
        // Set token
        let _token = hash.access_token;
        if (_token) {
          // Set token
          this.setState({
            token: _token
          });
        }
    }

    render(){
        return(
          
            <div className="login-pane"
            style = {{Margin: "74%"}}>

              {!this.state.token && (
              

              <div className="loginbox">
              <p>Welcome to the alpha version of Riffle! Currently developing the main components of the web app with react.js.
              My roadmap is consists of: <br/>
                1, Get full functionality and all react components created and functional.<br/>
                2. Setting up the react dom and routers to appropriate pages with components.<br/>
                3. Work on styling and choosing a better framework (Currently using material-ui so nothing is a complete eyesore).<br/>
              <br/>
              Login to see component developement!</p>
              <a
                className="btn btn--loginApp-link center"
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                Login to Spotify
              </a>
              </div>

              )}

              {this.state.token && (
                
                <div>
                <PlayerPane token={this.state.token}/>

                
                {
                  //<Player token={this.state.token}></Player>
                  //<User token={this.state.token}></User>
                  //<RecentlyPlayed token={this.state.token}></RecentlyPlayed>
                  //<Playlists token={this.state.token}></Playlists>
                }
                </div>
              )
            }
            
          </div>
        );
    }
}