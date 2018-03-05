'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var templateBanner = require('../index/banner.string');
var _commerce = require('util/commerce.js');

$(function () {
    // 渲染banner的html
    var bannerHtml = _commerce.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function () {
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});
