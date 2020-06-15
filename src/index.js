import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Reducers
const feelingReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FEELING_VALUE':
            return action.payload;
        default:
            return state;
    }
}

const understandingReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UNDERSTANDING_VALUE':
            return action.payload;
        default:
            return state;
    }
}

const supportReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUPPORT_VALUE':
            return action.payload;
        default:
            return state;
    }
}

const commentReducer = (state = {}, action) => {
    switch (action.type) {
        case 'COMMENT_VALUE':
            return action.payload;
        default:
            return state;
    }
}



// Redux Store Instance
const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
