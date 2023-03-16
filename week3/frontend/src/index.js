import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TopicApp from './Topic';

<Route exact path="/" component={Login} />
<Route path="/topic" component={Topic} />

<Switch>
  <Route exact path="/" component={Login} />
  <Route path="/topic" component={Topic} />
</Switch>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

<Link to="/">Home</Link>
<Link to="/topic">Topic</Link>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
