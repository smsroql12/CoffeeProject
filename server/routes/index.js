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