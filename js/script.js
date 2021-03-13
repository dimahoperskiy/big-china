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



    // const burgerMenu = document.querySelector('.content-header_mobile__btn');
    // const menu = document.querySelector('.mobile_menu');
    // const activeMenu = menu.classList.contains('open');
    //
    // document.addEventListener('click', (e) => {
    //     const target = e.target.parentElement.parentElement;
    //     if (target == burgerMenu){
    //         menu.classList.toggle('open');
    //     } else if (target != menu ) {
    //         menu.classList.remove('open');
    //     }
    // })

})(jQuery);