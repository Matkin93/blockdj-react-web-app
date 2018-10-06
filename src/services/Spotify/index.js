import config from '../../config';
import {getSpotifyCallbackParams} from '../../utils/common';

export default class SpotifyService{
    handleAuth = (props) => {
        const {history, location} = props;   
        getSpotifyCallbackParams(location, (err, params) => {
            if (err) history.replace('/spotify/unauthorised');
            if (params && params.access_token && params.token_type && params.expires_in){
                this.setSession(params, props);
            }
  
        })
    }
    setSession = (params, props) => {
        const {history} = props;        
        const expires = JSON.stringify((params.expires_in * config.SPOTIFY.auth_token_timeout) + new Date().getTime());
        localStorage.setItem('spotify_access_token', params.access_token);
        localStorage.setItem('spotify_token_type', params.token_type);
        localStorage.setItem('spotify_expires_at', expires);
        history.replace('/');
    }
    logout = (props) => {
        const {history} = props;        
        localStorage.removeItem('spotify_access_token');
        localStorage.removeItem('spotify_token_type');
        localStorage.removeItem('spotify_expires_at');
        history.push(config.SPOTIFY.logout_uri);
    }    
    isAuthenticated = () => {
        const expires = JSON.parse(localStorage.getItem('spotify_expires_at'));
        return new Date().getTime() < expires;
    }    
}