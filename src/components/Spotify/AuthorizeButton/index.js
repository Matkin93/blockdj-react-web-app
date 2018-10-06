import React from 'react';

import { Button } from 'reactstrap';

import { getSpotifyAuthUrl } from '../../../utils/common';
import config from '../../../config';

const SpotifyAuthorizeButton = () => {
    const authorize = () => {
        window.location.href = getSpotifyAuthUrl(config.SPOTIFY);
    }
    return (
        <Button onClick={authorize} size="sm" style={{marginRight:'0.5rem'}}><i className="fab fa-spotify"></i> Authorize</Button>
    );    
};

export default SpotifyAuthorizeButton;