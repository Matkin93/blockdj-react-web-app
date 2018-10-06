import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ProfileForm extends Component {
    render() {
        const {updateProfile, buttonLabel} = this.props;
        return (
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
                    <Button color="primary" size="sm" onClick={updateProfile}>{buttonLabel}</Button>
                </FormGroup>
            </Form>
        );
    }
}

ProfileForm.propTypes = {
    updateProfile: PropTypes.func.isRequired,
    buttonLabel: PropTypes.string.isRequired
}

export default ProfileForm;