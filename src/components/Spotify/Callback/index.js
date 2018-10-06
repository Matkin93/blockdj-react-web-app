import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SpotifyCallback extends Component {
    render() {
        return (
            <div>
                <p>I am loading....</p>
            </div>
        );
    }
    componentDidMount() {
        const { location, handleSpotifyAuth } = this.props;
        const searchOrHash = location.hash.length > 0 ? location.hash : location.search;
        if (/access_token|error/.test(searchOrHash)) {
            handleSpotifyAuth(this.props);
        }    
    }
}

SpotifyCallback.propTypes = {
    handleSpotifyAuth: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
}

export default SpotifyCallback;