(function ($) {

    $('.app_big_card').owlCarousel({
        items: 2,
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 2
            },
            1600: {
                items: 2
            }
        }
    })

})(window.jQuery);