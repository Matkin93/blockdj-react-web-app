import auth0 from 'auth0-js';
import config from '../../config';

export default class AuthZeroService{
    authZero = new auth0.WebAuth({
        domain: config.AUTH0.domain,
        clientID: config.AUTH0.client_id,
        redirectUri: config.AUTH0.callback_uri,
        responseType: config.AUTH0.response_type,
        audience: config.AUTH0.audience,
        scope: config.AUTH0.scope,
    });
    login = () => {
        this.authZero.authorize();
    }
    handleAuth = (props) => {
        const {history, hasProfile} = props;        
        this.authZero.parseHash((err, params) => {
            if(err) history.replace('/user/unauthorised');
            if (params && params.accessToken && params.idToken){
                this.setSession(params, props);
                if (hasProfile()){
                    history.replace('/')
                }else{
                    history.replace('/profile');
                }
            }
        })
    }
    setSession = (params, props) => {
        const {history} = props;        
        const expires = JSON.stringify((params.expiresIn * config.AUTH0.auth_token_timeout) + new Date().getTime());
        localStorage.setItem('auth0_access_token', params.accessToken);
        localStorage.setItem('auth0_id_token', params.idToken);
        localStorage.setItem('auth0_expires_at', expires);
        history.replace('/');
    }
    logout = () => {
        localStorage.removeItem('auth0_access_token');
        localStorage.removeItem('auth0_id_token');
        localStorage.removeItem('auth0_expires_at');
        window.location.href = config.AUTH0.logout_uri;
    }
    isAuthenticated = () => {
        const expires = JSON.parse(localStorage.getItem('auth0_expires_at'));
        return new Date().getTime() < expires;
    }
}