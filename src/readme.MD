
# introduction
Hello and welcome to my project!
The purpose of this app is to quickly create playlists over Spotify quickly.

I was inspired to create this with COVID and my issue with passing my phone around
for others to add songs to a queue or a playlist. I figured, why hasn't somebody stream
lined collabrative playlists? Spotify currently has local listening as a beta and it isn't
quite the most robust experience yet.

# Jan 7 Update

I've been really burned out honestly from this webapp, but I've been looking back at this and have fixed functionality.
Previously, I had the <strong>ProgBar.js</strong> update when the player called the player endpoint : https://api.spotify.com/v1/me/player/
I've updated the player will get the endpoint on 1 second intervals and it seems to have fixed multiple problems while also maintaining functionality.
All components now rerender upon the player itself updating and I've seemed to move past a very minor (but very annoying) road block in this web app developement.
I've also updated some css to make the web app design more cohesive, but is still subject to change further down developement. 

# Jan 8 Menu

1. Play/Pause button is not updating when the track is over. The issue is, the component does not update upon new props, but state change. Will need to be fixed, but realitively minor.
2. Tokens from spotify last approximately 1 hour. During developement I have saved the token via local data and both may not be secure nor persistant. Will need to create a 
   "are you still listening?" pane upon 1 hour passing. This panel will need to be a div with a higher Z-index as well as some animations for css. 
   it will also need a function in the <strong> PlayerPane.js </strong> where it will call Spotify API for a new token. 
   For reference, https://developer.spotify.com/documentation/ios/guides/token-swap-and-refresh/

# Known bugs
Currently no bugs to my knowledge, but I'm sure they will come as I improve functionality. Let me know if there are any bugs!