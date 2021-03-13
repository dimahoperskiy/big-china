(function($) {
    "use strict";
    $('.ham').click(function(e){
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

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });



})(jQuery);