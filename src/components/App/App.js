import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomeList from '../HomeList/HomeList'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          {/* <TransitionGroup>
            <CSSTransition
              timeout={300}
              classNames='fade'
              key={this.props.location.key}
            >
              <Switch> */}
                <Route path="/" exact component={HomeList} />
                <Route path="/details/:id" component={Details} />
                <Route path="/edit/:id" component={Edit} />
              {/* </Switch>
            </CSSTransition>
          </TransitionGroup> */}
        </Router>
      </div>
    );
  }
}

export default App;
