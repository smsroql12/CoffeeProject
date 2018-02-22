var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
// DB SETTING
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user : 'root',
  password : 'root',
  database : 'board'
});
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

router.get('/',function(req,res,next) {
    res.sendFile((path.resolve('../client/index.html')));
});
router.get('/main',function(req,res,next) {
  res.send('로그인 완료');
});
router.get('/thanks.html',function(req,res,next) {
  //res.sendFile((path.resolve('../client/index.html')));
  res.send('hello');
});

module.exports = router;