const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../public/index.html');

  res.sendFile(filePath);
});
