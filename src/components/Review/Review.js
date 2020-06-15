import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Review);