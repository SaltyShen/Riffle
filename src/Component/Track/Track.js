import React, {Component} from 'react';
import $ from 'jquery';
import Card from '@material-ui/core/Card';
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
            duration_ms: null,
        }
    }
    componentDidMount(){
        this.getTrackData();
    }
    
    //build url with trackID
    //build the url first

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
                    duration_ms: data.duration_ms
                })
            }
        });
    }
    
    render(){
        return(
            <Card>
            <p><b>{this.state.title}</b></p>
            <img src={this.state.track_cover_art_url} alt="album art"></img>
            <p>{this.state.duration_ms/1000/60}</p>
            </Card>

        )
    }
}

export default Track