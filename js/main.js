(function ($) {
 "use strict";
     /*  meanmenu active */
    $('#mobile-menu-active').meanmenu();
    // fancybox area 
    /* This is basic - uses default settings */
    $('a.single_image').fancybox();
    // product details 
    $('.zoom_01').fancybox();
    /* Using custom settings */
    
    $('a#inline').fancybox({
        'hideOnContentClick': true
    });
    /* Apply fancybox to multiple items */
    $('a.group').fancybox({
        'transitionIn'  :   'elastic',
        'transitionOut' :   'elastic',
        'speedIn'       :   600, 
        'speedOut'      :   200, 
        'overlayShow'   :   false
    });
    // fancybox area end 
    /* counter   */
    $('.count').counterUp({
        delay: 10,
        time: 1000
    }); 
    /*---------------------------
    mixItUp
    ----------------------------*/
    $('#Container').mixItUp();
    /*Scrool to top*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      });
    /*---------------------
    Main Slider
    ------------------------*/
    $('#mainSlider').nivoSlider({
        effect: 'random',
        directionNav: false,
        controlNavThumbs: false, 
        animSpeed: 500,
        slices: 18,
        pauseTime: 5000,
        pauseOnHover: false,
        controlNav: true,      
    });  
    /*---------------------
    Main Slider
    ------------------------*/
    $('#mainSlider6').nivoSlider({
        effect: 'random',
        directionNav: false,
        controlNavThumbs: false, 
        animSpeed: 500,
        slices: 18,
        pauseTime: 5000,
        pauseOnHover: false,
        controlNav: true,       
    }); 
    /*  wow active */
    new WOW().init(); 
    /*---------------------
     countdown
    --------------------- */
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hrs</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Mins</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Secs</p></span>'));
      });
    }); 
    /*---------------------
     fix nav var 
    --------------------- */
	var win = $(window);
	var headerArea = $('.header-area');
	var header3 = $('.header-3');
	var stick = 'stick';
	var stick2 = 'stick2';
	
    win.on('scroll',function() {    
       var scroll = win.scrollTop();
       if (scroll < 245) {
        headerArea.removeClass(stick);
       }else{
        headerArea.addClass(stick);
       }
    });
    win.on('scroll',function() {    
       var scroll = win.scrollTop();
       if (scroll < 100) {
        header3.removeClass(stick2);
       }else{
        header3.addClass(stick2);
       }
    });
    /*---------------------
     tooltip 
    --------------------- */
    $('[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'top',
        container: 'body'
    });
     // Blog post area 
    $('.carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false ,
        },
        450:{
            items:1,
        },   
        768:{
            items:1,
            nav:true
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
    });
    // Logo   brand 
    $('.br-corosel').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },   
        450:{
            items:1,
        }, 
        768:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });
    // featuredcorosel   
    $('.featuredcorosel').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },   
        768:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });
    // featuredcorosel   
    $('.tst-crosol').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:true,
    navText:false,
    responsive:{
        0:{
            items:1,
            nav:false
        },   
        768:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
    });
    // catagory 
    $('.cat-crosol').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:true,
    navText:false,
    responsive:{
        0:{
            items:1,
            nav:false
        },   
        768:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });
    // magnifier gallery area 
    $('.magnifier-gallery').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:3,
            nav:false
        },   
        768:{
            items:3,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
    });
    $('.pr-crosel').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },   
        768:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
    });
    $('.portfolio-corosel').owlCarousel({
        loop:true,
        responsiveClass:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav:false
            },   
            768:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
        });
    // imdex 5 
        /*----------------------------
         price-slider active
        ------------------------------ */  
		var slideRange = $( '#slider-range' );
		var amount = $( '#amount' );
		
        slideRange.slider({
        range: true,
        min: 40,
        max: 600,
        values: [ 60, 570 ],
        slide: function( event, ui ) {
        amount.val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
        });
        amount.val( "$" + slideRange.slider( "values", 0 ) +
        " - $" + slideRange.slider( "values", 1 ) );  
        var unit = 1;
        var total;
        // if user changes value in field
        $('.field').on('change',function() {
          unit = this.value;
        });
        $('.add').on('click',function() {
          unit++;
          var $input = $(this).prevUntil('.sub');
          $input.val(unit);
          unit = unit;
        });
        $('.sub').on('click',function() {
          if (unit > 1) {
            unit--;
            var $input = $(this).nextUntil('.add');
            $input.val(unit);
          }
        });
    /*-------------------------
      Create an account toggle function
    --------------------------*/
     $( '#cbox' ).on('click', function() {
        $( '#cbox_info' ).slideToggle(900);
     });
    
    /*-------------------------
      Create an account toggle function
    --------------------------*/
     $( '#ship-box' ).on('click', function() {
        $( '#ship-box-info' ).slideToggle(1000);
     });  
        
})(jQuery); 
