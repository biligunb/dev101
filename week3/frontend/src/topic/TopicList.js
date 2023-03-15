import React, { Component } from 'react';

class TopicList extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    fetch('/api/topics')
      .then(res => res.json())
      .then(topics => this.setState({ topics }));
  }

  render() {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          {this.state.topics.map(topic => (
            <li key={topic.id}>
              <p>Title: {topic.title}</p>
              <p>Status: {topic.status}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TopicList;
