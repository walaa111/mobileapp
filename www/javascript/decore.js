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



var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-7251676025279948~2665838710',
        interstitial: 'ca-app-pub-7251676025279948/4142571918'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}

function initApp() {
    if (AdMob) {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
}

document.addEventListener('deviceready', initApp, false);

    // $(".ser-link").on("click",function(e){
    //     e.preventDefault();
    //     var ser_id=$(this).attr("ser_id");
    //     alert(ser_id);
    //     window.location.href("ceaser.html");
    // });


