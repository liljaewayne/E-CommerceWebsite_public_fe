'use strict';
var _commerce = require('util/commerce.js');

var _orderService = {
    // 获取商品列表
    getProductList: function (resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/order/get_order_cart_product.do'),
            success: resolve,
            error: reject
        });
    },
    // 提交订单
    createOrder: function (orderInfo, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/order/create.do'),
            data: orderInfo,
            success: resolve,
            error: reject
        });
    },
    // 获取订单列表
    getOrderList: function (listParam, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/order/list.do'),
            data: listParam,
            success: resolve,
            error: reject
        });
    },
    // 获取订单详情
    getOrderDetail: function (orderNumber, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/order/detail.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },
    // 取消订单
    cancelOrder: function (orderNumber, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/order/cancel.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    }
};

module.exports = _orderService;