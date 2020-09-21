/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable import/no-unresolved */
const express = require('express');

// Setting up the port and requiring models for syncing

const PORT = process.env.PORT || 8080;
const db = require('./models');

// required our API and HTML Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// creating express app and configuring middleware needed for authentication
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(expressValidator);
app.use(express.static('public'));

// requiring routes

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
