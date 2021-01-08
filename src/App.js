import React, { Component } from 'react';
import PlayerPane from './Pages/PlayerPane.js'
import icon from './logo.svg';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = "9110bb9fbfc4422c85e722040cf63bc8";
const redirectUri = "https://shen-ui.github.io/Riffle/";
//const redirectUri = "http://localhost:3000/Riffle";

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
//----------------CLASS------------------//
export default class App extends Component {
    constructor(){
      super();

      var cookieToken = this.checkCookie();
      //if cookie doesnt exist wait
      if(cookieToken != null){
          this.state = {
            token: cookieToken,
          }
      }
      //set a new cookie if it not created
      else {
        this.state = {
          token: null
        }
      }
    }

    componentDidMount() {
        // Set token if cookie was empty
      if(!this.state.token){
        let _token = hash.access_token;
        if (_token) {
          // Set token
          this.setState({
            token: _token
          });

        //spotify tokens last 1 hour. 
        //will need to create something like a "still listening"
        //pane to refresh token.
        document.cookie=`token=${_token}`;
        }
      }//endif
    }
    // set Cookie: An expiration date (24 hours and token).
    // checkCookie : Will return the token set in cookie if not expired. 
    checkCookie(){
      var cookie = document.cookie;
      var match = cookie.match(new RegExp('(^| )token=([^;]+)'));
      if (match) {
        return(match[2]);
      }
      else{
        return null;
      }
    }

    render(){
        return(
          
            <div className="login-pane">
              {!this.state.token && (
              
              <div className="loginbox" 
                   style={{
                     paddingTop:"25vh", 
                     paddingLeft:"10vw", 
                     height:"100vh",
                     background: 'linear-gradient(35deg, #CCFFFF, #FFCCCC)'
                  }}>
    
              <article>
                <img src={icon} 
                    style={{
                      height:"40px", 
                      width:"40px"
                    }}
                    alt="icon"
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
                style={{marginTop:"20px", marginLeft: "5%", fontWeight:"600", borderRadius:"25px"}}
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                Login with Spotify
              </a>

              <footer className="nav-down">
                <p className="footer-sig">Developed to share by <b>Peter Wang</b></p>
                <div>
                  <a href="mailto:peterhuiwang1995@gmail.com"><i className="material-icons">email</i></a>
                  <a href="https://www.linkedin.com/in/shenhwang/"><i className="material-icons">work</i></a>
                  <a href="https://github.com/shen-ui"><i className="material-icons">code</i></a>
                </div>
              </footer>
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