
#introduction
Hello and welcome to my project!
The purpose of this app is to quickly create playlists over Spotify quickly.

I was inspired to create this with COVID and my issue with passing my phone around
for others to add songs to a queue or a playlist. I figured, why hasn't somebody stream
lined collabrative playlists? Spotify currently has local listening as a beta and it isn't
quite the most robust experience yet.

# Oct 18th Sunday

Created cookies so you will not need to log in if session is refreshed.
Updated styling. Changed back to .css files by recommendation (thanks reddit.)
Updated Track component to suit both playlist and recently played.
Will be updating these components to a drop down menu to play on click.

# Oct 19th Menu

1. Update calls to spotify api to player calls.
2. figure out how I may call the window.spotify.player from other components. 
   from what I see, I declared it as a local variable but I need the global context 
   of the player.

# Known bugs

1. Router seems to not play well with my pages. Will need up look over documentation on reactRouter, Links, etc. and update code accordingly (May refrain from using routers).