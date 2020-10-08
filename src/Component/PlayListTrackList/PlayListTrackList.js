import React, {Component} from 'react';
import Track from '../Track/Track';
import $ from 'jquery';

/* 

    Taken Props:
    token: For cors ajax authorization

    To Do:
    Make this prettier in accordance to Playlist.js
    probably will be implemented as a drop down list.

*/
class PlayListTrackList extends Component {
    constructor(){
        super();
        this.state = {
            tracks: null
        }
    }
    componentDidMount(){
        this.getPlayListTracks();
    }
    getPlayListTracks() {
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
                    
                    this.setState({
                        tracks: data.items
                    })
                }
            });
    }
    
    renderEachTrack(token){
        const tracks = this.state.tracks ? (
        this.state.tracks.map(function (track, index){
            return(
                <Track token={token} trackhref={track.track.href} key={index}/>
            )
        })
    ) : (
        <div> New Playlist! </div>
    )
    return tracks;
    }

    render(){
        return(
            <div>{this.renderEachTrack(this.state.token)}</div>
        )
    }
    
}

export default PlayListTrackList