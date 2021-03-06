import React, {Component} from 'react';
import './track.css'
import $ from 'jquery';
/* 

    Takes Props:
    token: Cors call requires the bearers token
    trackhref: FULL href to the track ID 

    To Do:
    Implement a play button that sends the song to current play state.
    Make this component prettier.
    
  */
class Track extends Component {
    constructor(){
        super();
        this.state = {
            title: null,
            artist: [],
            track_cover_art_url: null,
            preview_url: null,
            uri: ''
        }
        this.playTrack = this.playTrack.bind(this);
    }
    
    componentDidMount(){
        this.getTrackData();
    }
    
    playTrack() {
        $.ajax({
            url: 'https://api.spotify.com/v1/me/player/play',
            type: 'PUT',
            headers: {
              'Authorization': 'Bearer ' + this.props.token
            },
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
              "uris": [`${this.state.uri}`]
            }),
            success: (data) => {
                console.log(`success: ${data}`)
            },
            error: (data) =>{
                console.log(data);
            }
          });
    }

    //AJAX call to get data from spotify API with cors
    getTrackData() {
        $.ajax({
        url: this.props.trackhref,
        type: "GET",
        cors: true,
        contentType:'application/json',
        beforeSend: (xhr) => {
            xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
        },
            success: (data) => {
                //log for diagnostic
                //console.log(data);
                this.setState({
                    title: data.name,
                    artist: data.artists,
                    track_cover_art_url: data.album.images[1].url,
                    preview_url: data.preview_url,
                    duration_ms: data.duration_ms,
                    uri: data.uri
                })

            }
        });
    }
    
    render(){
        const lastElement = this.state.artist.length;
        var artists = this.state.artist.map(function(artist, i){
            if (lastElement === i + 1){
                return(<b key={i}>{artist['name']}</b>);
            }
            else{
                return(<b key={i}>{artist['name'] + ", "}</b>);
            }
        });

        return(
            <li className="track">
                    <img className="album-art" 
                        src={this.state.track_cover_art_url} 
                        alt="album art"
                    >
                    </img>  
                    <div className="descriptor">
                        <p className="song-title">{this.state.title}</p>
                        <p className="song-artist">{artists}</p>
                        <button className="play-button" onClick={this.playTrack}>Play</button>
                    </div>
            </li>

        )
    }
}

export default Track