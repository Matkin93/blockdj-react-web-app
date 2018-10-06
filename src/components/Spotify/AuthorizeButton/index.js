import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';

import { getSpotifyAuthUrl } from '../../../utils/common';
import config from '../../../config';

const SpotifyAuthorizeButton = (props) => {
    const {isSpotifyAuthenticated, spotifyLogout} = props;
    const authorize = () => {
        window.location.href = getSpotifyAuthUrl(config.SPOTIFY)
    }
    const deauthorize = () => {
        spotifyLogout(props);
    }
    if (!isSpotifyAuthenticated()){
        return (<Button onClick={authorize} size="sm" style={{marginRight:'0.5rem'}}><i className="fab fa-spotify"></i> Authorize</Button>)
    } else {
        return (<Button onClick={deauthorize} size="sm" style={{marginRight:'0.5rem'}}><i className="fab fa-spotify"></i> Deauthorize</Button>)
    }
}



SpotifyAuthorizeButton.propTypes = {
    spotifyLogout: PropTypes.func.isRequired,
    isSpotifyAuthenticated: PropTypes.func.isRequired
}

export default SpotifyAuthorizeButton;