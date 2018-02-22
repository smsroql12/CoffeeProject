var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
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
router.get('/register',function(req,res,next) {
  res.send('sessuccec');
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

  var sql = `INSERT INTO userInfo (id,pw,name,dateOfbirth,email,gender,phone,postNum,addressN,addressO,addressD)
              VALUES(?,?,?,?,?,?,?,?,?,?,?)`
  conn.query(sql,registerInfo,function(err,rows,fields) {
    if(err){
      console.log(err);
    }else{
      res.send("쿼리삽입성공");    
    }
  })
  
})

module.exports = router;