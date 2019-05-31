var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Family' });
});

router.get('/yesha', (req, res, next) => {
  res.render('yesha', 
  {
    age: 16,
    birthPlace: 'Anand',
    interests: 'Reading novels',
   });
});

router.get('/deep', (req, res, next) => {
  res.render('deep', 
  {
    age: 15,
    birthPlace: 'Amod',
    interests: 'Sports',
    relation: 'brother'
  });
});

router.get('/ronak', (req, res, next) => {
  res.render('ronak', 
  {
    age: 45,
    birthPlace: 'Ranoli',
    interests: 'Accounts',
    relation: 'father'
  });
});

router.get('/priti', (req, res, next) => {
  res.render('priti', 
  {
    age: 42,
    birthPlace: 'Vadod',
    interests: 'Religious activities',
    relation: 'mother'
  });
});

module.exports = router;
