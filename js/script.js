(function($) {
    "use strict";
    $('.ham').click(function(e){
        e.preventDefault()
        $('.ham').toggleClass("is-active");
    });

    $('#spanOne').click(function(e){
        e.preventDefault()
        $('#questionOne').toggleClass("_active");
    });

    $('#spanTwo').click(function(e){
        e.preventDefault()
        $('#questionTwo').toggleClass("_active");
    });

    $('#spanThree').click(function(e){
        e.preventDefault()
        $('#questionThree').toggleClass("_active");
    });

})(jQuery);