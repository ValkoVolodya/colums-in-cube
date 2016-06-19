'use strict';

function getRandom(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function create3DArray(d1, d2) {
  var arr = [];

  for (var i = 0; i < d1; i++) {
     arr[i] = [];
     for(var j = 0; j < d2; j++){
       arr[i][j] = [];
     }
  }

  return arr;
}

function create2DArray(d){
  var arr = [];

  for (var i = 0; i < d; i++) {
     arr[i] = [];
  }

  return arr;
}

function printArray(tdArray){
  tdArray.forEach(function(item, i){
    console.log(item);
  });
}

function init(tdArray){
  for(var i = 0; i < tdArray.length; i++){
    for(var j = 0; j < tdArray.length; j++){
      for(var k = 0; k < tdArray.length; k++){
        tdArray[i][j][k] = getRandom(0, 9);
      }
    }
  }
}

function sumColumnK(tdArray){
  let result = create2DArray(tdArray.length);
  for(var i = 0; i < tdArray.length; i++){
    for(var j = 0; j < tdArray.length; j++){
      result[i][j] = tdArray[i][j].reduce(function(sum, current){
        return sum + current;
      });
    }
  }
  return result;
}

function sumColumnI(tdArray){
  let result = create2DArray(tdArray.length);
  for(var i = 0; i < tdArray.length; i++){
    for(var j = 0; j < tdArray.length; j++){
      result[i][j] = 0;
      for(var k = 0; k < tdArray.length; k++){
        result[i][j] += tdArray[i][k][j];
      }
    }
  }
  return result;
}

function sumColumnJ(tdArray){
  let result = create2DArray(tdArray.length);
  for(var i = 0; i < tdArray.length; i++){
    for(var j = 0; j < tdArray.length; j++){
      result[i][j] = 0;
      for(var k = 0; k < tdArray.length; k++){
        result[i][j] += tdArray[k][i][j];
      }
    }
  }
  return result;
}

function findMaxCol(array){
  var index = {}, max = 0;
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
      if(max < array[i][j]){
        max = array[i][j];
        index.i = i;
        index.j = j;
      }
    }
  }
  return index;
}

function findPerpendicular(cube){
  init(cube);
  printArray(cube);
  console.log();

  var resultk = sumColumnK(cube);
  printArray(resultk);
  console.log();
  var resulti = sumColumnI(cube);
  printArray(resulti);
  console.log();
  var resultj = sumColumnJ(cube);
  printArray(resultj);

  var res1 = findMaxCol(resultk);
  res1.k = 0;
  var res2 = findMaxCol(resulti);
  res2.k = res2.j;
  res2.j = 0;
  var res3 = findMaxCol(resultj);
  res3.k = res3.j;
  res3.j = res3.i;
  res3.i = 0;

  var result = [res1, res2, res3];

  return result;
}

module.exports = {
  create3DArray : create3DArray,
  findPerpendicular : findPerpendicular
}
