$(document).ready(function(){
    $(".mainmenu").on("click","a", function (event) {
          event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500, 'easeInOutSine');
    });
    $('.single-item').slick({
        autoplay: true,
    });
    $('.multiple-items').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});
