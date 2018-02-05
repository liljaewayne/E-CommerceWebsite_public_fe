'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _commerce = require('util/commerce.js');
var _userService = require('service/user-service.js');
var templateIndex = require('./index.string');

// page 逻辑部分
var page = {
    init: function () {
        this.onLoad();
    },
    onLoad: function () {
        // 初始化左侧菜单
        navSide.init({
            name: 'user-center'
        });
        // 加载用户信息
        this.loadUserInfo();
    },
    // 加载用户信息
    loadUserInfo: function () {
        var userHtml = '';
        _userService.getUserInfo(function (res) {
            userHtml = _commerce.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        }, function (errMsg) {
            _commerce.errorTips(errMsg);
        });
    }
};
$(function () {
    page.init();
});