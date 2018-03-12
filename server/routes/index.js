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
  database : 'coffie'
});
var app = express();
app.use(bodyParser.urlencoded({extended: false}));

router.get('/main',function(req,res,next) {
  res.render('main',{
    sess : req.session.userid
  });
});
router.get('/mypage',function(req,res,next) {
  var sess = req.session.userid;
  if(sess == null){
    res.send('<script>alert("로그인을해주세요"); location.href="/main";</script>');
  }else{
    var sql = `select * from userInfo where id = ?`
    var params =[sess];
    conn.query(sql,params,function(err,rows,felids) {
      res.render('mypage',{
        sess : sess, 
        rows : rows
       });
    })  
  }
})
module.exports = router;