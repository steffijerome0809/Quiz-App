const router = require('express').Router();
const db = require('../models');

// Finding the questions from db and returning as json
router.get('/questions', (req, res) => {
  db.Questions.findAll().then((response) => {
    res.json(response);
  });
});

module.exports = router;
