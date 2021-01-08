import React, { Component } from 'react';
import $ from "jquery";
import PlayButton from "../Buttons/PlayButton"
import ForwardButton from "../Buttons/ForwardButton"
import BackButton from "../Buttons/BackButton"
import './player.css'
import ProgBar from '../ProgBar/ProgBar';
/* 
This is the main interface for music control.
child components are: 
  PlayButton
  PauseButton
  ForwardButton
  PrevButton

*/
class Player extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: this.props.token,
      item: null,
      progress_ms: null,
      duration_ms: null,
      is_playing: null
    }
    this.getPlayerDataContext = this.getPlayerDataContext.bind(this);
  }
  componentDidMount(){
    setInterval( () => {
      this.getPlayerDataContext();
    },1000);

  }

  getPlayerDataContext(){
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.state.token);
      },
      success: (data) => {
          if(!data){
            console.log("Nothing Playing, try playing something")
          }
          else{
            this.setState({
              item: data.item,
              is_playing: data.is_playing,
              progress_ms: data.progress_ms,
              duration_ms: data.item.duration_ms
            });
            //console.log(this.state.is_playing)
            //console.log(`progress: ${this.state.progress_ms} /n duration: ${this.state.duration_ms}`);
          }
      }
    });
  }

  getPlayerDataCurrent(){
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/currently-playing",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.state.token);
      },
      success: (data) => {
        
        if(!data){
          console.log("nothing currently playing, try playing something!")
        }
        else{
          this.setState({
            item: data.item,
            is_playing: data.is_playing,
            progress_ms: data.progress_ms
          });
        
        }
      }
    });
  }

  render(){
    // Rendering will cause an error pre-flight
    // ternary operator to handle null error
    // Need to add Buttons and controls to connect to playbacksdk
    //var coverArtURL = this.state.item.album.images[1].url;
    const player = (this.state.item) ? (
    
      <div className="player-interface">

        <div className="cover-art" 
          style={{
            backgroundImage: `url(${this.state.item.album.images[1].url})`,
            height:this.state.item.album.images[1].height,
            width:this.state.item.album.images[1].width

          }}>
          
        </div>
        <div className="control-pane">
          <div className="details-pane">
            <p className="track-name" style={{textAlign: "center", fontWeight:"700"}}>{this.state.item.name}</p>
            <p className="track-album-name" style={{textAlign: "center"}}>{this.state.item.album.name}</p>
          </div>
          <div className="control-panel">
            <div className="control-cluster">
              <BackButton token={this.state.token}/>
              <PlayButton token={this.state.token} playToggle={this.state.is_playing}/>
              <ForwardButton token={this.state.token}/>
            </div>
              <ProgBar progress_ms={this.state.progress_ms} 
                       duration_ms={this.state.duration_ms}

                       />
          </div>
        </div>
      </div>

    ) : (

      <div className="player-interface">
        <div className="empty-cover">
        </div>
      </div>

    )

    return (player);
  }
}

export default Player;