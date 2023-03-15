import React, { Component } from 'react';
import TopicList from './topic/TopicList';
import TopicCreate from './topic/TopicCreate';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/create">Create Topic</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/create">
              <TopicCreate />
            </Route>
            <Route path="/">
              <TopicList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
