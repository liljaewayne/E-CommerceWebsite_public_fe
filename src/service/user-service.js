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
    // 检查用户名
    checkUsername: function (username, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/user/check_valid.do'),
            data: {
                type: 'username',
                str: username
            },
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    // 用户注册
    register: function (userInfo, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/user/register.do'),
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
    // 获取用户信息
    getUserInfo: function (resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/user/get_information.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    // 更新个人信息
    updateUserInfo: function (userInfo, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/user/update_information.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    // 登录状态下更新密码
    updatePassword: function (userInfo, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/user/reset_password.do'),
            data: userInfo,
            method: 'POST',
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
