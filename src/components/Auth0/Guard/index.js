import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const AuthZeroGuard = props => {
    const {isAuthZeroAuthenticated, authZeroLogin, children} = props;
    if (isAuthZeroAuthenticated()) return children
    else return (
        <Button color="primary" onClick={() => authZeroLogin()}>Login</Button>
    )
}

AuthZeroGuard.propTypes = {
    isAuthZeroAuthenticated: PropTypes.func.isRequired,
    authZeroLogin: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
}

export default AuthZeroGuard;