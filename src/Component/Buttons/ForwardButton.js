import React, {Component} from 'react';
import $ from 'jquery';

class ForwardButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: this.props.token
        }
        this.next = this.next.bind(this);
    }

    next(){
        $.ajax({
            url: "https://api.spotify.com/v1/me/player/next",
            type: "POST",
            headers: {
                'Authorization' : 'Bearer ' + this.props.token
            },
            dataType: "json",
            contentType: "application/json",
            success: () => {
                console.log('next');
            },
            error: () => {
                console.log("something went wrong play");
            }
        });   
    }
    
    

    render(){


        return(
                    <button className='play-button' onClick={this.next}>Next</button>
        );
    }
};

export default ForwardButton;
