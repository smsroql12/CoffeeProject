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

router.get('/main',function(req,res,next) {
  res.render('main',{
    sess : req.session.userid
  });
});

router.post('/purchase',function(req,res,next) {
  if(req.session.userid == null){
    res.send('로그인을 해주세요');
  }else{
    res.send("구매성공");
  }
})

module.exports = router;