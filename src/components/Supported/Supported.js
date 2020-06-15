import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        if (this.state.value < 1) {
            alert('You must enter a value! Try Again!')
        }
        else {
            this.props.dispatch({
                type: 'SUPPORT_VALUE',
                payload: this.state.value
            })
            this.setState({
                value: ''
            })
            this.props.history.push('/Comments')
        }
    }

    previousPage = () => {
        this.props.history.push('/Understanding')
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option selected value=''></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.handleSubmit}>Next</button>
                <br/>
                <button onClick={this.previousPage}>Previous Page</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Supported);