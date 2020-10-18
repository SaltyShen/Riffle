import React from "react";

const devices = (props) => {
    
    let devices = this.props.devices ? (
        // if props passed in have value
        props.devices.map(function(devic){
            console.log(device)
        })
    
    ) : (
        // else return no devices
        <div>No Devices</div>
    );

    return(devices);
};

export default devices;