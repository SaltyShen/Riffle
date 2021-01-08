
import React, { Component } from "react";
import './progbar.css';

class ProgBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            progress: this.props.progress,
            token: this.props.token
        }
    };

    
    getDurationValue(timeValue){
        var minutes = Math.floor(timeValue /1000/60);
        var seconds = (timeValue /1000%60).toFixed(0);
        return minutes + ":" + (seconds <10 ? '0' : '') + seconds;
    }
    getLeftValue(){
        var end = this.props.duration_ms;
        var begin = this.props.progress_ms;
        console.log(Math.floor((begin/end) * 100));

    }
    render(){
        return(
            <div className="prog-bar-container">
                <div className="time-stamp">{this.getDurationValue(this.props.progress_ms)}</div>
                    <div className="progress-bar">
                        <div className="prog-bar-scroll" style={{
                            position: 'absolute', 
                            height:'13px', 
                            width: (this.props.progress_ms/1000)/(this.props.duration_ms/1000) * 44.44 + "vw",
                            margin: "5px 5px 0 6px", 
                            borderRadius:"50px", 
                            background:'yellow'
                            }}>
                        </div>
                    </div>
                <div className="time-stamp">{this.getDurationValue(this.props.duration_ms)}</div>
            </div>
        )
    }
}
export default ProgBar;