;(function($){
    $(function(){

    $('.tab_menu_btn').on('click',function(){
        $('.tab_menu_btn').removeClass('on');
        $(this).addClass('on')
        var idx = $('.tab_menu_btn').index(this);
        $('.tab_box').hide();
        $('.tab_box').eq(idx).show();
    });

    $('.col-aside__snb li').on('click',function(){
        $('.col-aside__snb li').removeClass('on');
        $(this).addClass('on')
    });

    $('.list-page li').on('click',function(){
        $('.list-page li').removeClass('on');
        $(this).addClass('on')
    });

    $('.main-top__list li').on('click',function(){
        $('.main-top__list li').removeClass('on');
        $(this).addClass('on')
    });

    $('.theater__tab li').on('click',function(){
        $('.theater__tab li').removeClass('on');
        $(this).addClass('on')
    });

    $('.mov-comment__top--tab').on('click',function(){
        $('.mov-comment__top--tab').removeClass('on');
        $(this).addClass('on')
    });

    $('.schedule__date').on('click',function(){
        $('.schedule__date').removeClass('on');
        $(this).addClass('on')
    });

    $('.favorite-area__con li').on('click',function(){
        $('.favorite-area__con li').removeClass('on');
        $(this).addClass('on')
    });

    $('.special li').on('click',function(){
        $('.special li').removeClass('on');
        $(this).addClass('on')
    });

    $('.video__top--list li').on('click',function(){
        $('.video__top--list li').removeClass('on');
        $(this).addClass('on')
    });

    $( window ).scroll( function() {
        if ( $( this ).scrollTop() > 200 ) {
            $( '.top, .ticketBtn' ).fadeIn();
        } else {
            $( '.top, .ticketBtn' ).fadeOut();
        }
    } );
    
    $( '.top' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
    } );

});

})(jQuery);

$(document).ready(function(){
    $(".drop_menu").hide();
    
    $("header .menu>li, .drop_menu").hover(function(){
        $(".drop_menu").stop().slideToggle();
    });
});

$(function() {
    var lnb = $("#lnb").offset().top;
    $(window).scroll(function() {
        var window = $(this).scrollTop();

        if(lnb <= window) {
            $("#lnb").addClass("fixed");
        } else {
            $("#lnb").removeClass("fixed");
        }
    })
});
