var express = require('express');
var router = express.Router();

var counter = "60";
var one = "--";
var two = "--";
var three = "--";
var four = "--";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hack24 Pointless' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Hack24 Pointless' });
});

router.get('/counter', function(req, res) {
  res.send(counter);
});

router.get('/scores', function(req, res) {
  res.send({ "one": one,
             "two": two,
             "three": three,
             "four": four});
});

router.post('/counter', function(req, res) {
  counter = req.body.counter;
  res.status(200);
  res.end();
});

router.post('/counter', function(req, res) {
  counter = req.body.counter;
  res.status(200);
  res.end();
});

router.post('/one', function(req, res) {
  one = req.body.score;
  res.status(200);
  res.end();
});

router.post('/two', function(req, res) {
  two = req.body.score;
  res.status(200);
  res.end();
});

router.post('/three', function(req, res) {
  three = req.body.score;
  res.status(200);
  res.end();
});

router.post('/four', function(req, res) {
  four = req.body.score;
  res.status(200);
  res.end();
});

module.exports = router;
