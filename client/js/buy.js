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