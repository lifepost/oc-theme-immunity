/*
 * Application
 */

$(document).tooltip({
    selector: "[data-toggle=tooltip]"
})

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#to_top').fadeIn();
    } else {
        $('#to_top').fadeOut();
    }
});

//Click event to scroll to top
$('#to_top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});

$(window).scroll(function(){
    if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        if ($(window).scrollTop() >= 550 && $(window).width() > 1200)
        {
            $(".customtel-wrapper").css({position:'fixed', top:'0'});
        }
        else
        {
            $(".customtel-wrapper").css({position:'relative', top: '0px'});
        }
    }
});
