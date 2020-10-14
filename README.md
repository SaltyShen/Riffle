
#introduction
Hello and welcome to my project!
The purpose of this app is to quickly create playlists over Spotify quickly.

I was inspired to create this with COVID and my issue with passing my phone around
for others to add songs to a queue or a playlist. I figured, why hasn't somebody stream
lined collabrative playlists? Spotify currently has local listening as a beta and it isn't
quite the most robust experience yet.

## Oct 12 Notes

Spotify's webplaybacksdk quick start guide is not not entirely correct in the context of 
building a player in React. The guide tells you to create the player via:

```
window.onSpotifyWebPlaybackSDKReady = () => {
  const token = '[My Spotify Web API access token]';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); }
  });
```
the context of using the player instantiated in index.html needs to be declared as 
```
  const player = new window.Spotify.Player ({ .... });
  //(previously declared with promises but it seems better with correct context. less code too.)
```

### Oct 14th Standup

We did it! We have the spotify webplaybacksdk up and running!
This doesn't come without added complexity. Now I need to create some more components.
We now need to create a component that lists and selects a device for playback,
but having this up and running has made this project into a actual usable web app.

### Today's Menu

1. Update coverart with hooks to update via next, prev, current song.
2. Create the device_id component that will update state with device_id.

### Known bugs

1. Router seems to not play well with my pages. Will need up look over documentation on reactRouter, Links, etc. and update code accordingly.
2. React unit testing shows components perform better with inline css. Need to update all css to inline css.
