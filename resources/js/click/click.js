var $ = require('jquery');

module.exports = function(clickButton, clickElement) {
  var clickButton = $(clickButton);
  var clickElement = $(clickElement);

  clickButton.on('click',function() {
      $('html, body').animate({
          scrollTop: clickElement.offset().top
      }, 500);
      $('.header__block li').removeClass('active');
      $(this).addClass('active');
  });
}
