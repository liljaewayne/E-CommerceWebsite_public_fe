'use strict';

var _commerce = require('util/commerce.js');

var _userService = {
    // 用户登录
    login: function (userInfo, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/user/login.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    // 检查登陆状态
    checkLogin: function (resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/user/get_user_info.do'),
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    // 登出
    logout: function (resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/user/logout.do'),
            method: "POST",
            success: resolve,
            error: reject
        });
    }

};
module.exports = _userService;
