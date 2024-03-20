$(document).ready(function () {
    
    $(window).on('load', function () {
        $('.pre-loader').fadeOut("500", function () {
            $(this).remove();
            $("body").removeClass("overflow");
        });
    });
    ///////// **mobile size** /////////
    
    $('#navbtn').click(function(){
		$('.main_nav').addClass('over_mob');
		$('.over_click').addClass('on');
		$('body').addClass('scroll_mob');
	});

	$('.closebtn').click(function(){
		$('.main_nav').removeClass('over_mob');
		$('.over_click').removeClass('on');
		$('body').removeClass('scroll_mob');
	});
    
    $('.over_click').click(function(){
		$('.closebtn').trigger('click');
	});


    ///////// **main Slider** /////////
    var mainswiper = new Swiper('.main_slider .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    updateOnWindowResize: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
    
    
    /**************************counter js************************/
   $(window).scroll(testScroll);
    var viewed = false;

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function testScroll() {
      if (isScrolledIntoView($(".num")) && !viewed) {
          viewed = true;
          $('.num').each(function() {
                var current = $(this);
              var $this = $(this),
                countTo = $this.attr('data-count');
              $({
                countNum: $this.text()
              }).animate({
                  countNum: countTo
                },

                {

                  duration: 1800,
                  easing: 'swing',
                  step: function() {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                    $(current).prepend(' <span>+</span>');
                  }

                });


            });
      }
    }
    
  });  

