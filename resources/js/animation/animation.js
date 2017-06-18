var $ = require('jquery');
var ScrollReveal = require('scrollreveal');

module.exports = function (about) {
  window.sr = ScrollReveal({
     reset: true
  });
  sr.reveal('.about');
  sr.reveal('.company');
}
