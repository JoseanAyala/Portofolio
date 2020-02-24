$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                autoplay:true,
                loop:true
            },
            600:{
                items:2,
                nav:false,
                autoplay:false,
                loop:false
            },
            1000:{
                items:2,
                nav:false,
                loop:false
            }
        },
        margin:10,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });

  });

$(document).on('click', 'a[href^="#"]', function (event) {
   event.preventDefault();

   $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top
   }, 500);
});



