var $ = require('jquery');
var slick = require('slick-carousel');

module.exports = function (slider) {
  $(slider).slick({
    dots: true
  });
}
