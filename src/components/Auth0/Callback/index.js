import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AuthZeroCallback extends Component {
    render() {
        return (
            <div>
                <p>I am loading....</p>
            </div>
        );
    }
    componentDidMount() {
        const { location, handleAuthZeroAuth } = this.props;
        if (/access_token|id_token|error/.test(location.hash)) {
            handleAuthZeroAuth(this.props);
        }
    }
}

AuthZeroCallback.propTypes = {
    handleAuthZeroAuth: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
}

export default AuthZeroCallback;