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

router.get('/modifyInfoCheck',function(req,res,next) {
  var sess = req.session;
  if(sess.userid == null){
    res.send('<script>alert("로그인을해주세요"); location.href="/main";</script>');
  }else{
    res.render('modifyInfoCheck',{
      sess : sess.userid
     });  
  }
});

router.post('/checkPassword',function(req,res,next) {
  var sess = req.session;
  var userid = sess.userid;
  var sql = `SELECT * FROM userInfo WHERE id = (?)`
  var params = [userid];
  conn.query(sql,params,function(err,rows,field) {
    if(err){
      console.log(err);
    }else{
      var dbpw = rows[0].pw;
      var inputpw = req.body.pw;
      if(dbpw == inputpw){
        res.render('modifyinfo',{
          sess : req.session.userid
        });
      }else{
        res.send('<script>alert("잘못된 비밀번호 입니다.."); location.href="/main";</script>');
        //res.send('다르다');
      } 
    }
  }); 
});

router.post('/modifyInfo',function(req,res,next) {
  var sess = req.session;
  var s = "";

  var password;
  // var emailF;
  // var emailB ;
  // var emailS ;
  var name ;
  var gender;
  var date ;
  var phone;
  var postNum ;
  var addressN ;
  var addressO;
  var addressD;
  var email;
  // 빈 배열 선언
  var modifys = [];
  // 회원정보 수정을 요청한 아이디의 정보를 가져옴
  var sql = `SELECT * FROM userInfo where id = ?`;
  var params = [sess.userid];
  console.log('수정요청 : 세션:'+params);
  conn.query(sql,params,function(err,rows,field) { // 먼저 기본 정보를 변수에 싹 넣어둔다음
    var i;
    var DBString = ["pw","name","dateOfbirth","email","gender","phone","postNum","addressN","addressO","addressD"];
    // 빈 배열에 기존 회원정보를 넣음
    console.log("------------------기존 유저 정보----------------");
    for(i=0; i<10; i++){
      modifys[i] = rows[0][DBString[i]];
      console.log("기존 유저 정보 : " + modifys[i]);
    }
    console.log("----------------------------------------------");
    console.log(" ");
    var _password = req.body.pw;     
    var _emailF = req.body.emailF;
    var _emailS  = req.body.emailS
    var _name  = req.body.name
    var _gender = req.body.gender
    var _dateOfbirth  = req.body.date
    var _phone = req.body.phone
    var _postNum  = req.body.postNum
    var _addressN  = req.body.addressN
    var _addressO = req.body.addressO
    var _addressD = req.body.addressD
    var _email; // 유저가 입력한 정보들
    
    if(_emailS == "notSelected"){
      _email = modifys[3]; 
    }else{
      _email = _emailF+ "@" + _emailS;
    }
    _email= String(_email); // 이메일을 문자열 화
    console.log("--------------------- 입력한 정보들 -----------------");
    console.log("비번 : " + _password);
    console.log("이름 : " + _name);
    console.log("생년월일 : " + _dateOfbirth);
    console.log("이메일 : "+_email);
    console.log("성별 : " + _gender);
    console.log("폰번호 : " + _phone);
    console.log("우편번호 : " + _postNum);
    console.log("신주소 : " + _addressN);
    console.log("구주소 : " + _addressO);
    console.log("상세주소 : " + _addressD);
    console.log("--------------------------------------");
    console.log(" ");
    var parameterString = ["pw","name","date",_email,"gender","phone","postNum","addressN","addressO","addressD"];
    var _modifys = [_password,_name,_dateOfbirth,_email,_gender,_phone,_postNum,_addressN,_addressO,_addressD];
    //var DBString = ["pw","name","dateOfbirth","email","gender","phone","postNum","addressN","addressO","addressD"];
    for(i =0; i<_modifys.length; i++){
          if(_modifys[i] == "" || _modifys[i] == null || _modifys[i] ==" " ){
              console.log(i+"번째 항목은 수정이 되지 않았습니다."+_modifys[i]);
          }  
            // 수정을 했다면
          else{
            if(i==3){
              modifys[i] = _email;
            }else{
              modifys[i] = req.body[parameterString[i]];
            }
              // _modifys 는 수정한 인풋텍스트를 모아놓은 배열
              console.log(i+"번쨰 항목은 수정이 되었습니다!"+_modifys[i] + "으로 수정됨");
            }
            s = s+DBString[i]+ ":";
            s= s+modifys[i];
            s= s+"<br>";
    }
    // 수정 결과 표시
    //res.send(s);
    arr = new Array; 
    sql = 'UPDATE userInfo SET pw=?, name=?, dateOfbirth=?, email=?, gender=?, phone=?,postNum=?,addressN=?,addressO=?,addressD=? WHERE id=?';
    for(var i = 0 ; i<10; i++){
      arr.push(modifys[i]);
    }
    arr.push(sess.userid)

    conn.query(sql, arr, function(err, rows, fields){
      if(err){
        console.log(err);
      } else {
        res.send('<script>alert("정보 수정 완료 !"); location.href="/main";</script>');
        console.log("정보 수정 완료 !");
      }
    });
  })
});

module.exports = router;