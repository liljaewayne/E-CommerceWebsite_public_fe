'use strict';

var _commerce = require('util/commerce.js');

var _userService = {
    // 检查登陆状态
    checkLogin: function (resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUtl('/user/get_user_info.do'),
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    // 登出
    logout: function (resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUtl('/user/logout.do'),
            method: "POST",
            success: resolve,
            error: reject
        });
    }

};
module.exports = _userService;
