import React, {Component} from 'react';
import $ from 'jquery';
import IconButton from "@material-ui/core/IconButton"
import PlayIcon from "@material-ui/icons/PlayArrow"

class playbutton extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: this.props.token,
            playToggle: false
        }
    }

    play(){
        function handleClick(e){
            $.ajax({
                url: "https://api.spotify.com/v1/me/player/play",
                beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
                },
                success: () => {
                        console.log('play: success!');
                        this.setState({
                            playToggle: true
                        })
                }
            });
        }
    }
    pause(){
        function handleClick(e){
            $.ajax({
                url: "https://api.spotify.com/v1/me/player/pause",
                beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
                },
                success: () => {
                        console.log('pause: success!');
                        this.setState({
                            playToggle:false
                        })

                }
            });
        }
    }

    

    render(){

        var playButton = (this.state.play === false) ? (
            <IconButton aria-label="Play" onClick={this.play}>
                <PlayIcon />
            </IconButton>
          ) : (
            <IconButton aria-label="Play" onClick={this.pause}>

            </IconButton>
          )

        return(playButton);
    }
};

export default playbutton;
