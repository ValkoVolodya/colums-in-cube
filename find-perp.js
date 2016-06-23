//avoid ambiquity and sloppy errors
'use strict';

//get the API
var api = require("./cube.js")

const size = 10;
var min = 0, max = 9;

//create 3D array
var arr = api.create3DArray(size, size);

//intialize an array
init(arr, min, max);

//where we compute results
var res = api.findPerpendicular(arr);

//print results
console.log(res[0]);
console.log(res[1]);
console.log(res[2]);
