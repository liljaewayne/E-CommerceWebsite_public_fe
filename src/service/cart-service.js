'use strict';

var _commerce = require('util/commerce.js');

var _cartService = {

    // 获取购物车数量
    getCartCount: function (resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/cart/get_cart_product_count.do'),
            success: resolve,
            error: reject
        });
    },
    // 添加到购物车
    addToCart: function (productInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/cart/add.do'),
            data: productInfo,
            success: resolve,
            error: reject
        });
    }

};
module.exports = _cartService;