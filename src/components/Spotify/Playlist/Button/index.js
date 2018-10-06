import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'reactstrap';

const SpotifyPlaylistButton = (props) => {
    const {isSpotifyAuthenticated, history} = props;
    if (isSpotifyAuthenticated()) return (<Button size="sm" onClick={()=>history.push('/playlists')} style={{marginRight:'0.5rem'}}><i className="fab fa-spotify"></i> Playlists</Button>);
    else return null;
};

SpotifyPlaylistButton.propTypes = {
    isSpotifyAuthenticated: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

export default SpotifyPlaylistButton;