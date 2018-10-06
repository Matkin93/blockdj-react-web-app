import React from 'react';
import PropTypes from 'prop-types';


const AuthZeroUnauthorised = (props) => {
    const {authZeroLogout} = props;
    return (
        <div>
            <p>Unauthorised</p>
            <p>You are unauthorised. Please click the button below to try again</p>
            <p><button onClick={() => authZeroLogout(props)}>Logout</button></p>
        </div>
    );
};

AuthZeroUnauthorised.propTypes = {
    authZeroLogout: PropTypes.func.isRequired
}

export default AuthZeroUnauthorised;