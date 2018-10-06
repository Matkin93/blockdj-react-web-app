import React, { Component } from 'react';

class Callback extends Component {
    render() {
        return (
            <div>
                <p>I am loading....</p>
            </div>
        );
    }
    componentDidMount() {
        const { location, handleAuth } = this.props;
        if (/access_token|id_token|error/.test(location.hash)) {
            handleAuth(this.props);
        }
    }
}

export default Callback;