import React, {Component} from 'react';
import $ from 'jquery';
import './playButton.css'

class playbutton extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: this.props.token,
            playToggle: false
        }
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
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
                console.log(`click ${this.state.playToggle}`);
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
                'Authorization' : 'Bearer ' + this.props.token
            },
            success: () => {
                console.log(`click ${this.state.playToggle}`);
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
            <div>
            {
                this.state.playToggle ? (
                    <button className='play-button' onClick={this.play}>Play</button>
                ) : (
                    <button className='pause-button' onClick={this.pause}>Pause</button>
                )
            }
            </div>
        );
    }
};

export default playbutton;
