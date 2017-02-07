$(window).on("resize load" ,function (){
    var okuan = $(window).width();
    var oimgs = $('.imgs').width();
    var okuanb = $(window).width()/1920;
    var ogao = $('.container').height();

    $('.container').css({
        height:  770 * okuanb  ,
    });
    $('.kechengbiao').css({
        height:  770 * okuanb  ,
    });
    $('#iftest').css({
        height:  770 * okuanb -228 ,
    });
    $('.sp').css({
        height:  770 * okuanb -228 +93+15 ,
    });
    $('.vip').css({
        height:  770 * okuanb -238,
    });
    $('.shiping').css({
        width: okuan * 0.692 - 250  ,
        height:  770 * okuanb  ,
    });
    $('.liaotian').css({
        width: okuan * 0.303  ,
        height:  770 * okuanb  ,
    });
    $('.imgs').css({
        height:  oimgs  ,
    });
    $('.liaotiankuang').css({
        width: okuan * 0.303   ,
        height:  770 * okuanb  ,
    });
    $('#msgbox1').css({
        width: okuan * 0.303 - 265 -15 +240,
        height:  770 * okuanb -244 ,
    });
    if (okuan <= 1500) {
        $('.bott_icon').css({
            fontSize : 14,
        })
    };
    if (okuan <= 1500) {
        $('.bott_icon a').css({
            backgroundSize : 35,
        })
    };
    if (okuan >= 1500) {
        $('.bott_icon a').css({
            backgroundSize : 45,
        })
    };
    if (okuan >= 1500) {
        $('.bott_icon').css({
            fontSize : 18,
        })
    };
    $('.vipkc').hover(function(){
        $('.vip').slideDown();
    },function(){
         $('.vip').slideUp();
    });
});
