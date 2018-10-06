import qs from 'qs';
import * as jwt_decode from 'jwt-decode';

export const getAuthZeroUser = () => {
    const token = localStorage.getItem('auth0_id_token');
    return token ? jwt_decode(token).sub : null;
}

export const getAuthZeroAccessToken = () => {
    const token = localStorage.getItem('auth0_access_token');
    return token ? token : null;
}

export const getSpotifyAccessToken = () => {
    const token = localStorage.getItem('spotify_access_token');
    return token ? token : null;
}

export const getSpotifyAuthUrl = (config) => {
    return `https://accounts.spotify.com/authorize?client_id=${config.client_id}&response_type=${config.response_type}&redirect_uri=${config.redirect_uri}&state=${getAuthZeroUser()}&show_dialog=${config.show_dialog}`;
}

export const getSpotifyCallbackParams = (location, cb) => {
    const searchOrHash = location.hash.length > 0 ? location.hash : location.search;
    const params = qs.parse(searchOrHash.replace(/^#?\/?\??/, ''));
    console.log(params);
    if (params.hasOwnProperty('error')){
        cb(params.error);
    }
    cb(null, params);
}