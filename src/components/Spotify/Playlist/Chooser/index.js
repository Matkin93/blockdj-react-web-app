import React, { Component } from 'react';

import {Container, Row, Col, Button} from 'reactstrap';

import produce from 'immer';

import * as api from '../../../../utils/api/spotify';

class SpotifyPlaylistChooser extends Component {
    state = {
        playlists: []
    }
    render() {
        const {playlists} = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <p>Select the playlist you want to enter or click the view button to view the tracks the playlist contains...</p>
                        <ul style={{margin:'0',padding:'0'}}> 
                            {playlists && playlists.map(playlist => {
                                return (<li key={playlist.id} style={{listStyleType:'none', marginBottom:'1rem'}}>{playlist.name}<span style={{display:'inline-block','float':'right','clear':'both'}}><Button size="sm" style={{marginRight:'0.5rem'}} onClick={() => this.enterPlaylist(playlist)}>Enter this playlist</Button><Button size="sm" onClick={() => this.playInSpotify(playlist)} style={{marginRight:'0.5rem'}}>Play in Spotify</Button><Button size="sm">Tracks</Button></span></li>)
                            })}                    
                        </ul>
                    </Col>
                </Row>
            </Container>
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
    enterPlaylist = (playlist) => {
        const {id, tracks} = playlist;
        console.log(id, tracks);
        // TODO: Call the api function getTracksForPlaylist and pass in the tracks.href parameter
        // This will return a list of tracks for this playlist
        // Then call a remote api method sending the playlist and tracks information
        // Bingo tracks added to remote database as entry in competition
    }
    playInSpotify = (playlist) => {
        window.location.href = playlist.uri;
    }
}

export default SpotifyPlaylistChooser;