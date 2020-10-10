import React, { Component } from 'react';
import PlayerPane from './Pages/PlayerPane/PlayerPane.js'
import icon from './logo.svg';

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
          
            <div className="login-pane">

              {!this.state.token && (
              

              <div className="loginbox" 
                   style={{
                     paddingTop:"25vh", 
                     marginLeft:"10vw", 
                     marginRight:"0vw", 
                     height:"100vh"
                  }}>
    
              <article>
                <img src={icon} 
                    style={{
                      height:"40px", 
                      width:"40px"
                    }}
                />

                <h4 style={{fontWeight:"bold" ,fontSize:"20px",font:"Circular,arial"}}>
                  Riffle Collabrative Player 
                  
                </h4>

                <p style={{fontWeight:"400",font: "Circular,ariel",fontSize:"17px"}}> 
                  A fullstack project created by Peter Wang.<br/> 
                  Create memorable playlists with anyone.
                  </p>

                <p style={{fontWeight:"100", font:"Circular,arial", color:"grey"}}> 
                  Powered by Spotify.
                  </p>
               
              
              </article>
              <a
                className="btn"
                style={{marginTop:"20px", marginLeft: "5%", fontWeight:"400"}}
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                Login with Spotify
              </a>
              </div>

              )}

              {this.state.token && (
                <PlayerPane token={this.state.token}/>
              )
            }
          </div>
        );
    }
}