var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Family' });
});

const members = [
{
    path: 'yesha',
    name: 'Yesha Patel',
    age: 19,
    birthPlace: 'Anand',
    birthYear: 1999,
    interests: 'Reading novels'
}, 
{
    path: 'deep',
    name: 'Deep Patel',
    age: 15,
    birthPlace: 'Amod',
    birthYear: 2003,
    interests: 'Sports',
    relation: 'brother'
}, 
{
    path: 'ronak',
    name: 'Ronak Patel',
    age: 45,
    birthPlace: 'Ranoli',
    birthYear: 1974,
    interests: 'Accounts',
    relation: 'father'
},  
{
    path: 'priti',
    name: 'Priti Patel',
    age: 42,
    birthPlace: 'Vadod',
    birthYear: 1977,
    interests: 'Religious activities',
    relation: 'mother'
}
];

router.get('/:name', (req, res, next) => {
  const name = req.params.name;

  // Search the members array and find where the name variable is equal to the path in family
  const family = members.find(mem => mem.path === name);

  //if no member - generates error and passes to next function
  if (!family) {
    return next(new Error('Member does not exist'))
  }

  // Pass our found member to the family view
  res.render('family', family);
});


module.exports = router;
