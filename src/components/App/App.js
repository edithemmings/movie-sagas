import React, { Component } from 'react';
import HomeList from '../HomeList/HomeList'
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <HomeList />
      </div>
    );
  }
}

export default App;
