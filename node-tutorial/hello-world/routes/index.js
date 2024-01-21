var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express zhai' });
});

router.post('/', function (req, res) {
  res.send('Got a POST request')
})

router.put('/', function (req, res) {
  res.send('Got a PUT request at /user')
})

module.exports = router;
