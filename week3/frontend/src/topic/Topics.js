import React, { useState } from 'react';

function Topics() {
    const [topics, setTopics] = useState([]);
  
    return (
      <div>
        // Render the topics here
      </div>
    );
  }
  
useEffect(() => {
    fetch('http://localhost:3001/topics')
      .then(response => response.json())
      .then(data => setTopics(data));
}, []);

return (
    <div>
      {topics.map(topic => (
        <div key={topic.id}>
          <h2>{topic.title}</h2>
          <p>{topic.description}</p>
        </div>
      ))}
    </div>
  );

  import Topics from './Topics';

  function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
        </Switch>
      </Router>
    );
  }  
  