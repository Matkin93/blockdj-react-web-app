import React from 'react';
import PropTypes from 'prop-types';

const SpotifyUnauthorised = (props) => {
    const {spotifyLogout} = props;
    return (
        <div>
            <p>Unauthorised</p>
            <p>You are unauthorised. Please click the button below to try again</p>
            <p><button onClick={() => spotifyLogout(props)}>Logout</button></p>
        </div>
    );
};

SpotifyUnauthorised.propTypes = {
    spotifyLogout: PropTypes.func.isRequired
}

export default SpotifyUnauthorised;