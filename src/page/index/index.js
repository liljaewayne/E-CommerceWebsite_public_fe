"use strict";

var _commerce = require('util/commerce.js');

// console.log(_commerce.getUrlParam('test'));

var html = '<div>{{data}}</div>';

var data = {
    data: "Hello Hogan"
};

console.log(_commerce.renderHtml(html, data));
