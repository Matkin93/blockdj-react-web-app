import React, { Component } from 'react';

import * as api from '../../../utils/api/spotify';

class SpotifyPlaylistChooser extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
    componentDidMount(){
        this.getPlaylists();
    }
    getPlaylists = () => {
        api.getPlaylists()
            .then(response => {
                this.setState(produce(draft=>{
                    draft.playlists = response.data.items;
                }))
            })
    }
}

export default SpotifyPlaylistChooser;