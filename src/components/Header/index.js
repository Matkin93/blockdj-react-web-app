import React, { Component, Fragment } from 'react';
import { Button, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container, Jumbotron } from 'reactstrap';

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
        const {logout, title} = this.props;
        return (
            <Fragment>
                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">BlockDJ</NavbarBrand> 
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button color="primary" size="sm" className="mt-1 ml-2" onClick={logout}>Logout</Button>
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