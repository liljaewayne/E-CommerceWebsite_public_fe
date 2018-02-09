'use strict';
var _commerce = require('util/commerce.js');

var _addressService = {
    // 获取地址列表
    getAddressList: function (resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/shipping/list.do'),
            data: {
                pageSize: 50
            },
            success: resolve,
            error: reject
        });
    },
    // 新建收件人
    save: function (addressInfo, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/shipping/add.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        });
    },
    // 更新收件人
    update: function (addressInfo, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/shipping/update.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        });
    },
    // 删除收件人
    deleteAddress: function (shippingId, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/shipping/del.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject
        });
    },
    // 获取单条收件人信息
    getAddress: function (shippingId, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/shipping/select.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject
        });
    }
};

module.exports = _addressService;