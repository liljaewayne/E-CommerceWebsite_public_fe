'use strict';

require('./index.css');
var _commerce = require('util/commerce.js');
var _userService = require('service/user-service.js');
var _cartService = require('service/cart-service.js');

var nav = {
    init: function () {
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCount();
        return this;
    },
    bindEvent: function () {
        // 登陆
        $('.js-login').click(function () {
            _commerce.doLogin();
        });
        // 注册
        $('.js-register').click(function () {
            window.location.href = "./register.html";
        });
        // 退出
        $('.js-logout').click(function () {
            _userService.logout(function (res) {
                window.location.reload();
            }, function (errMsg) {
                _commerce.errorTips(errMsg);
            });
        });

    },
    // 加载用户信息
    loadUserInfo: function () {
        _userService.checkLogin(function (res) {
            $('.user.not-login').hide()
                .siblings('.user.login').show()
                .find('.username').text(res.username);
        }, function (errMsg) {
            console.log("加载用户信息失败:", errMsg);
        });
    },
    // 加载购物车数量
    loadCartCount: function () {
        _cartService.getCartCount(function (res) {
            $('.nav .cart-count').text(res || 0);
        }, function (errMsg) {
            $('.nav .cart-count').text(0);
        });
    }
};

/* 引用时候初始化, init方法要return this, 以支持链式调用 */
module.exports = nav.init();
