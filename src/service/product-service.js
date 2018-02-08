'use strict';

var _commerce = require('util/commerce.js');

var _productService = {
    // 获取商品列表
    getProductList: function (listParam, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/product/list.do'),
            data: listParam,
            success: resolve,
            error: reject
        });
    },
    // 获取商品详细信息
    getProductDetail: function (productId, resolve, reject) {
        _commerce.request({
            url: _commerce.getServerUrl('/product/detail.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        });
    }
};

module.exports = _productService;