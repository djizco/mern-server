const express = require('express');

const auth         = require('./auth');
const todos        = require('./todos');
const user         = require('./user');
const users        = require('./users');

const router = express.Router();

router.use('/api/auth', auth);
router.use('/api/user', user);
router.use('/api/users', users);
router.use('/api/todos', todos);

router.get('/api/tags', (req, res) => {
  res.send([
    'MERN', 'Node', 'Express', 'Webpack', 'React', 'Redux', 'Mongoose',
    'Bulma', 'Fontawesome', 'Ramda', 'ESLint', 'Jest',
  ]);
});

module.exports = router;
