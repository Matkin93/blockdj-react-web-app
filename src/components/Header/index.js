import React, { Component, Fragment } from 'react';
import { Button, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Container } from 'reactstrap';
import SpotifyAuthorizeButton from '../Spotify/AuthorizeButton';

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
        const {logout} = this.props;
        return (
            <Fragment>
                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">BlockDJ</NavbarBrand> 
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <SpotifyAuthorizeButton />
                                </NavItem>                                
                                <NavItem>
                                    <Button color="primary" size="sm" onClick={logout}>Logout</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar> 
            </Fragment>

        );
    }
}

export default Header;