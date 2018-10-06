import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const Guard = props => {
    const {isAuthenticated, login, children} = props;
    if (isAuthenticated()) return children
    else return (
        <Button color="primary" onClick={() => login()}>Login</Button>
    )
}

Guard.propTypes = {
    isAuthenticated: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
}

export default Guard;