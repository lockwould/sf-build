


jQuery(document).ready(function($) {



//header scroll change	
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.header--banner');

    if (scrollPos > 20) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled');
    }
  });


//next script goes here


});