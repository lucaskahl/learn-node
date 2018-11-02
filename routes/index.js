const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {

  const pessoa = { name: 'Luke', age: 100};

  // res.send('Hey! It works!');
  res.json(pessoa);
});


router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
})

module.exports = router;
