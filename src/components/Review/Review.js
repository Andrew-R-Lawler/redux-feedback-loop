import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    state = {
        feeling: this.props.reduxState.feelingReducer,
        understanding: this.props.reduxState.understandingReducer,
        support: this.props.reduxState.supportReducer,
        comments: this.props.reduxState.commentReducer
    }

    handleSubmit = () => {
        console.log('in handleSubmit');
        axios.post('/result', this.state)
            .then(response => {
                console.log('response', response);
                this.setState({
                    feeling: '',
                    understanding: '',
                    support: '',
                    comments: ''
                })
                this.props.history.push('/Thanks')
            }).catch(err => {
                console.log('ERROR!', err);
            })
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                <h2>Review Your Feedback</h2>
                    <p>Feelings: {this.props.reduxState.feelingReducer}</p>
                    <p>Understanding: {this.props.reduxState.understandingReducer}</p>
                    <p>Support: {this.props.reduxState.supportReducer}</p>
                    <p>Comments: {this.props.reduxState.commentReducer}</p>
                    <button onClick = {this.handleSubmit}>SUBMIT</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Review);