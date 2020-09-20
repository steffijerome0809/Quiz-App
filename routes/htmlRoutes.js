const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../public/index.html');

  res.sendFile(filePath);
});

router.get('/highscores', (req, res) => {
  const filePath = path.join(__dirname, '../public/highscores.html');

  res.sendFile(filePath);
});
module.exports = router;
