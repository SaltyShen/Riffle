import React, { Component } from 'react';
 
import { SpotifyApiContext, Artist } from 'react-spotify-api';
 
function Example(props) {
  return (
    <SpotifyApiContext.Provider value={props.token}>
      <Artist id={props.id}>
        {({ data, loading, error }) =>
          data ? (
            <div>
              <h1>{data.name}</h1>
              <ul>
                {data.genres.map(genre => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ) : null
        }
      </Artist>
    </SpotifyApiContext.Provider>
  );
}