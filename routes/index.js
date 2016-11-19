const express = require('express');
const router = express.Router();

const imgur = require('../services/imgur');
const History = require('../models/history');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/latest', (req, res) => {
  History.find({}, 'term when -_id').sort('-when').limit(10).then(results => {
    res.json(results);
  });
});

router.get('/search/:q', (req, res) => {
  new History({ term: req.params.q }).save();
  imgur.getImage(req.params.q, req.query.offset).then(ans => {
    res.json(ans);
  })
});

module.exports = router;
