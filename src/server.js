'use strict';
const express = require('express');
const errorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const app = express();
app.use(logger);

const start = (port) => {
  app.listen(port, () => {
    console.log(`Lisiting on PORT ${port}`);
  });
};

app.get('/', (req, res) => {
  res.send('Home Route');
});

app.get('/bad', (req, res) => {
  throw new Error('500 error, server error');
});

// http://localhost:3003/person?name=ahmad
app.get('/person', validator, (req, res) => {
  const name = req.query.name;
  if (name) {
    res.json({ name });
  } else {
    res.status(500).json({ error: '500 server error' });
  }
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app,
  start,
};
