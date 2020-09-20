var express = require('express');
//required API and HTML routes
// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 8080;

const db = require('./models');

//creating an express app and configuring middleware
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//sequelize connection

db.sequelize.sync.then(() => {
  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
});
