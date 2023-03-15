$(function () {
    $(".shoes_img").slick({
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".top").addClass("on")
        } else {
            $(".top").removeClass("on")
        }
    })
})
