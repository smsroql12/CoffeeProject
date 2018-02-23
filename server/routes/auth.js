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

router.get('/logout',function(req,res,next) {
  delete req.session.userid;
  delete req.session.password;
  console.log('로그아웃');
  res.send(`<script>alert('로그아웃 되었습니다. 안녕히가세요'); location.href='/main';</script>`)
  //res.redirect('/');
})

router.post('/login',function(req,res,next) {
  var sess = req.session;
  var id = req.body.id;
  var pw = req.body.pw;

  var sql = `SELECT * FROM userInfo WHERE id = (?)`
  var params = [id];

  conn.query(sql,params,function(err,rows,fields) {

    if(err){
      console.log(err);
    }else{
      if(rows[0] == null){
        res.send('존재하지않는 아이디 또는 비밀번호 입니다..');
      }else if(pw == rows[0].pw){
        sess.userid = rows[0].id
        sess.password = rows[0].pw;
        return req.session.save(function() {
          console.log('로그인 성공 ! 아이디 :'+sess.userid+' 비밀번호 : '+sess.password);
          res.redirect('/main');
      })
    }else{
      res.send('입력하신 아이디 또는 비밀번호가 잘못되었습니다.');
    }
  }
})

})
router.post('/register',function(req,res,next) {
  var id = req.body.id;
  var pw = req.body.pw;
  var emailF= req.body.emailF;
  var emailB = req.body.emailB;
  var emailS = req.body.emailS;
  var name = req.body.name;
  var gender= req.body.gender;
  var date = req.body.date;
  var phone= req.body.phone;
  var postNum = req.body.postNum;
  var addressN  = req.body.addressN;
  var addressO= req.body.addressO;
  var addressD= req.body.addressD;

  var email = emailF + '@' + emailS;

  var registerInfo = [
    id,pw,name,date,email,gender,phone,postNum,addressN,addressO,addressD
  ];
  var sqll = `SELECT * FROM userInfo WHERE id = ?`
  var params = [id];
  conn.query(sqll,params,function(err,rows,fields) {
    if(err){
      console.log(err);
    }else{
      if(rows[0] == null){
        var sql = `INSERT INTO userInfo (id,pw,name,dateOfbirth,email,gender,phone,postNum,addressN,addressO,addressD)
        VALUES(?,?,?,?,?,?,?,?,?,?,?)`
        conn.query(sql,registerInfo,function(err,rows,fields) {
        if(err){
        console.log(err);
        }else{
        console.log('회원가입성공!');
        res.redirect('/thanks.html');
        }
})
      }else{
        res.send('중복된 아이디 입니다.');
      }
    }
  })

  
})

module.exports = router;