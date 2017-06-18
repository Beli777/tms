var $ = require('jquery');
var slider = require('./slider/slider.js');
var scroll = require('./animation/animation.js');
var clickJS = require('./click/click.js');
var top = require('./top/top.js');

$(document).ready(function() {
    slider('.slider');
    scroll();
    clickJS('#slider','.slider');
    clickJS('#about','.about');
    clickJS('#company','.company');
    clickJS('#footer','.footer');
    top('#top', '.slider');
});
