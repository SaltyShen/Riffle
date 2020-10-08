# Riffle
Prototype of a web-app using Material and React. OAuth is complete. 
AJAX calls are now clean and data is saved on component state. 
Need to set up functionality for playbacksdk. (Also I should set up a development journal.)

For now I will be posting updates here.

It's been a month since the last push wow! Recently moved so life has been busy, but its time to
get back to my daily programming routine. COVID has been harsh on my life lately but thats no reason
to stop learning right? Heres some updates in my local version that I will be pushing on Oct. 9th 2020.

I have completely partitioned the login panel and the application itself. 

This will help in design later on when all the panes and routers have been set up so the main application
isn't clutered by what should have been two panels in the first place. So far everything is up and operational
what is on the schedule for developement is getting the playbackSDK operational. Spotify for developers API 
have dramatically simplified this by making it only two lines of scripts in the header in index.html
(See: https://developer.spotify.com/documentation/web-playback-sdk/).

Once this is up and operational, I have a basic button that calls the spotify player to play, pause, ff and rr.
Once these all are operational, I will add them all to the Player component and make a simple interface using these assets.

After this, I'll need to interweive all these components, including all the pages I've previously made but afterwards 
The alpha is finished! I'll then move forward by these iterations:

BETA GOAL: 
* *Implement the collabrative playlist functionality via some asynchronous playback through a master device.*
* *Create a "key login" system using Spring Boot to create the first iteration of the website API.*
* *Clean up design via a better design framework (I love you Google, but MaterialUI is very underwhelming).*

FINISH GOALS:
* *Get this project onto Amazon AWS.*
* *Fix any bugs along the way.*
* *Test ALL components via unit testing.*
* *Share with friends, family, etc.*
