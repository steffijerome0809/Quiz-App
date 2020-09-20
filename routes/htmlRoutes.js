const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  //   const filePath = path.join(__dirname, '../public/index.html');

  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/highscores', (req, res) => {
  //   const filePath = path.join(__dirname, '../public/highscores.html');

  res.sendFile(path.join(__dirname, '../public/highscores.html'));
});
module.exports = router;
