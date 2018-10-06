import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

class Profile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <p>Please tell us a bit more about yourself....</p>
                        <Form>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="What is your email address..." />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" placeholder="What is your name..." />
                            </FormGroup>
                            <FormGroup>
                                <Label for="bio">Bio</Label>
                                <Input type="textarea" name="bio" id="bio" placeholder="Tell us about yourself..." />
                            </FormGroup>
                            <FormGroup>
                                <Label for="website">Website</Label>
                                <Input type="text" name="website" id="website" placeholder="Your Website address..." />
                            </FormGroup>
                            <FormGroup>
                                <Label for="instagram">Instagram</Label>
                                <Input type="text" name="instagram" id="instagram" placeholder="Instagram address..." />
                            </FormGroup>
                            <FormGroup>
                                <Label for="avatar">Avatar</Label>
                                <Input type="text" name="avatar" id="avatar" placeholder="Avatar..." />
                            </FormGroup>     
                            <FormGroup>
                                <Button color="primary" size="sm" onClick={this.updateProfile}>Add Profile</Button>
                            </FormGroup>
                        </Form>                    
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