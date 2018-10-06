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

import Layout from '../Layout';
import Home from '../Home';
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
              <Home {...props}/>
              <MapView {...props}/>
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
    return this.state.profile;
  }
  setProfile = (profile) => {
    this.setState(produce(draft => {
      draft.profile = profile
    }))
  }
}

export default App;
