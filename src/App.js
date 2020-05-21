import React from 'react';
import Navbar from './Component/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        </header>

        <body className="App-body">
          <Navbar>
            <Route to="/home">Home</Route>
            <Route to="/playlists">Playlists</Route>
            <Route to="/about">About</Route>
            <Route to="/profile">Profile</Route>
          </Navbar>
          <h1>body</h1>
        </body>

        <footer className="App-footer">

        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;