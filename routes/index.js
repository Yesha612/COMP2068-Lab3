var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Family' });
});

router.get('/yesha', (req, res, next) => {
  res.render('yesha', {});
});

router.get('/deep', (req, res, next) => {
  res.render('deep', {});
});

router.get('/ronak', (req, res, next) => {
  res.render('ronak', {});
});

router.get('/priti', (req, res, next) => {
  res.render('priti', {});
});

module.exports = router;
