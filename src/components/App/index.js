import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthZeroService from '../../services/AuthZero';
import SpotifyService from '../../services/Spotify';
import Guard from '../Auth0/Guard';
import {default as AuthZeroCallback} from '../Auth0/Callback';
import {default as AuthZeroUnauthorized} from '../Auth0/Unauthorised';
import {default as SpotifyCallback} from '../Spotify/Callback';
import {default as SpotifyUnauthorised} from '../Spotify/Unauthorised';

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
          <Guard {...props} login={azs.login} isAuthenticated={azs.isAuthenticated}>
            <Layout logout={azs.logout}>
              <Home {...props} isAuthenticated={sps.isAuthenticated}/>
              <MapView {...props}/>
            </Layout>
          </Guard>)}
        />
        <Route exact path="/user/callback" render={(props) => {
          return <AuthZeroCallback {...props} handleAuth={azs.handleAuth} />
        }} />
        <Route exact path="/user/unauthorised" render={(props) => {
          return <AuthZeroUnauthorized {...props} logout={azs.logout} />
        }} />
        <Route exact path="/spotify/callback" render={(props) => (
          <Guard {...props} login={azs.login} isAuthenticated={azs.isAuthenticated}>
            <Layout logout={azs.logout}>
              <SpotifyCallback {...props} handleAuth={sps.handleAuth} />
            </Layout>
          </Guard>
        )} />      
        <Route exact path="/spotify/unauthorised" render={(props) => (
          <Guard {...props} login={azs.login} isAuthenticated={azs.isAuthenticated}>
            <Layout logout={azs.logout}>          
              <SpotifyUnauthorised {...props} logout={sps.logout} />
            </Layout>
          </Guard>
        )} />      
      
      </Switch>
    )
  }
}

export default App;
