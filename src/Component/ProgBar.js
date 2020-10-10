import React, { Component } from "react";

export default class ProgBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            progress: this.props.progress,
            token: this.props.token
        }
    }

    render(){
        return(
            <div>
                progress bar
            </div>
        )
    }
}