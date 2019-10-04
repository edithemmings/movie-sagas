import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomeList from '../HomeList/HomeList'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={HomeList} />
          <Route path="/details/:id" component={Details} />
          <Route path="/edit/:id" component={Edit} />
        </Router>
      </div>
    );
  }
}

export default App;
