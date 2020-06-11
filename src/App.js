import React, {Component} from 'react';
import Navbar from './Component/Navbar'
import LoginScreen from './Pages/loginscreen';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "9110bb9fbfc4422c85e722040cf63bc8";
const redirectUri = "http://localhost:3000/callback";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-playback-state"
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

class App extends Component {
  constructor(){
    super();
    this.state = {
      token: null,
      state: null
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
  state = {
    state: null,
    token: null
  }
  render(){
    
    return (
      
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
            </header>

              <Navbar>
                <Route to="/home">Home</Route>
                <Route to="/playlists">Playlists</Route>
                <Route to="/about">About</Route>
                <Route to="/profile">Profile</Route>
              </Navbar>
              
              {!this.state.token && (
                <a
                  className="btn btn--loginApp-link"
                  href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                  Login to Spotify
                </a>
              )}
              {this.state.token && (
                  <div>Your token: {this.state.token}</div>
              )}

            <footer className="App-footer">

            </footer>

          </div>
        </BrowserRouter>
    );
  }
}

export default App;