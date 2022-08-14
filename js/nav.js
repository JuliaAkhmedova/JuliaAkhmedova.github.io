$('.header__menu-button').on('click', () => {
    $('.header__menu-button').toggleClass('active');
    $('.header__menu-mobile').toggleClass('active');
    $('svg').toggleClass('active');
    $("body").toggleClass("menufix");


    $('li').on('click', () => {
        $('.header__menu-mobile').removeClass('active');
        $('.header__menu-button').removeClass('active');
        $('svg').removeClass('active');
        $("body").removeClass("menufix");
    });
});
