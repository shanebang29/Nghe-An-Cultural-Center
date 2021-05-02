$(document).ready(function(){
    $('.search-button').click(function(){
        $('.search-form').toggleClass('display-search');
        $('.fa-search').toggleClass('i-none');
        $('.fa-times').toggleClass('display-i');
    });
    $('.btn').click(function(){
        $('.blue-background').toggleClass('darkmode');
        $('.dark-mode').toggleClass('darkmode');
        $('.header .title h1').toggleClass('text-right');
        $('.btn').toggleClass('stable');
    });
});
$(document).ready(function(){
    $('.banner-slide').slick({
        dots: false,
        infinite: true,
        cssEase: 'linear',
        arrows: true,
        autoplay: true,
        autoplayspeed: 500,
        draggable: true,
    });
});
