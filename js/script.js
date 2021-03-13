(function($) {
    "use strict";
    $('.ham').click(function(e){
        e.preventDefault()
        $('.ham').toggleClass("is-active");
        $('.menu').toggleClass("_active");
        $('.menuBg').toggleClass("_active");
        $('.menuWrapper').toggleClass("_active");
    });

    $('.menuLink').click(function(e){
        e.preventDefault()
        $('.ham').toggleClass("is-active");
        $('.menu').toggleClass("_active");
        $('.menuBg').toggleClass("_active");
        $('.menuWrapper').toggleClass("_active");
    });

    $('#spanOne').click(function(e){
        e.preventDefault()
        $('#questionOne').toggleClass("_active");
        $('.oneMinus').toggleClass("_active");
        $('.onePlus').toggleClass("_active");
    });

    $('#spanTwo').click(function(e){
        e.preventDefault()
        $('#questionTwo').toggleClass("_active");
        $('.twoMinus').toggleClass("_active");
        $('.twoPlus').toggleClass("_active");
    });

    $('#spanThree').click(function(e){
        e.preventDefault()
        $('#questionThree').toggleClass("_active");
        $('.threeMinus').toggleClass("_active");
        $('.threePlus').toggleClass("_active");
    });

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop:true,
            margin:10,
        });
    });

    $('.smoothScroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }
    });
})(jQuery);