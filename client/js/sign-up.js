$(document).ready(function(){
                $("#input1").keyup(function(event){
                    if(event.keyCode !=8){ 
                        var result = "keycode="+ event.keyCode + " value="+ String.fromCharCode(event.keyCode);
                        var preHtml = $("#result").html();
                        $("#result").html(preHtml+ "<br />" +result);
                    }
                    if($(this).val() ==""){
                        $("#result").empty();
                    }
                    
                });
                $(".onlyNumber").keyup(function(event){
                    if (!(event.keyCode >=37 && event.keyCode<=40)) {
                        var inputVal = $(this).val();
                        $(this).val(inputVal.replace(/[^0-9]/gi,''));
                        var value = $('.onlyNumber').val();
                        if(value != inputVal) {
                          $(".warn3").text("숫자만 입력 가능합니다.").css("color","#f78080");
                        }
                        else {
                          $(".warn3").text("");
                        }
                    }
                });
                $("#onlyAlphabet").keyup(function(event){
                    if (!(event.keyCode >=37 && event.keyCode<=40)) {
                        var inputVal = $(this).val();
                        $(this).val(inputVal.replace(/[^a-z]/gi,''));    
                    }
                });
                /* 아이디 체크 */
                
                /*
                $(".notHangul2").keyup(function(event){
                    if (!(event.keyCode >=37 && event.keyCode<=40)) {
                        var inputVal2 = $(this).val();
                        $(this).val(inputVal2.replace(/[^a-z0-9]/gi,''));
                        var value2 = $('.notHangul2').val();
                        if(value2 != inputVal2) {
                          $(".warn5").text("영어와 숫자만 가능합니다. 한/영 키를 눌러주세요.");
                        }
                        else {
                          $(".warn5").text("");
                        }
                    }
                });
                */

                $("#onlyHangul").keyup(function(event){
                    if (!(event.keyCode >=37 && event.keyCode<=40)) {
                        var inputVal = $(this).val();
                        $(this).val(inputVal.replace(/[a-z0-9]/gi,''));
                    }
                });
                /*
                $(".passcheck").keyup(function(event){
                    var pw1 = $(".pw1").val();
                    var pw2 = $(".pw2").val();
                    if (pw1 != pw2) {
                        $(".warn2").text("비밀번호가 일치하지 않습니다.").css("color","#f78080");
                    }
                    else {
                        $(".warn2").text("비밀번호가 일치합니다.").css("color","#06c40f");
                    }
                    if(this.value.length < 6) {
                          $(".warn2").text("비밀번호는 최소 6자 이상이어야 합니다.").css("color","#f78080");
                        }
                });*/

            });
/* ready 함수 끝 */

var idcheck = false;
var pwcheck = false;
var pwrcheck = false;
var email = false;
var name = false;
var date = false;
var phone = false;
var address = false;

/* id 스크립트 */
$(".notHangul").keyup(function(event){
    if (!(event.keyCode >=37 && event.keyCode<=40)) {
    var inputVal = $(this).val();
    $(this).val(inputVal.replace(/[^a-z0-9]/gi,''));
    var value1 = $('.notHangul').val();
    if(value1 != inputVal) {
        idcheck = false;
        $(".warn").text("영어와 숫자만 사용 가능합니다. 한/영 키를 눌러주세요.").css("color","#f78080");
        }

    else if(this.value.length == this.maxLength) {
    $(".warn").text("현재 아이디는 사용 가능하지만, 아이디는 최대 20글자를 넘을 수 없습니다.").css("color","#f78080");
        idcheck = false;
        }

    else if(this.value.length < 6) {
        idcheck = false;
    $(".warn").text("아이디는 최소 6자 이상이어야 합니다.").css("color","#f78080");
        }

    else {
    idcheck = true;
    $(".warn").text("사용 가능한 아이디 입니다.").css("color","#06c40f");
        }
    }
});

/* 비밀번호 스크립트 */

$("#inputPw").keyup(function(){
    var val = $(this).val(),
    regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{6,20}$/;
    if(val=="" | val==null){
        pwcheck = false;
         $(".warn2").text("비밀번호를 입력 해 주세요.").css("color","#f78080");
    }
    else if(!regex.test(val)){
        pwcheck = false;;
         $(".warn2").text("비밀번호는 6자리 이상 20자리 이하이며 숫자와 특수문자를 반드시 포함해야 합니다.").css("color","#f78080");
   }
        //6자리 이상 120자리 이하, 숫자 혹은 특수 문자를 반드시 포함
    else{
        pwcheck = true;
        $(".warn2").text("사용 가능한 비밀번호 입니다.").css("color","#06c40f");
    }
        //확인
});

/* 비밀번호 확인 스크립트 */
$("#inputPwr").keyup(function(){
    var orgin = $("#inputPw").val()
    val = $(this).val();
    if(val=="" | val==null){
        pwrcheck = false;
        $(".warn3").text("비밀번호를 다시 입력 해 주세요.").css("color","#f78080");
    }
    else if(val!=orgin){
        pwrcheck = false;
        $(".warn3").text("비밀번호가 일치하지 않습니다.").css("color","#f78080");
    }
    else{
        pwrcheck = true;
        $(".warn3").text("비밀번호가 일치합니다.").css("color","#06c40f");
    }
});

$("#sign").click(function() {
    if(idcheck == true && pwcheck == true && pwrcheck == true && email == true && name == true && date == true && phone == true && address == true){
        $( "#info" ).submit();
    }
    else {
        swal("T_T","입력된 정보를 다시 한번 확인 해 주세요.","error");
    }
});

$("#email").keyup(function(){
    var orgin = $("#email").val()
    val = $(this).val();
    if(val=="" | val==null){
        email = false;
    }
    else {
        email = true;
    }
});

$("#name").keyup(function(){
    var orgin = $("#name").val()
    val = $(this).val();
    if(val=="" | val==null){
        name = false;
    }
    else {
        name = true;
    }
});

$(".phone").keyup(function(){
    var orgin = $(".phone").val()
    val = $(this).val();
    if(val=="" | val==null){
        phone = false;
    }
    else {
        phone = true;
    }
});

$("#address").keyup(function(){
    var orgin = $("#address").val()
    val = $(this).val();
    if(val=="" | val==null){
        address = false;
    }
    else {
        address = true;
    }
});

/* 이메일 스크립트 */
function SetEmailTail(emailValue) {
  var email = document.all("email")    // 사용자 입력
  var emailTail = document.all("email2") // Select box
   
  if ( emailValue == "notSelected" )
   return;
  else if ( emailValue == "etc" ) {
   emailTail.readOnly = false;
   emailTail.value = "";
   emailTail.focus();
  } else {
   emailTail.readOnly = true;
   emailTail.value = emailValue;
  }
 }

/* 핸드폰 번호 입력 스크립트 */
 function autoHypenPhone(str){
            str = str.replace(/[^0-9]/g, '');
            var tmp = '';
            if( str.length < 4){
                return str;
            }else if(str.length < 7){
                tmp += str.substr(0, 3);
                tmp += '-';
                tmp += str.substr(3);
                return tmp;
            }else if(str.length < 11){
                tmp += str.substr(0, 3);
                tmp += '-';
                tmp += str.substr(3, 3);
                tmp += '-';
                tmp += str.substr(6);
                return tmp;
            }else{              
                tmp += str.substr(0, 3);
                tmp += '-';
                tmp += str.substr(3, 4);
                tmp += '-';
                tmp += str.substr(7);
                return tmp;
            }
            return str;
        }

var cellPhone = document.getElementById('cellPhone');
cellPhone.onkeyup = function(event){
        event = event || window.event;
        var _val = this.value.trim();
        this.value = autoHypenPhone(_val) ;
}

/* 날짜 선택 스크립트 */
$(function(){
  $("#date1").datepicker({
    changeMonth: true,
    changeYear: true,
    minDate: '-100y',
    nextText: '다음 달',
    prevText: '이전 달',
    yearRange: 'c-100:c+10',
    maxDate: 0,
    currentText: '오늘 날짜',
    closeText: '닫기',
    dateFormat: "yy-mm-dd",
    showAnim: "fadeIn",
    showOtherMonths: true,
    selectOtherMonths: true
  });
});