(function($){
    "use strict";
    $('.ham').click(function(e){
        e.preventDefault()
        $('.ham').toggleClass("is-active");
    });
})(jQuery);