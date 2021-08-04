import $ from "jquery";
import "slick-carousel";

// Slick
$(document).ready(() => {
    $(".slick-testimonials").slick(
        {
            dots: true,
            centerPadding:"20px",
            centerMode:true,
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