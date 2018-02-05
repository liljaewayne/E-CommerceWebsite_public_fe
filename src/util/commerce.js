/**
 * 通用工具类, 用于发送网络请求
 */
'use strict';

var Hogan = require("hogan.js");

var conf = {
    /* 与后台的host相同, 直接省略即可 */
    serverHost: ''
};

var _commerce = {
    // 网络请求
    request: function (param) {
        var _this = this;
        $.ajax({
            type: param.method || "get",
            url: param.url || "",
            dataType: param.type || "json",
            data: param.data || "",
            success: function (res) {
                if (0 === res.status) {
                    typeof param.success === "function" && param.success(res.data, res.msg);
                }
                // 没有登陆状态, 需要强制登陆
                else if (10 === res.status) {
                    _this.doLogin();
                }
                // 请求数据错误
                else if (1 === res.status) {
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error: function (err) {
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });

    },

    // 跳转到登陆页面
    doLogin: function () {
        // 特殊字符需要编码, 否则会导致整体url被破坏
        window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
    },

    // 获取服务器地址
    getServerUrl: function (path) {
        return conf.serverHost + path;
    },

    // 获取url参数
    getUrlParam: function (name) {
        // liujianwei.top/product/list?keyword=xxx&page=1
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ?
            decodeURIComponent(result[2])
            : null;
    },

    // Hogan渲染html
    renderHtml: function (htmlTemplate, data) {
        // 先编译, 后渲染
        var template = Hogan.compile(htmlTemplate);
        var result = template.render(data);
        return result;
    },

    // 成功提示
    successTips: function (msg) {
        alert(msg || "操作成功!");
    },

    // 失败提示
    errorTips: function (msg) {
        alert(msg || "哪里不对了");
    },

    // 表单字段验证, 支持非空, 手机号, 邮箱的判断
    validate: function (value, type) {
        var value = $.trim(value);
        // 非空
        if ('require' === type) {
            return !!value;
        }
        // 手机号
        if ('phone' === type) {
            return /^1\d{10}$/.test(value);
        }
        // 邮箱格式
        if ('email' === type) {
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }

    }

};

module.exports = _commerce;
