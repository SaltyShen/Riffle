import React, {Component} from 'react';
import Box from '@material-ui/core/Box'
import { green } from '@material-ui/core/colors';

export default class Playbox extends Component{

    state = {
        cover: null,
        title: null,
        playback: null
    };

    divstyle = {
        color: 'green',
        background: 'this'
    };
    render(){
        return(
            <Box component="div"></Box>
        )
    }
}