'use strict';

var api = require("./cube.js")

const size = 10;

var arr = api.create3DArray(size, size);

var res = api.findPerpendicular(arr);

console.log(res[0]);
console.log(res[1]);
console.log(res[2]);
