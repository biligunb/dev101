### This folder is for the e-Voting
- User login
- Topic with title and choices (multiple)
- Vote on topic by logged in user
- Report of all users on specific topic

### Docker
- db : Database MySQL
  - 3307 outside 3306 inside container
- backend : Back-End Nest.js
  - 3001 outside 3000 inside container
- frontend : Front-End React.js
  - 3002 outside 3000 inside container

### Username and password
  {
    id: 0,
    name: 'Bob',
    email: 'bob@gmail.com',
    password: 'bobPass',
  },

  {
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
    password: 'johnPass',
  },

  {
    id: 2,
    name: 'Gary',
    email: 'gary@gmail.com',
    password: 'garyPass',
  },