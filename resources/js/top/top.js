var $ = require('jquery');

module.exports = function(clickButton, clickElement) {
  var clickButton = $(clickButton);
  var clickElement = $(clickElement);

  clickButton.on('click',function() {
      $('html, body').animate({
          scrollTop: clickElement.offset().top
      }, 500);
  });
  var lastScrollTop = 0;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop){
           $('.arrowUp').css('opacity', '0');
     } else {
         $('.arrowUp').css('opacity', '1');
     }
     lastScrollTop = st;
  });
}
