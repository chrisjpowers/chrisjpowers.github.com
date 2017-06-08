var resizeSmoothScroll = function() {
  if ($('header').css('position') == 'fixed'){ $('header nav a').smoothScroll({offset: -65}); }
  else { $('header nav a').smoothScroll(); }
};

var Site = window.Site || {};
(function($) {
  $(function() {

    // PLACEHOLDER
    
    $('input, textarea').placeholder();
    
    // NAV TOGGLE
    
    $('header .nav-toggle').click(function(){
      $('header nav').slideToggle();
    });
    
    // FITVIDS
    
    $(".video-box").fitVids();
    
    // SMOOTH-SCROLL

    resizeSmoothScroll();

  });
})(jQuery);