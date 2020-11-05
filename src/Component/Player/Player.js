import React, { Component } from 'react';
import $ from "jquery";
import PlayButton from "../Buttons/PlayButton"
import './player.css'
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
      is_playing: null,
      progress_ms: null
    }
  }
  componentDidMount(){
    this.getPlayerDataContext();
  }

  getPlayerDataContext(){
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
      },
      success: (data) => {
          if(!data){
            console.log("Nothing Playing, try playing something")
          }
          else{
            this.setState({
              item: data.item,
              is_playing: data.is_playing,
              progress_ms: data.progress_ms
            });
          }
          //console.log("actual ajax call: " + data);
      }
    });
  }

  getPlayerDataCurrent(){
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/currently-playing",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
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
          <p className="track-name" style={{textAlign: "center", fontWeight:"700"}}>{this.state.item.name} {this.state.item.artists[0].name}</p>
          <p className="track-album-name" style={{textAlign: "center"}}>{this.state.item.album.name}</p>
          <p style={{textAlign: "center"}}><b>prog:</b> {this.state.progress_ms}</p>
          <PlayButton token={this.state.token}/>
        </div>
      </div>

    ) : (

      <div className="player-interface">
        <div className="empty-cover">
          <PlayButton token={this.state.token}/>
        </div>
      </div>

    )

    return (player);
  }
}

export default Player;