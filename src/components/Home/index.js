import React, { Component } from 'react';
import { Button } from 'reactstrap';

import produce from 'immer';

import config from '../../config';
import { getSpotifyAuthUrl } from '../../utils/common';
import * as api from '../../utils/api/spotify';

class Home extends Component {
    state = {
        playlists: [],
        tracks:[]
    }
    authorize = () => {
        window.location.href = getSpotifyAuthUrl(config.SPOTIFY);
    }
    render() {
        return (
            <div>
                <Button onClick={this.authorize}><i className="fab fa-spotify"></i> Authorize</Button>
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
                }), () => this.getPlaylistTracks())
            })
    }
    getPlaylistTracks = () => {
        api.getTracksForPlaylist(this.state.playlists[0].tracks.href)
            .then(response => {
                this.setState(
                    produce(draft => {
                        draft.tracks = response.data.items
                    })
                )
            })
    }
}

export default Home;