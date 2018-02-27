$(document).ready(function()
  {
    
  $('body').on("click",'.heart',function()
    {
      
      var A=$(this).attr("id");
      var B=A.split("like");
        var messageID=B[1];
        var C=parseInt($("#likeCount"+messageID).html());
      $(this).css("background-position","")
        var D=$(this).attr("rel");
       
        if(D === 'like') 
        {      
        $("#likeCount"+messageID).html(C+1);
        $(this).addClass("heartAnimation").attr("rel","unlike");
        
        }
        else
        {
        $("#likeCount"+messageID).html(C-1);
        $(this).removeClass("heartAnimation").attr("rel","like");
        $(this).css("background-position","left");
        }
    });

  });


$('.plus').click( function() {
  var product = $(this).closest('.product')
  var q = product.data('quantity') + 1;
  product.data('quantity', q);
  updateProduct(product);
});

$('.minus').click( function() {
  var product = $(this).closest('.product')
  var q = Math.max(0, product.data('quantity') - 1);
  product.data('quantity', q);
  updateProduct(product);
});

/*$('.del').click( function() {
  var product = $(this).closest('.product')
  product.hide('blind', {direction:'left'}, 500, function() {
    product.remove();
    updateProduct(product);
    if($('.product').length == 0)  {
      $('.cart-container .cart').hide();
      $('.cart-container .empty').show();
    }
  });
});*/


function updateProduct(product) {
  var quantity = product.data('quantity');
  var price = product.data('price');
  $('.product-quantity', product).text('x' + quantity);
  $('.product-price', product).text("\u005C"+(price * quantity).toLocaleString());
  updateBill();
}

function updateBill() {
  var subtotal = 0;
  var salestax = 0;
  var shipping = 0;
  var total = 0;
  $('.product').each(function () {
    subtotal += $(this).data('quantity') * $(this).data('price');
  });
  salestax = subtotal * 0.05;
  total = subtotal;
  $('.subtotal .value').text('$ ' + subtotal.toFixed(2));
  $('.salestax .value').text('$ ' + salestax.toFixed(2));
  $('.total .value').text('\u005C ' + total.toLocaleString()).css("font-size","1.6em");
}

var coffee = {
  americano: 0,
  cafelatte: 0,
  cappuccino: 0,
  cafemoca : 0,
  espresso : 0,
  chocolatemoca : 0,
  makiyaddo : 0,
  greentea : 0,
  mango : 0,
  strawberry : 0,
  sicbbang : 0,
  goldmoca : 0,
  pumpkin : 0,
  bagle : 0,
  brioshu : 0,
  detumble : 0,
  minttumblr : 0,
  ptumblr : 0,
  french : 0
}

/* 아메리카노 */
$("#addamericano").click(function() {
  coffee.americano++;
  $("#americanocount").val(coffee.americano);
});

$("#subamericano").click(function() {
  if(coffee.americano <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.americano--;
    $("#americanocount").val(coffee.americano);
  }
});

/* 카페라떼 */
$("#addcappuccino").click(function() {
  coffee.cappuccino++;
  $("#cappuccinocount").val(coffee.cappuccino);
});

$("#subcappuccino").click(function() {
  if(coffee.cappuccino <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.cappuccino--;
    $("#cappuccinocount").val(coffee.cappuccino);
  }
});

/* 카푸치노 */
$("#addcafelatte").click(function() {
  coffee.cafelatte++;
  $("#cafelattecount").val(coffee.cafelatte);
});

$("#subcafelatte").click(function() {
  if(coffee.cafelatte <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.cafelatte--;
    $("#cafelattecount").val(coffee.cafelatte);
  }
});

/* 카페모카 */
$("#addcafemoca").click(function() {
  coffee.cafemoca++;
  $("#cafemocacount").val(coffee.cafemoca);
});

$("#subcafemoca").click(function() {
  if(coffee.cafemoca <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.cafemoca--;
    $("#cafemocacount").val(coffee.cafemoca);
  }
});

/* 에스프레소 */
$("#addespresso").click(function() {
  coffee.espresso++;
  $("#espressocount").val(coffee.espresso);
});

$("#subespresso").click(function() {
  if(coffee.espresso <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.espresso--;
    $("#espressocount").val(coffee.espresso);
  }
});

/* 화이트 초콜릿 모카 */
$("#addchocolatemoca").click(function() {
  coffee.chocolatemoca++;
  $("#chocolatemocacount").val(coffee.chocolatemoca);
});

$("#subchocolatemoca").click(function() {
  if(coffee.chocolatemoca <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.chocolatemoca--;
    $("#chocolatemocacount").val(coffee.chocolatemoca);
  }
});

/* 카라멜 마끼아또 */
$("#addmakiyaddo").click(function() {
  coffee.makiyaddo++;
  $("#makiyaddocount").val(coffee.makiyaddo);
});

$("#submakiyaddo").click(function() {
  if(coffee.makiyaddo <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.makiyaddo--;
    $("#makiyaddocount").val(coffee.makiyaddo);
  }
});

/* 그린티 프라푸치노 */
$("#addgreentea").click(function() {
  coffee.greentea++;
  $("#greenteacount").val(coffee.greentea);
});

$("#subgreentea").click(function() {
  if(coffee.greentea <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.greentea--;
    $("#greenteacount").val(coffee.greentea);
  }
});

/* 망고 패션 후르츠 블렌디드*/
$("#addmango").click(function() {
  coffee.mango++;
  $("#mangocount").val(coffee.mango);
});

$("#submango").click(function() {
  if(coffee.mango <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.mango--;
    $("#mangocount").val(coffee.mango);
  }
});

/* 딸기 요거트 블렌디드 */
$("#addstrawberry").click(function() {
  coffee.strawberry++;
  $("#strawberrycount").val(coffee.strawberry);
});

$("#substrawberry").click(function() {
  if(coffee.strawberry <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.strawberry--;
    $("#strawberrycount").val(coffee.strawberry);
  }
});

/* 호구 통밀 식빵 */
$("#addsicbbang").click(function() {
  coffee.sicbbang++;
  $("#sicbbangcount").val(coffee.sicbbang);
});

$("#subsicbbang").click(function() {
  if(coffee.sicbbang <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.sicbbang--;
    $("#sicbbangcount").val(coffee.sicbbang);
  }
});

/* 골드 모카 */
$("#addgoldmoca").click(function() {
  coffee.goldmoca++;
  $("#goldmocacount").val(coffee.goldmoca);
});

$("#subgoldmoca").click(function() {
  if(coffee.goldmoca <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.goldmoca--;
    $("#goldmocacount").val(coffee.goldmoca);
  }
});

/* 미니 호박 케이크 */
$("#addpumpkin").click(function() {
  coffee.pumpkin++;
  $("#pumpkincount").val(coffee.pumpkin);
});

$("#subpumpkin").click(function() {
  if(coffee.pumpkin <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.pumpkin--;
    $("#pumpkincount").val(coffee.pumpkin);
  }
});

/* 플레인 베이글 */
$("#addbagle").click(function() {
  coffee.bagle++;
  $("#baglecount").val(coffee.bagle);
});

$("#subbagle").click(function() {
  if(coffee.bagle <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.bagle--;
    $("#baglecount").val(coffee.bagle);
  }
});

/* 초콜릿 브리오슈 */
$("#addbrioshu").click(function() {
  coffee.brioshu++;
  $("#brioshucount").val(coffee.brioshu);
});

$("#subbrioshu").click(function() {
  if(coffee.brioshu <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.brioshu--;
    $("#brioshucount").val(coffee.brioshu);
  }
});

/* 커피 한잔 기본 텀블러 */
$("#adddetumble").click(function() {
  coffee.detumble++;
  $("#detumblecount").val(coffee.detumble);
});

$("#subdetumble").click(function() {
  if(coffee.detumble <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.detumble--;
    $("#detumblecount").val(coffee.detumble);
  }
});

/* 커피 한잔 민트 텀블러 */
$("#addminttumblr").click(function() {
  coffee.minttumblr++;
  $("#minttumblrcount").val(coffee.minttumblr);
});

$("#subminttumblr").click(function() {
  if(coffee.minttumblr <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.minttumblr--;
    $("#minttumblrcount").val(coffee.minttumblr);
  }
});

/* 커피 한잔 강화 텀블러 */
$("#addptumblr").click(function() {
  coffee.ptumblr++;
  $("#ptumblrcount").val(coffee.ptumblr);
});

$("#subptumblr").click(function() {
  if(coffee.ptumblr <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.ptumblr--;
    $("#ptumblrcount").val(coffee.ptumblr);
  }
});

/* 커피 한잔 프렌치프레스 */
$("#addfrench").click(function() {
  coffee.french++;
  $("#frenchcount").val(coffee.french);
});

$("#subfrench").click(function() {
  if(coffee.french <= 0) {
    swal("T_T","최소 수량은 0보다 작을 수 없습니다.","error");
  }
  else {
    coffee.french--;
    $("#frenchcount").val(coffee.french);
  }
});