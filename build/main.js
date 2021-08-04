import $ from "./_snowpack/pkg/jquery.js";
import "./_snowpack/pkg/slick-carousel.js";

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
    $(".slick-partners").slick(
        {
            dots: true,
            centerMode: true,
            autoplay: true,
            slidesToShow:3,
            arrows: true,
            prevArrow: $('.prevPartner'),
            nextArrow: $('.nextPartner'),
        }
    );
})