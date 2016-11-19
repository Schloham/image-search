if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const db = require('./config/db');
const path = require('path');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const routes = require('./routes/index');
app.use('/', routes);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
