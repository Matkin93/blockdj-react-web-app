import React, { Component } from 'react';

class SpotifyCallback extends Component {
    render() {
        return (
            <div>
                <p>I am loading....</p>
            </div>
        );
    }
    componentDidMount() {
        const { location, handleAuth } = this.props;
        const searchOrHash = location.hash.length > 0 ? location.hash : location.search;
        if (/access_token|error/.test(searchOrHash)) {
            handleAuth(this.props);
        }    
    }
}

export default SpotifyCallback;