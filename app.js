$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                autoplay:true,
                loop:true,
                autoplayTimeout:4000,
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
                autoplay:false,
                loop:false
            }
        },
        margin:10,
        autoplayHoverPause:true
    });

    $('.bottomNav').on('click', 'div',  function () {
        var selectedElement = $(this);
        var SelectedID = selectedElement.attr('id');

        if ($('*').hasClass('fadeIn')){
            $('.fadeIn').removeClass('fadeIn animated');
        }

        
        //Remove Previous HIGHLIGHT
        $('.HIGHLIGHT').removeClass('HIGHLIGHT');
        //Add HIGHLIGHT to current
        selectedElement.addClass('HIGHLIGHT');
        
        //Hide previous element
        $('.DISPLAY').removeClass('DISPLAY').addClass('HDN');
        //Display new element
        $('#' + SelectedID + 'Content').removeClass('HDN').addClass('DISPLAY');
    });

  });
