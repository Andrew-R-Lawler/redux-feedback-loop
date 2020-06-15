import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thanks extends Component {

    handleSubmit = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>Thank you for your feedback!</h2>
                <button onClick={this.handleSubmit}>Leave New Feedback</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Thanks);