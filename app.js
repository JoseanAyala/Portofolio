const appTheme = {
    'dark' : [
        '--appPrimaryBgColor:#161616',
        '--appPrimaryFontColor:#F5F5F5',
        '--appLinkColorLight:#005da7',
        '--appImageOverlayColor:rgb(0, 0, 0, 0.9)',
        '--appShadowColor:#000'
    ],
    'light' : [
        '--appPrimaryBgColor:#F5F5F5',
        '--appPrimaryFontColor:#161616',
        '--appLinkColorLight:#005da7',
        '--appImageOverlayColor:rgb(255, 255, 255, 0.94)',
        '--appShadowColor:#DFE1E5'
    ]
}

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

    $('.switch > input').click(function(){
        if($(this).is(':checked')){
            appTheme.light.map((prop)=>{
                var property = prop.split(':')
                document.documentElement.style.setProperty(property[0], property[1]);
            });
        } else {
            appTheme.dark.map((prop)=>{
                var property = prop.split(':')
                document.documentElement.style.setProperty(property[0], property[1]);
            });
        }
    });

  });
