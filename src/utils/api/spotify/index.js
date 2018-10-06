import axios from 'axios';
import {getSpotifyAccessToken} from '../../common';

const API_URL = 'https://api.spotify.com/v1';

axios.defaults.headers.common['Authorization'] = `Bearer ${getSpotifyAccessToken()}`

export const getPlaylists = () => {
    return axios.get(`${API_URL}/me/playlists`);
}

export const getTracksForPlaylist = (url) => {
    return axios.get(url);
}

export const getPlaylistTracks = (id) => {
    return axios.get(`${API_URL}/playlists/${id}/tracks`);
}