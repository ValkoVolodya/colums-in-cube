//avoid ambiquity and sloppy errors
'use strict';

/**
 * Returns random value from range [min, max)
 */
function getRandom(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Returns 3D array with given dimensions
 */
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

/**
 * Returns 2D array with given dimension
 */
function create2DArray(d){
  var arr = [];

  for (var i = 0; i < d; i++) {
     arr[i] = [];
  }

  return arr;
}

/**
 * Prints array
 */
function printArray(tdArray){
  tdArray.forEach(function(item, i){
    console.log(item);
  });
}

/**
 * Initializes 3D array with random values in range [min, max)
 */
function init(tdArray, min, max){
  for(var i = 0; i < tdArray.length; i++){
    for(var j = 0; j < tdArray.length; j++){
      for(var k = 0; k < tdArray.length; k++){
        tdArray[i][j][k] = getRandom(min, max);
      }
    }
  }
}

/**
 * Returns sum of elements in every column in k-projection
 */
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

/**
 * Returns sum of elements in every column in i-projection
 */
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

/**
 * Returns sum of elements in every column in j-projection
 */
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

/**
 * Returns object of indexes of max value in given array.
 * Returning object has attributes: i, j.
 */
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

/**
 * Returns array of object with coordinates of columns,
 * that gives maximum sum of elements.
 */
function findPerpendicular(cube){
  
  //getting an array of intermediate results and print it
  var resultk = sumColumnK(cube);
  printArray(resultk);
  console.log();
  var resulti = sumColumnI(cube);
  printArray(resulti);
  console.log();
  var resultj = sumColumnJ(cube);
  printArray(resultj);

  //getting the final results and format it depending on
  //projection
  var res1 = findMaxCol(resultk);
  res1.k = 0;
  var res2 = findMaxCol(resulti);
  res2.k = res2.j;
  res2.j = 0;
  var res3 = findMaxCol(resultj);
  res3.k = res3.j;
  res3.j = res3.i;
  res3.i = 0;

  //forming array of results
  var result = [res1, res2, res3];

  return result;
}

/**
 * Exports function for outer access
 */
module.exports = {
  create2DArray : create2DArray,
  create3DArray : create3DArray,
  findPerpendicular : findPerpendicular,
  init : init,
  printArray : printArray
}
