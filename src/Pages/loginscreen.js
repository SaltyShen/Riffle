import React from 'react';

const LoginScreen = () => {

    return(
        <div class="container">
            <div id="login">

                <h1>Welcome to Riffle.</h1>
                
                <a href="http://localhost:8888/login" className="btn center"> 
                    Log in with Spotify
                </a>
                
            </div>
        </div>

    )
}

export default LoginScreen;