import $ from "jquery";
import "slick-carousel";

// Slick
$(document).ready(() => {
    $(".slick-testimonials").slick(
        {
            dots: true,
            centerMode: true,
            autoplay: true,
            arrows: true,
            prevArrow: $('.prevTesti'),
            nextArrow: $('.nextTesti'),
        }
    );
})