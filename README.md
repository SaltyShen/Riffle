# Riffle

Alpha phase of a web-app using Material and React. 
The purpose of this app is to allow easy collabrative playlist making without needing to pass a phone around and adding more songs to a queue.
The master playlist maker can allow child members to alter playlists aswell, but for the alpha phase we have some main goals.
* Playback needs to be established. It would be a shame if we made this and we can't play a song right?
* All Components should have clean lifecycle hooks. All Components control your profile's playback api.
* Tokens should be easily passed between Components.

# STAND UP OCT 10
### Hello! On today's list, I issued a few problems and improvements that have been tasked for Oct 10.
1. Login Screen is well defined and css is clean.
2. Mobile UI has been observed to be non functional and I have fixed the viewport so the webapp scales accordingly.
3. Using a css has been oberved to impact runtime. Converted most CSS to inline CSS as well as improvements to look and feel.


# In Progress for Oct 12 (Sooner if possible)
1. Playbacksdk is defined. 
2. Playback can be created via a short script 
(link to reference: https://developer.spotify.com/documentation/web-playback-sdk/reference/)
```
var player = new Spotify.Player({
  name: 'Carly Rae Jepsen Player',
  getOAuthToken: callback => {
    // Run code to get a fresh access token

    callback('access token here');
  },
  volume: 0.5
});
```
3. Component hooks are not well defined yet, but will be updated ASAP.

# Known Bugs (Ongoing)
1. Router seems not to play well with the panels I've created. I will need to review ReactRouter, Links, and Route and fix these bugs.
2. I'm concerned about the folder architecture. May need to be restructured via React documentation.
3. Material UI is very non-conformative. Might need to look up some other design frameworks. So far material has not impacted functionality.


