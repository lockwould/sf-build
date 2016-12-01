jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.header--banner');

    if (scrollPos > 20) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled');
    }
  });
});