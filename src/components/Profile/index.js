import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProfileForm from './Form';

class Profile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <p>Please tell us a bit more about yourself....</p>
                        <ProfileForm updateProfile={this.updateProfile} buttonLabel="Add Profile"/>                  
                    </Col>
                </Row>
            </Container>
        );
    }
    updateProfile = () => {
        // TODO: Validate form and call api method to update profile details
    }
}

export default Profile;