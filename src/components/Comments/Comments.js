import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        if ( this.state.value === '' ) {
            alert('You must enter a value! Try Again!')
        }
        else {
            this.props.dispatch({
                type: 'COMMENT_VALUE',
                payload: this.state.value
            })
            this.setState({
                value: ''
            })
            this.props.history.push('/Review');
        }
    }

    render() {
        return (
            <div>
                <textarea value = {this.state.value} onChange = {this.handleChange} placeholder = "Tell us what you're feeling"></textarea>
                <br/>
                <button onClick={this.handleSubmit}>Next</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Comments);