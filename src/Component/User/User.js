import React, {Component} from 'react';
import $ from 'jquery';
import './User.css';

/*

    Taken Props:
        token: for cors jquery call

    To Do:
    implement a good framework
    Will most likely be put into navbar with a drop down box that lets you see your profile and then go into a settings page if button "settings" is clicked.

*/

class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            display_name: null,
            email: null,
            href: null, 
            id: null,
            followers: null,
            profile_pic: null,
            showMenu: false
        };
        this.renderMenu = this.renderMenu.bind(this);
    };

    componentDidMount(){
        this.getUserData();
    };

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
            }
        })
    };

    renderMenu(){
        this.setState(prevState => ({
            showMenu: !prevState.showMenu
            })
        );
    }

    render(){
        return(
            <div className="user-pane">
                <button className="user-btn"
                    onClick={this.renderMenu}
                    style={{
                        backgroundImage:`url(${this.state.profile_pic})`
                    }}>
                </button>
            {
                this.state.showMenu ? (
                    <div className="drop-menu">
                        <p>{this.state.id}</p>
                        <p>{this.state.product}</p>
                        <p>{this.state.followers}</p>
                    </div>
                ) : (
                    null
                )
            }
            </div>
        )
    }   
}

export default User;