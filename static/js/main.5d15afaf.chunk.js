(this.webpackJsonprifflev1=this.webpackJsonprifflev1||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.bf2c47e6.svg"},33:function(e,t,a){e.exports=a(51)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),s=(a(38),a(6)),l=a(7),c=a(9),u=a(8),p=a(30),m=(a(39),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("input",{className:"search-bar",type:"text",placeholder:"Search A Session"})}}]),a}(n.Component)),h=a(22),d=a.n(h),f=(a(40),a(14)),y=a(11),g=a.n(y),v=(a(41),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={display_name:null,email:null,href:null,id:null,followers:null,profile_pic:null,showMenu:!1},n.renderMenu=n.renderMenu.bind(Object(f.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"getUserData",value:function(){var e=this;g.a.ajax({url:"https://api.spotify.com/v1/me/","Content-Type":"application/json",headers:{Authorization:"Bearer "+this.props.token},type:"GET",success:function(t){e.setState({email:t.email,display_name:t.display_name,href:t.href,followers:t.followers.total,id:t.id,profile_pic:t.images[0].url,product:t.product})}})}},{key:"renderMenu",value:function(){this.setState((function(e){return{showMenu:!e.showMenu}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"user-pane"},r.a.createElement("button",{className:"user-btn",onClick:this.renderMenu,style:{backgroundImage:"url(".concat(this.state.profile_pic,")")}}),this.state.showMenu?r.a.createElement("div",{className:"drop-menu"},r.a.createElement("p",null,this.state.id),r.a.createElement("p",null,this.state.product),r.a.createElement("p",null,this.state.followers)):null)}}]),a}(n.Component)),k=function(e){return r.a.createElement("nav",{className:"nav-wrapper"},r.a.createElement("img",{src:d.a,className:"nav-logo",alt:"logo"}),r.a.createElement(m,null),r.a.createElement(v,{token:e.token}))},b=(a(42),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={token:n.props.token,playToggle:!1},n.play=n.play.bind(Object(f.a)(n)),n.pause=n.pause.bind(Object(f.a)(n)),n}return Object(l.a)(a,[{key:"play",value:function(){var e=this;g.a.ajax({url:"https://api.spotify.com/v1/me/player/play",type:"PUT",headers:{Authorization:"Bearer "+this.props.token},dataType:"json",contentType:"application/json",success:function(){console.log("click ".concat(e.state.playToggle)),e.setState((function(e){return{playToggle:!e.playToggle}}))},error:function(){console.log("something went wrong play")}})}},{key:"pause",value:function(){var e=this;g.a.ajax({url:"https://api.spotify.com/v1/me/player/pause",type:"PUT",headers:{Authorization:"Bearer "+this.props.token},success:function(){console.log("click ".concat(e.state.playToggle)),e.setState((function(e){return{playToggle:!e.playToggle}}))},error:function(){console.log("something went wrong pause")}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"play-button-container"},this.state.playToggle?r.a.createElement("button",{className:"play-button",onClick:this.play},"Play"):r.a.createElement("button",{className:"play-button",onClick:this.pause},"Pause"))}}]),a}(n.Component)),E=(a(43),a(44),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={progress:n.props.progress,token:n.props.token},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.props.callBack()}),1e3)}},{key:"getDurationValue",value:function(e){var t=Math.floor(e/1e3/60),a=(e/1e3%60).toFixed(0);return t+":"+(a<10?"0":"")+a}},{key:"render",value:function(){return r.a.createElement("div",{className:"prog-bar-container"},r.a.createElement("div",{className:"time-stamp"},this.getDurationValue(this.props.progress_ms)),r.a.createElement("div",{className:"progress-bar"},r.a.createElement("div",{className:"prog-bar-scroll",style:{position:"fixed",height:"13px",left:"".concat(this.state.progress,"vw"),margin:"4px 5px 0 3px",borderRadius:"50px",background:"yellow"}})),r.a.createElement("div",{className:"time-stamp"},this.getDurationValue(this.props.duration_ms)))}}]),a}(n.Component)),w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={token:n.props.token,item:null,is_playing:null,progress_ms:null,duration_ms:null},n.getPlayerDataContext=n.getPlayerDataContext.bind(Object(f.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getPlayerDataContext()}},{key:"getPlayerDataContext",value:function(){var e=this;g.a.ajax({url:"https://api.spotify.com/v1/me/player/",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e.state.token)},success:function(t){t?(e.setState({item:t.item,is_playing:t.is_playing,progress_ms:t.progress_ms,duration_ms:t.item.duration_ms}),console.log("progress: ".concat(e.state.progress_ms," /n duration: ").concat(e.state.duration_ms))):console.log("Nothing Playing, try playing something")}})}},{key:"getPlayerDataCurrent",value:function(){var e=this;g.a.ajax({url:"https://api.spotify.com/v1/me/player/currently-playing",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e.props.token)},success:function(t){t?e.setState({item:t.item,is_playing:t.is_playing,progress_ms:t.progress_ms}):console.log("nothing currently playing, try playing something!")}})}},{key:"render",value:function(){return this.state.item?r.a.createElement("div",{className:"player-interface"},r.a.createElement("div",{className:"cover-art",style:{backgroundImage:"url(".concat(this.state.item.album.images[1].url,")"),height:this.state.item.album.images[1].height,width:this.state.item.album.images[1].width}}),r.a.createElement("div",{className:"control-pane"},r.a.createElement("div",{className:"details-pane"},r.a.createElement("p",{className:"track-name",style:{textAlign:"center",fontWeight:"700"}},this.state.item.name),r.a.createElement("p",{className:"track-album-name",style:{textAlign:"center"}},this.state.item.album.name)),r.a.createElement("div",{className:"control-panel"},r.a.createElement("div",{className:"control-cluster"},r.a.createElement(b,{token:this.state.token}),r.a.createElement(b,{token:this.state.token}),r.a.createElement(b,{token:this.state.token}),r.a.createElement(b,{token:this.state.token}),r.a.createElement(b,{token:this.state.token})),r.a.createElement(E,{progress_ms:this.state.progress_ms,duration_ms:this.state.duration_ms,callBack:this.getPlayerDataContext})))):r.a.createElement("div",{className:"player-interface"},r.a.createElement("div",{className:"empty-cover"},r.a.createElement(b,{token:this.state.token})))}}]),a}(n.Component),j=a(77),_=a(72),O=a(73),N=a(74),C=a(76),x=a(75),S=a(25),T=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fetchPlaylists=function(){g.a.ajax({url:"https://api.spotify.com/v1/me/playlists",type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+n.props.token)},success:function(e){n.setState({token:n.props.token,playlists:e.items})}})},n.state={token:null,playlists:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchPlaylists()}},{key:"getCurrentState",value:function(){return this.state.playlists?this.state.playlists.map((function(e,t){return r.a.createElement(j.a,{key:t},r.a.createElement(_.a,{avatar:r.a.createElement(C.a,{"aria-label":"recipe"},r.a.createElement("img",{href:e.images[0].url,alt:"playlist art"})),action:r.a.createElement(x.a,{"aria-label":"settings"}),title:e.name,subheader:e.owner.display_name}),r.a.createElement(O.a,{image:e.images[0].url,title:e.name}),r.a.createElement(N.a,null,r.a.createElement(S.a,{variant:"body2",color:"textSecondary",component:"p"},e.description)))})):r.a.createElement("div",null," No Playlists Found! ")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Playlists"),r.a.createElement("ul",null,this.getCurrentState(this.state.token)))}}]),a}(n.Component),P=(a(48),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={title:null,artist:[],track_cover_art_url:null,preview_url:null,uri:""},e.playTrack=e.playTrack.bind(Object(f.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getTrackData()}},{key:"playTrack",value:function(){g.a.ajax({url:"https://api.spotify.com/v1/me/player/play",type:"PUT",headers:{Authorization:"Bearer "+this.props.token},dataType:"json",contentType:"application/json",data:JSON.stringify({uris:["".concat(this.state.uri)]}),success:function(e){console.log("success: ".concat(e))},error:function(e){console.log(e)}})}},{key:"getTrackData",value:function(){var e=this;g.a.ajax({url:this.props.trackhref,type:"GET",cors:!0,contentType:"application/json",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e.props.token)},success:function(t){e.setState({title:t.name,artist:t.artists,track_cover_art_url:t.album.images[1].url,preview_url:t.preview_url,duration_ms:t.duration_ms,uri:t.uri})}})}},{key:"render",value:function(){var e=this.state.artist.length,t=this.state.artist.map((function(t,a){return e===a+1?r.a.createElement("b",{key:a},t.name):r.a.createElement("b",{key:a},t.name+", ")}));return r.a.createElement("li",{className:"track"},r.a.createElement("img",{className:"album-art",src:this.state.track_cover_art_url,alt:"album art"}),r.a.createElement("div",{className:"descriptor"},r.a.createElement("p",{className:"song-title"},this.state.title),r.a.createElement("p",{className:"song-artist"},t),r.a.createElement("button",{className:"play-overlay",onClick:this.playTrack},"Play")))}}]),a}(n.Component)),D=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={recents:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getPrevData()}},{key:"getPrevData",value:function(){var e=this;g.a.ajax({url:"https://api.spotify.com/v1/me/player/recently-played",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e.props.token)},success:function(t){e.setState({recents:t.items})}})}},{key:"getEachPrev",value:function(e){return this.state.recents?this.state.recents.map((function(t,a){return r.a.createElement(P,{token:e,trackhref:t.track.href,key:a})})):r.a.createElement("div",null," No Recent Replays ")}},{key:"render",value:function(){return r.a.createElement("div",{className:"recently-played"},r.a.createElement("ul",{style:{listStyleType:"none"}},this.getEachPrev(this.props.token)))}}]),a}(n.Component),A=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={token:n.props.token},n.initPlayer(),n}return Object(l.a)(a,[{key:"initPlayer",value:function(){var e=this;window.onSpotifyWebPlaybackSDKReady=function(){var t=e.state.token,a=new window.Spotify.Player({name:"Riffle Player",getOAuthToken:function(e){e(t)}});return a.addListener("initialization_error",(function(e){var t=e.message;console.error(t)})),a.addListener("authentication_error",(function(e){var t=e.message;console.error(t)})),a.addListener("playback_error",(function(e){var t=e.message;console.error(t)})),a.addListener("player_state_changed",(function(e){console.log(e)})),a.addListener("ready",(function(t){var a=t.device_id;console.log("Ready with Device ID",a),e.setState={deviceid:a}})),a.addListener("not_ready",(function(e){var t=e.device_id;console.log("Device ID has gone offline",t)})),a.connect().then((function(e){e&&console.log("Player connected!")})),a}}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App",style:{background:"#212121",width:"100%"}},r.a.createElement("header",{className:"App-header"}),r.a.createElement(k,{token:this.state.token}),r.a.createElement("div",null,r.a.createElement(w,{token:this.state.token}),r.a.createElement(D,{token:this.state.token}),r.a.createElement(T,{token:this.state.token}))))}}]),a}(n.Component),R=["user-read-currently-playing","user-read-playback-state","user-read-recently-played","user-read-private","user-read-email","streaming"],M=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{});window.location.hash="";var W=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);var n=(e=t.call(this)).checkCookie();return e.state=null!=n?{token:n}:{token:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){if(!this.state.token){var e=M.access_token;e&&(this.setState({token:e}),document.cookie="token=".concat(e))}}},{key:"checkCookie",value:function(){var e=document.cookie.match(new RegExp("(^| )token=([^;]+)"));return e?e[2]:null}},{key:"render",value:function(){return r.a.createElement("div",{className:"login-pane"},!this.state.token&&r.a.createElement("div",{className:"loginbox",style:{paddingTop:"25vh",paddingLeft:"10vw",height:"100vh",background:"linear-gradient(35deg, #CCFFFF, #FFCCCC)"}},r.a.createElement("article",null,r.a.createElement("img",{src:d.a,style:{height:"40px",width:"40px"},alt:"icon"}),r.a.createElement("h4",{style:{fontWeight:"bold",fontSize:"20px",font:"Circular,arial"}},"Riffle Collabrative Player"),r.a.createElement("p",{style:{fontWeight:"400",font:"Circular,ariel",fontSize:"17px"}},"A fullstack project created by Peter Wang.",r.a.createElement("br",null),"Create memorable playlists with anyone."),r.a.createElement("p",{style:{fontWeight:"100",font:"Circular,arial",color:"grey"}},"Powered by Spotify.")),r.a.createElement("a",{className:"btn",style:{marginTop:"20px",marginLeft:"5%",fontWeight:"600",borderRadius:"25px"},href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("9110bb9fbfc4422c85e722040cf63bc8","&redirect_uri=").concat("https://shen-ui.github.io/Riffle/","&scope=").concat(R.join("%20"),"&response_type=token&show_dialog=true")},"Login with Spotify"),r.a.createElement("footer",{class:"nav-down"},r.a.createElement("p",{class:"footer-sig"},"Developed to share by ",r.a.createElement("b",null,"Peter Wang")),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:peterhuiwang1995@gmail.com"},r.a.createElement("i",{class:"material-icons"},"email")),r.a.createElement("a",{href:"https://www.linkedin.com/in/shenhwang/"},r.a.createElement("i",{class:"material-icons"},"work")),r.a.createElement("a",{href:"https://github.com/shen-ui"},r.a.createElement("i",{class:"material-icons"},"code"))))),this.state.token&&r.a.createElement(A,{token:this.state.token}))}}]),a}(n.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Riffle",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Riffle","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.5d15afaf.chunk.js.map