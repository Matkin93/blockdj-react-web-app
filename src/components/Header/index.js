import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Button, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Container } from 'reactstrap';

import SpotifyAuthorizeButton from '../Spotify/Authorize/Button';
import SpotifyPlaylistButton from '../Spotify/Playlist/Button';

class Header extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }      
    render() {
        const {authZeroLogout} = this.props;
        return (
            <Fragment>
                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">BlockDJ</NavbarBrand> 
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <SpotifyPlaylistButton {...this.props}/> 
                                </NavItem>                            
                                <NavItem>
                                    <SpotifyAuthorizeButton {...this.props} />
                                </NavItem>                                
                                <NavItem>
                                    <Button color="primary" size="sm" onClick={authZeroLogout}>Logout</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar> 
            </Fragment>

        );
    }
}

Header.propTypes = {
    authZeroLogout: PropTypes.func.isRequired,
    isSpotifyAuthenticated: PropTypes.func.isRequired,
    spotifyLogout: PropTypes.func.isRequired
}

export default Header;