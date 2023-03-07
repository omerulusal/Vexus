$(document).ready(function () {
    let owl = $(".owl-carousel").owlCarousel({
        dots: true,
        dotsData: true,
        loop: true,
        nav: false,
        items: 1,
    });
    $('.owl-dot').click(() => {
        owl.trigger('to.owl.carousel', [$(this).index(), 1000])
    })
});


