import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
          <AuthZeroGuard {...props} login={azs.login} isAuthenticated={azs.isAuthenticated}>
            <Layout logout={azs.logout}>
              <Home {...props} isAuthenticated={sps.isAuthenticated}/>
              <MapView {...props}/>
            </Layout>
          </AuthZeroGuard>)}
        />
        <Route exact path="/user/callback" render={(props) => {
          return <AuthZeroCallback {...props} handleAuth={azs.handleAuth} />
        }} />
        <Route exact path="/user/unauthorised" render={(props) => {
          return <AuthZeroUnauthorized {...props} logout={azs.logout} />
        }} />
        <Route exact path="/spotify/callback" render={(props) => (
          <AuthZeroGuard {...props} login={azs.login} isAuthenticated={azs.isAuthenticated}>
            <Layout logout={azs.logout}>
              <SpotifyCallback {...props} handleAuth={sps.handleAuth} />
            </Layout>
          </AuthZeroGuard>
        )} />      
        <Route exact path="/spotify/unauthorised" render={(props) => (
          <AuthZeroGuard {...props} login={azs.login} isAuthenticated={azs.isAuthenticated}>
            <Layout logout={azs.logout}>          
              <SpotifyUnauthorised {...props} logout={sps.logout} />
            </Layout>
          </AuthZeroGuard>
        )} />      
      
      </Switch>
    )
  }
}

export default App;
