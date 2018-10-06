import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

const Layout = (props) => {
    return (
        <Fragment>
            <Header {...props}/>
            {props.children}
        </Fragment>
    );
};

Layout.propTypes = {
    authZeroLogout: PropTypes.func.isRequired,
    isSpotifyAuthenticated: PropTypes.func.isRequired,
    spotifyLogout: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
}

export default Layout;