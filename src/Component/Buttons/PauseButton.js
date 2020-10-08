import React, {Component} from 'react';
import $ from 'jquery';
import IconButton from "@material-ui/core/IconButton"
import PauseIcon from "@material-ui/icons/Pause"

function pause(){
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
                    });

            }
        });
    }
}