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
                autoplayTimeout:4000
            },
            600:{
                items:2,
                nav:false,
                autoplay:false,
                loop:false,
                mouseDrag:false
                
            },
            1000:{
                items:2,
                nav:false,
                autoplay:false,
                loop:false,
                mouseDrag:false
            }
        },
        margin:10,
        
        autoplayHoverPause:true
    });

    $('.bottomNav').on('click', 'div',  function () {
        var selectedElement = $(this);
        var SelectedID = selectedElement.attr('id');
        
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

// $(document).on('click', 'a[href^="#"]', function (event) {
//    event.preventDefault();

//    $('html, body').animate({
//        scrollTop: $($.attr(this, 'href')).offset().top
//    }, 500);
// });


/*
 <!--  
<div class="space-wrap">
    <div class="skillsContainer">
        <div class="skillsFlex" id="skills">
            <h1 id="skillsDescription">Some of my skills include...</h1>
            <div class="skills">
                <div class="skills-List_Grid">
               
                    <div class="skills-List">
                        <ul class="skills-List_Contents" id="technicalSkills">
                            <lh class="skills-List_Title">Technical Skills</lh>
                            <li>.NET Framework</li>
                            <hr>
                            <li>SQL</li>
                            <hr>
                            <li>Javascript</li>
                            <hr>
                            <li>CSS</li>
                            <hr>
                        </ul>
                    </div>
                    <div class="skills-List">
                        <ul class="skills-List_Contents" id="softSkills">
                            <lh class="skills-List_Title">Soft Skills</lh>
                            <li class="softskillsitem">Team Player</li>
                            <hr>
                            <li class="softskillsitem">Customer Service</li>
                            <hr>
                            <li class="softskillsitem">Leadership</li>
                            <hr>
                            <li class="softskillsitem">Goal Oriented</li>
                            <hr>
                        </ul>
                    </div>
               
                </div>
            </div>
          <a class="" href="#contact" id="skillsAnchor">
                <svg id="more-arrows">
                    <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
                    <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
                    <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
                </svg>
           </a> 
        </div>

    </div>
    

  

    <div class="contact" id="contact">
        <form name="contact" method="POST" data-netlify="true">
            <div class="senderInfo">
                <input name="Name"  type="text" id="senderName" placeholder="Name (Required)">
                <input name="Email"type="email" id="senderEmail" placeholder="Email (Required)">
            </div>
            <input name="Message" type="text" id="senderMessage" placeholder="Message">
            <br>
            <button type="submit" style="width: 80px; height: 40px;">Send Message</button>
        </form>
    </div>
</div> -->
*/