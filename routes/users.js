var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
  //res.send(req.online.length + ' users online');
  res.render('users', { online_users: req.online });
});

module.exports = router;
