import React, {Component} from 'react';
//import PlayListTrackList from '../PlayListTrackList/PlayListTrackList'
import $ from "jquery";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

/*

    Taken Props: 
    token: for Cors ajax call

    To Do:
    Create an actual framework for this component with PlayListTrackList
    Will probably be rendered as a card with a drop down list 

*/

class Playlists extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: null,
            playlists : null
        }
    }
    componentDidMount(){
        this.fetchPlaylists();
    }

    fetchPlaylists = () => {
        // When the playlist tab is clicked, it will call an
        // ajax call that gets playlists. 
        $.ajax({
            url: "https://api.spotify.com/v1/me/playlists",
            type: "GET",
            beforeSend: (xhr) => {
            xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
            },
            success: (data) => {
                    this.setState({
                        token: this.props.token,
                        playlists: data.items
                    })
                    //console.log(data.items);

            }
        });
    }
    
    //Method to display yourplaylists.
    //May need a ComponentWillUpdate method to call this.
    //Need to assign a key value per every playlist render.
    getCurrentState(){
        const playlists = this.state.playlists ? (
            this.state.playlists.map(function (playlist, index){
                return(
                    //name of playlist
                    //playlist image
                    //maybe playlist creator

                    <Card key={index}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            <img href={playlist.images[0].url} alt="playlist art"/>
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                        </IconButton>
                        }
                        title={playlist.name}
                        subheader={playlist.owner.display_name}
                    />
                    <CardMedia
                        image={playlist.images[0].url}
                        title={playlist.name}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {playlist.description}
                        </Typography>
                    </CardContent>
                    </Card>
                    //<PlayListTrackList token={token} trackhref={playlist.tracks.href}></PlayListTrackList>
                )
        })
    ) : (
            
                <div> No Playlists Found! </div>
            
        )
        return playlists;
    }
    render(){
        return(
            <div>
                <h1>Playlists</h1>
                <ul>
                    {this.getCurrentState(this.state.token)}
                </ul>
            </div>
           )

    }
}

export default Playlists;