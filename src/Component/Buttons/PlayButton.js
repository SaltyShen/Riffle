import React, {Component} from 'react';
import $ from 'jquery';
import './playbutton.css';
/* 
    props: did not destructure, only one prop token for ajax call.
*/
class PlayButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            token: this.props.token,
            playToggle: this.props.playToggle
        };
        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
    }
    play(){
        $.ajax({
            url: "https://api.spotify.com/v1/me/player/play",
            type: "PUT",
            headers: {
                'Authorization' : 'Bearer ' + this.props.token
            },
            dataType: "json",
            contentType: "application/json",
            success: () => {
                this.setState(prevState => ({
                    playToggle: !prevState.playToggle
                    })
                );
            },
            error: () => {
                console.log("something went wrong play");
            }
        });
    }

    pause(){
        $.ajax({
            url: "https://api.spotify.com/v1/me/player/pause",
            type: "PUT",
            headers: {
                'Authorization' : 'Bearer ' + this.state.token
            },
            success: () => {
                
                this.setState(prevState => ({
                    playToggle: !prevState.playToggle
                    })
                );
            },
            error: () => {
                console.log("something went wrong pause");
            }
        });   
    }
    render(){

        return(
            <div className='play-button-container'>
            {
                this.state.playToggle ? (
                    <button className='play-button' key={this.state.playToggle} onClick={this.pause}>Pause</button>
                ) : (
                    <button className='play-button' key={this.state.playToggle} onClick={this.play}>Play</button>
                )
            }
            </div>
        );
    }
};

export default PlayButton;
