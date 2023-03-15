import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const TopicCreate = () => {
  const [title, setTitle] = useState('');
  const [choices, setChoices] = useState('');
  const [status, setStatus] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/topics', {
        title,
        choices: choices.split(',').map((choice) => choice.trim()),
        status,
      });
      console.log(response.data);
      history.push('/topics');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create a Topic</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="choices">Choices:</label>
          <textarea
            id="choices"
            value={choices}
            onChange={(e) => setChoices(e.target.value)}
          ></textarea>
          <small>Separate choices with commas</small>
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <button type="submit">Create Topic</button>
      </form>
    </div>
  );
};

export default TopicCreate;
