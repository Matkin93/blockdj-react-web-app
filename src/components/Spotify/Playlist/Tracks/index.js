import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Container, Row, Col, Button} from 'reactstrap';

import produce from 'immer';

import * as api from '../../../../utils/api/spotify';

class SpotifyPlaylistTracks extends Component {    
    state = {
        tracks: []
    }
    render() {
        const {tracks} = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <p>The tracks in this playlist are shown below...</p>
                        <ul style={{margin:'0',padding:'0'}}>
                            {tracks && tracks.map(track => {
                                return (<li key={track.track.id} style={{listStyleType:'none', marginBottom:'1rem'}}>{track.track.name} - {track.track.artists.map(artist => artist.name)}<span style={{display:'inline-block','float':'right','clear':'both'}}><Button size="sm" onClick={() => this.playInSpotify(track)} style={{marginRight:'0.5rem'}}>Play in Spotify</Button></span></li>)
                            })}
                        </ul>                        
                    </Col>
                </Row>
            </Container>
        );
    }
    componentDidMount() {
        const {match} = this.props;
        api.getPlaylistTracks(match.params.id)
            .then(response => {
                this.setState(produce(draft => {
                    draft.tracks = response.data.items;
                }))
            })
    }
    playInSpotify = (track) => {
        window.location.href = track.track.uri;
    }
}

SpotifyPlaylistTracks.propTypes = {
    match: PropTypes.object.isRequired
}

export default SpotifyPlaylistTracks;