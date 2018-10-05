import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthZeroService from '../../services/AuthZeroService';
import Auth from '../Auth';
import Callback from '../Callback';
import Unauthorised from '../Unauthorised';
import Layout from '../Layout';

class App extends Component {
  render() {
    const azs = new AuthZeroService();
    return (
      <Switch>
        <Route exact path="/" render={(props) => (
          <Auth {...props} login={azs.login} isAuthenticated={azs.isAuthenticated}>
            <Layout logout={azs.logout}>
              I am home
            </Layout>
          </Auth>)}
        />
        <Route exact path="/callback" render={(props) => {
          return <Callback {...props} handleAuthentication={azs.handleAuthentication} />
        }} />
        <Route exact path="/unauthorised" render={(props) => {
          return <Unauthorised {...props} logout={azs.logout} />
        }} />
      </Switch>
    )
  }
}

export default App;
