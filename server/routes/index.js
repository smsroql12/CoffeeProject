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
router.get('/modifyInfoCheck',function(req,res,next) {
  var sess = req.session;
  if(sess.userid == null){
    res.send('<script>alert("로그인을해주세요"); location.href="/main";</script>');
  }else{
    res.render('modifyInfoCheck',{
      sess : req.session.userid
    });  
  }
})

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
        res.redirect('modifyinfo.html');
      }else{
        res.send('다르다');
      }
      
    }
      
  }) 
})

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
  var modifys = [];
  
  var sql = `SELECT * FROM userInfo where id = ?`;
  var params = [sess.userid];
  console.log('수정요청 : 세션:'+params);
  conn.query(sql,params,function(err,rows,field) { // 먼저 기본 정보를 변수에 싹 넣어둔다음
    var i;
    var DBString = ["pw","name","dateOfbirth","email","gender","phone","postNum","addressN","addressO","addressD"];
    for(i=0; i<10; i++){
      modifys[i] = rows[0][DBString[i]];
    }
    return ;        
  })
  var _password = req.body.pw;     
  var _emailF = req.body.emailF;
  var _emailB  = req.body;
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
  _emailS = null;
  }
  else{ // 이메일을 선택했다면
      _email = _emailF+ "@" + _emailS;
  }
  var parameterEmail= String(_email); // 이메일을 문자열 화
  var parameterString = ["pw",parameterEmail,"name","gender","date","phone","postNum","addressN","addressO","addressD"];
  var _modifys = [_password,_name,_dateOfbirth,_email,_gender,_phone,_postNum,_addressN,_addressO,_addressD];

  for(i =0; i<_modifys; i++){
    res.send('for');
    console.log('for문진입');
        if(_modifys[i] == "" || _modifys[i] == null || _modifys[i] ==" " ){
            console.log(i+"번째 항목은 수정이 되지 않았습니다."+_modifys[i]);
            continue;
        }  
          // 수정을 했다면
          else{
            console.log(i+"번쨰 항목은 수정이 되었습니다!"+_modifys[i] + "으로 수정됨");
            if(_modifys[1] != null){ // 이메일을 입력했다면
              modifys[1] =  parameterEmail; // 문자열한 이메일을 집어넣음
            }
              modifys[i] = req.body[parameterString[i]];
            // s= s+modifys[i];
            // s= s+"<br>";
          }
          s= s+modifys[i];  
          s= s+"<br>";
  } 
})

router.post('/purchase',function(req,res,next) {
  var reqb = req.body;

  var products = {
    americano : reqb.americano,
    cafelatte : reqb.cafelatte,
    cappuccino : reqb.cappuccino,
    cafemoca : reqb.cafemoca,
    espresso : reqb.espresso,
    chocolatemoca : reqb.chocolatemoca,
    makiyaddo : reqb.makiyaddo,
    greentea : reqb.greentea,
    mango : reqb.mango,
    strawberry : reqb.strawberry,
    sicbbang : reqb.sicbbang,
    goldmoca : reqb.goldmoca,
    pumpkin : reqb.pumpkin,
    bagle : reqb.bagle,
    brioshu : reqb.brioshu,
    detumblr : reqb.detumblr,
    minttumblr : reqb.minttumblr,
    ptumblr : reqb.ptumblr,
    french : reqb.french,
  }
  var productsKorea = {
    americano : "아메리카노",
    cafelatte : "카페라떼",
    cappuccino : "카푸치노",
    cafemoca : "카페모카",
    espresso : "에스프레소",
    chocolatemoca : "화이트 초콜릿 모카",
    makiyaddo : "카라멜 마끼아또",
    greentea : "그린티 프라푸치노",
    mango : "망고 패션 후르츠 블렌디드",
    strawberry : "딸기 요거트 블렌디드",
    sicbbang : "호두 통밀 식빵",
    goldmoca : "골드 모카",
    pumpkin : "미니 호박 케이크",
    bagle : "플레인 베이글",
    brioshu : "초콜릿 브리오슈",
    detumblr : "커피 한잔 기본 텀블러",
    minttumblr : "커피 한잔 민트 텀블러",
    ptumblr : "커피 한잔 강화 텀블러",
    french : "커피 한잔 프렌치프레스",
  }
  var total = reqb.total;
  
  // if(req.session.userid == null){
  //   res.send('로그인을 해주세요');
  // }else{
    
  //   res.send("구매성공" + products[0]);
  // }
  var s = ""
  var sess = req.session;
  for(var product  in products){
    if(products[product] != 0){
      sess[product] = products[product];
      s += product + ":" + products[product];
      s += "<br/>";
    }
  }
  console.log(" "+s);
  // s : 구매한 내역
  // totla : 총 금액
  // a : 상품 이름
  // products[a] : a의 상품개수
  res.render('purchase',{
    sess : req.session,
    s : s,
    products: products,
    productsKorea : productsKorea,
    total : total
  })
})

module.exports = router;