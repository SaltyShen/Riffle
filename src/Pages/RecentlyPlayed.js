import React, { Component } from 'react';
import Track from '../Component/Track/Track';
import $ from 'jquery';
/*

    Taken Props:
    token: Cors call requires the bearers token

    To Do:
    Make this tab prettier.
    Otherwise looking good.
    
*/

class RecentlyPlayed extends Component{
    constructor(){
        super();
        this.state = {
            recents: null,
            }
    }
    componentDidMount(){
        //console.log(this.props.token);
        this.getPrevData();
    }
    //call API to get data and sets to state
    getPrevData(){
        $.ajax({
            url: "https://api.spotify.com/v1/me/player/recently-played",
            type: "GET",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
            },
            success: (data) => {
                this.setState({
                    recents: data.items,
                })
            }
        })
    }

    // onHover={this.state.prev.track.preview_url}
    getEachPrev(token){
        const prevPlayed = this.state.recents ? (
            this.state.recents.map(function(prev, index) {
                return(                   
                    <Track token={token} trackhref={prev.track.href} key={index}></Track>
                )
            })

        ) : (
            
            <div> No Recent Replays </div>
            
        )

        return prevPlayed;
    };
    
    render(){
        return(
            <div className="recently-played">

                <ul style={{listStyleType:"none"}}>
                {this.getEachPrev(this.props.token)}
                </ul>
            </div>
        )
    }
}

export default RecentlyPlayed;