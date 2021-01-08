import React, {Component} from 'react';
import $ from 'jquery';

class BackButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: this.props.token
        }
        this.prev = this.prev.bind(this);
    }

    prev(){
        $.ajax({
            url: "https://api.spotify.com/v1/me/player/previous",
            type: "POST",
            headers: {
                'Authorization' : 'Bearer ' + this.props.token
            },
            dataType: "json",
            contentType: "application/json",
            success: () => {
                console.log('back');
            },
            error: () => {
                console.log("something went wrong play");
            }
        });   
    }
    
    

    render(){


        return(
                    <button className='play-button' onClick={this.prev}> Prev </button>
        );
    }
};

export default BackButton;
