import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import produce from 'immer';

import AuthZeroService from '../../services/AuthZero';
import SpotifyService from '../../services/Spotify';

import AuthZeroGuard from '../Auth0/Guard';
import AuthZeroCallback from '../Auth0/Callback';
import AuthZeroUnauthorized from '../Auth0/Unauthorised';
import SpotifyCallback from '../Spotify/Callback';
import SpotifyUnauthorised from '../Spotify/Unauthorised';
import SpotifyPlaylistChooser from '../Spotify/Playlist/Chooser';
import SpotifyPlaylistTracks from '../Spotify/Playlist/Tracks';
import Profile from '../Profile';
import Layout from '../Layout';
import MapView from '../MapView';

class App extends Component {
  state = {
    profile: false
  }
  render() {
    const azs = new AuthZeroService();
    const sps = new SpotifyService();
    return (
      <Switch>
        <Route exact path="/" render={(props) => (
          <AuthZeroGuard {...props} authZeroLogin={azs.login} isAuthZeroAuthenticated={azs.isAuthenticated}>
            <Layout {...props} authZeroLogout={azs.logout} isSpotifyAuthenticated={sps.isAuthenticated} spotifyLogout={sps.logout}>
              <MapView {...props}/>
            </Layout>
          </AuthZeroGuard>)}
        />
        <Route exact path="/profile" render={(props) => (
          <AuthZeroGuard {...props} authZeroLogin={azs.login} isAuthZeroAuthenticated={azs.isAuthenticated}>
            <Layout {...props} authZeroLogout={azs.logout} isSpotifyAuthenticated={sps.isAuthenticated} spotifyLogout={sps.logout}>
              <Profile {...props}/>
            </Layout>
          </AuthZeroGuard>)}
        />
        <Route exact path="/playlists" render={(props) => (
          <AuthZeroGuard {...props} authZeroLogin={azs.login} isAuthZeroAuthenticated={azs.isAuthenticated}>
            <Layout {...props} authZeroLogout={azs.logout} isSpotifyAuthenticated={sps.isAuthenticated} spotifyLogout={sps.logout}>
              <SpotifyPlaylistChooser {...props}/>
            </Layout>
          </AuthZeroGuard>)}
        />    
        <Route exact path="/playlists/:id/tracks" render={(props) => (
          <AuthZeroGuard {...props} authZeroLogin={azs.login} isAuthZeroAuthenticated={azs.isAuthenticated}>
            <Layout {...props} authZeroLogout={azs.logout} isSpotifyAuthenticated={sps.isAuthenticated} spotifyLogout={sps.logout}>
              <SpotifyPlaylistTracks {...props}/>
            </Layout>
          </AuthZeroGuard>)}
        />                
        <Route exact path="/user/callback" render={(props) => {
          return <AuthZeroCallback {...props} handleAuthZeroAuth={azs.handleAuth} hasProfile={this.hasProfile} />
        }} />
        <Route exact path="/user/unauthorised" render={(props) => {
          return <AuthZeroUnauthorized {...props} authZeroLogout={azs.logout} />
        }} />
        <Route exact path="/spotify/callback" render={(props) => (
          <AuthZeroGuard {...props} authZeroLogin={azs.login} isAuthZeroAuthenticated={azs.isAuthenticated}>
            <Layout {...props} authZeroLogout={azs.logout} isSpotifyAuthenticated={sps.isAuthenticated} spotifyLogout={sps.logout}>
              <SpotifyCallback {...props} handleSpotifyAuth={sps.handleAuth} />
            </Layout>
          </AuthZeroGuard>
        )} />      
        <Route exact path="/spotify/unauthorised" render={(props) => (
          <AuthZeroGuard {...props} authZeroLogin={azs.login} isAuthZeroAuthenticated={azs.isAuthenticated}>
            <Layout {...props} authZeroLogout={azs.logout} isSpotifyAuthenticated={sps.isAuthenticated} spotifyLogout={sps.logout}>
              <SpotifyUnauthorised {...props} spotifyLogout={sps.logout} />
            </Layout>
          </AuthZeroGuard>
        )} />      
      
      </Switch>
    )
  }
  hasProfile = () => {
    // TODO: Call remote api method to check if user has a profile, if he/she does
    // then set the above profile state value to the profile object, otherwise set
    // state profile value to false and return false.
    return this.state.profile;
  }
  setProfile = (profile) => {
    this.setState(produce(draft => {
      draft.profile = profile
    }))
  }
}

export default App;
