import React, {Component} from 'react';
import $ from 'jquery';

/*

    Taken Props:
        token: for cors jquery call

    To Do:
    implement a good framework
    Will most likely be put into navbar with a drop down box that lets you see your profile and then go into a settings page if button "settings" is clicked.

*/

class User extends Component {
    constructor(){
        super();
        this.state = {
            display_name: null,
            email: null,
            href: null, 
            id: null,
            followers: null,
            profile_pic: null,
            product: null
        }
    }
    componentDidMount(){
        this.getUserData();
    }
    getUserData(){
        $.ajax({
            url: "https://api.spotify.com/v1/me/",
            'Content-Type' : 'application/json',
            headers: {
                'Authorization' : 'Bearer ' + this.props.token
            },
            type: "GET",
            success: (data) => {        
                this.setState({
                    email: data.email,
                    display_name: data.display_name,
                    href: data.href,
                    followers: data.followers.total,
                    id: data.id,
                    profile_pic: data.images[0].url,
                    product: data.product
                });
            },
            fail: () => {
                alert("API Playlist call failed.");
            } 
            
        })
    }
    
    render(){
        return(
            <div>
            <h1>User</h1>

            <img src={this.state.profile_pic} alt="pfpic"></img>
            <p><b>ID</b>: {this.state.id}</p>
            <p><b>PRODUCT</b>: {this.state.product}</p>
            <p><b>FOLLOWERS</b>: {this.state.followers}</p>
            
            </div>
        )
    }   
}

export default User;