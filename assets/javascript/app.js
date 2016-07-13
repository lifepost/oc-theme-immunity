/*
 * Application
 */

$(document).tooltip({
    selector: "[data-toggle=tooltip]"
})

$( '#top' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
} );

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
