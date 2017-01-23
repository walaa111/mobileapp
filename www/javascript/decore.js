$(document).ready(function(){


window.onload=function()
{

$(".loading").fadeOut(2000,function(){

  $("body").css("overflow-y","auto");
});

}



$(".ber").on("click",function(){

$(".sub li").toggle();


});

$(window).scroll(function(){

console.log($(this).scrollTop());


if ($(this).scrollTop()>=400)
{
  $(".topbutton").show();
}

else

{
  $(".topbutton").hide();
}




})

$(".topbutton").click(function(){

$("html,body").animate({scrollTop:0},600);
})



$("#prodinner").imageLens({ lensSize: 200 });

$('a').magnificPopup({
  type: 'image'
  // other options
});



});





