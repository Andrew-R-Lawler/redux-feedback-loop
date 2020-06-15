import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//imported components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <Route exact path = '/' component = {Feeling}/>
          <Route path = '/Understanding' component = {Understanding}/>
          <Route path = '/Supported' component = {Supported}/>
          <Route path = '/Comments' component = {Comments}/>
        </div>
      </Router>
    );
  }
}

export default App;
